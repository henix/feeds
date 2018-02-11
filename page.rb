#!/usr/bin/env ruby
require 'cgi'

_, _, title, _, link = IO.readlines(ARGV[1])[0].strip.split("\t")
content = IO.read(ARGV[0])

def e(s)
	CGI.escapeHTML(s)
end

buf = %{<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>#{e(title)}</title>
</head>
<body>
<p><a href="#{e(link)}">原文</a></p>
#{content}
<script async defer="defer" src="https://www.googletagmanager.com/gtag/js?id=UA-7909075-5"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-7909075-5');
</script>
</body>
</html>
}

print(buf)
