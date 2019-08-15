gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDFloorObjects1= [];
gdjs.GameCode.GDFloorObjects2= [];
gdjs.GameCode.GDFloorObjects3= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDCoinsCollectedObjects1= [];
gdjs.GameCode.GDCoinsCollectedObjects2= [];
gdjs.GameCode.GDCoinsCollectedObjects3= [];
gdjs.GameCode.GDCoinspointsObjects1= [];
gdjs.GameCode.GDCoinspointsObjects2= [];
gdjs.GameCode.GDCoinspointsObjects3= [];
gdjs.GameCode.GDlevelnameObjects1= [];
gdjs.GameCode.GDlevelnameObjects2= [];
gdjs.GameCode.GDlevelnameObjects3= [];
gdjs.GameCode.GDBasicEnemyObjects1= [];
gdjs.GameCode.GDBasicEnemyObjects2= [];
gdjs.GameCode.GDBasicEnemyObjects3= [];
gdjs.GameCode.GDLeftarrowObjects1= [];
gdjs.GameCode.GDLeftarrowObjects2= [];
gdjs.GameCode.GDLeftarrowObjects3= [];
gdjs.GameCode.GDRightarrowObjects1= [];
gdjs.GameCode.GDRightarrowObjects2= [];
gdjs.GameCode.GDRightarrowObjects3= [];
gdjs.GameCode.GDDoorObjects1= [];
gdjs.GameCode.GDDoorObjects2= [];
gdjs.GameCode.GDDoorObjects3= [];
gdjs.GameCode.GDJumpThoughFloorObjects1= [];
gdjs.GameCode.GDJumpThoughFloorObjects2= [];
gdjs.GameCode.GDJumpThoughFloorObjects3= [];
gdjs.GameCode.GDEnemy2Objects1= [];
gdjs.GameCode.GDEnemy2Objects2= [];
gdjs.GameCode.GDEnemy2Objects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects = Hashtable.newFrom({"BasicEnemy": gdjs.GameCode.GDBasicEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects = Hashtable.newFrom({"BasicEnemy": gdjs.GameCode.GDBasicEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftarrowObjects1Objects = Hashtable.newFrom({"Leftarrow": gdjs.GameCode.GDLeftarrowObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects = Hashtable.newFrom({"BasicEnemy": gdjs.GameCode.GDBasicEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightarrowObjects1Objects = Hashtable.newFrom({"Rightarrow": gdjs.GameCode.GDRightarrowObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects = Hashtable.newFrom({"BasicEnemy": gdjs.GameCode.GDBasicEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.GameCode.GDDoorObjects1});gdjs.GameCode.eventsList0x6a09cc = function(runtimeScene) {

{

gdjs.GameCode.GDBasicEnemyObjects2.createFrom(gdjs.GameCode.GDBasicEnemyObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBasicEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBasicEnemyObjects2[i].getVariableNumber(gdjs.GameCode.GDBasicEnemyObjects2[i].getVariables().get("left")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBasicEnemyObjects2[k] = gdjs.GameCode.GDBasicEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBasicEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBasicEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBasicEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBasicEnemyObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDBasicEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBasicEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

/* Reuse gdjs.GameCode.GDBasicEnemyObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBasicEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBasicEnemyObjects1[i].getVariableNumber(gdjs.GameCode.GDBasicEnemyObjects1[i].getVariables().get("left")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBasicEnemyObjects1[k] = gdjs.GameCode.GDBasicEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBasicEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBasicEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBasicEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasicEnemyObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDBasicEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasicEnemyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.GameCode.eventsList0x6a09cc
gdjs.GameCode.eventsList0xb3ea0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{

gdjs.GameCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
gdjs.GameCode.GDCoinspointsObjects1.createFrom(runtimeScene.getObjects("Coinspoints"));
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].returnVariable(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCoinspointsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinspointsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{


{
gdjs.GameCode.GDLeftarrowObjects1.createFrom(runtimeScene.getObjects("Leftarrow"));
gdjs.GameCode.GDRightarrowObjects1.createFrom(runtimeScene.getObjects("Rightarrow"));
{for(var i = 0, len = gdjs.GameCode.GDLeftarrowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLeftarrowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDRightarrowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRightarrowObjects1[i].hide();
}
}}

}


{

gdjs.GameCode.GDBasicEnemyObjects1.createFrom(runtimeScene.getObjects("BasicEnemy"));
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Titletimer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDlevelnameObjects1.createFrom(runtimeScene.getObjects("levelname"));
{for(var i = 0, len = gdjs.GameCode.GDlevelnameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDlevelnameObjects1[i].hide();
}
}}

}


{

gdjs.GameCode.GDBasicEnemyObjects1.createFrom(runtimeScene.getObjects("BasicEnemy"));
gdjs.GameCode.GDLeftarrowObjects1.createFrom(runtimeScene.getObjects("Leftarrow"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftarrowObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBasicEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBasicEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasicEnemyObjects1[i].returnVariable(gdjs.GameCode.GDBasicEnemyObjects1[i].getVariables().get("left")).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDBasicEnemyObjects1.createFrom(runtimeScene.getObjects("BasicEnemy"));
gdjs.GameCode.GDRightarrowObjects1.createFrom(runtimeScene.getObjects("Rightarrow"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightarrowObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBasicEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBasicEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasicEnemyObjects1[i].returnVariable(gdjs.GameCode.GDBasicEnemyObjects1[i].getVariables().get("left")).setNumber(0);
}
}}

}


{

gdjs.GameCode.GDBasicEnemyObjects1.createFrom(runtimeScene.getObjects("BasicEnemy"));
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasicEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6889276);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].returnVariable(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 5 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
{for(var i = 0, len = gdjs.GameCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDoorObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.GameCode.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 5 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winning", false);
}}

}


{

gdjs.GameCode.GDBasicEnemyObjects1.createFrom(runtimeScene.getObjects("BasicEnemy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBasicEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBasicEnemyObjects1[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBasicEnemyObjects1[k] = gdjs.GameCode.GDBasicEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBasicEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x6a09cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0xb3ea0


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDFloorObjects1.length = 0;
gdjs.GameCode.GDFloorObjects2.length = 0;
gdjs.GameCode.GDFloorObjects3.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinsCollectedObjects1.length = 0;
gdjs.GameCode.GDCoinsCollectedObjects2.length = 0;
gdjs.GameCode.GDCoinsCollectedObjects3.length = 0;
gdjs.GameCode.GDCoinspointsObjects1.length = 0;
gdjs.GameCode.GDCoinspointsObjects2.length = 0;
gdjs.GameCode.GDCoinspointsObjects3.length = 0;
gdjs.GameCode.GDlevelnameObjects1.length = 0;
gdjs.GameCode.GDlevelnameObjects2.length = 0;
gdjs.GameCode.GDlevelnameObjects3.length = 0;
gdjs.GameCode.GDBasicEnemyObjects1.length = 0;
gdjs.GameCode.GDBasicEnemyObjects2.length = 0;
gdjs.GameCode.GDBasicEnemyObjects3.length = 0;
gdjs.GameCode.GDLeftarrowObjects1.length = 0;
gdjs.GameCode.GDLeftarrowObjects2.length = 0;
gdjs.GameCode.GDLeftarrowObjects3.length = 0;
gdjs.GameCode.GDRightarrowObjects1.length = 0;
gdjs.GameCode.GDRightarrowObjects2.length = 0;
gdjs.GameCode.GDRightarrowObjects3.length = 0;
gdjs.GameCode.GDDoorObjects1.length = 0;
gdjs.GameCode.GDDoorObjects2.length = 0;
gdjs.GameCode.GDDoorObjects3.length = 0;
gdjs.GameCode.GDJumpThoughFloorObjects1.length = 0;
gdjs.GameCode.GDJumpThoughFloorObjects2.length = 0;
gdjs.GameCode.GDJumpThoughFloorObjects3.length = 0;
gdjs.GameCode.GDEnemy2Objects1.length = 0;
gdjs.GameCode.GDEnemy2Objects2.length = 0;
gdjs.GameCode.GDEnemy2Objects3.length = 0;

gdjs.GameCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['GameCode'] = gdjs.GameCode;
