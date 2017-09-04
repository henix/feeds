#!/bin/sh
cat <<EOF
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<ul>
EOF
for d in $(find . -maxdepth 1 -type d | sed -e 's|^./||' -e '/^\.\|\.git$/d' | sort) ; do
	printf '<li><a href="%s/">%s</a></li>\n' "$d" "$d"
done
cat <<EOF
</ul>
</body>
</html>
EOF
