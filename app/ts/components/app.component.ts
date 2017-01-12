import {Component ,trigger, transition, style, animate} from '@angular/core';
@Component({
    selector: 'my-app',
    animations: [
        trigger(
            'myAnimation', [
                transition(':enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateX(0)', 'opacity': 1}),
                    animate('100ms', style({transform: 'translateX(100%)', opacity: 0}))
                ])
            ]
        )
    ],
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/css/app.component.css' ],

})
export class AppComponent {

    flag : boolean = false;
    
    desk : string[][]  = [
       [' ',' ',' '], [' ',' ',' '], [' ',' ',' '],
    ];

    winnerFlag : boolean;

    congrats : string;

    ngOnInit(){
        console.log(this.desk);
    }

    setStep(i: string, j: string){
        this.flag = !this.flag;

        if(this.flag){
            this.desk[i][j] = 'x';
            if(this.winnerFlag = this.checkWinner('x')){
                this.doCongrats('x');
            }

        }
        else {
            this.desk[i][j] = 'o';
            if(this.winnerFlag = this.checkWinner('o')){
                this.doCongrats('o');
            }
                
        }
        
    }

    checkWinner(symbol: string){

        let winner: boolean = false;

             if(
                 ((this.desk[0][0]==this.desk[0][1] && this.desk[0][0]==this.desk[0][2]) && (this.desk[0][0] == symbol))  ||
                 ((this.desk[1][0]==this.desk[1][1] && this.desk[1][0]==this.desk[1][2])  && (this.desk[1][0] == symbol)) ||
                 ((this.desk[2][0]==this.desk[2][1] && this.desk[2][0]==this.desk[2][2])  && (this.desk[2][0] == symbol)) ||
                 ((this.desk[0][0]==this.desk[1][0] && this.desk[0][0]==this.desk[2][0])  && (this.desk[0][0] == symbol)) ||
                 ((this.desk[0][1]==this.desk[1][1] && this.desk[0][1]==this.desk[2][1])  && (this.desk[0][1] == symbol)) ||
                 ((this.desk[0][2]==this.desk[1][2] && this.desk[0][2]==this.desk[2][2])  && (this.desk[0][2] == symbol)) ||
                 ((this.desk[0][0]==this.desk[0][1] && this.desk[0][0]==this.desk[0][2])  && (this.desk[0][0] == symbol)) ||
                 ((this.desk[0][0]==this.desk[1][1] && this.desk[0][0]==this.desk[2][2])  && (this.desk[0][0] == symbol)) ||
                 ((this.desk[2][0]==this.desk[1][1] && this.desk[1][1]==this.desk[0][2])  && (this.desk[2][0] == symbol))
             ) {
                 winner = !winner;

             }

                return winner;

    }

    doRefresh(){
        this.desk   = [
            [' ',' ',' '], [' ',' ',' '], [' ',' ',' '],
        ];
        this.congrats = '';
    }

    doCongrats(symbol : string){
        this.congrats = symbol;
    }
}

