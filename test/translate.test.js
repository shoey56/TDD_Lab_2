describe('translate', function () {
    // Multiple tests for words starting with different vowels.
    it("word starting with a", function() {
        expect(translate('apple')).toEqual('appleway')
    });

    it("word starting with e", function() {
        expect(translate('edge')).toEqual('edgeway')
    });

    it("word starting with i", function() {
        expect(translate('icy')).toEqual('icyway')
    });

    it("word starting with o", function() {
        expect(translate('oval')).toEqual('ovalway')
    });

    it("word starting with u", function() {
        expect(translate('umbrella')).toEqual('umbrellaway')
    });
    
	// 2. At least one test for words starting with one consonant.
	it("word starting with one consonant", function() {
        expect(translate('work')).toEqual('orkway')
    });

    it("word starting with y", function() {
        expect(translate('you')).toEqual('ouyay')
    });
    // 3. At least one test for words starting with two consonants.
    it("word starting with two consonants", function() {
        expect(translate('snow')).toEqual('owsnay')
    });

    it("word starting with two consonants and a y", function() {
        expect(translate('sky')).toEqual('yskay')
    });
    // 4. At least one test for words starting with three consonants.
    it("word starting with three consonants", function() {
        expect(translate('three')).toEqual('eethray')
    });
    // 5. At least one test checking for lower case conversion.
    it("word contains uppercase letters", function() {
        expect(translate('UpperCase')).toEqual('uppercaseway')
    });

    it("word contains uppercase letters", function() {
        expect(translate('Shannon')).toEqual('annonshay')
    });
});