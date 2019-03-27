HTMS := $(wildcard *.htm)
TOCS := $(patsubst %.htm,%.toc,$(HTMS))
HTMLS := $(patsubst %.htm,%.html,$(HTMS))

.PHONY: all clean

all: index.html index.xml $(HTMLS)

index.toc: $(TOCS)
	cat $^ | sort -t '	' -k 1,2 > $@

index.html: ../genindex.rb index.meta index.toc ../ga.seg.htm
	../updated.sh $@ $^

index.xml: ../genrss.rb index.meta index.toc $(HTMS)
	../genrss.rb "https://henix.github.io/feeds/$$(pwd | tr '/' '\n' | tail -n1)" > $@

%.html: ../page.rb %.htm %.toc ../ga.seg.htm
	$^ > $@

clean:
	rm -f index.html index.xml index.toc $(HTMLS)
