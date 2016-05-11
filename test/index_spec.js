import chai from 'chai';
import {escape, unescape} from '../index';

const should = chai.should();

describe('#escape', () => {
  it('converts & into &amp;', () => {
    escape('&').should.equal('&amp;');
  });
  it('converts " into &quot;', () => {
    escape('"').should.equal('&quot;');
  });
  it('converts \' into &#39;', () => {
    escape('\'').should.equal('&#39;');
  });
  it('converts < into &lt;', () => {
    escape('<').should.equal('&lt;');
  });
  it('converts > into &gt;', () => {
    escape('>').should.equal('&gt;');
  });
});

describe('#unescape', () => {
  it('converts &amp; into &', () => {
    unescape('&amp;').should.equal('&');
  });
  it('converts &quot; into "', () => {
    unescape('&quot;').should.equal('"');
  });
  it('converts &#39; into \'', () => {
    unescape('&#39;').should.equal('\'');
  });
  it('converts &lt; into <', () => {
    unescape('&lt;').should.equal('<');
  });
  it('converts &gt; into >', () => {
    unescape('&gt;').should.equal('>');
  });
});
