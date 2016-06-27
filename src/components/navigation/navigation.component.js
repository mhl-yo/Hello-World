import {Component} from 'angular2/core';

@Component({
    selector: 'navigation',
    template: `
       <div class="navigation">
            <a href="#"><img src="./TheWorld.png" id="logo"></a>
            <a href="#">Home</a>
            <a href="#/countries">Countries</a>
       </div>
    `
})

export class Navigation {

}