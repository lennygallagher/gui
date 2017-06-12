import {Component} from '@angular/core';

import {Party}    from './party';
import {PartyService} from './party.service';

@Component({
    selector: 'party-form',
    templateUrl: './party-form.component.html',
    providers: [PartyService]
})
export class PartyFormComponent {
    errorMessage: string;

    constructor(private partyService: PartyService) {
    }

    model = new Party('', '', '');

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.partyService.create(this.model).subscribe(
            party => {
                this.model = party
            }, error => {
                this.errorMessage = error.toString()
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newParty() {
        this.model = new Party('', '', '');
    }
}