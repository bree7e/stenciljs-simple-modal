import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'tyapk-modal',
  styleUrl: 'tyapk-modal.css',
  shadow: true
})
export class TyapkModalComponent {
  /** Header */
  @Prop() header: string;
  @Prop({ 
    mutable: true
  }) 
  show = false;
  @Event() private close: EventEmitter;

  handleClick() {
    this.show = false;
    this.close.emit('ok');
  }

  closeModal(result: string) {
    this.show = false;
    this.close.emit(result);
  }
 
  render() {
    if (this.show) {
      return (
        <div>
          <div class="dialog">
            <div class="dialog__content">
              <header>
                <h2>{this.header}</h2>
              </header>
              <main>
                <slot />
              </main>
              <footer>
                <button class="dialog__ok-btn" onClick={() => this.handleClick()}>OK</button>
                <button class="dialog__cancel-btn" onClick={() => this.closeModal('cancel')}>Отмена</button>
              </footer>
              <div class="dialog__close-btn" onClick={() => this.closeModal('close')}></div>
            </div>
          </div>
          <div class="overlay"></div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

}
