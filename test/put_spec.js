import put from 'put-selector';
import {expect} from 'chai';


describe('put selector', () => {
  it('creates an element', () => {
    const testDiv = '\n<div class="test"></div>';
    expect(put("div.test").toString()).to.equal(testDiv);
  });
});
