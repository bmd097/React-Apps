import React, { Component } from 'react';
import shortid from 'shortid';

class Display extends Component {
    constructor(props) {
        super(props);
        this.boardSize=10;
        this.state={
            board:new Array(this.boardSize),
            mines:10
        };
        this.status=false;
    }
    componentDidMount=()=> {
        this.createBoard();
        this.forceUpdate();
    }
    createBoard=()=>{
        for(let i=0;i<this.boardSize;i++){
            this.state.board[i]=new Array(this.boardSize);
            for(let j=0;j<this.boardSize;j++)
                this.state.board[i][j]=-2;
        }
        let i=0;
		while(i<this.state.mines) {
			let a=Math.floor(Math.random()*this.state.board.length);
			let b=Math.floor(Math.random()*this.state.board[0].length);
			if(this.state.board[a][b]===-1) continue;
			this.state.board[a][b]=-1;
            i++;
        }
    }
    getCount=(a,b)=> {
        let XCor= [-1,-1,-1,0,0,1,1,1];
	    let YCor= [-1,0,1,-1,1,-1,0,1];
		let count=0;
		for(let i=0;i<XCor.length;i++) {
			if(a+XCor[i]<0 || a+XCor[i]>=this.state.board.length || b+YCor[i]<0 || b+YCor[i]>=this.state.board[0].length) continue;
			if(this.state.board[a+XCor[i]][b+YCor[i]]===-1) count++;
		}
		return count;
	}
    updateBoard=(a,b)=>{
        if(this.state.board[a][b]===-1){ // its a mine
            this.status=true;
            this.forceUpdate();
            return;
        }else if(this.state.board[a][b]>=0) return;
        let visited=new Array(this.boardSize);
        for(let i=0;i<visited.length;i++){
            visited[i]=new Array(this.boardSize);
            for(let j=0;j<visited.length;j++){
                visited[i][j]=false;
            }
        }
        this.updateBoardNow(a,b,visited);
        this.forceUpdate();
    }
    updateBoardNow=(a,b,visited) =>{
        let XCor= [-1,-1,-1,0,0,1,1,1];
	    let YCor= [-1,0,1,-1,1,-1,0,1];
        if(a<0 || b<0 || a>=this.state.board.length || b>=this.state.board[0].length) return false;
		if(visited[a][b]) return true;
		visited[a][b]=true;
		if(this.state.board[a][b]==-1) return false;
		let getCount=this.getCount(a,b);
		this.state.board[a][b]=getCount;
		if(getCount===0) 
			for(let i=0;i<XCor.length;i++) 
				this.updateBoardNow(a+XCor[i], b+YCor[i],visited);
		return true;
	}
    getColorClass=(a,b)=>{
        if(this.state.board[a][b]<0) return "block";
        if(this.state.board[a][b]===0) return "block zero";
        if(this.state.board[a][b]===1) return "block one";
        if(this.state.board[a][b]===2) return "block two";
        if(this.state.board[a][b]>=3) return "block threeAndMore";
    }
    render() {
        return (
            <div className="display">
                {this.state.board.map((grid,i)=><React.Fragment key={shortid.generate()}>
                    {grid.map((e,j)=><div
                         key={shortid.generate()}
                         className={this.getColorClass(i,j)} 
                         onMouseUp={()=>this.updateBoard(i,j)}
                         >{(this.state.board[i][j]>0)?this.state.board[i][j]:""}</div>)}
                </React.Fragment>)}
                {this.status?<div className="lost"><div>YOU LOSE THE GAME</div></div>:""}
            </div>
        );
    }
}
export default Display;