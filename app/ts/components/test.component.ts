import {Component} from '@angular/core';

@Component({
    selector: 'snake',
    templateUrl: 'app/templates/test.component.html',
    styleUrls: [ 'app/css/app.component.css' ],
    host: {
        '(window:keydown)': 'keyboardInput($event)'
    }
})

export class SnakeComponent {

    speed : number = 100;

    inGameFlag : boolean = false;

    lastStepTime : number;

    currentTime : number = 0;

    desk : number[][] = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,4,3,2,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,-1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    direction : number = 1;

    startDirectionInStep : number;

    keysInWork : boolean = false;

    head : number[] = [5,5];

    tail : number =  4;

    totalScore : number = 0;

    constructor(){

        this.animationFrame(this.currentTime);
    }

    animationFrame( time : number ) {

        this.currentTime = time;

        if(this.inGameFlag){

            if((time-this.lastStepTime)>this.speed){

                if( this.keysInWork && this.direction != this.startDirectionInStep ){
                    this.direction = this.startDirectionInStep;
                }

                this.lastStepTime = time;

                this.step();

            }

        }

        requestAnimationFrame((time) => this.animationFrame(time));
    }

    keyboardInput(event: Event) {

        switch (event['code']){

            case 'ArrowUp' :  {

                if(this.direction != 2)
                    this.startDirectionInStep = 0;
                    this.keysInWork = true;
                break;

            }
            case 'ArrowRight' :  {

                if(this.direction != 3)
                    this.startDirectionInStep = 1;
                    this.keysInWork = true;
                break;

            }
            case 'ArrowDown' :  {

                if(this.direction != 0)
                    this.startDirectionInStep = 2;
                    this.keysInWork = true;
                break;

            }
            case 'ArrowLeft' :  {

                if(this.direction != 1)
                    this.startDirectionInStep = 3;
                break;

            }

        }

    }

    startGame(){
        this.inGameFlag = !this.inGameFlag;
        this.lastStepTime = this.currentTime - this.speed;
    }

    step(){

        let i : number,
            j : number;

        for(i = 0; i<=9; i++){

            for(j = 0; j<=9; j++){

                if( this.desk[i][j] > 0 ){

                    if(this.desk[i][j] == this.tail){
                        this.desk[i][j] = 0;
                    } else {
                        this.desk[i][j]++;
                    }

                }

            }

        }

        switch (this.direction){

            case  0 : {

                if( this.head[0] !=0 )
                    this.head[0] = this.head[0]-1;
                else
                    this.head[0] = 9;
                break;
            }
            case  1 : {

                if( this.head[1] !=9 )
                    this.head[1] = this.head[1]+1;
                else
                    this.head[1] = 0;
                break;
            }
            case  2 : {

                if( this.head[0] !=9 )
                    this.head[0] = this.head[0]+1;
                else
                    this.head[0] = 0;
                break;
            }
            case  3 : {

                if(this.head[1] !=0 )
                    this.head[1] = this.head[1]-1;
                else
                    this.head[1] = 9;
                break;
            }

        }

        this.desk[this.head[0]][this.head[1]] = 1;


    }

}
