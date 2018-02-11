#!/usr/bin/env ruby
require 'cgi'

require_relative 'ga'

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
#{GA}
</body>
</html>
}

print(buf)
