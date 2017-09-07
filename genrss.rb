#!/usr/bin/env ruby
require 'cgi'
require 'time'
require 'uri'

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

sitelink = ARGV[0] + "/"

def e(s)
	CGI.escapeHTML(s)
end

def l(url)
	URI.escape(url)
end

buf = %{<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
<channel>
<title>#{e(sitetitle)}</title>
<link>#{e(sitelink)}</link>
<description>#{e(description || "")}</description>
<language>zh-cn</language>
<lastBuildDate>#{e(Time.now.rfc822)}</lastBuildDate>
} +
	toc.reverse.take(10).map { |t|
		guid = t[:date] + "-" + t[:id]
		filename = guid + ".htm"
		%{<item>
<title>#{e(t[:title])}</title>
<link>#{e(sitelink + l(filename))}</link>
<description>#{e(IO.read(filename))}</description>
<author>#{e(t[:author])}</author>
<guid isPermaLink="false">#{e(guid)}</guid>
<pubDate>#{e(Time.parse(t[:date]).rfc822)}</pubDate>
</item>
}
	}.join +
	%{</channel>
</rss>
}

print(buf)
