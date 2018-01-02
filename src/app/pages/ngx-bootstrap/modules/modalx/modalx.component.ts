import {BsModalService,ModalDirective} from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-modalx',
  templateUrl: './modalx.component.html',
  styleUrls: ['./modalx.component.css']
})
export class ModalxComponent implements OnInit {
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  messages: string[] = [];
  windowMessage: string;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  @ViewChild('childModal') childModal: ModalDirective;
  constructor(private modalService: BsModalService, private changeDetection: ChangeDetectorRef) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  openModalWithComponent() {
    const list = [
      'Open a modal with component',
      'Pass your data',
      'Do something else',
      '...'
    ];
    this.bsModalRef = this.modalService.show(ModalContentComponent);
    this.bsModalRef.content.title = 'Modal with component';
    this.bsModalRef.content.list = list;
    setTimeout(() => {
      list.push('PROFIT!!!');
    }, 2000);
  }

  openEventModal(template: TemplateRef<any>) {
    this.messages = [];

    const _combine = Observable.combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());

    this.subscriptions.push(
      this.modalService.onShow.subscribe((reason: string) => {
        this.messages.push(`onShow event has been fired`);
      })
    );
    this.subscriptions.push(
      this.modalService.onShown.subscribe((reason: string) => {
        this.messages.push(`onShown event has been fired`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHide event has been fired${_reason}`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHidden event has been fired${_reason}`);
        this.unsubscribe();
      })
    );

    this.subscriptions.push(_combine);

    this.modalRef = this.modalService.show(template);
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  openWindowModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.windowMessage = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.windowMessage = 'Declined!';
    this.modalRef.hide();
  }

  openOptionsModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }


  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  ngOnInit() {
  }

}
/* This is a component which we pass in modal*/
@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  `
})
export class ModalContentComponent {
  title: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}
}
