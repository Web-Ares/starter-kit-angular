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

    speed : number = 150;

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
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    direction : number = 1;

    startDirectionInStep : number;

    keysInWork : boolean = false;

    head : number[] = [5,5];

    tail : number =  4;

    totalScore : number = 0;

    foodFlag : boolean = false;

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

        this.desk  = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,4,3,2,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ];
        this.setFood();
    }

    step(){

        let i : number,
            j : number;

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

        if( this.desk[this.head[0]][this.head[1]] == -1 ){
            console.log('was eating');
            this.totalScore++;
            this.foodFlag = true;
        }

        this.desk[this.head[0]][this.head[1]] = 1000;

        for(i = 0; i<=9; i++){

            for(j = 0; j<=9; j++){

                if( this.desk[i][j] > 0 ){

                    if(this.desk[i][j] == this.tail){

                        if(this.foodFlag){

                            this.foodFlag = false;
                            this.tail = this.tail+1;
                            this.desk[i][j] = this.tail;
                            this.setFood();

                        } else {

                            this.desk[i][j] = 0;

                        }

                    }
                        
                    else if(this.desk[i][j] == 1000){

                        this.desk[this.head[0]][this.head[1]] = 1;

                    }
                    else {

                        this.desk[i][j]++;

                    }

                }
            }

        }


    }

    setFood(){

        let i : number,
            j : number,
            setFoodFlag : boolean = true;

            i = Math.floor(Math.random() * 6) + 1;


        do
        {
            i = Math.floor(Math.random() * 10);
            j = Math.floor(Math.random() * 10);

            if( this.desk[i][j] == 0 ){
                setFoodFlag = !setFoodFlag;
                this.desk[i][j] = -1;
            }

        }
        while( setFoodFlag );


    }


}
