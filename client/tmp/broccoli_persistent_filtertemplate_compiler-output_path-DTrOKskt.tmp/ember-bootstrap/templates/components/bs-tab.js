export default Ember.HTMLBars.template({"id":"hiETX+7t","block":"{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"customTabs\"]]],null,11,10]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"#\",[\"unknown\",[\"item\",\"elementId\"]]]]],[\"static-attr\",\"role\",\"tab\"],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"isActiveId\"]],[\"get\",[\"item\",\"elementId\"]]],null],\"nav-link active\",\"nav-link\"],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"select\",[\"get\",[\"item\",\"elementId\"]]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"item\",\"title\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"item\"],null,[[\"active\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"item\",\"elementId\"]],[\"get\",[\"isActiveId\"]]],null]]],0]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"#\",[\"unknown\",[\"subItem\",\"elementId\"]]]]],[\"static-attr\",\"role\",\"tab\"],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"isActiveId\"]],[\"get\",[\"subItem\",\"elementId\"]]],null],\"nav-link active\",\"nav-link\"],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"select\",[\"get\",[\"subItem\",\"elementId\"]]]],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"append\",[\"unknown\",[\"subItem\",\"title\"]],false],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"menu\",\"item\"],null,[[\"class\"],[[\"helper\",[\"if\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"isActiveId\"]],[\"get\",[\"subItem\",\"elementId\"]]],null],\"active\"],null]]],2]],\"locals\":[\"subItem\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"item\",\"children\"]]],null,3]],\"locals\":[\"menu\"]},{\"statements\":[[\"append\",[\"unknown\",[\"item\",\"groupTitle\"]],false],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"block\",[\"dd\",\"toggle\"],null,null,5],[\"text\",\"\\n\"],[\"block\",[\"dd\",\"menu\"],null,null,4]],\"locals\":[\"dd\"]},{\"statements\":[[\"block\",[\"nav\",\"dropdown\"],null,[[\"tagName\",\"class\"],[\"li\",[\"helper\",[\"if\"],[[\"helper\",[\"bs-contains\"],[[\"get\",[\"item\",\"childIds\"]],[\"get\",[\"isActiveId\"]]],null],\"active\"],null]]],6]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"item\",\"isGroup\"]]],null,7,1]],\"locals\":[\"item\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"navItems\"]]],null,8]],\"locals\":[\"nav\"]},{\"statements\":[[\"block\",[\"bs-nav\"],null,[[\"type\"],[[\"get\",[\"type\"]]]],9],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tab-content\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"pane\",\"activeId\",\"select\"],[[\"helper\",[\"component\"],[\"bs-tab/pane\"],[[\"parent\",\"activeId\",\"fade\",\"fadeTransition\"],[[\"get\",[null]],[\"get\",[\"isActiveId\"]],[\"get\",[\"fade\"]],[\"get\",[\"fadeTransition\"]]]]],[\"get\",[\"isActiveId\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"select\"],null]]]]]],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"pane\",\"activeId\",\"select\"],[[\"helper\",[\"component\"],[\"bs-tab/pane\"],[[\"parent\",\"activeId\",\"fade\",\"fadeTransition\"],[[\"get\",[null]],[\"get\",[\"isActiveId\"]],[\"get\",[\"fade\"]],[\"get\",[\"fadeTransition\"]]]]],[\"get\",[\"isActiveId\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"select\"],null]]]]]],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}","meta":{"moduleName":"ember-bootstrap/templates/components/bs-tab.hbs"}});