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
	title=$(cut -f 1 "$d/index.meta")
	printf '<li><a href="%s/">%s</a></li>\n' "$d" "$title"
done
cat <<EOF
</ul>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js"></script>
<script src="https://cdn.rawgit.com/jed/domo/13c45aba3e94dd2d1bc469ce3339bbc1e3a10314/lib/domo.js"></script>
<script src="index.js"></script>
</body>
</html>
EOF
