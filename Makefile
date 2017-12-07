.PHONY: build test run clean stop check-style

check-style: .npminstall
	@echo Checking for style guide compliance

	cd webapp && npm run check

test: .npminstall
	@echo Not yet implemented

.npminstall:
	@echo Getting dependencies using npm

	cd webapp && npm install
	touch $@

build: .npminstall
	@echo Building plugin

	# Clean old dist
	rm -rf dist
	rm -rf webapp/dist
	cd webapp && npm run build

	# Copy files from webapp
	mkdir -p dist/e2e-test-plugin/webapp
	cp webapp/dist/* dist/e2e-test-plugin/webapp/

	# Copy plugin files
	cp plugin.json dist/e2e-test-plugin/

	# Compress
	cd dist && tar -zcvf e2e-test-plugin.tar.gz e2e-test-plugin/*

	# Clean up temp files
	rm -rf dist/e2e-test-plugin

	@echo Plugin built at: dist/e2e-test-plugin.tar.gz

run: .npminstall
	@echo Not yet implemented

stop:
	@echo Not yet implemented

clean:
	@echo Cleaning plugin

	rm -rf dist
	cd webapp && rm -rf node_modules
	cd webapp && rm -f .npminstall
