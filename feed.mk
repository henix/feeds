HTMS := $(wildcard *.htm)

.PHONY: all clean

all: index.html index.xml

index.html: index.meta index.toc
	../genindex.rb > $@

index.xml: index.meta index.toc $(HTMS)
	../genrss.rb "https://henix.github.io/feeds/$$(pwd | tr '/' '\n' | tail -n1)" > $@

clean:
	rm -f index.html index.xml
