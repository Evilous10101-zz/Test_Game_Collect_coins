gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDBackGroundObjects1= [];
gdjs.TitleScreenCode.GDBackGroundObjects2= [];
gdjs.TitleScreenCode.GDStartObjects1= [];
gdjs.TitleScreenCode.GDStartObjects2= [];
gdjs.TitleScreenCode.GDExitObjects1= [];
gdjs.TitleScreenCode.GDExitObjects2= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_0 = {val:false};


gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.TitleScreenCode.GDStartObjects1});gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.TitleScreenCode.GDExitObjects1});gdjs.TitleScreenCode.eventsList0xb3ea0 = function(runtimeScene) {

{

gdjs.TitleScreenCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDStartObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.TitleScreenCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDExitObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0xb3ea0


gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDBackGroundObjects1.length = 0;
gdjs.TitleScreenCode.GDBackGroundObjects2.length = 0;
gdjs.TitleScreenCode.GDStartObjects1.length = 0;
gdjs.TitleScreenCode.GDStartObjects2.length = 0;
gdjs.TitleScreenCode.GDExitObjects1.length = 0;
gdjs.TitleScreenCode.GDExitObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
