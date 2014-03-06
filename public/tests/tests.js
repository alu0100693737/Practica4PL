var assert = chai.assert; 
suite('Analizador Lexico ', function() {
    test('Analisis de Comentarios', function() {
      var parse = make_parse();
      var source = "/* Comentario */ //Comentario 2";
      var string, tree;
      try {
	  tree = parse(source);
	  string = JSON.stringify(tree, ['key', 'name', 'message',
	      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      } catch (e) {
	  string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      }
      assert.deepEqual(string, "null");
    });
    test('Analisis de Numeros', function() {
      var parse = make_parse();
      var source = "var a = 22234";
      var string, tree;
      try {
	  tree = parse(source);
	  string = JSON.stringify(tree, ['key', 'name', 'message',
	      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      } catch (e) {
	  string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      }
      assert.deepEqual(string, '{\n    "name": "TypeError",\n    "message": "token.error is not a function"\n}');
    });
    test('Analisis de Igualdad', function() {
      var parse = make_parse();
      var source = "var a = \"Hello\";";
      var string, tree;
      try {
	  tree = parse(source);
	  string = JSON.stringify(tree, ['key', 'name', 'message',
	      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      } catch (e) {
	  string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      }
      assert.deepEqual(string, '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "a",\n        "arity": "name"\n    },\n    "second": {\n        "value": "Hello",\n        "arity": "literal"\n    }\n}');
    });
    test('Analisis de Operadores', function() {
      var parse = make_parse();
      var source = "var b = 4 * 8; // asignacion";
      var string, tree;
      try {
	  tree = parse(source);
	  string = JSON.stringify(tree, ['key', 'name', 'message',
	      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      } catch (e) {
	  string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      }
      assert.deepEqual(string, '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "b",\n        "arity": "name"\n    },\n    "second": {\n        "value": "*",\n        "arity": "binary",\n        "first": {\n            "value": 4,\n            "arity": "literal"\n        },\n        "second": {\n            "value": 8,\n            "arity": "literal"\n        }\n    }\n}');
    });
    
});
