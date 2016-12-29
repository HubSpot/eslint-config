MAKEFLAGS = -j1

DONE = echo ✓ $@ done

.PHONY: default housekeeping wipe init test diff outdated publish

default:
	echo "Please enter a command..."

$(verbose).SILENT:

housekeeping:
	rm -rf npm-debug.log*
	rm -rf yarn-error.log*
	$(DONE)

wipe: housekeeping
	rm -rf node_modules
	$(DONE)

init: wipe
	yarn
	$(DONE)

test:
	npm test
	$(DONE)

diff:
	npm run diff
	$(DONE)

outdated:
	yarn outdated
	$(DONE)

publish:
	npm version $(version)
	git push --follow-tags
	npm publish
	$(DONE)
