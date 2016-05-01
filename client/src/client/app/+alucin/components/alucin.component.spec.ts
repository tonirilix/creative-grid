import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {AlucinComponent} from './alucin.component';

export function main() {
  describe('Alucin component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC: any) => {
            let alucinDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(alucinDOMEl, 'h2')[0].textContent).toEqual('Alucin');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [AlucinComponent],
  template: '<sd-alucin></sd-alucin>'
})
class TestComponent {}
