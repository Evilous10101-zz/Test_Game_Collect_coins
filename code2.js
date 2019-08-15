gdjs.WinningCode = {};
gdjs.WinningCode.GDWinMessageObjects1= [];
gdjs.WinningCode.GDWinMessageObjects2= [];

gdjs.WinningCode.conditionTrue_0 = {val:false};
gdjs.WinningCode.condition0IsTrue_0 = {val:false};
gdjs.WinningCode.condition1IsTrue_0 = {val:false};


gdjs.WinningCode.eventsList0xb3ea0 = function(runtimeScene) {

{


gdjs.WinningCode.condition0IsTrue_0.val = false;
{
gdjs.WinningCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Timeruntilexit");
}if (gdjs.WinningCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


}; //End of gdjs.WinningCode.eventsList0xb3ea0


gdjs.WinningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinningCode.GDWinMessageObjects1.length = 0;
gdjs.WinningCode.GDWinMessageObjects2.length = 0;

gdjs.WinningCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['WinningCode'] = gdjs.WinningCode;
