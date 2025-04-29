document.addEventListener(`DOMContentLoaded`,function(){
    const startButton=document.getElementById(`start-button`);
    const textElement=document.getElementById(`text`);
    const typingArea=document.getElementById(`typing-area`);
    const resultElement=document.getElementById(`result`);

    let startTime,endTime,correctCount=0;

    function startTest(){
        correctCount=0;
        startTime=new Date().getTime();
        textElement.textContent="下の文を入力してください。";
        textElement.style.display="block";
        typingArea.value="";
        typingArea.focus();
    }
    function endTest(){
        endTime=new Date().getTime();
        const elapsedTime=(endTime-startTime)/1000;
        const wordsPerMinute=(correctCount/elapsedTime)*60;
        resultElement.textContent=`正解数:${correctCount},スピード:${wordsPerMinute.toFixed(2)}文字/分`;
    }
    function checkInput(){
        const tarfetText=textElement.textContent;
        const userText=typingArea.value;
        if(userText===targetText){
            endTest();
        }else{
            correctCount=0;
            for(let i=0;i<=userText.Length;i++){
                B[タイピング開始]
                B-->C[テキスト表示&入力エリアにフォーカス]
                C-->D[ユーザーが文字入力]
                D-->E[入力内容をチェック]
                E--> [完全一致] -->F[タイマー停止/結果計算]
                E--> [部分一致] -->D
                F-->G[結果表示]
            }
        }
    }
})