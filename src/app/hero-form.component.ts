import { Component } from '@angular/core';

import { Hero } from './models/hero';

@Component({
    moduleId: module.id,  //这个设置了基础地址，用于从相对模块路径中加载模板。
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    // styleUrls:['./forms.css']
})

export class HeroFormComponent {
    powers = ["智障","无聊"];
    model = new Hero(18, '233', this.powers[0], "就很难受（╯' - ')╯︵ ┻━┻");

    submitted = false;

    onSubmit() { this.submitted = true; }

    newHero(){
        this.model = new Hero(42,'','')
    }

    //TODO:当我们的方法完成时移除它。
    get diagnostic() { return JSON.stringify(this.model); }
}