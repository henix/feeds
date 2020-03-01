#!/usr/bin/env ruby
require 'cgi'
require 'uri'

require_relative 'ga'

sitetitle, sitelink, description = IO.readlines("index.meta")[0].strip.split("\t")
toc = IO.readlines("index.toc").map { |line|
	date, id, title, author = line.strip.split("\t")
	{
		:date => date,
		:id => id,
		:title => title,
		:author => author,
	}
}

def e(s)
	CGI.escapeHTML(s)
end

def l(url)
	url
end

buf = %{<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<title>#{e(sitetitle)}</title>
</head>
<body>
<h2><a href="#{e(sitelink)}">#{e(sitetitle)}</a></h2>
<p>#{e(description || "")}</p>
<ul>
} +
	toc.reverse.map { |t|
		filename = t[:date] + "-" + t[:id] + ".html"
	%{<li>#{e(t[:date])} <a href="#{e(l(filename))}">#{e(t[:title])}</a> by #{e(t[:author])}</li>
} }.join() + %{</ul>
#{GA}
</body>
</html>
}

print(buf)
