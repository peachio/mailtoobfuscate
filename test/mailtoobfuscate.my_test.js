(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#mailtoobfuscate_my', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();

        var options = [
            {
                "address": "7starch",
                "domain": "gmail",
                "toplevel": "com",
                "subject": "Kontakt Responsive, Keepitnative-Website",
                "body": "\r\n"
            },//new Address separated via comma
            {
                "address": "7starch",
                "domain": "gmail",
                "toplevel": "com",
                "subject": "Kontakt Responsive, Keepitnative-Website",
                "body": "\r\n"
            },

        ];

        $('#email-address-myDomain-footer, #email-address-myDomain-contact, .foobar').mailtoobfuscate_my(options);
    }
  });
/*
  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.mailtoobfuscate_my(), this.elems, 'should be chainable');
  });
*/
  test('first mailto', function() {
      //the ID's in your markup, you can use simple divs
      var actual = $("#email-address-myDomain-footer").html();
      var result = '<a href="mailto:7starch@gmail.com?subject=Kontakt, Keepitnative-Website&amp;body="></a>';
      QUnit.push(true, actual, result, "#email-address-myDomain-footer results in mailtolink:");
    //expect(1);
    //strictEqual(this.elems.mailtoobfuscate_my().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });
    test('second mailto', function() {
        //the ID's in your markup, you can use simple divs
        var actual = $('#email-address-myDomain-contact').html();
        var result = '<a href="mailto:7starch@gmail.com?subject=Kontakt, Keepitnative-Website&amp;body="></a>';
        QUnit.push(true, actual, result, "#email-address-myDomain-contact results in mailtolink:");
        //expect(1);
        //strictEqual(this.elems.mailtoobfuscate_my().text(), 'awesome0awesome1awesome2', 'should be awesome');
    });
    test('third mailto', function() {
        //the ID's in your markup, you can use simple divs
        var actual = $(".foobar").html();
        var result = '<a href="mailto:7starch@gmail.com?subject=Kontakt, Keepitnative-Website&amp;body="></a>';
        QUnit.push(true, actual, result, ".foobar results in mailtolink:");
        //expect(1);
        //strictEqual(this.elems.mailtoobfuscate_my().text(), 'awesome0awesome1awesome2', 'should be awesome');
    });
  module('jQuery.mailtoobfuscate_my');
/*
  module(':mailtoobfuscate_my selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':mailtoobfuscate_my').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });
*/
}(jQuery));
