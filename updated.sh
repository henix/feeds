#!/bin/sh
updated() {
	if [ "$NEED_SUDO" ] ; then
		SUDO=sudo
	else
		SUDO=
	fi

	origfile=$1
	shift
	tmpfile=$(mktemp)
	"$@" > "$tmpfile"
	if $SUDO [ -e "$origfile" ]; then
		$SUDO [ ! -r "$origfile" ] && echo "file.unreadable: $origfile" && exit 2
		if $SUDO cmp "$origfile" "$tmpfile" >/dev/null 2>&1; then
			r=1
		else
			$SUDO cp "$tmpfile" "$origfile"
			r=0
		fi
	else
		# 用 touch 创建文件，使得权限为 umask 指定的值
		$SUDO touch "$origfile"
		$SUDO cp "$tmpfile" "$origfile"
		r=0
	fi

	if [ "$r" -eq 0 ]; then
		echo "$origfile updated"
	fi
	rm -f "$tmpfile"
	#return $r
}

updated "$@"
