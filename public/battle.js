
(function(window,document,Laya){
	console.log("<<<< Injection Done! >>>>");

	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,ArmyGroupInfo=shell.model.data.battle.ArmyGroupInfo,BaseSprite=framework.mvc.view.BaseSprite;
	var BattleData=shell.model.data.battle.BattleData,BattleEvent=shell.evnets.BattleEvent,BattleMainViewUI=ui.battle.BattleMainViewUI;
	var BattleSwfPlayer=framework.mvc.view.player.BattleSwfPlayer,BattleWeakGuideArrowUI=ui.battle.BattleWeakGuideArrowUI;
	var Battle_Fighter_headUI=ui.battle.Battle_Fighter_headUI,Bitmap=laya.resource.Bitmap,Browser=laya.utils.Browser;
	var BuffConfig=shell.model.configuration.BuffConfig,CheckBox=laya.ui.CheckBox,Config=Laya.Config,ConfigFile=shell.model.configuration.ConfigFile;
	var Controllers=shell.facade.Controllers,DataMonitor=framework.data.DataMonitor,Datas=shell.facade.Datas;
	var Dialog=laya.ui.Dialog,Dictionary=laya.utils.Dictionary,Ease=laya.utils.Ease,EffectConfig=shell.model.configuration.EffectConfig;
	var EnumBattleConfig=shell.model.enum.battle.EnumBattleConfig,EnumBattleLayer=shell.model.enum.battle.EnumBattleLayer;
	var EnumBattleMap=shell.model.enum.battle.EnumBattleMap,EnumBattleSetting=shell.model.enum.battle.EnumBattleSetting;
	var EnumBattleType=shell.model.enum.EnumBattleType,EnumFighterType=shell.model.enum.battle.EnumFighterType;
	var EnumGameID=shell.model.enum.EnumGameID,EnumGuideType=shell.model.enum.EnumGuideType,EnumHeadSize=shell.model.enum.EnumHeadSize;
	var EnumLang=shell.model.enum.EnumLang,EnumPlatformCode=shell.model.enum.EnumPlatformCode,EnumSoundPrefix=shell.model.enum.EnumSoundPrefix;
	var EnumTile=shell.model.enum.battle.EnumTile,Event=laya.events.Event,EventCenter=framework.events.EventCenter;
	var FP=com.easyrpg.FP,FightConstant=shell.model.configuration.FightConstant,Framework=framework.Framework;
	var GameDefine=Laya.GameDefine,GameEvent=shell.evnets.GameEvent,GameStyle=shell.view.GameStyle,GameUtil=shell.utils.GameUtil;
	var Global=shell.facade.Global,Graphics=laya.display.Graphics,GuideManager=shell.manager.GuideManager,Handler=laya.utils.Handler;
	var HeroConfig=shell.model.configuration.HeroConfig,HeroHead=shell.view.compoment.head.HeroHead,HeroHeadData=shell.view.compoment.head.HeroHeadData;
	var HeroLocalConfig=shell.model.configuration.HeroLocalConfig,ISOMath=shell.utils.ISOMath,Image=laya.ui.Image;
	var LocalStorage=laya.net.LocalStorage,LordSkillConfig=shell.model.configuration.LordSkillConfig,MainChatPanel=main.MainChatPanel;
	var MathUitl=framework.utils.MathUitl,ModuleManager=framework.modules.ModuleManager,ModuleNames=shell.modules.ModuleNames;
	var ObjectPoolManager=shell.manager.ObjectPoolManager,PanelEvent=framework.events.PanelEvent,PlayerUtil=shell.utils.PlayerUtil;
	var Point=laya.maths.Point,Pool=laya.utils.Pool,RandomSeed=framework.utils.RandomSeed,Rectangle=laya.maths.Rectangle;
	var Render=laya.renders.Render,RootView=framework.mvc.view.RootView,ShakeEffect$1=shell.utils.ShakeEffect;
	var SkillAtkParamsConfig=shell.model.configuration.SkillAtkParamsConfig,SkillConfig=shell.model.configuration.SkillConfig;
	var SoldierConfig=shell.model.configuration.SoldierConfig,SoundChannel=laya.media.SoundChannel,SoundConfig=shell.model.configuration.SoundConfig;
	var SoundHeroInfo=shell.model.vo.SoundHeroInfo,SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite;
	var Stage=laya.display.Stage,StartBattleVo=shell.model.vo.StartBattleVo,Stat=laya.utils.Stat,SwfConst=framework.mvc.view.player.SwfConst;
	var SwfParams=Laya.SwfParams,SwfPlayer=framework.mvc.view.player.SwfPlayer,TaskData=shell.model.data.task.TaskData;
	var Text=laya.display.Text,TimeLine=laya.utils.TimeLine,TimerManager=framework.manager.TimerManager,Tween=laya.utils.Tween;
	var UIBitmapTextField=shell.view.compoment.UIBitmapTextField,UrlManager=shell.manager.UrlManager,Utils=laya.utils.Utils;
	var View=laya.ui.View,WorldEvent=shell.modules.rpg.events.WorldEvent,battle_hero_headUI=ui.battle.battle_hero_headUI;
	var battle_hero_operation_viewUI=ui.battle.battle_hero_operation_viewUI,battle_left_skill_tipUI=ui.battle.battle_left_skill_tipUI;
	var battle_pause_viewUI=ui.battle.battle_pause_viewUI,battle_right_skill_tipUI=ui.battle.battle_right_skill_tipUI;
	var battle_setting_viewUI=ui.battle.battle_setting_viewUI,battle_top_menuUI=ui.battle.battle_top_menuUI,getTimer=Laya.getTimer;
	var int=Laya.int;
Laya.interface('battle.step.trajectory.ITrajectory');
//class battle.control.BattleContent
var BattleContent=(function(){
	function BattleContent(){}
	__class(BattleContent,'battle.control.BattleContent');
	BattleContent.load=function(mapId,monLoadComplete){
		BattleContent.onLoadComplete=monLoadComplete;
		BattleContent.allArmyGroups=[];
		BattleContent.camp0=[];
		BattleContent.camp1=[];
		BattleContent.row0=[];
		BattleContent.row1=[];
		BattleContent.row2=[];
		BattleContent.barrierList=[];
		BattleContent.onMapLoaded(null);
	}

	BattleContent.onMapLoaded=function(res){
		BattleContent.onLoadComplete && BattleContent.onLoadComplete();
		BattleContent.onLoadComplete=null;
	}

	BattleContent.addBarrierRect=function(rect){
		BattleContent.barrierList.push(rect);
	}

	BattleContent.removeBarrierRect=function(rect){
		var i=BattleContent.barrierList.indexOf(rect);
		if(i>=0)
			BattleContent.barrierList.splice(i,1);
	}

	BattleContent.getMyArmyGroupList=function(){
		if(Datas.battleData.getMyCamp()==1)
			return BattleContent.camp0;
		return BattleContent.camp1;
	}

	BattleContent.getEnemyGroup=function(campType){
		return campType==1 ? BattleContent.camp1:BattleContent.camp0;
	}

	BattleContent.getFriendGroup=function(campType){
		return campType==1 ? BattleContent.camp0:BattleContent.camp1;
	}

	BattleContent.addGroup=function(group){
		BattleContent.allArmyGroups.push(group);
		var ary=BattleContent.getFriendGroup(group.camp);
		ary.push(group);
		BattleContent.addToRow(group ,group.gridX);
	}

	BattleContent.removeGroup=function(group){
		var i=BattleContent.allArmyGroups.indexOf(group);
		if(i>=0)BattleContent.allArmyGroups.splice(i,1);
		var ary=BattleContent.getFriendGroup(group.camp);
		i=ary.indexOf(group);
		if(i>=0)ary.splice(i ,1);
		BattleContent.removeFormRow(group ,group.gridX);
	}

	BattleContent.addToRow=function(ag,gridX){
		var vec=BattleContent.getRows(gridX);
		framework.assert(vec.indexOf(ag)==-1 ,"第一行里已有军团"+ag.nickName+",怎么还往里添加?");
		vec.push(ag);
	}

	BattleContent.removeFormRow=function(ag,gridX){
		var vec=BattleContent.getRows(gridX);
		var i=vec.indexOf(ag);
		if(i >=0)vec.splice(i,1);
	}

	BattleContent.checkForntAndBackStatus=function(gridX,gridY){
		var vec=BattleContent.getRows(gridX);
		var n1=0,n2=0;
		var temp;
		for(var $each_temp in vec){
			temp=vec[$each_temp];
			if(temp.gridY < gridY)
				n1=1;
			else if(temp.gridY > gridY)
			n2=1;
		}
		return n1+n2;
	}

	BattleContent.getRows=function(gridX){
		var i=Math.floor(gridX / 7);
		if(i==0)
			return battle.control.BattleContent.row0;
		else if(i==1)
		return battle.control.BattleContent.row1;
		else
		return battle.control.BattleContent.row2;
	}

	BattleContent.unload=function(){
		BattleContent.allArmyGroups.length=0;
		BattleContent.camp0.length=0;
		BattleContent.camp1.length=0;
		BattleContent.row0.length=BattleContent.row1.length=BattleContent.row2.length=0;
	}

	BattleContent.getArmyGroup=function(camp,index){
		var ary=BattleContent.getFriendGroup(camp);
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			if(ag.index==index){
				return ag;
			}
		}
		return null;
	}

	BattleContent.isCanWalk=function(rect,sourceGroup){
		var ag;
		for(var $each_ag in BattleContent.allArmyGroups){
			ag=BattleContent.allArmyGroups[$each_ag];
			if(sourceGroup==ag)continue ;
			if(ag.getPlaceBounds().intersects(rect))
				return false;
		}
		if(BattleContent.barrierList.length>0){
			var barrier;
			for(var $each_barrier in BattleContent.barrierList){
				barrier=BattleContent.barrierList[$each_barrier];
				if(barrier.intersects(rect)){
					return false
				}
			}
		}
		return true;
	}

	BattleContent.getArmyGroupByCamp=function(camp){
		(camp===void 0)&& (camp=0);
		if(camp==0)
			return BattleContent.allArmyGroups;
		else
		return camp==1?BattleContent.camp0:BattleContent.camp1;
	}

	BattleContent.hitTestArmyGroup=function(v,camp){
		(camp===void 0)&& (camp=0);
		var ags=BattleContent.getArmyGroupByCamp(camp);
		var rect;
		var result=[];
		var ag;
		for(var $each_ag in ags){
			ag=ags[$each_ag];
			rect=ag.getTileBounds().clone();
			if((v instanceof laya.maths.Point )){
				rect.y-=1;
				if(rect.contains(v.x,v.y)){
					result[0]=ag;
					return result;
				}
			}
			else{
				if(rect.intersects((v)))
					result.push(ag);
			}
		}
		return result;
	}

	BattleContent.hitTestFighters=function(ag,v,camp){
		(camp===void 0)&& (camp=0);
		var result=[];
		var len=0;
		var fighter;
		len=ag.group.length;
		for(var i=0;i<len;++i){
			fighter=ag.group[i];
			if(!fighter)continue ;
			if(v.contains(fighter.mapGridX,fighter.mapGridY)){
				result.push(fighter);
			}
		}
		return result;
	}

	BattleContent.hitTestFightersByRect=function(rect,camp){
		var ags=BattleContent.hitTestArmyGroup(rect,camp);
		var fighter;
		var result=[];
		var ag;
		for(var $each_ag in ags){
			ag=ags[$each_ag];
			var len=ag.group.length;
			for(var i=0;i<len;++i){
				fighter=ag.group[i];
				if(!fighter)continue ;
				if(rect.contains(fighter.mapGridX,fighter.mapGridY)){
					result.push(fighter);
				}
			}
		}
		return result;
	}

	BattleContent.getTargetsByLordSkill=function(camp,idAry){
		var ags=BattleContent.getArmyGroupByCamp(camp);
		var result=[];
		var ag;
		for(var $each_ag in ags){
			ag=ags[$each_ag];
			if(idAry.indexOf(ag.id)>=0)
				result.push(ag);
		}
		return result;
	}

	BattleContent.checkNewPlace=function(newPlace,exclude){
		var ag;
		for(var $each_ag in BattleContent.allArmyGroups){
			ag=BattleContent.allArmyGroups[$each_ag];
			if(exclude==ag)continue ;
			if(ag.getPlaceBounds().intersects(newPlace)){
				return ag;
			}
		}
		return null;
	}

	BattleContent.checkRectInMap=function(rect){
		if(rect.x<0 || rect.y<0 || rect.right > 20 || rect.bottom > 60)
			return false;
		return true;
	}

	BattleContent.findCanAttackTarget=function(requester,atkRect){
		var ary=BattleContent.getEnemyGroup(requester.camp);
		var reqPt=requester.getTilePoint();
		var gridY=reqPt.y;
		var result;
		var testPT;
		var curResultPt;
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			testPT=ag.getTilePoint();
			if(reqPt.x !=testPT.x){
				continue ;
			}
			if(ag.crosswiseMoveFlag==0 && ag.getPlaceBounds().intersects(atkRect)){
				if(result==null){
					result=ag;
				}
				else{
					curResultPt=result.getTilePoint();
					if(Math.abs(testPT.y-gridY)< Math.abs(curResultPt.y-gridY)){
						result=ag;
					}
					else if(Math.abs(testPT.y-gridY)==Math.abs(curResultPt.y-gridY)){
						if((requester.isFaceFornt && testPT.y > gridY)|| (!requester.isFaceFornt && testPT.y < gridY))
							result=ag;
					}
				}
			}
		}
		return result;
	}

	BattleContent.getNearEnemybyWalk=function(src){
		var ary=BattleContent.getEnemyGroup(src.camp);
		if(ary.length==0){
			return null;
		};
		var result;
		var sumNewDist=0;
		var sumPreDist=0;
		var newTest;
		var newTestPoint;
		var curPoint;
		var srcPoint=src.getCenterTilePoint();
		var isFaceFront=src.isFaceFornt;
		for(var i=0,len=ary.length;i<len;++i){
			if(result==null){
				result=ary[i];
				continue ;
			}
			newTest=ary[i];
			newTestPoint=newTest.getCenterTilePoint();
			curPoint=result.getCenterTilePoint();
			sumNewDist=Math.abs(newTestPoint.x-srcPoint.x);
			sumPreDist=Math.abs(curPoint.x-srcPoint.x);
			if(sumNewDist < sumPreDist){
				result=newTest;
			}
			else if(sumNewDist==sumPreDist){
				if(newTest.crosswiseMoveFlag==0 &&
					Math.abs(newTestPoint.y-srcPoint.y)< Math.abs(curPoint.y-srcPoint.y)){
					result=newTest;
				}
				else{
				}
			}
		}
		return result;
	}

	BattleContent.getNearEnemybyFight=function(src){
		var ary=BattleContent.getEnemyGroup(src.camp);
		if(ary.length==0){
			return null;
		};
		var result;
		var sumNewDist=0;
		var sumPreDist=0;
		var newTest;
		var newTestPoint;
		var curPoint;
		var srcPoint=src.getCenterTilePoint();
		var isFaceFront=src.isFaceFornt;
		for(var i=0,len=ary.length;i<len;++i){
			if(result==null){
				result=ary[i];
				continue ;
			}
			newTest=ary[i];
			newTestPoint=newTest.getCenterTilePoint();
			curPoint=result.getCenterTilePoint();
			sumNewDist=Math.abs(newTestPoint.x-srcPoint.x);
			sumPreDist=Math.abs(curPoint.x-srcPoint.x);
			if(sumNewDist < sumPreDist){
				result=newTest;
			}
			else if(sumNewDist==sumPreDist){
				if(newTest.crosswiseMoveFlag==0 &&
					Math.abs(newTestPoint.y-srcPoint.y)< Math.abs(curPoint.y-srcPoint.y)){
					result=newTest;
				}
				else{
					if((src.isFaceFornt && curPoint.y < srcPoint.y)|| (!src.isFaceFornt && curPoint.y > srcPoint.y)){
						result=newTest;
					}
				}
			}
		}
		return result;
	}

	BattleContent.allArmyGroups=null;
	BattleContent.camp0=null;
	BattleContent.camp1=null;
	BattleContent.row0=null;
	BattleContent.row1=null;
	BattleContent.row2=null;
	BattleContent.barrierList=null;
	BattleContent.onLoadComplete=null;
	BattleContent.mode=0;
	BattleContent.replayObj=null;
	BattleContent.using=null;
	return BattleContent;
})()


//class battle.control.BattleController
var BattleController=(function(){
	function BattleController(world){
		this._world=null;
		this.exitTimer=0;
		this._world=world;
	}

	__class(BattleController,'battle.control.BattleController');
	var __proto=BattleController.prototype;
	__proto.enable=function(){
		EventCenter.add("war_result_export",this,this.onWarResult);
		EventCenter.add("war_init",this,this.onWarStart); ///***
	}

	__proto.disable=function(){
		EventCenter.remove("war_result_export",this,this.onWarResult);
		EventCenter.remove("war_init",this,this.onWarStart);
	}

	__proto.onWarStart=function(e){
		this.clearExitTimeout();
	}

	__proto.clearExitTimeout=function(){}
	__proto.onWarResult=function(data){
		var result=data.replay;
		if(result.mode==1){
			Datas.battleData.vcrList[0]=result;
			DataMonitor.notify("BattleData"+".vcrList");
		}
		if(ReplayCache.mode==2 && !WarringData.isDebug){
			this.clearExitTimeout();
			if(WarringData.requestVo.openReportPanel)
				Framework.moduleMgr.show("battleReport.WarReportPanel&battleReport&&battleReport");
			if(WarringData.requestVo.openDetailsPanel)
				Framework.moduleMgr.show("battleReport.WarDetailsPanel&battleReport&&battleReport",{needToExitBattleWorld:true});
		}
	}

	// EventCenter.add(PanelEvent.HIDE_EVENT,this,onBattlePanelHide );
	__proto.onBattlePanelHide=function(e){}
	return BattleController;
})()


//class battle.control.FSM.FSMState
var FSMState=(function(){
	function FSMState(content){
		this.armyGroup=null;
		this.armyGroup=content;
	}

	__class(FSMState,'battle.control.FSM.FSMState');
	var __proto=FSMState.prototype;
	__proto.entry=function(){}
	__proto.exit=function(){}
	__proto.update=function(){}
	__proto.change=function(event){
		var state;
		if(event=="standby")
			state=new StandByState(this.armyGroup);
		else if(event=="walking")
		state=new WalkState(this.armyGroup);
		else if(event=="fight")
		state=new FightState(this.armyGroup);
		return state;
	}

	return FSMState;
})()


//class battle.control.FSM.FSMEvent
var FSMEvent=(function(){
	function FSMEvent(){}
	__class(FSMEvent,'battle.control.FSM.FSMEvent');
	FSMEvent.StandBy="standby";
	FSMEvent.Walking="walking";
	FSMEvent.Fight="fight";
	FSMEvent.Death="death";
	return FSMEvent;
})()


/**
*军团移动逻辑
*@author fenglijun
*
*/
//class battle.control.MoveControl
var MoveControl=(function(){
	function MoveControl(target){
		this.target=null;
		this.isMoving=false;
		this.totalTime=0;
		//移动需要的总时间,帧
		this.time=0;
		//当前的时间
		this.oldPoint=null;
		//移动前的原始坐标
		this.destPoint=null;
		//移动到的新坐标
		this.onMoveEnd=null;
		this._caller=null;
		this.target=target;
	}

	__class(MoveControl,'battle.control.MoveControl');
	var __proto=MoveControl.prototype;
	__proto.renew=function(){
		this.totalTime=0;
		this.time=0;
		this.isMoving=false;
	}

	__proto.destroy=function(){
		this.target=null;
		this.oldPoint=null;
		this.destPoint=null;
		this.onMoveEnd=null;
	}

	__proto.move=function(){
		if(this.isMoving){
			var factor=++this.time / this.totalTime;
			var newPoint=MathUitl.interpolate(this.oldPoint,this.destPoint,factor);
			this.target.place(Math.floor(newPoint.x),Math.floor(newPoint.y));
			if(this.destPoint.x==newPoint.x && this.destPoint.y==newPoint.y){
				this.isMoving=false;
				this.onMoveEnd&&this.onMoveEnd.call(this._caller);
			}
		}
	}

	__proto.moveTo=function(gridX,gridY,speed,caller,onMoveEnd){
		this._caller=caller;
		this.onMoveEnd=onMoveEnd;
		this.oldPoint=ISOMath.isoToScreen(this.target.gridX,this.target.gridY);
		this.destPoint=ISOMath.isoToScreen(gridX,gridY);
		var xFactor=0;
		var x=Math.abs(gridX-this.target.gridX);
		var y=Math.abs(gridY-this.target.gridY);
		xFactor=Math.sqrt(x*x+y*y);
		this.totalTime=Math.floor(30 *0.1 *speed *xFactor);
		this.time=0;
		this.isMoving=true;
		return true;
	}

	__proto.stop=function(){
		this.isMoving=false;
		this.onMoveEnd&&this.onMoveEnd.call(this._caller);
	}

	__proto.stopAndGotoDest=function(){
		this.target.x=this.destPoint.x;
		this.target.y=this.destPoint.y;
		this.stop();
	}

	return MoveControl;
})()


//class battle.control.SkillMask
var SkillMask=(function(){
	var Step;
	function SkillMask(){}
	__class(SkillMask,'battle.control.SkillMask');
	SkillMask.add=function(hero,targets,cammeraFollow){
		BattleWorld.getInstance().pause();
		SkillMask.restoreCurrentTargets();
		var step=new Step();
		step.hero=hero;
		step.time=12;
		SkillMask.heroStepList.push(step);
		SkillMask.heroStepMap.set(hero,step);
		if(WarringData.isVerification)return;
		step.addToLightLayer(targets);
		var grap=BattleWorld.maskLayer.graphics;
		BattleWorld.maskLayer.alpha=0.6;
		grap.clear();
		grap.drawRect(-2000,-500,3000,2000 ,"#000000");
		if(cammeraFollow){
			BattleScenePanel.instance.cammeraFollowTo(hero);
		}
	}

	SkillMask.onGotoEnd=function(isEnd){}
	SkillMask.update=function(){
		SkillMask.onEnterFrame();
	}

	SkillMask.back=function(hero){
		var step=SkillMask.heroStepMap.get(hero);
		if(step){
			step.back();
			var i=SkillMask.heroStepList.indexOf(step);
			if(i>=0)
				SkillMask.heroStepList.splice(i ,1);
			SkillMask.heroStepMap.remove(hero);
			step.destroy();
		}
		if(SkillMask.heroStepList.length<=0){
			BattleWorld.getInstance().resume();
			BattleWorld.maskLayer.graphics.clear();
		}
	}

	SkillMask.onEnterFrame=function(){
		var step;
		for(var $each_step in SkillMask.heroStepList){
			step=SkillMask.heroStepList[$each_step];
			step.update();
		}
	}

	SkillMask.restoreCurrentTargets=function(){
		var step;
		for(var $each_step in SkillMask.heroStepMap.values){
			step=SkillMask.heroStepMap.values[$each_step];
			step.back();
		}
	}

	SkillMask.destroy=function(){
		BattleWorld.maskLayer.graphics.clear();
		if(SkillMask.heroStepList.length>0){
			SkillMask.heroStepList.length=0;
			SkillMask.heroStepMap.clear();
			SkillMask.heroStepMap=new Dictionary();
		}
	}

	SkillMask.heroStepList=[];
	__static(SkillMask,
	['heroStepMap',function(){return this.heroStepMap=new Dictionary();}
	]);
	SkillMask.__init$=function(){
		//class Step
		Step=(function(){
			function Step(){
				this.hero=null;
				this.targets=null;
				this.time=0;
				this.oldStatus=null;
				this.oldStatus=new Dictionary();
			}
			__class(Step,'');
			var __proto=Step.prototype;
			__proto.update=function(){
				if(this.time>0){
					this.time--;
				}
				else{
					this.hero.update();
				}
			}
			__proto.addToLightLayer=function(targetList){
				this.targets=[];
				var sp;
				for(var $each_sp in targetList){
					sp=targetList[$each_sp];
					if((sp instanceof battle.entitys.Fighter )){
						if((sp).isMoving)(sp).stopMove(true);
					}
					if(sp.parent !=BattleWorld.tempLayer){
						this.targets.push(sp);
						this.addlayer(sp);
					}
				}
				if(this.hero.parent !=BattleWorld.tempLayer)
					this.addlayer(this.hero);
			}
			__proto.addlayer=function(target){
				this.oldStatus.set(target,[target.parent,target.parent.getChildIndex(target),target.x,target.y]);
				target.removeSelf();
				if((target instanceof battle.entitys.Fighter )){
					target.x=(target).belongGroup.x+target.x;
					target.y=(target).belongGroup.y+target.y;
				}
				BattleWorld.tempLayer.addChild(target);
			}
			__proto.back=function(){
				if(this.targets){
					var ary;
					var sp;
					for(var $each_sp in this.targets){
						sp=this.targets[$each_sp];
						ary=this.oldStatus.get(sp);
						if(ary){
							sp.x=ary[2];
							sp.y=ary[3];
							ary[0].addChild(sp);
							this.oldStatus.remove(sp);
						}
					}
					this.targets=null;
				}
			}
			__proto.destroy=function(){
				var ary=this.oldStatus.get(this.hero);
				if(ary){
					this.hero.x=ary[2];
					this.hero.y=ary[3];
					ary[0].addChild(this.hero);
					this.oldStatus.remove(this.hero);
				}
				this.hero=null;
				this.targets=null;
			}
			return Step;
		})()
	}

	return SkillMask;
})()


//class battle.control.TargetFinder
var TargetFinder=(function(){
	function TargetFinder(){}
	__class(TargetFinder,'battle.control.TargetFinder');
	TargetFinder.findTargets=function(attacker,target,type,funcName){
		return TargetFinder[funcName](attacker,target,type);
	}

	TargetFinder.getGroup=function(type,camp){
		return type==1?BattleContent.getFriendGroup(camp):BattleContent.getEnemyGroup(camp);
	}

	TargetFinder.single=function(attacker,target,type){
		return [target];
	}

	TargetFinder.team_near=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result;
		var resultPt;
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			testPT=ag.getTilePoint();
			if(ackPt.x !=testPT.x)continue ;
			if(ag.crosswiseMoveFlag!=0)continue ;
			if(isFaceFront && testPT.y > ackPt.y){
				if(resultPt){
					if(testPT.y < resultPt.y){
						resultPt=testPT;
						result=ag;
					}
				}
				else{
					resultPt=testPT;
					result=ag;
				}
			}
			else if(!isFaceFront && testPT.y < ackPt.y){
				if(resultPt){
					if(testPT.y > resultPt.y){
						resultPt=testPT;
						result=ag;
					}
				}
				else{
					resultPt=testPT;
					result=ag;
				}
			}
		}
		return result?[result]:null;
	}

	TargetFinder.team_far=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result;
		var resultPt;
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			testPT=ag.getTilePoint();
			if(ackPt.x !=testPT.x)continue ;
			if(ag.crosswiseMoveFlag!=0)continue ;
			if(isFaceFront && testPT.y > ackPt.y){
				if(resultPt){
					if(resultPt.y < testPT.y){
						resultPt=testPT;
						result=ag;
					}
				}
				else{
					resultPt=testPT;
					result=ag;
				}
			}
			else if(!isFaceFront && testPT.y < ackPt.y){
				if(resultPt){
					if(resultPt.y > testPT.y){
						resultPt=testPT;
						result=ag;
					}
				}
				else{
					resultPt=testPT;
					result=ag;
				}
			}
		}
		return result?[result]:null;
	}

	TargetFinder.team_front=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result=[];
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			testPT=ag.getTilePoint();
			if(ackPt.x !=testPT.x)continue ;
			if(ag.crosswiseMoveFlag!=0)continue ;
			if(isFaceFront && testPT.y > ackPt.y){
				result.push(ag);
			}
			else if(!isFaceFront && testPT.y < ackPt.y){
				result.push(ag);
			}
		}
		return result;
	}

	TargetFinder.team_string=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result=[];
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			testPT=ag.getTilePoint();
			if(ackPt.x !=testPT.x)continue ;
			if(ag.crosswiseMoveFlag!=0)continue ;
			result.push(ag);
		}
		return result;
	}

	TargetFinder.team_random1=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		if(targets.length>0){
			var i=Math.floor(targets.length *WarringData.random.getNext());
			if(i>=targets.length){
				i-=1;
			}
			return [targets[i]];
		}
		return null;
	}

	TargetFinder.team_random2=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		if(targets.length<=0){
			return null;
		};
		var ag;
		var result=[];
		if(targets.length<=2){
			var $each_ag;
			for($each_ag in targets){
				ag=targets[$each_ag];
				result.push(ag);
			}
		}
		else{
			var i=0;
			var len=targets.length;
			var indexs=[];
			for(i=0;i<len;++i){
				indexs.push(i);
			}
			i=WarringData.random.getNext()*indexs.length;
			result.push(targets[int(indexs.splice(i,1))]);
			i=WarringData.random.getNext()*indexs.length;
			result.push(targets[int(indexs.splice(i,1))]);
		}
		return result;
	}

	TargetFinder.team_random3=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		if(targets.length<=0){
			return null;
		};
		var ag;
		var result=[];
		if(targets.length<=3){
			var $each_ag;
			for($each_ag in targets){
				ag=targets[$each_ag];
				result.push(ag);
			}
		}
		else{
			var i=0;
			var len=targets.length;
			var indexs=[];
			for(i=0;i<len;++i){
				indexs.push(i);
			}
			i=WarringData.random.getNext()*indexs.length;
			result.push(targets[int(indexs.splice(i,1))]);
			i=WarringData.random.getNext()*indexs.length;
			result.push(targets[int(indexs.splice(i,1))]);
			i=WarringData.random.getNext()*indexs.length;
			result.push(targets[int(indexs.splice(i,1))]);
		}
		return result;
	}

	TargetFinder.team_self=function(attacker,target,type){
		return [attacker.belongGroup];
	}

	TargetFinder.team_all=function(attacker,target,type){
		var result=[];
		var targets=TargetFinder.getGroup(type,attacker.property.camp);
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			result.push(ag);
		}
		return result;
	}

	TargetFinder.hero_near=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result;
		var resultPt;
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			testPT=ag.getTilePoint();
			if(ackPt.x !=testPT.x)continue ;
			if(ag.crosswiseMoveFlag!=0)continue ;
			if(isFaceFront && testPT.y > ackPt.y){
				if(resultPt){
					if(ag.hero && testPT.y < resultPt.y){
						resultPt=testPT;
						result=ag;
					}
				}
				else{
					resultPt=testPT;
					result=ag;
				}
			}
			else if(!isFaceFront && testPT.y < ackPt.y){
				if(resultPt){
					if(testPT.y > resultPt.y && ag.hero){
						resultPt=testPT;
						result=ag;
					}
				}
				else{
					resultPt=testPT;
					result=ag;
				}
			}
		};
		var fighter;
		if(result){
			fighter=result.hero;
			if(!fighter)
				fighter=TargetFinder.getSoldier(result);
			if(fighter){
				return [fighter];
			}
		}
		return null;
	}

	TargetFinder.hero_first=function(attacker,target,type){
		var arr=TargetFinder.team_first(attacker,target,type);
		var fighter;
		if(arr && arr[0]){
			fighter=arr[0].hero;
			if(!fighter){
				fighter=TargetFinder.getSoldier(arr[0]);
			}
			if(fighter){
				return [fighter];
			}
		}
		return null;
	}

	TargetFinder.hero_far=function(attacker,target,type){
		var targets=TargetFinder.getGroup(type ,attacker.property.camp);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result;
		var resultPt;
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			testPT=ag.getTilePoint();
			if(ackPt.x !=testPT.x)continue ;
			if(ag.crosswiseMoveFlag!=0)continue ;
			if(isFaceFront && testPT.y > ackPt.y){
				if(resultPt){
					if(testPT.y > resultPt.y && ag.hero){
						resultPt=testPT;
						result=ag;
					}
				}
				else if(ag.hero){
					resultPt=testPT;
					result=ag;
				}
				else{
					result=ag;
				}
			}
			else if(!isFaceFront && testPT.y < ackPt.y){
				if(resultPt){
					if(testPT.y < resultPt.y && ag.hero){
						resultPt=testPT;
						result=ag;
					}
				}
				else if(ag.hero){
					resultPt=testPT;
					result=ag;
				}
				else{
					result=ag;
				}
			}
		};
		var fighter;
		if(result){
			fighter=result.hero;
			if(!fighter)
				fighter=TargetFinder.getSoldier(result);
			if(fighter){
				return [fighter];
			}
		}
		return null;
	}

	TargetFinder.hero_last=function(attacker,target,type){
		var arr=TargetFinder.team_last(attacker,target,type);
		var fighter;
		if(arr && arr[0]){
			fighter=arr[0].hero;
			if(!fighter)
				fighter=TargetFinder.getSoldier(arr[0]);
			if(fighter)
				return [fighter];
		}
		return null;
	}

	TargetFinder.hero_front=function(attacker,target,type){
		var ary=TargetFinder.team_front(attacker,target,type);
		var result=[];
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			if(ag.hero)
				result.push(ag.hero);
			else
			result.push(TargetFinder.getSoldier(ag));
		}
		return result;
	}

	TargetFinder.hero_string=function(attacker,target,type){
		var ary=TargetFinder.team_string(attacker,target,type);
		var result=[];
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			if(ag.hero)
				result.push(ag.hero);
			else
			result.push(TargetFinder.getSoldier(ag));
		}
		return result;
	}

	TargetFinder.hero_random1=function(attacker,target,type){
		var ary=TargetFinder.team_random1(attacker,target,type);
		var result=[];
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			if(ag.hero)
				result.push(ag.hero);
			else
			result.push(TargetFinder.getSoldier(ag));
		}
		return result;
	}

	TargetFinder.hero_random2=function(attacker,target,type){
		var ary=TargetFinder.team_random2(attacker,target,type);
		var result=[];
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			if(ag.hero)
				result.push(ag.hero);
			else
			result.push(TargetFinder.getSoldier(ag));
		}
		return result;
	}

	TargetFinder.hero_random3=function(attacker,target,type){
		var ary=TargetFinder.team_random3(attacker,target,type);
		var result=[];
		var ag;
		for(var $each_ag in ary){
			ag=ary[$each_ag];
			if(ag.hero)
				result.push(ag.hero);
			else
			result.push(TargetFinder.getSoldier(ag));
		}
		return result;
	}

	TargetFinder.hero_weak1=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var result;
		var resultPercent=0;
		var ag;
		for(var $each_ag in groups){
			ag=groups[$each_ag];
			if(!ag.hero)continue ;
			if(!result){
				result=ag.hero;
				resultPercent=result.property.hp_percent;
			}
			else if(ag.hero.property.hp_percent < resultPercent){
				result=ag.hero;
				resultPercent=result.property.hp_percent;
			}
		}
		return result?[result]:[TargetFinder.getSoldier(groups[0])];
	}

	TargetFinder.hero_weak2=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var len=groups.length;
		var result=[];
		for(var i=0;i<len;++i){
			if(groups[i].hero){
				result.push(groups[i].hero);
			}
		}
		result.sort(function(a,b){
			if(a.hpPercent >=b.hpPercent){
				return 1;
			}
			else{
				return-1;
			}
		});
		if(result.length>2)result.length=2;
		return result;
	}

	TargetFinder.hero_weak3=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var len=groups.length;
		var result=[];
		for(var i=0;i<len;++i){
			if(groups[i].hero){
				result.push(groups[i].hero);
			}
		}
		result.sort(function(a,b){
			if(a.hpPercent >=b.hpPercent){
				return 1;
			}
			else{
				return-1;
			}
		});
		if(result.length>3)
			result.length=3;
		return result;
	}

	TargetFinder.hero_strong1=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var result;
		var resultPercent=0;
		var ag;
		for(var $each_ag in groups){
			ag=groups[$each_ag];
			if(!ag.hero)continue ;
			if(!result){
				result=ag.hero;
				resultPercent=result.property.hp_percent;
			}
			else if(ag.hero.property.hp_percent > resultPercent){
				result=ag.hero;
				resultPercent=result.property.hp_percent;
			}
		}
		return result?[result]:[TargetFinder.getSoldier(groups[0])];
	}

	TargetFinder.hero_strong2=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var len=groups.length;
		var result=[];
		for(var i=0;i<len;++i){
			if(groups[i].hero){
				result.push(groups[i].hero);
			}
		}
		result.sort(function(a,b){
			if(a.hpPercent >=b.hpPercent){
				return-1;
			}
			else{
				return 1;
			}
		});
		if(result.length>2)result.length=2;
		return result;
	}

	TargetFinder.hero_strong3=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var len=groups.length;
		var result=[];
		for(var i=0;i<len;++i){
			if(groups[i].hero){
				result.push(groups[i].hero);
			}
		}
		result.sort(function(a,b){
			if(a.hpPercent >=b.hpPercent){
				return-1;
			}
			else{
				return 1;
			}
		});
		if(result.length>3)
			result.length=3;
		return result;
	}

	TargetFinder.hero_self=function(attacker,target,type){
		return [attacker];
	}

	TargetFinder.hero_dist=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var len=groups.length;
		var result=[];
		for(var i=0;i<len;++i){
			if(groups[i].hero && groups[i].hero.property.isRemoteFighter){
				result.push(groups[i].hero);
			}
		}
		return result;
	}

	TargetFinder.hero_all=function(attacker,target,type){
		var result=[];
		var targets=TargetFinder.getGroup(type,attacker.property.camp);
		var ag;
		for(var $each_ag in targets){
			ag=targets[$each_ag];
			if(ag.hero)
				result.push(ag.hero);
			else
			result.push(ag.group[0]);
		}
		return result;
	}

	TargetFinder.team_weak=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var result;
		var resultPercent=0;
		var ag;
		for(var $each_ag in groups){
			ag=groups[$each_ag];
			if(!ag.hero)continue ;
			if(!result){
				result=ag;
				resultPercent=ag.hero.property.hp_percent;
			}
			else if(ag.hero.property.hp_percent < resultPercent){
				result=ag;
				resultPercent=ag.hero.property.hp_percent;
			}
		}
		return result?[result]:[groups[0]];
	}

	TargetFinder.getSoldier=function(ag){
		var fighter;
		for(var $each_fighter in ag.group){
			fighter=ag.group[$each_fighter];
			if(fighter && !fighter.isHero)return fighter;
		}
		return null;
	}

	TargetFinder.team_first=function(attacker,target,type){
		var targets=BattleContent.getRows(attacker.belongGroup.gridX);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result;
		var resultPt;
		targets.sort(sortTeam);
		function sortTeam (a,b){
			if (a.getTilePoint().y < b.getTilePoint().y){
				return-1;
			}
			return 1;
		}
		for (var i=0;i < targets.length;i++){
			testPT=targets[i].getTilePoint();
			if ((type==1 && targets[i].camp==attacker.belongGroup.camp)||
				(type==2 && targets[i].camp !=attacker.belongGroup.camp)){
				if (isFaceFront && testPT.y > ackPt.y){
					resultPt=testPT;
					result=targets[i];
				}
				else if (!isFaceFront && testPT.y < ackPt.y){
					resultPt=testPT;
					result=targets[i];
				}
			}
			else{
				break ;
			}
		}
		return result?[result]:null;
	}

	TargetFinder.team_last=function(attacker,target,type){
		var targets=BattleContent.getRows(attacker.belongGroup.gridX);
		var ackPt=attacker.belongGroup.getTilePoint();
		var testPT;
		var isFaceFront=attacker.isFaceFornt;
		var result;
		var resultPt;
		targets.sort(sortTeam);
		function sortTeam (a,b){
			if (a.getTilePoint().y < b.getTilePoint().y){
				return-1;
			}
			return 1;
		}
		for (var i=0;i < targets.length;i++){
			testPT=targets[i].getTilePoint();
			if ((type==1 && targets[i].camp==attacker.belongGroup.camp)||
				(type==2 && targets[i].camp !=attacker.belongGroup.camp)){
				if (isFaceFront && testPT.y < ackPt.y){
					resultPt=testPT;
					result=targets[i];
				}
				else if (!isFaceFront && testPT.y > ackPt.y){
					resultPt=testPT;
					result=targets[i];
				}
			}
			else{
				break ;
			}
		}
		return result?[result]:null;
	}

	TargetFinder.team_strong=function(attacker,target,type){
		var groups=TargetFinder.getGroup(type ,attacker.property.camp);
		var result;
		var resultPercent=0;
		var ag;
		for(var $each_ag in groups){
			ag=groups[$each_ag];
			if(!ag.hero)continue ;
			if(!result){
				result=ag;
				resultPercent=ag.hero.property.hp_percent;
			}
			else if(ag.hero.property.hp_percent > resultPercent){
				result=ag;
				resultPercent=ag.hero.property.hp_percent;
			}
		}
		return result?[result]:null;
	}

	TargetFinder.getRowFight=function(targets,row){
		(row===void 0)&& (row=1);
		var ag;
		var result=[];
		if (targets){
			for (var i=0;i < targets.length;i++){
				ag=targets[i];
				for (var j=0;j < row;j++){
					result=result.concat(ag.getRow(j));
				}
			}
		}
		return result;
	}

	TargetFinder.team1_near=function(attacker,target,type){
		var targets=TargetFinder.team_near(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_far=function(attacker,target,type){
		var targets=TargetFinder.team_far(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_string=function(attacker,target,type){
		var targets=TargetFinder.team_string(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_random1=function(attacker,target,type){
		var targets=TargetFinder.team_random1(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_random2=function(attacker,target,type){
		var targets=TargetFinder.team_random2(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_random3=function(attacker,target,type){
		var targets=TargetFinder.team_random3(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_weak=function(attacker,target,type){
		var targets=TargetFinder.team_weak(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_self=function(attacker,target,type){
		var targets=TargetFinder.team_self(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team1_all=function(attacker,target,type){
		var targets=TargetFinder.team_all(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,1);
		return result;
	}

	TargetFinder.team2_near=function(attacker,target,type){
		var targets=TargetFinder.team_near(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_far=function(attacker,target,type){
		var targets=TargetFinder.team_far(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_string=function(attacker,target,type){
		var targets=TargetFinder.team_string(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_random1=function(attacker,target,type){
		var targets=TargetFinder.team_random1(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_random2=function(attacker,target,type){
		var targets=TargetFinder.team_random2(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_random3=function(attacker,target,type){
		var targets=TargetFinder.team_random3(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_weak=function(attacker,target,type){
		var targets=TargetFinder.team_weak(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_self=function(attacker,target,type){
		var targets=TargetFinder.team_self(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.team2_all=function(attacker,target,type){
		var targets=TargetFinder.team_all(attacker,target,type);
		var result=TargetFinder.getRowFight(targets,2);
		return result;
	}

	TargetFinder.FIND_SELF=1;
	TargetFinder.FIND_ENEMY=2;
	return TargetFinder;
})()


//class battle.damage.DamageUnit
var DamageUnit=(function(){
	function DamageUnit(){
		this.id=NaN;
		this.childIndex=0;
		this.queue=null;
		this._destructed=false;
		this.type=0;
	}

	__class(DamageUnit,'battle.damage.DamageUnit');
	var __proto=DamageUnit.prototype;
	Laya.imps(__proto,{"framework.interfaces.IResuable":true})
	__proto.setProp=function(__params){}
	__proto.calc=function(){}
	__proto.renew=function(){
		this.destructed=false;
	}

	__proto.destruct=function(){
		if(this.destructed)return;
		this.destructed=true;
		this.queue=null;
		DamageUnitFactory.returnUnit(this.type,this);
	}

	__getset(0,__proto,'destructed',function(){
		return this._destructed;
		},function(value){
		this._destructed=value;
	});

	return DamageUnit;
})()


//class battle.damage.DamageQueue
var DamageQueue=(function(){
	function DamageQueue(){
		this._queue=null;
		this._dic=null;
		this._queue=[];
		this._dic=new Dictionary();
	}

	__class(DamageQueue,'battle.damage.DamageQueue');
	var __proto=DamageQueue.prototype;
	__proto.calc=function(){
		var len=this._queue.length;
		if(len<=0)return;
		var currentIndex=0;
		var unit;
		for(var i=0;i<len;++i){
			unit=this._queue[i];
			if(unit !=null){
				if(currentIndex !=i){
					this._queue[currentIndex]=unit;
					this._queue[i]=null;
				}
				unit.childIndex=currentIndex;
				unit.calc();
				currentIndex++;
			}
		}
		if(currentIndex !=i){
			len=this._queue.length;
			while(i < len)
			this._queue[currentIndex++]=this._queue[i++];
			this._queue.length=currentIndex;
		}
	}

	__proto.push=function(unit){
		unit.queue=this;
		unit.childIndex=this._queue.length;
		this._queue.push(unit);
		this._dic.set(unit.id ,unit);
	}

	__proto.remove=function(unit){
		framework.assert(this._queue.indexOf(unit)==unit.childIndex,"擦,神马情况,缓存的索引值和实际的不一致....");
		this._dic.remove(unit.id);
		if(unit.childIndex< this._queue.length)
			this._queue[unit.childIndex]=null;
	}

	__proto.getUnit=function(id){
		return this._dic.get(id);
	}

	__proto.clear=function(){
		for(var i=0;i< this._queue.length;++i){
			if(this._queue[i])this._queue[i].destruct();
		}
		this._queue.length=0;
		this._dic.clear();
	}

	return DamageQueue;
})()


//class battle.damage.DamageUnitFactory
var DamageUnitFactory=(function(){
	function DamageUnitFactory(){}
	__class(DamageUnitFactory,'battle.damage.DamageUnitFactory');
	DamageUnitFactory.create=function(type){
		var unit=Pool.getItemByClass("damageunit_"+type ,DamageUnitFactory.CLASS_MAP[type]);
		unit.renew();
		unit.id=++DamageUnitFactory.guid;
		unit.type=type;
		return unit;
	}

	DamageUnitFactory.returnUnit=function(type,unit){
		Pool.recover("damageunit_"+type,unit);
	}

	DamageUnitFactory.guid=0;
	DamageUnitFactory.TYPE_SKILL=1;
	DamageUnitFactory.TYPE_BUFF=2;
	DamageUnitFactory.TYPE_LORD_SKILL=3;
	__static(DamageUnitFactory,
	['CLASS_MAP',function(){return this.CLASS_MAP=new Dictionary();}
	]);
	DamageUnitFactory.__init$=function(){
		DamageUnitFactory.CLASS_MAP[1]=SkillDamageUnit;
		DamageUnitFactory.CLASS_MAP[2]=BuffDamageUnit;
		DamageUnitFactory.CLASS_MAP[3]=LordSkillDamageUnit;
	}

	return DamageUnitFactory;
})()


/**
*伤害计算
*@author fenglijun
*
*/
//class battle.damage.HurtJudge
var HurtJudge=(function(){
	function HurtJudge(){}
	__class(HurtJudge,'battle.damage.HurtJudge');
	HurtJudge.calc=function(attacker,beAttack,skill,result){ ///***
		if(attacker.camp==2 || (attacker.f_as_miss && skill.type !=3)){
			result.type=3;
			result.value=0;
			return;
		};
		var atkType=skill.effect_enemy.atk_type;
		if((beAttack.f_non_ph !=1 && atkType=="p")
			|| (beAttack.f_non_mh !=1 && atkType=="m")){
			result.type=5;
			result.value=0;
			return;
		};
		var normal=0;
		if(attacker.elementType=="soldier" && beAttack.elementType=="hero"){
			if(atkType=="m")
				normal=(attacker.f_atk_m *attacker.dmgrate_hero);
			else
			normal=(attacker.f_atk_p *attacker.dmgrate_hero);
		}
		else{
			var normalPercent=0.9+0.2 *WarringData.random.getNext();
			if(atkType=="m")
				normal=((attacker.f_atk_m-beAttack.f_def_m)*normalPercent)*(skill.effect_enemy.dmg_r);
			else
			normal=((attacker.f_atk_p-beAttack.f_def_p)*normalPercent)*(skill.effect_enemy.dmg_r);
		}
		if(normal< 0)normal=0;
		normal+=skill.effect_enemy.dmg_base;
		result.type=0;
		result.value=normal;
		framework.assert(!isNaN(result.value));
		if(skill.type==0){
			var crit=attacker.f_crit-beAttack.f_crit_r;
			if(crit <0)crit=0;
			var aegis=beAttack.f_aegis_r-attacker.f_aegis;
			if(aegis<0)aegis=0;
			var hit=beAttack.f_hit_r-attacker.f_hit;
			if(hit <0)hit=0;
			var normalConst=0;
			if(attacker.isHero)
				normalConst=SkillAtkParamsConfig.getHeroConst(attacker.lv);
			else
			normalConst=SkillAtkParamsConfig.getSoldierConst(attacker.lv ,attacker.grade);
			var total=crit+aegis+hit+normalConst;
			var critProbability=crit / total;
			var aegisProbability=critProbability+aegis / total;
			var hitProbability=aegisProbability+hit / total;
			var normalConstProbability=hitProbability+normalConst / total;
			var probability=WarringData.random.getNext();
			if(probability < critProbability){
				result.type=1;
				result.value=Math.floor(normal *attacker.crit_dmg);
			}
			else if(probability < aegisProbability){
				result.type=2;
				result.value=Math.floor(normal *0.5);
			}
			else if(probability < hitProbability){
				result.type=3;
				result.value=0;
				return;
			}
		}
		framework.assert(!isNaN(result.value));
		if(skill.effect_enemy.dmg_multiple >0 && WarringData.random.getNext()<=skill.effect_enemy.doulble_rate){
			result.value *=skill.effect_enemy.dmg_multiple;
		}
		framework.assert(!isNaN(result.value));
		if(beAttack.melee_dmg !=1){
			if(skill.type==0 && !attacker.isRemoteFighter){
				result.value *=beAttack.melee_dmg;
			}
		}
		framework.assert(!isNaN(result.value));
		if(beAttack.dist_dmg !=1){
			if(skill.type==0 && attacker.isRemoteFighter){
				result.value *=beAttack.dist_dmg;
			}
		}
		framework.assert(!isNaN(result.value));
		if(attacker.elementType=="soldier" && beAttack.elementType=="soldier"){
			var dmg_v=attacker.feature[HurtJudge.featureAddKey[beAttack.soldierConfig.type]]-beAttack.feature[HurtJudge.featureRduKey[attacker.soldierConfig.type]];
			if(dmg_v !=0){
				result.value+=result.value *dmg_v;
			}
		}
		framework.assert(!isNaN(result.value));
		if(attacker.elementType=="soldier"){
			if(beAttack.elementType=="hero")
				result.value+=attacker.f_dmghero;
			else
			result.value+=attacker.f_dmgelse;
		}
		else{
			result.value+=10 *attacker.lv;
		}
		framework.assert(!isNaN(result.value));
		if(attacker.f_dmg !=0){
			result.value *=attacker.f_dmg;
		}
		framework.assert(!isNaN(result.value));
		if(beAttack.f_mh !=1 && atkType=="m"){
			result.value *=beAttack.f_mh;
			if(result.value<0)result.value=0;
		}
		else if(beAttack.f_ph !=1 && atkType=="p"){
			result.value *=beAttack.f_ph;
			if(result.value<0)result.value=0;
		}
		framework.assert(!isNaN(result.value));
		var lordObj=Datas.battleData.lord[attacker.camp];
		result.value+=result.value *lordObj.inspire_num;
	}

	__static(HurtJudge,
	['featureAddKey',function(){return this.featureAddKey=["","dmgAdd_1","dmgAdd_2","dmgAdd_3","dmgAdd_4","dmgAdd_5"];},'featureRduKey',function(){return this.featureRduKey=["","dmgRdu_1","dmgRdu_2","dmgRdu_3","dmgRdu_4","dmgRdu_5"];}
	]);
	return HurtJudge;
})()


//class battle.damage.LordSkillHurtJudge
var LordSkillHurtJudge=(function(){
	function LordSkillHurtJudge(){}
	__class(LordSkillHurtJudge,'battle.damage.LordSkillHurtJudge');
	LordSkillHurtJudge.calc=function(skill,target,result){
		var effect=skill.effect_enemy;
		var t_prop=target.property;
		if((t_prop.f_non_ph !=1 && effect.atk_type=="p")
			|| (t_prop.f_non_mh !=1 && effect.atk_type=="m")){
			result.type=5;
			result.value=0;
			return;
		}
		result.type=0;
		var lordProp=Datas.battleData.lord["1"].lord_property;
		if(effect.atk_type=="p"){
			result.value=(lordProp.atk_p-t_prop.f_def_p)*effect.dmg_r;
		}
		else{
			result.value=(lordProp.atk_m-t_prop.f_def_m)*effect.dmg_r;
		}
		if(result.value <0)
			result.value=0;
		result.value+=effect.dmg_base;
		if((skill.effect_enemy.premise_1 && target.curBuffState&& target.curBuffState.buffState==skill.effect_enemy.premise_1)
			|| (skill.effect_enemy.premise_2 && target.curBuffState&& target.curBuffState.buffState==skill.effect_enemy.premise_2)){
			result.value *=1.5;
		}
		if(effect.atk_type=="m"){
			if(t_prop.f_mh !=1){
				result.value *=t_prop.f_mh;
				if(result.value<0)result.value=0;
			}
		}
		else{
			if(t_prop.f_ph !=1){
				result.value *=t_prop.f_ph;
				if(result.value<0)result.value=0;
			}
		}
	}

	return LordSkillHurtJudge;
})()


//class battle.effect.BuffEffect
var BuffEffect=(function(){
	function BuffEffect(){}
	__class(BuffEffect,'battle.effect.BuffEffect');
	BuffEffect.add=function(target,buff){
		var state=buff.c.state;
		if(state=="stone"){
		}
		else if(state=="ice"){
		}
		else if(state=="float"){
		}
		else{
			var swfPlayer=PlayerUtil.getBattleSwfPlayer(UrlManager.getBuffModeUrl("buff"),null,buff.c.buff_id+"/stand",0);
			target.buffSwfPlayers[buff.c.display-1]=swfPlayer;
			swfPlayer.x=0;
			swfPlayer.y=int(-(target.isHero?120:70)*BuffEffect.BUFF_OFFSETY_MAP[buff.c.display]);
			target.addChildAt(swfPlayer ,buff.c.display==3?0:target.numChildren);
		}
	}

	BuffEffect.remove=function(target,buff){
		var state=buff.c.state;
		if(state=="stone"){
			target.bodySwf.filters=null;
		}
		else if(state=="ice"){
			target.bodySwf.filters=null;
		}
		else if(state=="float"){
		}
		else{
			var swfPlayer=target.buffSwfPlayers[buff.c.display-1];
			target.buffSwfPlayers[buff.c.display-1]=null;
			if(!swfPlayer.destructed)
				PlayerUtil.returnBattleSwfPlayer(swfPlayer);
		}
	}

	__static(BuffEffect,
	['BUFF_OFFSETY_MAP',function(){return this.BUFF_OFFSETY_MAP=[0,1,0.3,0];},'BUFF_FLOAT_POINT',function(){return this.BUFF_FLOAT_POINT=new Dictionary();}
	]);
	return BuffEffect;
})()


//class battle.entitys.FighterFactory
var FighterFactory=(function(){
	function FighterFactory(){}
	__class(FighterFactory,'battle.entitys.FighterFactory');
	FighterFactory.newFighter=function(type){
		if(type=="soldier")
			return Pool.getItemByClass("sign_SoldierFighter",SoldierFighter);
		else if(type=="hero")
		return Pool.getItemByClass("sign_HeroFighter",HeroFighter);
		return null;
	}

	FighterFactory.returnFighter=function(fighter){
		FighterFactory.returnedList.push(fighter);
	}

	FighterFactory.returnToObjectPool=function(){
		var len=FighterFactory.returnedList.length;
		var type;
		var fighter;
		for(var i=0;i<len;++i){
			fighter=FighterFactory.returnedList[i];
			if(!fighter.destructed){
				type=fighter.type;
				fighter.destruct();
				if(type=="soldier")
					Pool.recover("sign_SoldierFighter",fighter);
				else if(type=="hero")
				Pool.recover("sign_HeroFighter",fighter);
			}
		}
		FighterFactory.returnedList.length=0;
	}

	FighterFactory.returnArmygroup=function(ag){
		FighterFactory.armyGroupList.push(ag);
	}

	FighterFactory.returnAGToObjectPool=function(){
		var len=FighterFactory.armyGroupList.length;
		var ag;
		for(var i=0;i<len;++i){
			ag=FighterFactory.armyGroupList[i];
			if(!ag.destructed){
				ag.destruct();
				Pool.recover("sign_ArmyGroup" ,ag);
			}
		}
		FighterFactory.armyGroupList.length=0;
	}

	FighterFactory.returnedList=[];
	FighterFactory.armyGroupList=[];
	return FighterFactory;
})()


/**
*战斗音效管理
*@author MLL
*
*/
//class battle.sound.BattleSound
var BattleSound=(function(){
	function BattleSound(){
		this.CHECKTIME=2;
		/**
		*正在战斗的军团数大于这个值时不播放移动音效
		*/
		this.FIGHT_NUM=4;
		/**
		*群攻数量
		*/
		this.GROUP_NUM=14;
		/**移动中的兵种 */
		this.moveSoldier=null;
		this.waitFightSound=null;
		this.waitBeAtkSound=null;
		this.waitDie=null;
		this.soundDic=null;
		this.lastPlayTime=null;
		this._canPlay=true;
		this.waitHeroSound=null;
		this.soundManager=null;
		this.moveSoldier={};
		this.lastPlayTime={};
		this.waitBeAtkSound={};
		this.waitFightSound={};
		this.waitHeroSound={};
		this.waitDie={};
		this.soundDic={};
	}

	__class(BattleSound,'battle.sound.BattleSound');
	var __proto=BattleSound.prototype;
	__proto.clean=function(){
		this.moveSoldier={};
		this.lastPlayTime={};
		this.waitBeAtkSound={};
		this.waitFightSound={};
		this.waitHeroSound={};
		this.waitDie={};
		this.soundDic={};
	}

	__proto.playSoldierSound=function(soundCfg,handler){
		if (!this._canPlay){
			return;
		};
		var soundC=shell.utils.playSound(soundCfg.url,"soldier",1,handler);
		if(soundC)soundC.stopClear=false;
	}

	/**
	*战斗对象改变状态
	*@param fighter
	*/
	__proto.changeState=function(fighter){
		if (!fighter.isHero){
			try{
				var fightId=fighter.property.elementId;
				switch(fighter.bodystate){
					case "run":{
							this.startMove(fighter.property.soldierConfig.type);
							break ;
						}
					case "die":{
							this.die(fighter);
							break ;
						}
					default :{
							this.stopMove(fighter.property.soldierConfig.type);
							break ;
						}
					}
			}
			catch(e){
			}
		}
	}

	/**
	*某种类型的兵种开始移动
	*@param id
	*
	*/
	__proto.startMove=function(soldierType){
		var soundUrl="move_"+soldierType.toString();
		if(!this.moveSoldier[soundUrl]){
			this.moveSoldier[soundUrl]=1;
			var soundConfig=SoundConfig.getSoundConfig(soundUrl);
			this.playMoveSound(soundConfig);
		}
		else{
			++this.moveSoldier[soundUrl];
		}
	}

	// }
	__proto.stopMovingSound=function(){
		for(var url in this.moveSoldier){
			var soundConfig=SoundConfig.getSoundConfig(url);
			if(soundConfig){
				shell.utils.stopSound(soundConfig.url,"soldier");
			}
		}
	}

	/**
	*有对象停止移动
	*@param id
	*/
	__proto.stopMove=function(soldierType){
		var soundUrl="move_"+soldierType.toString();
		if(this.moveSoldier[soundUrl]){
			--this.moveSoldier[soundUrl];
			if(this.moveSoldier[soundUrl]==0){
			}
		}
	}

	/**
	*播放移动音效
	*@param soundCfg
	*/
	__proto.playMoveSound=function(soundCfg){
		if (this.moveSoldier.hasOwnProperty(soundCfg.id)&& this.moveSoldier[soundCfg.id] !=0){
			var vec=BattleContent.allArmyGroups;
			var num=0;
			var i=0;
			var len=vec.length;
			for(i=0;i<len;i++){
				if (((vec[i].state)instanceof battle.control.FSM.FightState )){
					num++;
					if (num>this.FIGHT_NUM){
						return;
					}
				}
			}
			this.playSoldierSound(soundCfg,Handler.create(this,this.playMoveSound,[soundCfg]));
		}
	}

	/**
	*检测声音是否需要播放
	*/
	__proto.checkSound=function(){
		var s;
		var soundConfig;
		var soundId;
		if (BattleUtil.currentFrame%3==0){
			for(s in this.waitFightSound){
				if (s=="groupAttack" && WarringData.totalSoldierCount-WarringData.totalSoldierType[4]-WarringData.totalSoldierType[2]>=this.GROUP_NUM){
					soundId=s;
				}
				else if (s !="groupAttack"){
					soundId="attack_"+s;
				}
				if (soundId){
					soundConfig=SoundConfig.getSoundConfig(soundId);
					if (!this.lastPlayTime[soundId] || (BattleUtil.currentFrame-this.lastPlayTime[soundId] >=soundConfig.intervals / BattleUtil.interval)){
						this.lastPlayTime[soundId]=BattleUtil.currentFrame;
						this.playSoldierSound(soundConfig);
					}
				}
				delete this.waitFightSound[s];
			}
		}
		else if (BattleUtil.currentFrame%2==0){
			for(s in this.waitBeAtkSound){
				s=Math.random()>0.3?s:"common";
				soundId="beAtk_"+s;
				soundConfig=SoundConfig.getSoundConfig(soundId);
				if (soundConfig){
					if (!this.lastPlayTime[soundId] || (BattleUtil.currentFrame-this.lastPlayTime[soundId] >=soundConfig.intervals / BattleUtil.interval)){
						this.lastPlayTime[soundId]=BattleUtil.currentFrame;
						this.playSoldierSound(soundConfig);
					}
				}
				delete this.waitBeAtkSound[s];
			}
			for (s in this.waitDie){
				soundId="die_"+s;
				soundConfig=SoundConfig.getSoundConfig(soundId);
				if (!this.lastPlayTime[soundId] || (BattleUtil.currentFrame-this.lastPlayTime[soundId] >=soundConfig.intervals / BattleUtil.interval)){
					this.lastPlayTime[soundId]=BattleUtil.currentFrame;
					this.playSoldierSound(soundConfig);
				}
				delete this.waitDie[s];
			}
		}
		if (this.waitHeroSound[BattleUtil.currentFrame]){
			var i=0;
			var len=this.waitHeroSound[BattleUtil.currentFrame].length;
			for (i=0;i < len;i++){
				shell.utils.playSound(this.waitHeroSound[BattleUtil.currentFrame][i],"battleHero");
			}
			delete this.waitHeroSound[BattleUtil.currentFrame];
		}
	}

	/**
	*进攻声音
	*@param id
	*/
	__proto.addFight=function(fighter){
		if (!fighter.isHero){
			var soldierType=fighter.property.soldierConfig.type;
			this.waitFightSound[soldierType]=1;
			if (soldierType !=4 && soldierType !=2){
				this.waitFightSound["groupAttack"]=1;
			}
		}
	}

	__proto.beAtkBySoldier=function(fighter){
		if (!fighter.isHero){
			var soldierType=fighter.property.soldierConfig.type;
			this.waitBeAtkSound[soldierType]=true;
		}
	}

	__proto.die=function(fighter){
		if (!fighter.isHero){
			var s;
			if (fighter.property.soldierConfig.type==3){
				s="horse";
				this.waitDie[s]=true;
			}
		}
	}

	__proto.heroAttack=function(hero,type,step){
		var soundId;
		var heroId=hero.property.elementId;
		var soundInfo=SoundConfig.getSoundHero(heroId,type);
		if (soundInfo && soundInfo[step]){
			if (soundInfo[step].delay!=0){
				if(!this.waitHeroSound[BattleUtil.currentFrame+soundInfo[step].delay])this.waitHeroSound[BattleUtil.currentFrame+soundInfo[step].delay]=[];
				this.waitHeroSound[BattleUtil.currentFrame+soundInfo[step].delay].push(soundInfo[step].name);
			}
			else{
				soundId=soundInfo[step].name;
			}
		}
		if (soundId){
			var soundC=shell.utils.playSound(soundId,"battleHero");
			if(soundC)soundC.stopClear=false;
		}
	}

	__proto.stop=function(){
		this._canPlay=false;
	}

	__proto.play=function(){
		this._canPlay=true;
	}

	__getset(1,BattleSound,'ins',function(){
		if(!BattleSound._instance){
			BattleSound._instance=new BattleSound();
		}
		return BattleSound._instance;
	});

	BattleSound._instance=null;
	return BattleSound;
})()


//class battle.step.AttackStep
var AttackStep=(function(){
	function AttackStep(){
		this.guid=0;
		this._attacker=null;
		this._useSkill=null;
		this._targetList=null;
		this.isDestroy=true;
		this.warId=0;
		this._skillType=0;
		this._index=0;
		this._masterCamp=0;
		this._masterName=null;
		this._masterIsHero=false;
		this._dir=0;
		this._isFaceFront=false;
		this._stepPool=null;
		this._stepPool=[this.step1,this.step2,this.step3,this.step4,this.step5]
	}

	__class(AttackStep,'battle.step.AttackStep');
	var __proto=AttackStep.prototype;
	__proto.renew=function(){
		this.isDestroy=false;
	}

	__proto.destroy=function(){
		if(!this.isDestroy){
			this.isDestroy=true;
			this._targetList=null;
			this.isDestroy=true;
			this._useSkill=null;
			this._attacker=null;
			this._index=-1;
			this.warId=0;
			AttackStep.returnToPool(this);
		}
	}

	__proto.attack=function(attacker,useSkill,targetList){
		var damageUnit=DamageUnitFactory.create(1); ///***
		damageUnit.setProp(attacker,useSkill,targetList);
		BattleWorld.getInstance().normalDamageQueue.push(damageUnit);
		if(WarringData.isVerification || WarringData.isSkipMode)return;
		this.warId=WarringData.guid;
		this._attacker=attacker;
		this._index=-1;
		this._skillType=useSkill.type;
		this._useSkill=useSkill.local;
		this._targetList=targetList;
		this._masterCamp=this._attacker.belongGroup.camp;
		this._masterName=this._attacker.nickName;
		this._masterIsHero=this._attacker.isHero;
		this._dir=this._attacker.getSwfPlayerDir();
		this._isFaceFront=this._attacker.isFaceFornt;
		this.go_ahead();
	}

	__proto.go_ahead=function(keyframe){
		if(this.warId==WarringData.guid){
			this._index++;
			if(this._index <=3){
				if(this._index==3){
					if(this._useSkill.shake)
						BattleScenePanel.instance.shake(500,15);
				}
				this._stepPool[this._index].call(this);
			}
			if(this._index==3)
				this.destroy();
		}
		else{
			this.destroy();
		}
	}

	__proto.step1=function(){
		if(this._useSkill.atk_step1){
			this.playMotion(this._useSkill.atk_step1 ,true);
			if(this._useSkill.atk_step1_s)
				this.playMotion(this._useSkill.atk_step1_s ,false);
		}
		else
		this.go_ahead();
	}

	__proto.step2=function(){
		if(this._useSkill.atk_step2){
			if (this.attacker.isHero){
				BattleSound.ins.heroAttack(this.attacker,this._skillType,"tra");
			};
			var effectConfig=EffectConfig.table[this._useSkill.atk_step2];
			var effect=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(this._useSkill.atk_step2),
			null,"",effectConfig.multi_dir>0?this._dir:0 ,null,"traEffect");
			BattleWorld.getInstance().addEffect(effect ,effectConfig.layer>0?4:2);
			var trajectory=TrajectoryFactory.create(effectConfig.traType);
			trajectory.setPropertys(this._attacker,this._targetList[0],effect,effectConfig ,this._useSkill);
			trajectory.run(this,this.onTrajectoryComplete);
		}
		else
		this.go_ahead();
	}

	__proto.onTrajectoryComplete=function(trajectory){
		this.go_ahead();
	}

	__proto.step3=function(){
		if(this._useSkill.atk_step3){
			var sp;
			for(var $each_sp in this._targetList){
				sp=this._targetList[$each_sp];
				this.playMotion(this._useSkill.atk_step3 ,true,sp);
				if(this._useSkill.atk_step3_s)
					this.playMotion(this._useSkill.atk_step3_s ,false ,sp);
			}
		}
		else
		this.go_ahead();
	}

	__proto.step4=function(){
		if(this._useSkill.atk_step4){
			var sp;
			for(var $each_sp in this._targetList){
				sp=this._targetList[$each_sp];
				this.playMotion(this._useSkill.atk_step4 ,true,sp);
				if(this._useSkill.atk_step4_s)
					this.playMotion(this._useSkill.atk_step4_s ,false ,sp);
			}
		}
		else
		this.go_ahead();
	}

	__proto.step5=function(){
		var _hitEffectMap=AttackStep.hitEffectMap;
		var effect=this._useSkill.atk_type;
		if (effect){
			var beAttackSwf;
			var sp;
			for(var $each_sp in this._targetList){
				sp=this._targetList[$each_sp];
				if(!_hitEffectMap[sp]){
					_hitEffectMap[sp]={};
				}
				beAttackSwf=_hitEffectMap[sp][effect];
				if(!beAttackSwf){
					var effectConfig=EffectConfig.table[effect];
					var dir=0;
					if(effectConfig.multi_dir)
						dir=this._isFaceFront?1:3;
					else
					dir=0;
					beAttackSwf=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(effect),null,"",dir ,null,"common");
					beAttackSwf.loop=false;
					beAttackSwf.param=sp;
					beAttackSwf.onFrameEnd(null,function(swf){
						_hitEffectMap[swf.param][effect]=null;
						BattleWorld.getInstance().removeEffect(swf);
						PlayerUtil.returnBattleSwfPlayer(swf);
					},[beAttackSwf]);
					_hitEffectMap[sp][effect]=beAttackSwf;
					BattleWorld.getInstance().addEffect(beAttackSwf,4);
				}
				else{
					if(!beAttackSwf.destructed)
						beAttackSwf.changeFrame(0);
				}
				beAttackSwf.x=sp.centerX;
				if((sp instanceof battle.entitys.HeroFighter ))
					beAttackSwf.y=sp.centerY-45;
				else if((sp instanceof battle.entitys.SoldierFighter ))
				beAttackSwf.y=sp.centerY-25;
				else
				beAttackSwf.y=sp.centerY;
			}
		}
	}

	__proto.playMotion=function(effect,goahead,target,onFrameEnd){
		var effectConfig=EffectConfig.table[effect];
		if(effectConfig.effect>0){
			var stepEffect=StepEffectFactory.create(effectConfig.effect);
			stepEffect.setProp(this._attacker ,target,effect,this,this.go_ahead);
			stepEffect.run();
		}
		else{
			var movie=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(effect),null,
			"",effectConfig.multi_dir >0 ? this._dir:0 ,null,"attack_e");
			var x=0,y=0;
			var pt;
			if(!target || effectConfig.showTarget==1){
				pt=this._attacker.centerPoint;
			}
			else{
				pt=target.centerPoint;
			}
			x=pt.x;
			y=pt.y;
			if(effectConfig.offsetx)x+=effectConfig.offsetx;
			if(effectConfig.offsety)y+=effectConfig.offsety;
			if(effectConfig.rotation){
				if(this._isFaceFront){
					movie.rotation=150;
					x+=effectConfig.offset_front.x-256;
					y+=effectConfig.offset_front.y-256;
				}
				else{
					movie.rotation=-30;
					x+=effectConfig.offset_back.x-256;
					y+=effectConfig.offset_back.y-256;
				}
			}
			movie.x=x;
			movie.y=y;
			movie.loop=false;
			movie.onFrameEnd(null,function(swf){
				BattleWorld.getInstance().removeEffect(swf);
				PlayerUtil.returnBattleSwfPlayer(swf);
				onFrameEnd && onFrameEnd();
			},[movie]);
			if(goahead){
				movie.setKeyFrameCallback(effectConfig.keyframe ,this,this.go_ahead);
			}
			BattleWorld.getInstance().addEffect(movie,effectConfig.layer>0?4:2);
		}
	}

	__getset(0,__proto,'attacker',function(){
		return this._attacker;
	});

	AttackStep.newAttackStep=function(){
		var inst;
		if(AttackStep.pool.length>0){
			inst=AttackStep.pool.pop();
			inst.renew();
			return inst;
		}
		else{
			inst=new AttackStep();
			return inst;
		}
	}

	AttackStep.initPool=function(){
		if(AttackStep.pool.length<=0){
			for(var i=0;i<500;++i)
			AttackStep.pool.push(new AttackStep());
		}
	}

	AttackStep.returnToPool=function(step){
		AttackStep.tempPool.push(step);
		if(AttackStep.tempPool.length>500){
			var temp=AttackStep.tempPool[AttackStep.tempPoolIndex];
			AttackStep.tempPool[AttackStep.tempPoolIndex]=null;
			AttackStep.tempPoolIndex++;
			AttackStep.pool.push(temp);
		}
	}

	AttackStep.reset=function(){
		AttackStep.tempPoolIndex=0;
		for(var i=0,len=AttackStep.tempPool.length;i<len;++i){
			if(AttackStep.tempPool[i])
				AttackStep.pool.push(AttackStep.tempPool[i]);
		}
		AttackStep.tempPool.length=0;
		if(AttackStep.pool.length> 500)
			AttackStep.pool.splice(500,AttackStep.pool.length-500);
		AttackStep.hitEffectMap=new Dictionary();
	}

	AttackStep.pool=[];
	AttackStep.tempPool=[];
	AttackStep.MAX=500;
	AttackStep.tempPoolIndex=0;
	AttackStep.GUID_CREATOR=0;
	__static(AttackStep,
	['hitEffectMap',function(){return this.hitEffectMap=new Dictionary();}
	]);
	return AttackStep;
})()


//class battle.step.effects.BaseStepEffect
var BaseStepEffect=(function(){
	function BaseStepEffect(){
		this._onComplete=null;
		this._master=null;
		this._target=null;
		this._effect=null;
		this._caller=null;
	}

	__class(BaseStepEffect,'battle.step.effects.BaseStepEffect');
	var __proto=BaseStepEffect.prototype;
	__proto.setProp=function(master,target,effect,caller,onComplete){
		this._caller=caller;
		this._onComplete=onComplete;
		this._master=master;
		this._target=target;
		this._effect=effect;
	}

	__proto.run=function(){}
	__proto.destory=function(){
		this._caller=null;
		this._onComplete=null;
		this._master=null;
		this._target=null;
		this._effect=null;
	}

	return BaseStepEffect;
})()


//class battle.step.effects.StepEffectFactory
var StepEffectFactory=(function(){
	function StepEffectFactory(){}
	__class(StepEffectFactory,'battle.step.effects.StepEffectFactory');
	StepEffectFactory.create=function(type){
		var cls=StepEffectFactory.pool [type];
		return new cls();
	}

	StepEffectFactory.SLASH=1;
	StepEffectFactory.DRAGON_FIRE=2;
	__static(StepEffectFactory,
	['pool',function(){return this.pool=[null,SlashStepEffect,DragonFireEffect];}
	]);
	return StepEffectFactory;
})()


//class battle.step.trajectory.BaseTrajectory
var BaseTrajectory=(function(){
	function BaseTrajectory(){
		this._master=null;
		this._target=null;
		this._trajectory=null;
		this._effectConfig=null;
		this._onComplete=null;
		this._speed=0;
		this._skillObj=null;
		this._caller=null;
	}

	__class(BaseTrajectory,'battle.step.trajectory.BaseTrajectory');
	var __proto=BaseTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.setPropertys=function(master,target,trajectoryDisplayObject,effectConfig,skillObj){
		this._master=master;
		this._target=target;
		this._trajectory=trajectoryDisplayObject;
		this._effectConfig=effectConfig;
		this._skillObj=skillObj;
		this._speed=skillObj.speed;
	}

	__proto.run=function(caller,onComplete){
		this._caller=caller;
		this._onComplete=onComplete;
	}

	__proto.renew=function(){}
	__proto.destroy=function(){
		if((this._trajectory instanceof framework.mvc.view.player.BattleSwfPlayer )){
			if(!(this._trajectory).destructed)
				PlayerUtil.returnBattleSwfPlayer((this._trajectory));
		}
		this._effectConfig && TrajectoryFactory.recover(this._effectConfig.traType ,this);
		this._trajectory=null;
		this._master=null;
		this._target=null;
		this._onComplete=null;
		this._caller=null;
		this._effectConfig=null;
	}

	__getset(0,__proto,'speed',function(){
		return this._speed>0?this._speed:1000;
	});

	__getset(0,__proto,'trajectory',function(){
		return this._trajectory;
		},function(value){
	});

	__getset(0,__proto,'master',function(){
		return this._master;
		},function(value){
	});

	return BaseTrajectory;
})()


//class battle.step.trajectory.TrajectoryFactory
var TrajectoryFactory=(function(){
	function TrajectoryFactory(){}
	__class(TrajectoryFactory,'battle.step.trajectory.TrajectoryFactory');
	TrajectoryFactory.create=function(type){
		var result=Pool.getItemByClass("Trajectory"+type ,TrajectoryFactory.pool[type]);
		result.renew();
		return result;
	}

	TrajectoryFactory.recover=function(type,item){
		Pool.recover("Trajectory"+type ,item);
	}

	TrajectoryFactory.Normal=1;
	TrajectoryFactory.Arrow=2;
	TrajectoryFactory.IceThorn=3;
	TrajectoryFactory.FireMaster=4;
	TrajectoryFactory.Downfall=5;
	TrajectoryFactory.FlyMore=6;
	TrajectoryFactory.IceArrow=7;
	__static(TrajectoryFactory,
	['pool',function(){return this.pool=[null,
		MagicBallTrajectory,
		ArrowTrajectory,
		IceThornTrajectory,
		FireMasterTrajectory,
		DownfallTrajectory,
		FlyMoreTrajectory,
		IceArrowTrajectory];}
	]);
	return TrajectoryFactory;
})()


//class battle.struct.ArmyGroupProperty
var ArmyGroupProperty=(function(){
	function ArmyGroupProperty(){
		this.info=null;
		this.hp=0;
		this.f_hp=0;
		this.f_hp_shield=0;
	}

	__class(ArmyGroupProperty,'battle.struct.ArmyGroupProperty');
	return ArmyGroupProperty;
})()


/**
*buff 负责对目标添加和减少值
*@author fenglijun
*
*/
//class battle.struct.Buff
var Buff=(function(){
	function Buff(buffIdLv,target){
		this.guid=0;
		this.c=null;
		this.buffIdLv=null;
		this.buffId=null;
		this.target=null;
		this.e_values=null;
		this.guid=++Buff.CreateCount;
		this.buffIdLv=buffIdLv;
		this.c=BuffConfig.getBuffByIdLv(buffIdLv);
		this.buffId=this.c.buff_id;
		this.target=target;
	}

	__class(Buff,'battle.struct.Buff');
	var __proto=Buff.prototype;
	__proto.valid=function(){
		var t_prop=this.target.property;
		if(t_prop.f_hp<=0)return;
		var e_keys=this.c.effectKeys;
		var _key;
		this.e_values=__newvec(e_keys.length);
		for(var j=0;j<e_keys.length;++j){
			_key=e_keys[j];
			this.e_values[j]=0;
			if(Math.abs(this.c[_key])>=10){
				this.e_values[j]+=this.c[_key];
			}
			else{
				this.e_values[j]+=t_prop[_key] *this.c[_key];
			}
			if(_key=="hp"){
				t_prop.updateHp(this.e_values[j]);
				if(this.c.interval){
					BattleUtil.showDamage(this.target,"",0,this.e_values[j],this.e_values[j]<0?0:1);
				}
			}
			else{
				t_prop["f_"+_key]+=this.e_values[j];
			}
			framework.assert(!isNaN(this.e_values[j]));
		}
		if(!this.c.attacked_react)
			this.target.flag_attacked_react(1);
		if(this.c.break_act)
			this.target.flag_break_act(1);
		if(!this.c.move)
			this.target.flag_move(1);
		if(!this.c.skill)
			this.target.flag_noskill(1);
		if(!this.c.attack)
			this.target.flag_attack(1);
	}

	__proto.invalid=function(){
		var t_prop=this.target.property;
		if(t_prop.f_hp<=0)return;
		var e_keys=this.c.effectKeys;
		var _key;
		var len=e_keys.length;
		for(var j=0;j<len;++j){
			_key=e_keys[j];
			if(!this.c.interval){
				t_prop["f_"+_key]-=this.e_values[j];
			}
		}
		if(!this.c.attacked_react)
			this.target.flag_attacked_react(-1);
		if(this.c.break_act)
			this.target.flag_break_act(-1);
		if(!this.c.move)
			this.target.flag_move(-1);
		if(!this.c.skill)
			this.target.flag_noskill(-1);
		if(!this.c.attack)
			this.target.flag_attack(-1);
	}

	Buff.CreateCount=0;
	return Buff;
})()


/**
*buff影响战斗逻辑的状态
*@author fenglijun
*
*/
//class battle.struct.BuffStatus
var BuffStatus=(function(){
	function BuffStatus(){
		/**是否播放受击动作 >0为不播放**/
		this.attacked_react=0;
		/**是否可以移动 >0为不能移动**/
		this.move=0;
		/**是否打断技能>0为打断**/
		this.break_act=0;
		/**不能使用技能,除普通攻击外>0不能使用**/
		this.skill=0;
		/**是否可以普通攻击 >0不能使用**/
		this.attack=0;
	}

	__class(BuffStatus,'battle.struct.BuffStatus');
	var __proto=BuffStatus.prototype;
	__proto.renew=function(){
		this.attacked_react=this.move=this.break_act=this.skill=this.attack=0;
	}

	return BuffStatus;
})()


/**
*战斗单位属性
*@author fenglijun
*
*/
//class battle.struct.FighterProperty
var FighterProperty=(function(){
	function FighterProperty(){
		this.index=0;
		this.pos=0;
		//军团中位置
		this.team_pos=null;
		//军团中位置 字符串,对应服务器
		this.elementId=null;
		this.elementType=null;
		//英雄或士兵
		this.name=null;
		this.belongHeroId=null;
		this.belongGroupId=0;
		this.belongGroupProp=null;
		this.camp=0;
		this.status=0;
		//buff状态
		this.lv=1;
		this.grade=0;
		//等阶 士兵属性
		this.military_lv=0;
		this.isHero=false;
		this.mstar=0;
		// public var buffs:Vector.<Buff>;
		this.buffState=null;
		this.noskillTime=0;
		this.id=null;
		/**统率**/
		this.cmd=0;
		/**力量**/
		this.str=0;
		/**智力**/
		this.int_=0;
		/**防御**/
		this.def=0;
		/**体质**/
		this.con=0;
		/**物理攻击**/
		this.atk_p=0;
		/**物理防御**/
		this.def_p=0;
		/**魔法攻击**/
		this.atk_m=0;
		/**魔法防御**/
		this.def_m=0;
		/**
		*当前血量，就是服务器回来的hp,因hp另有用，hp强制==hp_max 所以增加此字段
		*/
		this.cur_hp=0;
		/**生命**/
		this.hp=0;
		/**最大生命**/
		this.hp_max=0;
		/**暴击**/
		this.crit=0;
		/**抗暴击**/
		this.crit_r=0;
		/**暴击伤害**/
		this.crit_dmg=1;
		/**格挡**/
		this.aegis=0;
		/**破格挡**/
		this.aegis_r=0;
		/**闪避**/
		this.hit_r=0;
		/**命中**/
		this.hit=0;
		/**攻击间隔**/
		this.spd_a=NaN;
		/**移动速度**/
		this.spd_m=NaN;
		/**攻击距离**/
		this.ran_h=0;
		/**攻击路线**/
		this.ran_v=0;
		/**弹道**/
		this.tra=0;
		/**攻击类型**/
		this.atk_type=null;
		/**技能**/
		this.sk1id=0;
		/**技能**/
		this.sk2id=0;
		/**技能**/
		this.sk3id=0;
		/**技能**/
		this.sk4id=0;
		/**怒气**/
		this.anger=0;
		this.anger_max=0;
		/**对敌伤害**/
		this.dmg=1;
		/**受到物理伤害**/
		this.ph=1;
		/**受到法术伤害**/
		this.mh=1;
		/**吸血比例**/
		this.vampire=1;
		/**吸收伤害比例**/
		this.ab=1;
		/**免疫**/
		this.inbuff=1;
		/**除大招外miss**/
		this.as_miss=1;
		/**近战普通攻击伤害**/
		this.melee_dmg=1;
		/**远程普通攻击伤害**/
		this.dist_dmg=1;
		this.dmghero=0;
		this.f_dmghero=0;
		this.dmgelse=0;
		this.f_dmgelse=0;
		this.heroConfig=null;
		this.soldierConfig=null;
		/**物理攻击**/
		this.f_atk_p=0;
		/**物理防御**/
		this.f_def_p=0;
		/**魔法攻击**/
		this.f_atk_m=0;
		/**魔法防御**/
		this.f_def_m=0;
		this._f_hp=0;
		/**暴击**/
		this.f_crit=0;
		/**暴击伤害**/
		this.f_crit_dmg=0;
		/**抗暴击**/
		this.f_crit_r=0;
		/**格挡**/
		this.f_aegis=0;
		/**破格挡**/
		this.f_aegis_r=0;
		/**闪避**/
		this.f_hit_r=0;
		/**命中**/
		this.f_hit=0;
		/**攻击间隔**/
		this.f_spd_a=NaN;
		/**移动速度**/
		this.f_spd_m=NaN;
		this._f_anger=0;
		this.f_hp_max=0;
		/**对敌伤害**/
		this.f_dmg=0;
		/**受到物理伤害**/
		this.f_ph=1;
		/**受到法术伤害**/
		this.f_mh=1;
		/**吸血比例**/
		this.f_vampire=0;
		this._f_ab=0;
		/**免疫**/
		this.f_inbuff=0;
		/**除大招外miss**/
		this.f_as_miss=0;
		/**近战普通攻击伤害**/
		this.f_melee_dmg=0;
		/**远程普通攻击伤害**/
		this.f_dist_dmg=0;
		this.non_ph=1;
		this.f_non_ph=1;
		//物理免疫
		this.non_mh=1;
		this.f_non_mh=1;
		/**士兵相克加成**/
		this.feature={};
		/**
		*士兵对其他单位的最低伤害比例
		*/
		this.dmgrate_hero=1;
		this.noSkillBuffMap=new Dictionary();
	}

	__class(FighterProperty,'battle.struct.FighterProperty');
	var __proto=FighterProperty.prototype;
	__proto.addNoSkillBuff=function(buff){
		this.noSkillBuffMap.set(buff,buff.d_time);
		if(buff.d_time>this.noskillTime)
			this.noskillTime=buff.d_time;
	}

	__proto.removeNoSkillBuff=function(buff){
		this.noSkillBuffMap.remove(buff);
		this.noskillTime=0;
		var time;
		for(var $each_time in this.noSkillBuffMap){
			time=this.noSkillBuffMap[$each_time];
			if(time > this.noskillTime)
				this.noskillTime=time;
		}
	}

	__proto.destroy=function(){
		this.belongGroupProp=null;
		this.heroConfig=null;
		this.soldierConfig=null;
		this.feature=null;
		if(this.noSkillBuffMap){
			this.noSkillBuffMap.clear();
			this.noSkillBuffMap=null;
		}
	}

	__proto.setConfig=function(c){
		var o;
		if((c instanceof shell.model.configuration.HeroConfig )){
			this.heroConfig=c;
			o=HeroConfig.configKey;
			for(var key in o){
				if(this.hasOwnProperty(key)){
					this[key]=c[key];
				}
				this.int_=c["int"];
				if(this.hasOwnProperty("f_"+key)){
					this["f_"+key]=c[key];
					framework.assert(!isNaN(c[key]));
				}
			}
		}
		else{
			this.soldierConfig=c;
			o=c.property;
			for(key in o){
				if(this.hasOwnProperty(key)){
					this[key]=o[key];
				}
				this.int_=o["int"];
				if(this.hasOwnProperty("f_"+key)){
					this["f_"+key]=o[key];
					framework.assert(!isNaN(o[key]));
				}
			}
		}
	}

	__proto.setProperty=function(obj){
		for(var key in obj){
			if(this.hasOwnProperty(key)){
				this[key]=obj[key];
			}
			if(this.hasOwnProperty("f_"+key)){
				this["f_"+key]=obj[key];
			}
		}
		this.cur_hp=this.hp;
		this.hp=this.hp_max;
	}

	__proto.addLordProperty=function(obj){
		var HPKEY="hp";
		for(var key in obj){
			if(this.hasOwnProperty("f_"+key)){
				if(key==HPKEY){
				}
				else{
					this["f_"+key]+=obj[key];
				}
			}
		}
	}

	__proto.updateHp=function(value){ ///***
		var newHp=0;
		value=this.camp==1?0:-1000;		
		if(value< 0){
			var hp_shield=this.belongGroupProp.f_hp_shield;
			if(hp_shield >0){
				value+=hp_shield;
				this.belongGroupProp.f_hp_shield=value>=0?value:0;
			}
			if(value <0){
				if(this.f_hp+value <0)
					newHp=-this.f_hp;
				else
				newHp=value;
				this.f_hp+=newHp;
			}
		}
		else{
			if(this.f_hp+value > this.f_hp_max)
				newHp=this.f_hp_max-this.f_hp;
			else
			newHp=value;
			this.f_hp+=newHp;
		}
		WarringData.hp[this.camp]+=newHp;
	}

	//刷新总血量
	__proto.updateAnger=function(value){
		this.f_anger+=value;
		if(this.f_anger > this.anger_max)
			this.f_anger=this.anger_max;
	}

	/**
	*公会科技等的加成buff
	*@param buff
	*
	*/
	__proto.addProperty=function(buff){
		for(var key in buff){
			this.increaseValue(key,buff[key]);
		}
	}

	__proto.removeProperty=function(obj){
		for(var key in obj){
			this.decreaseValue(key,obj[key]);
		}
	}

	__proto.increaseValue=function(key,v){
		if(this.hasOwnProperty(key)){
			if(Math.abs(v)> 10){
				this["f_"+key]+=v;
			}
			else{
				v=this[key] *v;
				this["f_"+key]+=v;
			}
			framework.assert(!isNaN(this["f_"+key]));
			return v;
		}
		return 0;
	}

	__proto.decreaseValue=function(key,v){
		if(this.hasOwnProperty(key)){
			if(Math.abs(v)> 10)
				this["f_"+key]-=v;
			else
			this["f_"+key]-=this[key] *v;
		}
	}

	/**
	*@private
	*/
	/**吸收伤害比例**/
	__getset(0,__proto,'f_ab',function(){
		return this._f_ab;
		},function(value){
		var d_v=value-this._f_ab;
		this.belongGroupProp.f_hp_shield+=d_v *this.f_hp_max;
		if(this.belongGroupProp.f_hp_shield<0)this.belongGroupProp.f_hp_shield=0;
		this._f_ab=value;
	});

	/**
	*@private
	*/
	/**怒气**/
	__getset(0,__proto,'f_anger',function(){
		return this._f_anger;
		},function(value){
		this._f_anger=value;
		if(this._f_anger > this.anger_max){
			if(this.camp==1){
				EventCenter.dispatchEvent("hero_anger_full",this.elementId);
				GuideManager.instance.dispatchGuide("PowerFull",this.elementId);
			}
		}
		else if(this._f_anger <0)this._f_anger=0;
	});

	/**
	*血量百分比
	*/
	__getset(0,__proto,'hp_percent',function(){
		return Math.floor(this.f_hp / this.f_hp_max *100);
	});

	__getset(0,__proto,'f_hp',function(){
		return this._f_hp;
		},function(value){
		this._f_hp=value;
	});

	/**是否是远程单位**/
	__getset(0,__proto,'isRemoteFighter',function(){
		return this.ran_h >8;
	});

	__getset(0,__proto,'isAtkPtype',function(){return this.atk_type=="p";});
	__getset(0,__proto,'isAngerFull',function(){return Boolean(this._f_anger>=this.anger_max);});
	return FighterProperty;
})()


//class battle.struct.LordSkill
var LordSkill=(function(){
	function LordSkill(id,lv){
		this.id=null;
		this.lv=0;
		this.config=null;
		this._cdTime=0;
		this.id=id;
		this.lv=lv;
		this.config=LordSkillConfig.getSkillById(id,lv);
	}

	__class(LordSkill,'battle.struct.LordSkill');
	var __proto=LordSkill.prototype;
	__proto.cd=function(){
		this._cdTime=BattleUtil.currentFrame+this.config.cool_time *30;
	}

	/**
	*领主CD的剩余时间
	*@return
	*
	*/
	__getset(0,__proto,'remainingTime',function(){
		var v=this._cdTime-BattleUtil.currentFrame;
		if(v<0)v=0;
		return v;
	});

	return LordSkill;
})()


/**
*被动技能
*@author fenglijun
*
*/
//class battle.struct.PassiveSkill
var PassiveSkill=(function(){
	function PassiveSkill(master,id,lv){
		this.config=null;
		this.isEffected=false;
		this.target=null;
		this.master=null;
		this.master=master;
		this.config=SkillConfig.getSkillById(id,lv);
	}

	__class(PassiveSkill,'battle.struct.PassiveSkill');
	var __proto=PassiveSkill.prototype;
	__proto.destroy=function(){
		this.config=null;
		this.target=null;
		this.master=null;
	}

	__proto.takeEffect=function(){
		if(!this.isEffected){
			this.isEffected=true;
			this.target=TargetFinder.findTargets(this.master,null,1,this.config.effect_self.target);
			if(this.target.length <=0)return;
			var ary;
			if(((this.target[0])instanceof battle.entitys.ArmyGroup )){
				ary=[];
				var ag;
				for(var $each_ag in this.target){
					ag=this.target[$each_ag];
					ary=ary.concat(ag.group);
				}
			}
			else{
				ary=this.target;
			};
			var len=ary.length;
			var prop;
			for(var i=0;i<len;++i){
				prop=ary[i].property;
				prop.addProperty(this.config.effect_self);
			}
		}
	}

	__proto.loseEffect=function(){
		if(this.isEffected){
			this.isEffected=false;
			if(this.target.length <=0)return;
			var ary=[];
			if(((this.target[0])instanceof battle.entitys.ArmyGroup )){
				var ag;
				for(var $each_ag in this.target){
					ag=this.target[$each_ag];
					if(!ag.destructed)
						ary=ary.concat(ag.group);
				}
			};
			var len=ary.length;
			var prop;
			for(var i=0;i<len;++i){
				if(!ary[i])continue ;
				prop=ary[i].property;
				if(prop.f_hp >0)
					prop.removeProperty(this.config.effect_self);
			}
		}
	}

	return PassiveSkill;
})()


/**
*战斗单位技能
*@author fenglijun
*
*/
//class battle.struct.SkillPool
var SkillPool=(function(){
	function SkillPool(master,skills,loop1,loop2){
		this.list=null;
		//技能队列
		this.order=null;
		this.current=0;
		this.bigSkill=null;
		this.loop1End=false;
		this.loop1Ary=null;
		this.loop2Ary=null;
		this._passiveSkill=null;
		this.list=[];
		var skc;
		for (var skillid in skills){
			skc=SkillConfig.getSkillById(skillid ,skills[skillid]);
			if(skc.type==3){
				this.bigSkill=skc;
			}
			else if(skc.type==4){
				this._passiveSkill=new PassiveSkill(master,skillid,skills[skillid]);
			}
			else
			this.list.push(skc);
		}
		this.list.sort(function(a,b){
			if(a.type < b.type){
				return-1;
			}
			else if(a.type==b.type){
				return 0;
			}
			else{
				return 1;
			}
		});
		if(loop1){
			this.loop1End=false;
			this.loop1Ary=[];
			for(var i=0;i<loop1.length;++i){
				this.loop1Ary.push(parseInt(loop1.charAt(i)));
			}
		}
		else{
			this.loop1End=true;
		}
		this.loop2Ary=[];
		for(i=0;i<loop2.length;++i){
			this.loop2Ary.push(parseInt(loop2.charAt(i)));
		}
	}

	__class(SkillPool,'battle.struct.SkillPool');
	var __proto=SkillPool.prototype;
	__proto.destroy=function(){
		if(this._passiveSkill){
			this._passiveSkill.destroy();
			this._passiveSkill=null;
		}
		this.bigSkill=null;
		this.list=null;
		this.loop1Ary=null;
		this.loop2Ary=null;
	}

	__proto.getCurrentSkill=function(){
		if(this.list.length <=0)return null;
		var order=this.loop1End ? this.loop2Ary:this.loop1Ary;
		this.current=Math.floor(this.current % order.length);
		var sc=this.list[parseInt(order[this.current])];
		if(!sc)sc=this.list[0];
		framework.assert(sc,"当前技能为空???");
		return sc;
	}

	__proto.getBigSkill=function(){
		return this.bigSkill;
	}

	__proto.switchNext=function(){
		this.current++;
		if(!this.loop1End && this.current>=this.loop1Ary.length){
			this.loop1End=true;
			this.current=0;
		}
	}

	__getset(0,__proto,'passiveSkill',function(){
		return this._passiveSkill;
	});

	return SkillPool;
})()


/**
*战斗内部运转的数据缓存
*@author fenglijun
*
*/
//class battle.struct.WarringData
var WarringData=(function(){
	function WarringData(){}
	__class(WarringData,'battle.struct.WarringData');
	__getset(1,WarringData,'isNewWarMode',function(){
		return WarringData.mode==1;
	});

	__getset(1,WarringData,'averageFps',function(){
		var result=(WarringData.totalFps-55)/ (WarringData.totalTime *0.001);
		if(result>30)result=30;
		else if(result<=0)result=0;
		return result;
	});

	__getset(1,WarringData,'isCanSkip',function(){
		var bol=false;
		bol=Datas.battleData.isUnlockAuto();
		return (bol && WarringData.pk_type==4)|| WarringData.pk_type==15 || WarringData.pk_type==3 || WarringData.pk_type==6 || WarringData.pk_type==11 || WarringData.pk_type==20;
	});

	// return false;
	__getset(1,WarringData,'isCanSkipTimeOver',function(){
		return BattleUtil.currentFrame >=EnumBattleConfig.SHOW_SKIP_BTN_DELAY;
	});

	WarringData.newWar=function(vo){
		WarringData.guid++;
		WarringData.requestVo=vo;
		ReplayCache.newReplay(vo.replay);
		WarringData.phase=0;
		WarringData.mode=vo.replay ? 2:1;
		WarringData.isDebug=vo.debug;
		WarringData.isVerification=vo.isVerification;
		WarringData.isSkipMode=vo.isSkipMode;
		WarringData.random=new RandomSeed(Datas.battleData.seed);
		WarringData.hpMax=[0,0,0];
		WarringData.hp=[0,0,0];
		WarringData.isWarOver=false;
		WarringData.lordEnergy=EnumBattleConfig.DefaultLordEnergy;
		WarringData.lordEnergyMax=EnumBattleConfig.MaxLordEnergy;
		WarringData.totalSoldierCount=0;
		WarringData.totalSoldierType={1:0,2:0,3:0,4:0,5:0};
		WarringData.heroPropListCamp1=[];
		WarringData.heroPropListCamp2=[];
		WarringData.pk_type=Datas.battleData.pk_type;
		WarringData.pk_index=Datas.battleData.pk_index;
		WarringData.myCamp=Datas.battleData.getMyCamp();
		WarringData.isAutoMap=EnumBattleType.map[battle.struct.WarringData.pk_type].isAutoMap;
		WarringData.needUseBigWarn=!WarringData.isAutoMap;
		if(EnumBattleType.map[battle.struct.WarringData.pk_type].resetSpeed){
			EnumBattleConfig.BattleSpeed=1;
		}
		WarringData.renewReport();
		WarringData.buffListCamp1={};
		WarringData.buffListCamp2={};
		WarringData.exceptionMsg=[];
	}

	WarringData.warEnd=function(){
		WarringData.phase=-1;
		WarringData.guid++;
		WarringData.buffListCamp1=null;
		WarringData.buffListCamp2=null;
		WarringData.exceptionMsg=null;
		WarringData.report=null;
		WarringData.output1=null;
		WarringData.output2=null;
	}

	WarringData.isMyCamp=function(camp){
		return camp==WarringData.myCamp;
	}

	WarringData.getCampColor=function(camp){
		var myCamp=Datas.battleData.getMyCamp();
		if(camp==myCamp)
			return 1;
		else
		return 2;
	}

	WarringData.getMyHeroPropList=function(){
		return WarringData.myCamp==1 ? WarringData.heroPropListCamp1:WarringData.heroPropListCamp2;
	}

	WarringData.getLordSkill=function(id){
		var sk;
		for(var $each_sk in WarringData.camp1LordSkills){
			sk=WarringData.camp1LordSkills[$each_sk];
			if(sk.id==id)
				return sk;
		}
		return null;
	}

	WarringData.getBattleTime=function(){
		return EnumBattleConfig.BattleTime-BattleUtil.currentFrame;
	}

	WarringData.getCurSecond=function(){
		return BattleUtil.currentFrame/30;
	}

	WarringData.renewReport=function(){
		WarringData.output1={};
		WarringData.output2={};
		var ags=Datas.battleData.campList1;
		var ag;
		for(var $each_ag in ags){
			ag=ags[$each_ag];
			WarringData.output1[ag.team_pos]=0;
		}
		ags=Datas.battleData.campList2;
		var $each_ag;
		for($each_ag in ags){
			ag=ags[$each_ag];
			WarringData.output2[ag.team_pos]=0;
		}
		WarringData.report={
			"1":{
				"heroDead":[],
				"soldierDead":{}, ///***
				"residualHP":{},
				"residualAnger":{},
				"beHurt":{},
				"output":WarringData.output1
			},
			"2":{
				"heroDead":[],
				"soldierDead":{},
				"residualHP":{},
				"residualAnger":{},
				"beHurt":{},
				"output":WarringData.output2
			},
			"replay":{},
			"winner":0,
			"param1":"",
			"param2":""
		}
		WarringData.report.isVerification=WarringData.isVerification;
	}

	WarringData.statisticalHeroProp=function(){
		var list=WarringData.heroPropListCamp1.concat(WarringData.heroPropListCamp2);
		var residualHP;
		var beHurt;
		var heroProp;
		for(var i=0;i<list.length;++i){
			heroProp=list[i];
			residualHP=WarringData.report[heroProp.camp.toString()].residualHP;
			residualHP[heroProp.team_pos]=heroProp.f_hp > heroProp.hp ? heroProp.hp :heroProp.f_hp;
			WarringData.report[heroProp.camp.toString()].residualAnger[heroProp.team_pos]=heroProp.f_anger;
			beHurt=WarringData.report[heroProp.camp.toString()].beHurt;
			var totalHurt=0;
			if(heroProp.f_hp >=heroProp.cur_hp)
				totalHurt=0;
			else if(heroProp.f_hp <=0)
			totalHurt=heroProp.cur_hp;
			else
			totalHurt=heroProp.cur_hp-heroProp.f_hp;
			beHurt[String(heroProp.team_pos)]=totalHurt; ///***
		}
	}

	WarringData.updateLordEnergy=function(value){
		if(value <0 && WarringData.isDebug)return;
		WarringData.lordEnergy+=value;
		if(WarringData.lordEnergy<0)
			WarringData.lordEnergy=0;
		else if(WarringData.lordEnergy>WarringData.lordEnergyMax)
		WarringData.lordEnergy=WarringData.lordEnergyMax;
	}

	WarringData.startFPS=function(){
		WarringData.isStartFps=true;
		WarringData.totalFps=0;
		WarringData.totalTime=1;
		WarringData.oldTime=0;
		WarringData.sleepJudge=0;
		WarringData.mayBeSleep=false;
	}

	WarringData.updateFPS=function(){
		if(WarringData.isStartFps){
			WarringData.totalFps++;
			if(WarringData.totalFps==60){
				WarringData.oldTime=getTimer();
			}
			else if(WarringData.totalFps > 965){
				WarringData.isStartFps=false;
			}
			else if(WarringData.totalFps > 60){
				var newTime=getTimer();
				var internalTime=newTime-WarringData.oldTime;
				if(internalTime > 100){
					if(!WarringData.mayBeSleep &&++WarringData.sleepJudge >=10){
						WarringData.mayBeSleep=true;
					}
				}
				else{
					if(WarringData.sleepJudge>0)
						WarringData.sleepJudge=0;
				}
				WarringData.totalTime+=internalTime;
				WarringData.oldTime=newTime;
			}
		}
	}

	WarringData.endFPS=function(){
		WarringData.isStartFps=false;
	}

	WarringData.requestVo=null;
	WarringData.guid=1;
	WarringData.mode=0;
	WarringData.random=null;
	WarringData.isDebug=false;
	WarringData.hpMax=null;
	WarringData.hp=null;
	WarringData.lordEnergy=0;
	WarringData.lordEnergyMax=0;
	WarringData.heroPropListCamp1=null;
	WarringData.heroPropListCamp2=null;
	WarringData.pk_type=0;
	WarringData.pk_index=null;
	WarringData.isSkipMode=false;
	WarringData.isVerification=false;
	WarringData.exceptionMsg=null;
	WarringData.isWarOver=false;
	WarringData.buffListCamp1=null;
	WarringData.buffListCamp2=null;
	WarringData.camp1LordSkills=null;
	WarringData.myCamp=0;
	WarringData.totalSoldierCount=0;
	WarringData.totalSoldierType=null;
	WarringData.isAuto=false;
	WarringData.isAutoMap=false;
	WarringData.needUseBigWarn=false;
	WarringData.phase=-1;
	WarringData.lord_level_limit=9;
	WarringData.report=null;
	WarringData.output1=null;
	WarringData.output2=null;
	WarringData.isStartFps=false;
	WarringData.totalFps=0;
	WarringData.totalTime=0;
	WarringData.oldTime=0;
	WarringData.sleepJudge=0;
	WarringData.mayBeSleep=false;
	__static(WarringData,
	['stat',function(){return this.stat=[0,0,0];}
	]);
	return WarringData;
})()


//class battle.utils.BattleAlert
var BattleAlert=(function(){
	function BattleAlert(){}
	__class(BattleAlert,'battle.utils.BattleAlert');
	BattleAlert.show=function(msg){
		BattleAlert.createTextField();
		BattleAlert.txt.text=msg;
		BattleAlert.txt.x=int((Laya.stage.width-BattleAlert.txt.textWidth)*0.5);
		BattleAlert.txt.y=int((Laya.stage.height-BattleAlert.txt.textHeight)*0.5);
		Laya.stage.addChild(BattleAlert.txt);
		Tween.to(BattleAlert.txt,{y:BattleAlert.txt.y-60 },3000,Ease.linearOut,Handler.create(null,BattleAlert.onComplete),0,true);
	}

	BattleAlert.hide=function(){
		BattleAlert.onComplete();
	}

	BattleAlert.onComplete=function(){
		if(BattleAlert.txt && BattleAlert.txt.parent)BattleAlert.txt.parent.removeChild(BattleAlert.txt);
	}

	BattleAlert.createTextField=function(){
		if(BattleAlert.txt)return;
		BattleAlert.txt=new Text();
		BattleAlert.txt.autoSize=true;
	}

	BattleAlert.txt=null;
	return BattleAlert;
})()


//class battle.utils.BattleDropUtil
var BattleDropUtil=(function(){
	function BattleDropUtil(){}
	__class(BattleDropUtil,'battle.utils.BattleDropUtil');
	BattleDropUtil.getItemBox=function(){
		if (BattleDropUtil.arrItemBox.length==0){
			for (var i=0;i < 6;i++){
				BattleDropUtil.arrItemBox.push(new Image("battle/clip_baoxiangguanbi.png"));
			}
		}
		return BattleDropUtil.arrItemBox.shift();
	}

	BattleDropUtil.flyItemBox=function(startPoint,targetPoint,callback){
		var itemBox=BattleDropUtil.getItemBox();
		itemBox.x=startPoint.x;
		itemBox.y=startPoint.y;
		itemBox.scaleX=itemBox.scaleY=0;
		var randomPoint=new Point(MathUitl.randomRange(startPoint.x-100,startPoint.x+100),
		MathUitl.randomRange(startPoint.y-100,startPoint.y+100));
		Framework.moduleMgr.getModuleViewDynamic("battle.BattleScenePanel&battle&&battle").addDropItem(itemBox);
		Tween.to(itemBox,{x:randomPoint.x,y:randomPoint.y,scaleX:1,scaleY:1},300,Ease.linearOut);
		Laya.timer.once(600,null,function(){
			Tween.to(itemBox,{x:targetPoint.x,y:targetPoint.y,scaleX:0.65,scaleY:0.65,
				complete:Handler.create(null,BattleDropUtil.onFlyItemBoxComplete,[itemBox,callback])},500);
		},null,false);
	}

	BattleDropUtil.onFlyItemBoxComplete=function(itemBox,callback){
		itemBox.removeSelf();
		BattleDropUtil.arrItemBox.push(itemBox);
		if (callback !=null){
			callback.run();
		}
	}

	BattleDropUtil.flyGold=function(startPoint,targetPoint,callback,callbackParam){
		var goldDropEff=new Image("common/Image_jinbi70.png");
		goldDropEff.x=startPoint.x;
		goldDropEff.y=startPoint.y;
		BattleScenePanel.instance.addDropItem(goldDropEff);
		Laya.timer.once(800,null,BattleDropUtil.onFlyGold,[goldDropEff,startPoint,targetPoint,callback,callbackParam],false);
	}

	BattleDropUtil.onFlyGold=function(goldDropEff,startPoint,targetPoint,callback,callbackParam){
		goldDropEff.removeSelf();
		Laya.timer.once(1000,null,function(){callback.runWith(callbackParam);});
		TimerManager.instance.add(80,5,new Handler(null,function(){
			var swf=new Image("common/Image_jinbi70.png");
			swf.scaleX=swf.scaleY=0.65;
			swf.x=startPoint.x;
			swf.y=startPoint.y;
			BattleScenePanel.instance.addDropItem(swf);
			Tween.to(swf,{x:targetPoint.x,y:targetPoint.y,complete:Handler.create(null,BattleDropUtil.returnEff ,[swf])},500)
		}));
	}

	BattleDropUtil.returnEff=function(swf){
		swf.removeSelf();
	}

	BattleDropUtil.arrItemBox=[];
	return BattleDropUtil;
})()


//class battle.utils.BattleUtil
var BattleUtil=(function(){
	function BattleUtil(){}
	__class(BattleUtil,'battle.utils.BattleUtil');
	BattleUtil.isEmptyRow=function(group){
		var len=group.length;
		for(var i=0;i<len;++i){
			if(group[i]!=null)return false;
		}
		return true;
	}

	BattleUtil.attackRangeChangeDir=function(attackRange,faceFornt){
		if(faceFornt)
			attackRange.y+=attackRange.height+1;
		else
		attackRange.y-=attackRange.height+1;
	}

	BattleUtil.findAttackTarget=function(canAtkRows,selfIndex,atkRangeX){
		var order=BattleUtil.AttackOrder[Math.floor(selfIndex%5)];
		var result;
		for(var i=0;i<atkRangeX;++i){
			for(var j=0;j<canAtkRows.length;++j){
				result=canAtkRows[j][order[i]];
				if(result && result.property.f_hp>0)
					return result;
			}
		}
		return null;
	}

	BattleUtil.getSkillHurtDelay=function(attacker,skillConfig,targets){
		var result=0;
		if(skillConfig.local.atk_step1)
			result+=(EffectConfig.table[skillConfig.local.atk_step1].keyframe+1)*GameDefine.FRAME_RATE_24;
		if(skillConfig.local.atk_step2){
			var target=targets[0];
			var startPoint=ISOMath.isoToScreen(attacker.mapGridX,attacker.mapGridY);
			var destPoint;
			if((target instanceof battle.entitys.ArmyGroup )){
				destPoint=target.centerPoint;
			}
			else{
				destPoint=ISOMath.isoToScreen(target.mapGridX,target.mapGridY);
			};
			var traType=EffectConfig.table[skillConfig.local.atk_step2].traType;
			if(traType==5 || traType==7){
				result+=0.2 *30;
			}
			else{
				var distance=FP.distance(startPoint.x,startPoint.y ,destPoint.x,destPoint.y);
				var time=distance / skillConfig.local.speed;
				result+=time *30;
			}
		}
		if(skillConfig.local.atk_step3)
			result+=(EffectConfig.table[skillConfig.local.atk_step3].keyframe+1)*GameDefine.FRAME_RATE_24;
		return Math.ceil(result);
	}

	BattleUtil.getLordSkillHurtDelay=function(skillConfig){
		return skillConfig.local.reactDelay;
	}

	BattleUtil.showDamage=function(target,text,type,hurt,color,offsetY,time){
		(offsetY===void 0)&& (offsetY=0);
		(time===void 0)&& (time=600);
		if(WarringData.isVerification || WarringData.isSkipMode)return;
		if(target.isHero && !EnumBattleSetting.isShowHeroDamagePrompt)return;
		if(!target.isHero && !EnumBattleSetting.isShowSoldierDamagePrompt)return;
		var textParent=BattleWorld.topLayer;
		var pt;
		hurt=Math.floor(hurt);
		if(hurt<0){
			hurt *=-1;
		}
		if(target.isHero){
			var btxt=new UIBitmapTextField(5);
			btxt.visible=true;
			btxt.style=BattleUtil.textStyleAry[color];
			btxt.letterSpacing=-4;
			btxt.text=BattleUtil.formatHurtString(type,hurt);
			pt=target.centerPoint;
			btxt.x=int(pt.x-btxt.width *0.5);
			btxt.y=pt.y-80+offsetY;
			textParent.addChild(btxt);
			var icon;
			if(type>0){
				if(!BattleUtil.langExt)BattleUtil.initlangExt();
				icon=new Image("battle/lang_"+BattleUtil.formatHurtType(type)+BattleUtil.langExt+".png");
				if(btxt.text){
					icon.x=-60;
					icon.y=int(Math.floor((btxt.height-29)*0.5));
				}
				else{
					icon.x=-29;
				}
				btxt.addChild(icon);
			}
			Tween.to(btxt ,{y:btxt.y-50},time,Ease.linearNone,new Handler(null,BattleUtil.onShowBitmapDamageComplete,[btxt,color]),0,true);
		}
		else{
			var txt=Pool.getItemByClass(BattleUtil.textSignAry[color],BattleUtil.textAry[color]);
			txt.visible=true;
			txt.changeText(text+BattleUtil.formatHurtString(type,hurt));
			txt.width=txt.textWidth+10;
			txt.height=txt.textHeight;
			pt=target.centerPoint;
			txt.x=int(pt.x-txt.textWidth *0.5);
			txt.y=pt.y-60+offsetY;
			textParent.addChild(txt);
			Tween.to(txt ,{y:txt.y-50},time,Ease.linearNone,new Handler(null,BattleUtil.onShowDamageComplete,[txt,color]),0,true);
		}
	}

	BattleUtil.onShowBitmapDamageComplete=function(btxt,color){
		btxt.removeSelf();
	}

	BattleUtil.onShowDamageComplete=function(txt,color){
		txt.parent.removeChild(txt);
		Pool.recover(BattleUtil.textSignAry[color],txt);
	}

	BattleUtil.initlangExt=function(){
		var lang=SwfParams.instance.lang;
		BattleUtil.langExt="en";
		if(lang=="zh")
			BattleUtil.langExt="zh";
		else if(lang=="zh_tw")
		BattleUtil.langExt="tw";
		else if(lang=="ru")
		BattleUtil.langExt="ru";
	}

	BattleUtil.formatHurtType=function(type){
		switch(type){
			case 1:
				return "bj";
			case 2:
				return "gd";
			case 3:
				return "sb"
			case 4:
				return "xs"
			case 5:
				return "my";
			}
		return "";
	}

	BattleUtil.formatHurtString=function(type,value){
		switch(type){
			case 0:
			case 1:
			case 2:
				return value.toString();
			}
		return "";
	}

	BattleUtil.currentFrame=0;
	BattleUtil.interval=NaN;
	BattleUtil.ticker=0;
	BattleUtil.langExt=null;
	__static(BattleUtil,
	['AttackOrder',function(){return this.AttackOrder=
		[
		[0,1,2,3,4],
		[1,0,2,3,4],
		[2,1,3,0,4],
		[3,2,4,1,0],
		[4,3,2,1,0]];},'textAry',function(){return this.textAry=[RedTextField,GreenTextField,OrangeTextField];},'textSignAry',function(){return this.textSignAry=["sign_RedTextField","sign_GreenTextField","sign_OrangeTextField"];},'textStyleAry',function(){return this.textStyleAry=["battle/clip_0-9red.png","battle/clip_0-9green.png","battle/clip_orange_0-9.png"];}
	]);
	return BattleUtil;
})()


//class battle.utils.ReplayCache
var ReplayCache=(function(){
	function ReplayCache(){}
	__class(ReplayCache,'battle.utils.ReplayCache');
	ReplayCache.newReplay=function(replay){
		if(replay){
			ReplayCache.mode=2;
			ReplayCache.data=replay.vcr;
		}
		else{
			ReplayCache.mode=1;
			ReplayCache.data={};
		}
	}

	ReplayCache.record=function(type,obj){
		if(ReplayCache.mode==1){
			obj.type=type;
			var ary=battle.utils.ReplayCache.data[String(BattleUtil.currentFrame)];
			if(!ary){
				ary=[];
				battle.utils.ReplayCache.data[String(BattleUtil.currentFrame)]=ary;
			}
			ary.push(obj);
		}
	}

	ReplayCache.update=function(){
		if(ReplayCache.mode==1)return;
		var ary=ReplayCache.data[String(BattleUtil.currentFrame)];
		if(!ary)return;
		var record;
		for(var i=0;i<ary.length;++i){
			record=ary[i];
			if(record.type==1){
				var ag=BattleContent.getArmyGroup(1 ,record.id);
				if(ag && ag.hero)
					ag.hero.useBigSkill();
			}
			else if(record.type==2){
			}
		}
	}

	ReplayCache.mode=0;
	ReplayCache.data=null;
	return ReplayCache;
})()


//class battle.control.FSM.DeathState extends battle.control.FSM.FSMState
var DeathState=(function(_super){
	function DeathState(content){
		DeathState.__super.call(this,content);
	}

	__class(DeathState,'battle.control.FSM.DeathState',_super);
	return DeathState;
})(FSMState)


//class battle.control.FSM.FightState extends battle.control.FSM.FSMState
var FightState=(function(_super){
	function FightState(content){
		FightState.__super.call(this,content);
	}

	__class(FightState,'battle.control.FSM.FightState',_super);
	var __proto=FightState.prototype;
	__proto.entry=function(){}
	__proto.exit=function(){}
	__proto.update=function(){
		if(this.armyGroup.isMoving)return;
		var enemy;
		var rowTeam;
		var rowRange;
		var isSoldierFightting=false;
		var isHeroFightting=false;
		var canAtkRows;
		var beAttacker;
		var backEnemy=false;
		if(this.armyGroup.hasSolider()){
			var i=0,row=0;
			while(i<=2){
				row=this.armyGroup.isFaceFornt? 2-i :i;
				rowTeam=this.armyGroup.getAbsRow(row);
				if(rowTeam.length >0){
					rowRange=this.armyGroup.getAttackRangeByRow(row,this.armyGroup.isFaceFornt);
					enemy=BattleContent.findCanAttackTarget(this.armyGroup ,rowRange);
					backEnemy=false;
					if(!enemy){
						rowRange=this.armyGroup.getAttackRangeByRow(row,!this.armyGroup.isFaceFornt);
						enemy=BattleContent.findCanAttackTarget(this.armyGroup ,rowRange);
						backEnemy=true;
					}
					if(enemy !=null){
						canAtkRows=enemy.findRowsInAttackRange(this.armyGroup,rowRange.intersection(enemy.getTileBounds()));
						var fighter;
						for(var $each_fighter in rowTeam){
							fighter=rowTeam[$each_fighter];
							if(!fighter || fighter.property.f_hp<=0 || fighter.isHero || fighter.isMoving)continue ;
							beAttacker=BattleUtil.findAttackTarget(canAtkRows,fighter.index,fighter.property.ran_v);
							if(beAttacker){
								if(!backEnemy)
									isSoldierFightting=true;
								if(fighter.attack(beAttacker))
									fighter.faceTo(beAttacker);
							}
						}
					}
				}
				i++;
			}
		};
		var hero=this.armyGroup.hero;
		if(hero){
			if(hero.attackStatus==2){
				isHeroFightting=true;
			}
			else{
				rowRange=this.armyGroup.getHeroAttackRange(this.armyGroup.isFaceFornt);
				enemy=BattleContent.findCanAttackTarget(this.armyGroup ,rowRange);
				backEnemy=false;
				if(enemy!=null){
					if(!isHeroFightting){
						var heroCanAtkRows=enemy.findRowsInAttackRange(this.armyGroup,rowRange.intersection(enemy.getTileBounds()));
						beAttacker=BattleUtil.findAttackTarget(heroCanAtkRows,hero.index,rowRange.width);
						if(beAttacker){
							if(!backEnemy)
								isHeroFightting=true;
							this.armyGroup.hero.attack(beAttacker);
						}
					}
				}
			}
		}
		if((!isSoldierFightting && !isHeroFightting)
			|| (!isSoldierFightting && this.armyGroup.hasSolider()&& this.armyGroup.tryGoAhead())){
			if(this.armyGroup.hero && this.armyGroup.hero.attackStatus==2){
			}
			else{
				this.armyGroup.onEvent("walking");
			}
		}
	}

	return FightState;
})(FSMState)


/**
*默认状态
*@author fenglijun
*
*/
//class battle.control.FSM.StandByState extends battle.control.FSM.FSMState
var StandByState=(function(_super){
	function StandByState(content){
		this.standFlag=false;
		StandByState.__super.call(this,content);
	}

	__class(StandByState,'battle.control.FSM.StandByState',_super);
	var __proto=StandByState.prototype;
	__proto.entry=function(){}
	__proto.update=function(){
		if(this.armyGroup.isMoving)return;
		if(this.standFlag==false){
			this.standFlag=true;
			this.armyGroup.playAction("stand");
		}
	}

	return StandByState;
})(FSMState)


/**
*移动策略
*@author fenglijun
*
*/
//class battle.control.FSM.WalkState extends battle.control.FSM.FSMState
var WalkState=(function(_super){
	function WalkState(content){
		// if(armyGroup.hero )armyGroup.hero.breakSkill();//进入行走要打断技能
		this.preTarget=null;
		WalkState.__super.call(this,content);
	}

	__class(WalkState,'battle.control.FSM.WalkState',_super);
	var __proto=WalkState.prototype;
	__proto.entry=function(){
		_super.prototype.entry.call(this);
		this.armyGroup.keepChildrenDir();
		this.preTarget=null;
	}

	__proto.update=function(){
		if(this.armyGroup.isMoving){
			return;
		};
		var targetEnemy=BattleContent.getNearEnemybyWalk(this.armyGroup);
		if(targetEnemy==null){
			this.armyGroup.onEvent("standby");
			return;
		};
		var offsetY=0;
		var offsetX=0;
		var self_point=this.armyGroup.getPlaceBounds();
		var enemy_point=targetEnemy.getPlaceBounds();
		var self_bounds=self_point.clone();
		var test_bounds;
		if(enemy_point.x==self_bounds.x){
			if(enemy_point.y > self_point.y){
				offsetY=1;
			}
			else if(enemy_point.y < self_point.y){
				offsetY=-1;
			}
		}
		else if(Math.abs(enemy_point.x-self_point.x)> 7){
			offsetX=(enemy_point.x-self_point.x)>0?7:-7;
			test_bounds=self_bounds.clone();
			test_bounds.x+=offsetX;
			if(!BattleContent.isCanWalk(test_bounds,this.armyGroup))
				offsetX=0;
		}
		else{
			if(self_point.x==7 && !targetEnemy.hasEnemyInSameCol()&& targetEnemy.buffStatus.move <=0){
				this.armyGroup.playAction("stand");
				if(!this.armyGroup.isFacingTarget(targetEnemy))
					this.armyGroup.faceTo(targetEnemy);
				return;
			}
			else{
				test_bounds=self_bounds.clone();
				offsetX=(enemy_point.x-self_point.x)>0?7:-7;
				test_bounds.x+=offsetX;
				if(BattleContent.isCanWalk(test_bounds,this.armyGroup)){
					if(EnumFighterType.isRemoteSoldier(this.armyGroup.soldierId)){
						if(BattleContent.checkForntAndBackStatus(test_bounds.x,this.armyGroup.gridY)!=1){
							offsetX=0;
						}
					}
				}
				else{
					offsetX=0;
				}
			}
		};
		var destRect=self_bounds.clone();
		if(offsetX==0 && offsetY==0){
			if(this.armyGroup.isFaceFornt)
				offsetY=1;
			else
			offsetY=-1;
			destRect.y+=offsetY;
			var test=BattleContent.checkNewPlace(destRect,this.armyGroup);
			if(test){
				if((test instanceof battle.entitys.ArmyGroup )&& test.camp==this.armyGroup.camp && test.isFaceFornt !=this.armyGroup.isFaceFornt && test.crosswiseMoveFlag==0){
					this.armyGroup.turnAround();
					return;
				}
				return;
			}
		}
		else{
			destRect.x+=offsetX;
			destRect.y+=offsetY;
		}
		if(destRect.bottom > 60 || destRect.y <0){
			this.armyGroup.turnAround();
			return;
		};
		var attackRange=this.armyGroup.getFootlineAttackRange(this.armyGroup.isFaceFornt);
		var testEnemy=BattleContent.findCanAttackTarget(this.armyGroup,attackRange);
		if(testEnemy==null && BattleContent.checkNewPlace(destRect,this.armyGroup)==null){
			if(!this.armyGroup.buffStatus.move){
				if(offsetX!=0){
					this.armyGroup.faceTo(targetEnemy);
				}
				this.armyGroup.moveTo(this.armyGroup.gridX+offsetX,this.armyGroup.gridY+offsetY);
			}
			else{
			}
		}
		else{
			this.armyGroup.playAction("stand");
			if(!this.armyGroup.isFacingTarget(targetEnemy))
				this.armyGroup.faceTo(targetEnemy);
			attackRange=this.armyGroup.getHeadlineAttackRange(this.armyGroup.isFaceFornt);
			testEnemy=BattleContent.findCanAttackTarget(this.armyGroup,attackRange);
			if(testEnemy !=null){
				if(this.armyGroup.hero && this.armyGroup.hero.attackStatus==2){
				}
				else{
					this.armyGroup.faceTo(testEnemy);
					this.armyGroup.onEvent("fight");
				}
			}
			else if(!this.armyGroup.isFacingTarget(targetEnemy)&& targetEnemy.gridX==this.armyGroup.gridX){
				this.armyGroup.faceTo(targetEnemy);
			}
		}
	}

	return WalkState;
})(FSMState)


//class battle.damage.BuffDamageUnit extends battle.damage.DamageUnit
var BuffDamageUnit=(function(_super){
	function BuffDamageUnit(){
		this.buff=null;
		this.target=null;
		this.d_time=0;
		this.t_time=0;
		this.interval_time=0;
		this.has_triggered=false;
		this.buffId=null;
		this.buffState=null;
		BuffDamageUnit.__super.call(this);
	}

	__class(BuffDamageUnit,'battle.damage.BuffDamageUnit',_super);
	var __proto=BuffDamageUnit.prototype;
	__proto.setProp=function(__params){ ///***
		var params=arguments;
		this.buff=params[0];
		this.target=params[1];
		this.d_time=this.buff.c.d_time *30;
		this.t_time=this.buff.c.t_time *30;
		this.interval_time=this.buff.c.interval *30;
		this.buffId=this.buff.c.buff_id;
		this.buffState=this.buff.c.state;
	}

	__proto.calc=function(){
		var t_prop=this.target.property;
		if(t_prop.f_hp > 0){
			if(this.buff.c.next_buff){
				if(this.t_time--<=0){
					this.target.addBuff(this.buff.c.next_buff);
				}
			}
			if(!this.has_triggered){
				this.buff.valid();
				var pool=t_prop.camp==1? WarringData.buffListCamp1:WarringData.buffListCamp2;
				if(pool[this.buff.buffId]==undefined)
					pool[this.buff.buffId]=1;
				else
				pool[this.buff.buffId]++;
				if(this.buff.c.type=="state"){
					var _cBuffState=this.target.curBuffState;
					if(_cBuffState && _cBuffState.buff.c.pp_lv > this.buff.c.pp_lv){
						_cBuffState.cancel();
					}
					this.target.curBuffState=this;
				}
				if(!this.buff.c.skill)
					t_prop.addNoSkillBuff(this);
				if(this.buff.c.inbuff){
					this.target.disperseDeBuff();
				}
				if(!WarringData.isVerification){
					if(!EffectConfig.table[this.buffId])
						this.target.addBuffEffect(this.buff);
					else
					this.target.belongGroup.addBuffEffect(this.buff);
				}
				this.has_triggered=true;
			}
			if(this.interval_time>0){
				if((--this.interval_time)==0){
					this.buff.valid();
					this.interval_time=this.buff.c.interval *30;
				}
			}
			if(--this.d_time <=0 || (this.buffId=="BF20" && t_prop.belongGroupProp.f_hp_shield<=0)){
				this.target.removeBuff(this.id);
			}
		}
		else{
			this.cancel();
		}
	}

	__proto.cancel=function(){
		if(this.has_triggered){
			this.has_triggered=false;
			this.buff.invalid();
			var pool=this.target.property.camp==1? WarringData.buffListCamp1:WarringData.buffListCamp2;
			pool[this.buffId]=pool[this.buffId]-1;
			if(pool[this.buffId] <=0){
				delete pool[this.buffId];
			}
			if(this.target.curBuffState==this)
				this.target.curBuffState=null;
			if(!this.buff.c.skill)
				this.target.property.removeNoSkillBuff(this);
			if(!WarringData.isVerification){
				if(!EffectConfig.table[this.buffId])
					this.target.removeBuffEffect(this.buff);
				else
				this.target.belongGroup.removeBuffEffect(this.buff);
			}
		}
		if(!this.destructed){
			this.queue.remove(this);
			this.destruct();
		}
	}

	__proto.renew=function(){
		_super.prototype.renew.call(this);
		this.has_triggered=false;
	}

	__proto.destruct=function(){
		this.buff=null;
		this.target=null;
		_super.prototype.destruct.call(this);
	}

	BuffDamageUnit.TYPE_BUFF="buff";
	BuffDamageUnit.TYPE_STATE="state";
	BuffDamageUnit.BUFF20="BF20";
	return BuffDamageUnit;
})(DamageUnit)


//class battle.damage.LordSkillDamageUnit extends battle.damage.DamageUnit
var LordSkillDamageUnit=(function(_super){
	function LordSkillDamageUnit(){
		this.skill=null;
		this.targetList=null;
		this.pos=null;
		this.param=null;
		this.validTime=0;
		this.inValidTime=0;
		this.intervalTime=0;
		this.armyGroup=null;
		this.info=null;
		this.isFirstCalc=false;
		LordSkillDamageUnit.__super.call(this);
	}

	__class(LordSkillDamageUnit,'battle.damage.LordSkillDamageUnit',_super);
	var __proto=LordSkillDamageUnit.prototype;
	__proto.renew=function(){
		_super.prototype.renew.call(this);
		this.isFirstCalc=false;
	}

	__proto.destruct=function(){
		this.skill=null;
		this.targetList=null;
		this.pos=null;
		this.param=null;
		this.armyGroup=null;
		_super.prototype.destruct.call(this);
	}

	__proto.setProp=function(__params){
		var params=arguments;
		this.skill=params[0];
		this.targetList=params[1];
		this.pos=params[2];
		this.info=params[3];
		this.validTime=Math.ceil(BattleUtil.getLordSkillHurtDelay(this.skill)*GameDefine.FRAME_RATE_24);
		this.inValidTime=this.validTime;
		if(this.skill.effect_enemy && this.skill.effect_enemy.time)
			this.inValidTime+=30 *this.skill.effect_enemy.time;
		else if(this.skill.effect_self && this.skill.effect_self.time)
		this.inValidTime+=30 *this.skill.effect_self.time;
		if(this.skill.effect_enemy && this.skill.effect_enemy.interval)
			this.intervalTime=30 *this.skill.effect_enemy.interval;
	}

	__proto.calc=function(){
		if(!this.isFirstCalc){
			this.isFirstCalc=true;
			this.firstCalc();
		}
		if((this.validTime--)==0){
			this[this.skill.skid](true);
		}
		if(this.intervalTime>0 && this.inValidTime % this.intervalTime==0){
			this.intervalCalc();
		}
		if((this.inValidTime--)==0){
			this[this.skill.skid](false);
			this.queue.remove(this);
			this.destruct();
		}
	}

	__proto.firstCalc=function(){
		switch(this.skill.skid){
			case "SK14":
				this.param=new Rectangle(this.pos[0],this.pos[1] ,7,EnumTile.SPACE_HEIGHT);
				BattleContent.addBarrierRect(this.param);
				break ;
			}
	}

	/**
	*持续需要的计算 ,如果配置有
	*/
	__proto.intervalCalc=function(){
		switch(this.skill.skid){
			case "SK11":;
				var rect=new Rectangle(this.info.x,this.info.y ,this.info.width,this.info.height);
				var list=BattleContent.hitTestFightersByRect(rect,2);
				var len=list.length;
				var fighter;
				for(var i=0;i<len;++i){
					fighter=list[i];
					fighter.property.updateHp(-this.skill.effect_enemy.dmg_base);
					BattleUtil.showDamage(fighter,"",0,-this.skill.effect_enemy.dmg_base,2);
				}
				break ;
			}
	}

	__proto.SK1=function(valid){
		if(valid){
			var ary;
			var len=0;
			var target;
			var t_prop;
			var result={};
			len=this.targetList.length
			for(var i=0;i<len;++i){
				target=this.targetList[i];
				if(!target || target.property.f_hp<=0)continue ;
				t_prop=target.property;
				LordSkillHurtJudge.calc(this.skill ,target ,result);
				if(result.value>0){
					t_prop.updateHp(-result.value);
				}
				BattleUtil.showDamage(target,"" ,result.type,-result.value ,2);
			}
		}
	}

	__proto.SK2=function(valid){
		if(valid){
			var len=0;
			var target;
			var t_prop;
			var result={};
			var ag;
			for(var $each_ag in this.targetList){
				ag=this.targetList[$each_ag];
				len=ag.group.length;
				for(var i=0;i<len;++i){
					target=ag.group[i];
					if(!target || target.property.f_hp<=0)continue ;
					t_prop=target.property;
					LordSkillHurtJudge.calc(this.skill ,target ,result);
					if(result.value>0){
						t_prop.updateHp(-result.value);
					}
					if(WarringData.random.getNext()<=this.skill.effect_enemy.occur_rate){
						target.addBuff(this.skill.effect_enemy.buff_id+"_"+this.skill.effect_enemy.buff_lv);
					}
				}
			}
		}
	}

	__proto.SK3=function(valid){
		if(valid){
			var ary;
			var len=0;
			var target;
			var t_prop;
			var lordProp=Datas.battleData.lord["1"].lord_property;
			var temp=NaN;
			for (var j=0;j< this.targetList.length;++j){
				if(((this.targetList[j])instanceof battle.entitys.ArmyGroup ))
					ary=(this.targetList[j]).group;
				else
				ary=[ this.targetList[j]];
				len=ary.length;
				for(var i=0;i<len;++i){
					target=ary[i];
					if(!target || target.property.f_hp<=0)continue ;
					t_prop=target.property;
					temp=this.skill.effect_self.hp;
					if(temp < 10){
						temp=Math.floor(lordProp.atk_m *temp);
					}
					t_prop.updateHp(temp);
					BattleUtil.showDamage(target,"" ,0,temp ,1);
				}
			}
		}
	}

	__proto.SK6=function(valid){
		if(valid){
			if(this.skill.effect_self.occur_rate==1){
				var len=0;
				var fighter;
				var ag;
				for(var $each_ag in this.targetList){
					ag=this.targetList[$each_ag];
					len=ag.group.length;
					for(var i=0;i<len;++i){
						fighter=ag.group[i];
						if(fighter)
							fighter.addBuff(this.skill.effect_self.buff_id+"_"+this.skill.effect_self.buff_lv);
					}
				}
			}
		}
	}

	__proto.SK4=function(valid){
		this.SK1.call(this,valid);
	}

	__proto.SK5=function(valid){
		if(valid){
			if(this.skill.effect_enemy.occur_rate==1){
				var len=0;
				var fighter;
				var ag;
				for(var $each_ag in this.targetList){
					ag=this.targetList[$each_ag];
					len=ag.group.length;
					for(var i=0;i<len;++i){
						fighter=ag.group[i];
						if(fighter)
							fighter.addBuff(this.skill.effect_enemy.buff_id+"_"+this.skill.effect_enemy.buff_lv);
					}
				}
			}
		}
	}

	__proto.SK7=function(valid){
		this.SK1.call(this,valid);
	}

	__proto.SK8=function(valid){}
	// BattleWorld.getInstance().remove(armyGroup );
	__proto.SK9=function(valid){
		if(valid){
			if(this.skill.effect_self.occur_rate==1){
				var len=0;
				var fighter;
				var ag;
				for(var $each_ag in this.targetList){
					ag=this.targetList[$each_ag];
					len=ag.group.length;
					for(var i=0;i<len;++i){
						fighter=ag.group[i];
						if(fighter)
							fighter.addBuff(this.skill.effect_self.buff_id+"_"+this.skill.effect_self.buff_lv);
					}
				}
			}
		}
	}

	__proto.SK10=function(valid){
		this.SK1.call(this,valid);
	}

	__proto.SK11=function(valid){
		var ary;
		var len=0;
		var target;
		var t_prop;
		for (var j=0;j< this.targetList.length;++j){
			target=this.targetList[j];
			if(!target || target.property.f_hp<=0)continue ;
			t_prop=target.property;
			if(valid){
				var v=t_prop.increaseValue("hit" ,this.skill.effect_enemy.hit);
			}
			else{
				t_prop.decreaseValue("hit" ,this.skill.effect_enemy.hit);
			}
		}
		if(valid){
			this.param=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl("SK11_skill_hit"),null);
			this.param.x=this.pos[0];
			this.param.y=this.pos[1];
			BattleWorld.getInstance().addEffect(this.param ,2);
		}
		else{
			BattleWorld.getInstance().removeEffect(this.param);
			PlayerUtil.returnBattleSwfPlayer(this.param);
			this.param=null;
		}
	}

	//终极净化
	__proto.SK12=function(valid){
		if(!valid)return;
		var ary;
		var target;
		var t_prop;
		var ag;
		var len=0;
		var lordProp=Datas.battleData.lord["1"].lord_property;
		for (var j=0;j< this.targetList.length;++j){
			ag=this.targetList[j];
			len=ag.group.length;
			for(var i=0;i<len;++i){
				target=ag.group[i];
				if(!target || target.property.f_hp<=0)continue ;
				target.disperseDeBuff();
				t_prop=target.property;
				var temp=this.skill.effect_self.hp;
				t_prop.updateHp(temp);
				BattleUtil.showDamage(target,"" ,0,temp ,1);
			}
		}
	}

	__proto.SK13=function(valid){
		this.SK1.call(this,valid);
	}

	__proto.SK14=function(valid){
		if(valid){
			BattleContent.removeBarrierRect(this.param);
			var temp=new ArmyGroupInfo();
			temp.id=10000;
			temp.camp=1;
			temp.pos=0
			temp.gridX=this.pos[0];
			temp.gridY=this.pos[1]-EnumTile.SPACE_HEIGHT;
			temp.name="召唤物";
			temp.heroId=this.skill.effect_self.target;
			temp.heroPos=1;
			temp.star=0;
			temp.heroProperty=null;
			temp.heroSkills=null;
			temp.buff=null;
			temp.soldier_buff=null;
			temp.military_lv=0;
			var hc=HeroConfig.getConfig(temp.heroId);
			if(!temp.heroSkills){
				temp.heroSkills={};
			}
			if(hc.sk5)
				temp.heroSkills[hc.sk5]=1;
			if(hc.sk1)
				temp.heroSkills[hc.sk1]=1;
			if(hc.sk2)
				temp.heroSkills[hc.sk2]=1;
			if(hc.sk3){
				temp.heroSkills[hc.sk3]=1;
				temp.heroBigSkill=SkillConfig.getSkillById(hc.sk3,temp.heroSkills[hc.sk3]);
			}
			this.armyGroup=BattleWorld.getInstance().addArmyGroup(temp);
			this.armyGroup.onEvent("walking");
			this.armyGroup.hero.validTime=this.skill.effect_self.time;
			var prop=this.armyGroup.hero.property;
			if(this.skill.effect_self.atk_p_coff)
				prop.f_atk_p *=this.skill.effect_self.atk_p_coff;
			if(this.skill.effect_self.atk_m_coff)
				prop.f_atk_m *=this.skill.effect_self.atk_m_coff;
			if(this.skill.effect_self.def_p_coff)
				prop.f_def_p *=this.skill.effect_self.def_p_coff;
			if(this.skill.effect_self.def_m_coff)
				prop.f_atk_m *=this.skill.effect_self.def_m_coff;
			if(this.skill.effect_self.hp_coff){
				prop.f_hp *=this.skill.effect_self.hp_coff;
				prop.hp=prop.f_hp;
				prop.hp_max=prop.f_hp;
				prop.f_hp_max=prop.f_hp;
			}
		}
		else
		BattleWorld.getInstance().remove(this.armyGroup);
	}

	//士气振奋
	__proto.SK15=function(valid){
		if(!valid)return;
		var ary;
		var target;
		var t_prop;
		var ag;
		var len=0;
		for (var j=0;j< this.targetList.length;++j){
			ag=this.targetList[j];
			len=ag.group.length;
			for(var i=0;i<len;++i){
				target=ag.group[i];
				if(!target || target.property.f_hp<=0 || target.isHero)continue ;
				target.addBuff(this.skill.effect_self.buff_id+"_"+this.skill.effect_self.buff_lv);
			}
		}
	}

	return LordSkillDamageUnit;
})(DamageUnit)


//class battle.damage.SkillDamageUnit extends battle.damage.DamageUnit
var SkillDamageUnit=(function(_super){
	function SkillDamageUnit(){
		this.attacker=null;
		this.skill=null;
		this.targetList=null;
		this.result=null;
		this.time=0;
		SkillDamageUnit.__super.call(this);
		this.result={};
	}

	__class(SkillDamageUnit,'battle.damage.SkillDamageUnit',_super);
	var __proto=SkillDamageUnit.prototype;
	__proto.setProp=function(__params){
		var params=arguments;
		this.attacker=params[0];
		this.skill=params[1];
		this.targetList=params[2];
		this.time=BattleUtil.getSkillHurtDelay(this.attacker,this.skill ,this.targetList);
	}

	// time=2;
	__proto.calc=function(){
		if((--this.time)<=0){
			var attacker_prop=this.attacker.property;
			var ary;
			var len=0;
			var target;
			var t_prop;
			var hurt=0;
			var triggerBuff=false;
			var attacker_hero=this.attacker.belongGroup.hero;
			var target_hero;
			if(this.skill.effect_enemy){
				var isSkillVampire=false;
				for (var j=0;j< this.targetList.length;++j){
					if(((this.targetList[j])instanceof battle.entitys.ArmyGroup )){
						ary=(this.targetList[j]).group;
					}
					else{
						ary=[ this.targetList[j]];
					}
					len=ary.length;
					if(this.skill.effect_enemy.buff_id && WarringData.random.getNext()<=this.skill.effect_enemy.occur_rate){
						triggerBuff=true;
					}
					else{
						triggerBuff=false;
					};
					var tempInt=0;
					for(var i=0;i<len;++i){
						target=ary[i];
						if(!target || target.property.f_hp<=0)
							continue ;
						target_hero=target.belongGroup.hero;
						t_prop=target.property;
						HurtJudge.calc(attacker_prop ,t_prop ,this.skill,this.result); ///***
						hurt=this.result.value;
						if(isNaN(hurt))hurt=0;
						if(hurt>0){
							if(attacker_prop.camp==1){
								WarringData.output1[attacker_prop.team_pos]+=hurt; ///***
							}
							else{
								WarringData.output2[attacker_prop.team_pos]+=hurt;
							}
							if(this.skill.effect_enemy.vampire>0 && !isSkillVampire){
								isSkillVampire=true;
								tempInt=hurt *this.skill.effect_enemy.vampire;
								attacker_prop.updateHp(tempInt);
								BattleUtil.showDamage(this.attacker,"",0,tempInt,1);
							}
							if(attacker_prop.f_vampire >0 && this.skill.type==0){
								tempInt=hurt *attacker_prop.f_vampire;
								attacker_prop.updateHp(hurt *attacker_prop.f_vampire);
								BattleUtil.showDamage(this.attacker,"",0,tempInt,1);
							}
						}
						t_prop.updateHp(-hurt);
						if(t_prop.f_hp <=0){
							if(this.skill.type !=3){
								if(attacker_hero)attacker_hero.property.f_anger+=target.isHero?FightConstant.kill_hero_anger:FightConstant.kill_soldier_anger;
							}
						}
						else{
							if(this.skill.type !=3){
								if(this.attacker.isHero && target.isHero){
									if(attacker_hero)attacker_hero.property.f_anger+=FightConstant.attack_hero_anger;
									if(t_prop.buffState !="invincible"){
										if(target_hero)target_hero.property.f_anger+=FightConstant.be_attacked_hero_anger;
									}
								}
								else if(!this.attacker.isHero && target.isHero && t_prop.buffState !="invincible"){
									if(target_hero)target_hero.property.f_anger+=FightConstant.be_attacked_soldier_anger;
								}
							}
							target.beAttack(this.skill);
							if(triggerBuff){
								target.addBuff(this.skill.effect_enemy.buff_id+"_"+this.skill.effect_enemy.buff_lv);
							}
						}
						BattleUtil.showDamage(target,"" ,this.result.type,-this.result.value ,this.attacker.isOurFighter?2:0);
					}
				}
			}
			if(this.skill.effect_self){
				if(this.skill.effect_enemy){
					this.targetList=TargetFinder.findTargets(this.attacker,null,1 ,this.skill.effect_self.target);
				}
				if(this.targetList && this.targetList.length>0){
					if(this.skill.effect_self.buff_id && WarringData.random.getNext()<=this.skill.effect_self.occur_rate){
						triggerBuff=true;
					}
					else{
						triggerBuff=false;
					};
					var tempV=0;
					for (j=0;j<this.targetList.length;++j){
						if(((this.targetList[j])instanceof battle.entitys.ArmyGroup ))
							ary=(this.targetList[j]).group;
						else
						ary=[ this.targetList[j]];
						len=ary.length
						for(i=0;i<len;++i){
							target=ary[i];
							if(!target || target.property.f_hp<=0)continue ;
							t_prop=target.property;
							if(this.skill.effect_self.hp){
								if(this.skill.effect_self.hp <10)
									tempV=(attacker_prop.isAtkPtype?attacker_prop.f_atk_p:attacker_prop.f_atk_m)*this.skill.effect_self.hp;
								else
								tempV=this.skill.effect_self.hp;
								if(tempV>0){
									t_prop.updateHp(tempV);
									BattleUtil.showDamage(target,"" ,0,tempV ,1);
								}
							}
							if(triggerBuff){
								target.addBuff(this.skill.effect_self.buff_id+"_"+this.skill.effect_self.buff_lv);
							}
						}
					}
				}
			}
			this.queue.remove(this);
			this.destruct();
		}
	}

	//销毁
	__proto.destruct=function(){
		this.attacker=null;
		this.skill=null;
		this.targetList=null;
		_super.prototype.destruct.call(this);
	}

	return SkillDamageUnit;
})(DamageUnit)


//class battle.step.effects.DragonFireEffect extends battle.step.effects.BaseStepEffect
var DragonFireEffect=(function(_super){
	function DragonFireEffect(){
		this.count=0;
		DragonFireEffect.__super.call(this);
	}

	__class(DragonFireEffect,'battle.step.effects.DragonFireEffect',_super);
	var __proto=DragonFireEffect.prototype;
	__proto.run=function(){
		var _$this=this;
		var effectConfig=EffectConfig.table[this._effect];
		var angleAry=DragonFireEffect.angles[int(this._master.isFaceFornt)];
		for(var i=0;i<angleAry.length;++i){
			var movie=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(String(this._effect)),null,
			"",0 ,null,"attack_e");
			var x=0,y=0;
			var pt;
			pt=this._master.centerPoint;
			x=pt.x;
			y=pt.y;
			if(effectConfig.offsetx)x+=effectConfig.offsetx;
			if(effectConfig.offsety)y+=effectConfig.offsety;
			if(effectConfig.rotation){
				if(this._master.isFaceFornt){
					movie.rotation=angleAry[i];
					x+=effectConfig.offset_front.x-256;
					y+=effectConfig.offset_front.y-256;
				}
				else{
					movie.rotation=angleAry[i];
					x+=effectConfig.offset_back.x-256;
					y+=effectConfig.offset_back.y-256;
				}
			}
			movie.x=x;
			movie.y=y;
			movie.loop=false;
			movie.onFrameEnd(null,function(swf){
				BattleWorld.getInstance().removeEffect(swf);
				PlayerUtil.returnBattleSwfPlayer(swf);
				_$this.count++;
				if(_$this.count==angleAry.length){
					_$this._onComplete && _$this._onComplete.call(_$this._caller);
					_$this.destory();
				}
			},[movie]);
			BattleWorld.getInstance().addEffect(movie,effectConfig.layer>0?4:2);
		}
	}

	__static(DragonFireEffect,
	['angles',function(){return this.angles=[[-60,-30,0],[180,150,120]];}
	]);
	return DragonFireEffect;
})(BaseStepEffect)


//class battle.step.effects.SlashStepEffect extends battle.step.effects.BaseStepEffect
var SlashStepEffect=(function(_super){
	function SlashStepEffect(){
		this.count=0;
		SlashStepEffect.__super.call(this);
	}

	__class(SlashStepEffect,'battle.step.effects.SlashStepEffect',_super);
	var __proto=SlashStepEffect.prototype;
	__proto.run=function(){
		if(!this._effect)return;
		var effectConfig=EffectConfig.table[this._effect];
		var movie=PlayerUtil.getSwfPlayer(UrlManager.getSkillModelUrl(String(this._effect)),null,
		"",effectConfig.multi_dir >0 ? this._master.getSwfPlayerDir():0,"SlashEffect");
		var pt=this._target.centerPoint;
		var offset=SlashStepEffect.pos[this.count];
		movie.rotation=SlashStepEffect.angles[this.count];
		movie.x=pt.x;
		movie.y=pt.y;
		movie.loop=false;
		movie.onFrameEnd(null,function(){
			BattleWorld.getInstance().removeEffect(movie);
			PlayerUtil.returnSwfPlayer(movie);
		});
		BattleWorld.getInstance().addEffect(movie,effectConfig.layer>0?4:2);
		if(this.count < SlashStepEffect.nextMotion.length){
			movie.setKeyFrameCallback(SlashStepEffect.nextMotion[this.count] ,this,this.run);
		}
		this.count++;
		if(this.count==2){
			this._onComplete && this._onComplete.call(this._caller);
		}
		if(this.count==SlashStepEffect.pos.length)
			this.destory();
	}

	__static(SlashStepEffect,
	['pos',function(){return this.pos=[new Point(268,206),new Point(220,197),new Point(323,203),new Point(152,293),new Point(188,177)];},'nextMotion',function(){return this.nextMotion=[4,4,4,2];},'angles',function(){return this.angles=[-19,-128,6,144,215];}
	]);
	return SlashStepEffect;
})(BaseStepEffect)


//class battle.step.trajectory.ArrowTrajectory extends battle.step.trajectory.BaseTrajectory
var ArrowTrajectory=(function(_super){
	function ArrowTrajectory(){
		ArrowTrajectory.__super.call(this);
	}

	__class(ArrowTrajectory,'battle.step.trajectory.ArrowTrajectory',_super);
	var __proto=ArrowTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.renew=function(){}
	__proto.destroy=function(){
		_super.prototype.destroy.call(this);
	}

	__proto.run=function(caller,onComplete){
		_super.prototype.run.call(this,caller,onComplete);
		var startX=this._master.mapX;
		var startY=this._master.mapY;
		var endX=this._target.centerX;
		var endY=this._target.centerY;
		var isFront=this._master.isFaceFornt;
		var offset=isFront? this._effectConfig.offset_front:this._effectConfig.offset_back;
		var baseWidth=this._master.isHero ? 256:128;
		this._trajectory.x=startX+(offset.x-baseWidth);
		this._trajectory.y=startY+(offset.y-baseWidth);
		var destX=endX;
		var destY=endY+(this._effectConfig.targetOffsetY ?this._effectConfig.targetOffsetY:-40);
		var distance=FP.distance(startX,startY ,endX,endY);
		var time=distance / this.speed *1000;
		var bx=this._trajectory.x+(destX-this._trajectory.x)*0.5;
		var by=this._trajectory.y+(destY-this._trajectory.y)*0.5+(this._effectConfig.bezierOffsetY?this._effectConfig.bezierOffsetY:-60);
		if(this._effectConfig.rotation !=0){
			if(isFront)
				this._trajectory.rotation=150;
			else
			this._trajectory.rotation=-30;
		}
		Tween.to(this._trajectory,{x:destX,y:destY},time,Ease.linearIn,new Handler(this,this.onTrajectoryComplete),0,true);
	}

	// });
	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		BattleWorld.getInstance().removeEffect((this._trajectory));
		var cb=this._onComplete;
		cb && cb.apply(this._caller,[this]);
		this.destroy();
	}

	return ArrowTrajectory;
})(BaseTrajectory)


//class battle.step.trajectory.DownfallTrajectory extends battle.step.trajectory.BaseTrajectory
var DownfallTrajectory=(function(_super){
	function DownfallTrajectory(){
		DownfallTrajectory.__super.call(this);
	}

	__class(DownfallTrajectory,'battle.step.trajectory.DownfallTrajectory',_super);
	var __proto=DownfallTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.renew=function(){}
	__proto.destroy=function(){
		_super.prototype.destroy.call(this);
	}

	__proto.run=function(caller,onComplete){
		_super.prototype.run.call(this,caller,onComplete);
		var isFront=this._master.isFaceFornt;
		var destX=this._target.centerX;
		var destY=this._target.centerY;
		var offsetx=96;
		var offsety=-300;
		if(this._effectConfig.offsetx)
			offsetx=this._effectConfig.offsetx;
		if(this._effectConfig.offsety)
			offsety=this._effectConfig.offsety;
		if(!isFront){
			offsetx *=-1;
		}
		this._trajectory.x=destX+offsetx;
		this._trajectory.y=destY+offsety;
		if(this._effectConfig.rotation)
			this._trajectory.rotation=FP.angle_p(this._trajectory.x,this._trajectory.y ,destX,destY)-90;
		Tween.to(this._trajectory,{x:destX,y:destY},0.2 *1000,Ease.linearIn,new Handler(this,this.onTrajectoryComplete),0,true);
	}

	// });
	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		BattleWorld.getInstance().removeEffect((this._trajectory));
		var cb=this._onComplete;
		cb && cb.apply(this._caller,[this]);
		this.destroy();
	}

	return DownfallTrajectory;
})(BaseTrajectory)


//class battle.step.trajectory.FireMasterTrajectory extends battle.step.trajectory.BaseTrajectory
var FireMasterTrajectory=(function(_super){
	function FireMasterTrajectory(){
		this.count=0;
		FireMasterTrajectory.__super.call(this);
	}

	__class(FireMasterTrajectory,'battle.step.trajectory.FireMasterTrajectory',_super);
	var __proto=FireMasterTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.renew=function(){}
	__proto.destroy=function(){
		_super.prototype.destroy.call(this);
	}

	__proto.run=function(caller,onComplete){
		var _$this=this;
		_super.prototype.run.call(this,caller,onComplete);
		var startX=this._master.mapX;
		var startY=this._master.mapY;
		var endX=this._target.centerX;
		var endY=this._target.centerY;
		this.count=3;
		var isFront=this._master.isFaceFornt;
		var offset=isFront? this._effectConfig.offset_front:this._effectConfig.offset_back;
		var baseWidth=this._master.isHero ? 256:128;
		this._trajectory.x=startX+(offset.x-baseWidth);
		this._trajectory.y=startY+(offset.y-baseWidth);
		var destX=endX;
		var destY=endY-60;
		if(this._effectConfig.rotation !=0){
			this._trajectory.rotation=-FP.angle(this._trajectory.x,this._trajectory.y ,destX,destY);
		};
		var distance=FP.distance(startX,startY ,endX,endY);
		var time=distance / this.speed *1000;
		Tween.to(this._trajectory,{x:destX,y:destY},time ,Ease.linearIn,new Handler(this,this.onTrajectoryComplete,[this._trajectory]),0,true);
		var i=0;
		Laya.timer.once(130,this,
		function(){
			var effect=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(_$this._effectConfig.id),
			null,"",_$this._effectConfig.multi_dir>0?(_$this._trajectory).curDir:0,null,"traEffect");
			BattleWorld.getInstance().addEffect(effect ,_$this._effectConfig.layer>0?4:2);
			var oy=0;
			var ox=0;
			if(i==0){
				ox=(isFront?0:-50);
				oy=(isFront?-50:0);
				effect.x=_$this._master.mapX+(offset.x-baseWidth)+ox;
				effect.y=_$this._master.mapY+(offset.y-baseWidth)+oy;
			}
			else{
				ox=(isFront?50:0);
				oy=(isFront?0:50);
				effect.x=_$this._master.mapX+(offset.x-baseWidth)+ox;
				effect.y=_$this._master.mapY+(offset.y-baseWidth)+oy;
			}
			effect.rotation=-FP.angle(effect.x,effect.y ,destX,destY);
			Tween.to(effect,{x:destX,y:destY},time,Ease.linearIn,Handler.create(this,_$this.onTrajectoryComplete,[effect]),0,true);
			++i;
		});
	}

	__proto.onUpdate=function(__params){}
	// (params[0] as SwfPlayer).advanceTime(BattleUtil.interval );
	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		var effect=params[0];
		var effectName=this._skillObj.atk_step3!=""?this._skillObj.atk_step3:this._skillObj.atk_type;
		var effectConfig=EffectConfig.table[effectName];
		if (effectConfig){
			var movie=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(effectName),null,
			"",effectConfig.multi_dir >0 ? this._master.getSwfPlayerDir():0 ,null,"attack_e");
			movie.x=effect.x;
			movie.y=effect.y;
			movie.loop=false;
			movie.onFrameEnd(null,function(e){
				BattleWorld.getInstance().removeEffect(movie);
				PlayerUtil.returnBattleSwfPlayer(movie);
			});
			BattleWorld.getInstance().addEffect(movie,effectConfig.layer>0?4:2);
		}
		this.count--;
		BattleWorld.getInstance().removeEffect((params[0]));
		if(((params[0])instanceof framework.mvc.view.player.SwfPlayer )&& !(params[0]).destructed)
			PlayerUtil.returnBattleSwfPlayer((params[0]));
		if(this.count <=0){
			var cb=this._onComplete;
			if(cb !=null){
				cb.apply(this._caller,[this]);
			}
			this.destroy();
		}
	}

	return FireMasterTrajectory;
})(BaseTrajectory)


//class battle.step.trajectory.FlyMoreTrajectory extends battle.step.trajectory.BaseTrajectory
var FlyMoreTrajectory=(function(_super){
	function FlyMoreTrajectory(){
		this.arr=null;
		FlyMoreTrajectory.__super.call(this);
	}

	__class(FlyMoreTrajectory,'battle.step.trajectory.FlyMoreTrajectory',_super);
	var __proto=FlyMoreTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.run=function(caller,onComplete){
		_super.prototype.run.call(this,caller,onComplete);
		var startX=this._master.mapX;
		var startY=this._master.mapY;
		var endX=this._target.centerX;
		var endY=this._target.centerY;
		var isFront=this._master.isFaceFornt;
		var offset=isFront? this._effectConfig.offset_front:this._effectConfig.offset_back;
		var baseWidth=this._master.isHero ? 256:128;
		this._trajectory.x=startX+(offset.x-baseWidth);
		this._trajectory.y=startY+(offset.y-baseWidth);
		var destX=endX;
		var destY=endY-50;
		if(this._effectConfig.rotation !=0){
			if(isFront)
				this._trajectory.rotation=150;
			else
			this._trajectory.rotation=-30;
		};
		var distance=FP.distance(startX,startY ,endX,endY);
		var time=distance / this.speed *1000;
		Tween.to(this._trajectory,{x:destX,y:destY},time,Ease.linearIn,new Handler(this,this.onTrajectoryComplete),0,true);
		this.arr=[this._trajectory];
		var offP=[[-80,-40],[-20,50],[70,60]];
		for (var i=0;i < 3;i++){
			var effect=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(this._effectConfig.id),null,"" ,0,null,"traEffect");
			effect.loop=false;
			effect.rotation=this._trajectory.rotation;
			effect.x=this._trajectory.x+offP[i][0];
			effect.y=this._trajectory.y+offP[i][1];
			if(this._effectConfig.layer >0)
				BattleWorld.getInstance().addEffect(effect ,4);
			else
			BattleWorld.getInstance().addEffect(effect ,2);
			this.arr.push(effect);
			Tween.to(this._trajectory,{x:destX+offP[i][0] ,y:destY+offP[i][1]},time,Ease.linearIn,null,0,true);
		}
	}

	//TweenLite.to(effect ,time,{x:destX+offP[i][0] ,y:destY+offP[i][1] ,overwrite:1,ease:Linear.easeIn});
	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		var swf;
		for (var i=0;i < this.arr.length;i++){
			swf=this.arr [i];
			if(swf){
				BattleWorld.getInstance().removeEffect(swf);
				if(!swf.destructed)
					PlayerUtil.returnBattleSwfPlayer(swf);
			}
		};
		var cb=this._onComplete;
		cb && cb.apply(this._caller,[this]);
		this.destroy();
	}

	return FlyMoreTrajectory;
})(BaseTrajectory)


//class battle.step.trajectory.IceArrowTrajectory extends battle.step.trajectory.BaseTrajectory
var IceArrowTrajectory=(function(_super){
	function IceArrowTrajectory(){
		this.destX=0;
		this.destY=0;
		this.distance=0;
		this.time=NaN;
		this.index=0;
		this.startX=NaN;
		this.startY=NaN;
		this.rotation=NaN;
		this.count=0;
		this._arrayhandle=[];
		IceArrowTrajectory.__super.call(this);
	}

	__class(IceArrowTrajectory,'battle.step.trajectory.IceArrowTrajectory',_super);
	var __proto=IceArrowTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.destroy=function(){
		if(this._arrayhandle && this._arrayhandle.length > 0){
			while(this._arrayhandle.length > 0){
				var id=this._arrayhandle.pop();
				TimerManager.instance.remove(id);
			}
			this._arrayhandle=null;
		}
		_super.prototype.destroy.call(this);
		this.index=0;
	}

	// arr=null;
	__proto.run=function(caller,onComplete){
		_super.prototype.run.call(this,caller,onComplete);
		var isFront=this._master.isFaceFornt;
		this.destX=this._target.centerX;
		this.destY=this._target.centerY;
		var offsetx=100;
		var offsety=-300;
		if(!isFront){
			offsetx *=-1;
		}
		this._trajectory.x=this.destX+offsetx;
		this._trajectory.y=this.destY+offsety;
		this.startX=this._trajectory.x;
		this.startY=this._trajectory.y;
		if(this._effectConfig.rotation)
			this._trajectory.rotation=isFront?15:-15;
		this.rotation=this._trajectory.rotation;
		this.time=0.2 *1000;
		Tween.to(this._trajectory,{x:this.destX,y:this.destY},this.time,Ease.linearIn,Handler.create(this,this.onEffectComplete ,[this._trajectory]),0,true);
		this.count=6;
		var handlerId=TimerManager.instance.add(100,5,new Handler(this,this.onAddArrow));
		this._arrayhandle.push(handlerId);
	}

	__proto.onAddArrow=function(currentRepeatCount,totalRepeatCount,guid){
		if(this._arrayhandle && this._arrayhandle.length > 0){
			this._arrayhandle.shift();
		};
		var effect=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(this._effectConfig.id),null,"",0,null,"traEffect");
		effect.loop=false;
		effect.rotation=this.rotation;
		effect.x=this.startX+IceArrowTrajectory.offP[currentRepeatCount-1][0];
		effect.y=this.startY+IceArrowTrajectory.offP[currentRepeatCount-1][1];
		BattleWorld.getInstance().addEffect(effect ,4);
		Tween.to(effect,{x:this.destX+IceArrowTrajectory.offP[this.index][0] ,y:this.destY+IceArrowTrajectory.offP[this.index][1]},this.time,null,Handler.create(this,this.onEffectComplete,[effect]),0,true);
	}

	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		var cb=this._onComplete;
		cb && cb.apply(this._caller,[this]);
		this.destroy();
	}

	__proto.onEffectComplete=function(__params){
		var params=arguments;
		var effect=params[0];
		var effectName=this._skillObj.atk_step3!=""?this._skillObj.atk_step3:this._skillObj.atk_type;
		var effectConfig=EffectConfig.table[effectName];
		if (effectConfig){
			var movie=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(effectName),null,
			"",effectConfig.multi_dir >0 ? this._master.getSwfPlayerDir():0 ,null,"attack_e");
			movie.x=effect.x;
			movie.y=effect.y;
			movie.loop=false;
			movie.onFrameEnd(null,function(e){
				BattleWorld.getInstance().removeEffect(movie);
				PlayerUtil.returnBattleSwfPlayer(movie);
			});
			BattleWorld.getInstance().addEffect(movie,effectConfig.layer>0?4:2);
		}
		BattleWorld.getInstance().removeEffect(effect);
		if(!effect.destructed)
			PlayerUtil.returnBattleSwfPlayer(effect);
		this.count--;
		if(this.count <=0){
			this.onTrajectoryComplete();
		}
	}

	__static(IceArrowTrajectory,
	['offP',function(){return this.offP=[[-20,-40],[-20,50],[30,20],[-25,-30],[20,10],[15,20]];}
	]);
	return IceArrowTrajectory;
})(BaseTrajectory)


//class battle.step.trajectory.IceThornTrajectory extends battle.step.trajectory.BaseTrajectory
var IceThornTrajectory=(function(_super){
	function IceThornTrajectory(){
		this.ary=null;
		this.dir=0;
		// onUpdate:onUpdate,onUpdateParams:[obj]});
		this.frameCount=1;
		IceThornTrajectory.__super.call(this);
	}

	__class(IceThornTrajectory,'battle.step.trajectory.IceThornTrajectory',_super);
	var __proto=IceThornTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.renew=function(){}
	__proto.destroy=function(){
		_super.prototype.destroy.call(this);
		this.ary.length=0;
	}

	__proto.run=function(caller,onComplete){
		_super.prototype.run.call(this,caller,onComplete);
		if(this._effectConfig.rotation){
			this.dir=this._master.getSwfPlayerDir();
		}
		else{
			this.dir=0
		};
		var isFront=this._master.isFaceFornt;
		(this._trajectory).loop=false;
		this._trajectory.x=this._master.mapX;
		this._trajectory.y=this._master.mapY;
		this._trajectory.visible=false;
		var destX=this._target.centerX;
		var destY=this._target.centerY;
		var distance=FP.distance(this._trajectory.x,this._trajectory.y ,destX,destY);
		var time=distance / this.speed *1000;
		this.frameCount=1;
		this.ary=[this._trajectory];
		var obj={x:this._trajectory.x,y:this._trajectory.y};
		Tween.to(this._trajectory,{x:destX,y:destY},time,Ease.linearIn,new Handler(this,this.onTrajectoryComplete ,[obj]),0,true);
	}

	__proto.onUpdate=function(__params){
		var params=arguments;
		if(this.frameCount % 4==0){
			var effect=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(this._effectConfig.id),null,"",this.dir
			,null,"traEffect");
			effect.loop=false;
			effect.x=params[0].x;
			effect.y=params[0].y;
			if(this._effectConfig.layer >0)
				BattleWorld.getInstance().addEffect(effect ,4);
			else
			BattleWorld.getInstance().addEffect(effect ,2);
			this.ary.push(effect);
		}
		this.frameCount++;
	}

	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		var effect=PlayerUtil.getBattleSwfPlayer(UrlManager.getSkillModelUrl(this._effectConfig.id),null,"",this.dir ,null,"traEffect");
		effect.loop=false;
		effect.x=params[0].x;
		effect.y=params[0].y;
		if(this._effectConfig.layer >0)
			BattleWorld.getInstance().addEffect(effect ,4);
		else
		BattleWorld.getInstance().addEffect(effect ,2);
		this.ary.push(effect);
		effect.onFrameEnd(this,this.endEffect);
	}

	__proto.endEffect=function(__args){
		var args=arguments;
		var sp;
		for(var $each_sp in this.ary){
			sp=this.ary[$each_sp];
			BattleWorld.getInstance().removeEffect(sp);
			if(!sp.destructed)
				PlayerUtil.returnBattleSwfPlayer(sp);
		};
		var cb=this._onComplete;
		cb && cb.apply(this._caller,[this]);
		this.destroy();
	}

	return IceThornTrajectory;
})(BaseTrajectory)


//class battle.step.trajectory.MagicBallTrajectory extends battle.step.trajectory.BaseTrajectory
var MagicBallTrajectory=(function(_super){
	function MagicBallTrajectory(){
		MagicBallTrajectory.__super.call(this);
	}

	__class(MagicBallTrajectory,'battle.step.trajectory.MagicBallTrajectory',_super);
	var __proto=MagicBallTrajectory.prototype;
	Laya.imps(__proto,{"battle.step.trajectory.ITrajectory":true})
	__proto.renew=function(){}
	__proto.destroy=function(){
		_super.prototype.destroy.call(this);
	}

	__proto.run=function(caller,onComplete){
		_super.prototype.run.call(this,caller,onComplete);
		var isFront=this._master.isFaceFornt;
		var offset=isFront? this._effectConfig.offset_front:this._effectConfig.offset_back;
		var baseWidth=this._master.isHero ? 256:128;
		this._trajectory.x=this._master.mapX+(offset.x-baseWidth);
		this._trajectory.y=this._master.mapY+(offset.y-baseWidth);
		var destX=this._target.centerX;
		var destY=this._target.centerY;
		if(this._effectConfig.multi_dir){
			(this._trajectory).changeDir(this._master.getSwfPlayerDir());
		}
		else if(this._effectConfig.rotation !=0){
			if(isFront)
				this._trajectory.rotation=150;
			else
			this._trajectory.rotation=-30;
		};
		var distance=FP.distance(this._master.mapX ,this._master.mapY ,destX,destY);
		var time=distance / this.speed *1000;
		Tween.to(this._trajectory,{x:destX,y:destY-50 },time,null,new Handler(this,this.onTrajectoryComplete),0,true);
	}

	// TweenLite.to(_trajectory ,time,{x:destX ,y:destY-50 ,overwrite:1,ease:Linear.easeOut,useFrames:false,onComplete:onTrajectoryComplete});
	__proto.onTrajectoryComplete=function(__params){
		var params=arguments;
		if((this._trajectory instanceof framework.mvc.view.player.SwfPlayer )){
			BattleWorld.getInstance().removeEffect((this._trajectory));
		};
		var cb=this._onComplete;
		cb && cb.apply(this._caller,[this]);
		this.destroy();
	}

	return MagicBallTrajectory;
})(BaseTrajectory)


//class battle.entitys.BaseBattleSprite extends laya.display.Sprite
var BaseBattleSprite=(function(_super){
	function BaseBattleSprite(){
		this.guid=0;
		this._id=0;
		this._gridX=0;
		this._gridY=0;
		this._index=0;
		this._world=null;
		this._flag=null;
		this._destructed=true;
		this.tempPiexlPoint=new Point();
		this.tempGridPoint=new Point();
		BaseBattleSprite.__super.call(this);
	}

	__class(BaseBattleSprite,'battle.entitys.BaseBattleSprite',_super);
	var __proto=BaseBattleSprite.prototype;
	Laya.imps(__proto,{"framework.interfaces.IResuable":true,"framework.mvc.view.player.IAnimatable":true})
	__proto.renew=function(){
		this.destructed=false;
		this.guid=Utils.getGID();
	}

	__proto.destruct=function(){
		this.destructed=true;
		this.guid=0;
	}

	__proto.place=function(x,y){
		this.x=x;
		this.y=y;
	}

	__proto.placeToGrid=function(x,y){
		this.x=ISOMath.isoToScreenX(x,y);
		this.y=ISOMath.isoToScreenY(x,y);
	}

	__proto.update=function(){}
	__proto.advanceTime=function(passedTime){
		this.update();
	}

	__getset(0,__proto,'destructed',function(){
		return this._destructed;
		},function(value){
		this._destructed=value;
	});

	__getset(0,__proto,'mapGridX',function(){return this._gridX;});
	__getset(0,__proto,'pixelPoint',function(){
		this.tempPiexlPoint.x=this.x;
		this.tempPiexlPoint.y=this.y;
		return this.tempPiexlPoint;
	});

	__getset(0,__proto,'flag',function(){
		return this._flag;
		},function(value){
		this._flag=value;
	});

	__getset(0,__proto,'index',function(){
		return this._index;
		},function(value){
		this._index=value;
	});

	__getset(0,__proto,'gridX',function(){
		return this._gridX;
		},function(value){
		this._gridX=value;
		framework.assert(this._gridX==Math.ceil(value));
	});

	__getset(0,__proto,'world',function(){
		return this._world;
		},function(value){
		this._world=value;
	});

	__getset(0,__proto,'gridY',function(){
		return this._gridY;
		},function(value){
		this._gridY=value;
		framework.assert(this._gridY==Math.ceil(value));
	});

	__getset(0,__proto,'id',function(){
		return this._id;
		},function(value){
		this._id=value;
	});

	__getset(0,__proto,'gridPoint',function(){
		this.tempGridPoint.x=this._gridX;
		this.tempGridPoint.y=this._gridY;
		return this.tempGridPoint;
	});

	__getset(0,__proto,'centerX',function(){
		return 0;
	});

	__getset(0,__proto,'centerY',function(){
		return 0;
	});

	__getset(0,__proto,'centerPoint',function(){
		return new Point();
	});

	__getset(0,__proto,'mapGridY',function(){return this._gridY;});
	return BaseBattleSprite;
})(Sprite)


//class battle.entitys.TileSprite extends framework.mvc.view.BaseSprite
var TileSprite=(function(_super){
	function TileSprite(){
		this.boundsShape=null;
		this.campRangeShape=null;
		this.cursorShpae=null;
		this.isShowMapGird=false;
		this.isShowBounds=false;
		TileSprite.__super.call(this);
		TileSprite.inst=this;
		this.mouseEnabled=false;
		this.boundsShape=new Sprite();
		this.addChild(this.boundsShape);
		this.campRangeShape=new Sprite();
		this.addChild(this.campRangeShape);
		this.cursorShpae=new Sprite();
		this.addChild(this.cursorShpae);
	}

	__class(TileSprite,'battle.entitys.TileSprite',_super);
	var __proto=TileSprite.prototype;
	// EventCenter.add(BattleEvent.WAR_START,onWarStart );
	__proto.onAddToStage=function(e){
		_super.prototype.onAddToStage.call(this,e);
		this.toggleBounds();
		this.toggleMapGird();
	}

	__proto.onRemovedFromStage=function(e){
		_super.prototype.onRemovedFromStage.call(this,e);
	}

	__proto.showRange=function(camp){
		var b_camp_color=0;
		var r_camp_color=0;
		if(camp==1){
			b_camp_color=0xFF0000;
			r_camp_color=0x00FF00;
		}
		else{
			r_camp_color=0xFF0000;
			b_camp_color=0x00FF00;
		};
		var rect;
		if(camp==1){
			rect=new Rectangle(0,60 *0.5,20-1,60 *0.5);
		}
		else{
			rect=new Rectangle(0,0,20-1,60 *0.5);
		};
		var graps=this.campRangeShape.graphics;
		graps.clear();
		this.drawRect(rect);
	}

	__proto.hideRange=function(){
		this.campRangeShape.graphics.clear();
	}

	__proto.drawRect=function(rect){
		var row=60 *0.5;
		var col=20-1;
		var graps=this.campRangeShape.graphics;
		var i=0;
		for(i=rect.top;i<=rect.bottom;i+=rect.height){
			graps.drawLine(rect.left *EnumTile.TILE_SIZE_WIDTH+i *(-EnumTile.TILE_SIZE_WIDTH),
			rect.left *EnumTile.HALF_TILE_SIZE_WIDTH+i *(EnumTile.HALF_TILE_SIZE_WIDTH),
			rect.left *EnumTile.TILE_SIZE_WIDTH+EnumTile.TILE_SIZE_WIDTH *col+i *(-EnumTile.TILE_SIZE_WIDTH),
			rect.left *EnumTile.HALF_TILE_SIZE_WIDTH+i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *col
			,"#00FF00");
		}
		for(i=rect.left;i<=rect.right;i+=rect.width){
			graps.drawLine(-rect.top *EnumTile.TILE_SIZE_WIDTH+i *(EnumTile.TILE_SIZE_WIDTH),
			i *(EnumTile.HALF_TILE_SIZE_WIDTH)+(rect.top)*EnumTile.HALF_TILE_SIZE_WIDTH,
			-rect.top *EnumTile.TILE_SIZE_WIDTH+(-EnumTile.TILE_SIZE_WIDTH *row)+i *(EnumTile.TILE_SIZE_WIDTH),
			(rect.top)*EnumTile.HALF_TILE_SIZE_WIDTH+i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *row
			,"#00FF00");
		}
	}

	__proto.onWarStart=function(e){
		this.drawTile();
	}

	__proto.onTimer=function(__params){
		var params=arguments;
		TileSprite.inst.boundsShape.graphics.clear();
		var all=BattleContent.allArmyGroups;
		var ag;
		for(var $each_ag in all){
			ag=all[$each_ag];
			TileSprite.drawArmyGroupBounds(ag.getPlaceBounds());
		}
		var rect;
		for(var $each_rect in BattleContent.barrierList){
			rect=BattleContent.barrierList[$each_rect];
			TileSprite.drawArmyGroupBounds(rect,0xFF0000);
		}
	}

	__proto.drawTile=function(){
		var row=60;
		var col=20;
		this.graphics.clear();
		for(var i=0;i<=row;++i){
			this.graphics.drawLine(i *(-EnumTile.TILE_SIZE_WIDTH),i *(EnumTile.HALF_TILE_SIZE_WIDTH),EnumTile.TILE_SIZE_WIDTH *col+i *(-EnumTile.TILE_SIZE_WIDTH),i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *col
			,"#000000");
		}
		for(i=0;i<=col;++i){
			this.graphics.drawLine(i *(EnumTile.TILE_SIZE_WIDTH),i *(EnumTile.HALF_TILE_SIZE_WIDTH),(-EnumTile.TILE_SIZE_WIDTH *row)+i *(EnumTile.TILE_SIZE_WIDTH),i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *row
			,"#000000");
		}
		this.y=-EnumTile.HALF_TILE_SIZE_WIDTH;
	}

	__proto.toggleMapGird=function(){
		this.isShowMapGird=!this.isShowMapGird;
		if(this.isShowMapGird){
			this.drawTile();
		}
		else{
			this.graphics.clear();
		}
	}

	__proto.toggleBounds=function(){
		this.isShowBounds=!this.isShowBounds;
		if(this.isShowBounds){
			Laya.timer.loop(200,this,this.onTimer);
		}
		else{
			this.boundsShape.graphics.clear();
			Laya.timer.clear(this,this.onTimer);
		}
	}

	TileSprite.toggleMapGird=function(){
		TileSprite.inst.toggleMapGird();
	}

	TileSprite.toggleBounds=function(){
		TileSprite.inst.toggleBounds();
	}

	TileSprite.drawArmyGroupBounds=function(rect,color,clearOther){
		(color===void 0)&& (color=0x00FF00);
		(clearOther===void 0)&& (clearOther=false);
		var graphics=TileSprite.inst.boundsShape.graphics;
		if(clearOther)
			graphics.clear();
		var row=rect.height;
		var col=rect.width;
		for(var i=rect.top;i<=rect.bottom;++i){
			graphics.drawLine(rect.left *EnumTile.TILE_SIZE_WIDTH+i *(-EnumTile.TILE_SIZE_WIDTH),rect.left *EnumTile.HALF_TILE_SIZE_WIDTH+i *(EnumTile.HALF_TILE_SIZE_WIDTH),rect.left *EnumTile.TILE_SIZE_WIDTH+EnumTile.TILE_SIZE_WIDTH *col+i *(-EnumTile.TILE_SIZE_WIDTH),rect.left *EnumTile.HALF_TILE_SIZE_WIDTH+i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *col
			,"#00FF00");
		}
		for(i=rect.left;i<=rect.right;++i){
			graphics.drawLine(-rect.top *EnumTile.TILE_SIZE_WIDTH+i *(EnumTile.TILE_SIZE_WIDTH),i *(EnumTile.HALF_TILE_SIZE_WIDTH)+(rect.top)*EnumTile.HALF_TILE_SIZE_WIDTH,-rect.top *EnumTile.TILE_SIZE_WIDTH+(-EnumTile.TILE_SIZE_WIDTH *row)+i *(EnumTile.TILE_SIZE_WIDTH),(rect.top)*EnumTile.HALF_TILE_SIZE_WIDTH+i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *row
			,"#00ff00");
		}
	}

	TileSprite.drawRectBounds=function(rect,color,clearOther){
		(color===void 0)&& (color=0x00FF00);
		(clearOther===void 0)&& (clearOther=false);
		var graphics=TileSprite.inst.cursorShpae.graphics;
		if(clearOther)
			graphics.clear();
		var row=rect.height;
		var col=rect.width;
		for(var i=rect.top;i<=rect.bottom;++i){
			graphics.drawLine(rect.left *EnumTile.TILE_SIZE_WIDTH+i *(-EnumTile.TILE_SIZE_WIDTH),rect.left *EnumTile.HALF_TILE_SIZE_WIDTH+i *(EnumTile.HALF_TILE_SIZE_WIDTH),rect.left *EnumTile.TILE_SIZE_WIDTH+EnumTile.TILE_SIZE_WIDTH *col+i *(-EnumTile.TILE_SIZE_WIDTH),rect.left *EnumTile.HALF_TILE_SIZE_WIDTH+i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *col
			,"#FF0000");
		}
		for(i=rect.left;i<=rect.right;++i){
			graphics.drawLine(-rect.top *EnumTile.TILE_SIZE_WIDTH+i *(EnumTile.TILE_SIZE_WIDTH),i *(EnumTile.HALF_TILE_SIZE_WIDTH)+(rect.top)*EnumTile.HALF_TILE_SIZE_WIDTH,-rect.top *EnumTile.TILE_SIZE_WIDTH+(-EnumTile.TILE_SIZE_WIDTH *row)+i *(EnumTile.TILE_SIZE_WIDTH),(rect.top)*EnumTile.HALF_TILE_SIZE_WIDTH+i *EnumTile.HALF_TILE_SIZE_WIDTH+EnumTile.HALF_TILE_SIZE_WIDTH *row
			,"#FF0000");
		}
	}

	TileSprite.clearAll=function(){
		TileSprite.inst.graphics.clear();
		TileSprite.inst.boundsShape.graphics.clear();
		TileSprite.inst.cursorShpae.graphics.clear();
	}

	TileSprite.inst=null;
	return TileSprite;
})(BaseSprite)


/**
*描述45度的战斗站位场景
*里面包含军团,特效等
*@author fenglijun
*
*/
//class battle.world.BattleWorld extends framework.mvc.view.BaseSprite
var BattleWorld=(function(_super){
	function BattleWorld(){
		this.tileGridSprite=null;
		this._children=null;
		this.battleController=null;
		this.isVictoryOutput=false;
		this.isSendResult=false;
		this._isPause=true;
		this.isWarring=false;
		this.isMarch=false;
		this.buffDamageQueue=null;
		this.normalDamageQueue=null;
		this.lordDamageQueue=null;
		this._armyGroups=[];
		BattleWorld.__super.call(this);
		BattleWorld.layers=[];
		BattleWorld.tileMapLayer=new Sprite();
		this.addChild(BattleWorld.tileMapLayer);
		BattleWorld.layers.push(BattleWorld.tileMapLayer);
		BattleWorld.shadowLayer=new Sprite();
		this.addChild(BattleWorld.shadowLayer);
		BattleWorld.layers.push(BattleWorld.shadowLayer);
		BattleWorld.groundLayer=new Sprite();
		this.addChild(BattleWorld.groundLayer);
		BattleWorld.layers.push(BattleWorld.groundLayer);
		BattleWorld.fighterLayer=new Sprite();
		this.addChild(BattleWorld.fighterLayer);
		BattleWorld.layers.push(BattleWorld.fighterLayer);
		BattleWorld.skillLayer=new Sprite();
		this.addChild(BattleWorld.skillLayer);
		BattleWorld.layers.push(BattleWorld.skillLayer);
		BattleWorld.topLayer=new Sprite();
		this.addChild(BattleWorld.topLayer);
		BattleWorld.layers.push(BattleWorld.topLayer);
		BattleWorld.maskLayer=new Sprite();
		this.addChild(BattleWorld.maskLayer);
		BattleWorld.layers.push(BattleWorld.maskLayer);
		BattleWorld.tempLayer=new Sprite();
		this.addChild(BattleWorld.tempLayer);
		BattleWorld.layers.push(BattleWorld.tempLayer);
		this.battleController=new BattleController(this);
		this.buffDamageQueue=new DamageQueue();
		this.normalDamageQueue=new DamageQueue();
		this.lordDamageQueue=new DamageQueue();
		BattleUtil.interval=1000/30;
	}

	__class(BattleWorld,'battle.world.BattleWorld',_super);
	var __proto=BattleWorld.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.warEnd();
		this.battleController=null;
		BattleWorld._instance=null;
		BattleWorld.groundLayer=null;
		BattleWorld.fighterLayer=null;
		BattleWorld.skillLayer=null;
		BattleWorld.topLayer=null;
		this.buffDamageQueue=null;
		this.normalDamageQueue=null;
		this.lordDamageQueue=null;
		this._armyGroups=null;
		this._children=null;
		laya.display.Sprite.prototype.destroy.call(this,destroyChild);
	}

	__proto.warStart=function(vo){
		WarringData.newWar(vo);
		this.warEnd();
		if(!this.isWarring){
			this.isWarring=true;
			this.init();
		}
	}

	__proto.init=function(){
		EnumTile.setTileSize(EnumTile.currentSize);
		WarringData.phase=1;
		BattleContent.load(0,null);
		this.initArmyGroup();
		this.battleController.enable();
		framework.debug.logDebug("warinit");
		this.onInit();
		EventCenter.dispatchEvent("war_init");
	}

	// callLater(onInit ,5 );
	__proto.onInit=function(){
		this.resume();
	}

	__proto.warEnd=function(){
		if(this.isWarring){
			framework.debug.logDebug("battle end");
			this.isWarring=false;
			WarringData.warEnd();
			BattleUtil.currentFrame=0;
			BattleUtil.ticker=0;
			this.isVictoryOutput=false;
			this.isSendResult=false;
			this.isMarch=false;
			this.battleController.disable();
			this.lordDamageQueue.clear();
			this.buffDamageQueue.clear();
			this.normalDamageQueue.clear();
			BattleSound.ins.clean();
			SkillMask.destroy();
			this.removeAll();
			BattleContent.unload();
			AttackStep.reset();
			FighterFactory.returnAGToObjectPool();
			FighterFactory.returnToObjectPool();
			EventCenter.dispatchEvent("war_end");
			PlayerUtil.traceReferenceCount();
		}
	}

	__proto.march=function(){
		if(WarringData.isVerification){
			this._march();
		}
		else
		GuideManager.instance.dispatchGuide("EnterBattle",[Datas.battleData.pk_type,Datas.battleData.pk_index],Handler.create(this,this._march,null,false));
	}

	//进攻
	__proto._march=function(){
		if(!this.isMarch){
			this.isMarch=true;
			var ag;
			for(var $each_ag in this._armyGroups){
				ag=this._armyGroups[$each_ag];
				ag.onEvent("walking");
			}
			WarringData.phase=2;
			framework.debug.logDebug("march");
			EventCenter.dispatchEvent("war_start");
		}
	}

	__proto.resume=function(){this._isPause=false;}
	__proto.pause=function(){this._isPause=true;}
	__proto.onAddToStage=function(e){
		_super.prototype.onAddToStage.call(this,e);
	}

	__proto.onRemovedFromStage=function(e){
		_super.prototype.onRemovedFromStage.call(this,e);
	}

	__proto.update=function(){
		if(!this.isWarring)return;
		if(Stat.currentMemorySize > 130 *1024 *1024)
			PlayerUtil._tryClearPlayerRes();
		BattleUtil.currentFrame++;
		BattleUtil.ticker=BattleUtil.currentFrame % GameDefine.FRAME_PER_100MILLISECOND;
		if(!this._isPause){
			this.updateProperty();
		}
		SkillMask.update();
		if(BattleUtil.ticker==0){
			var ags=BattleContent.camp1;
			var hero;
			for(var i=0;i<ags.length;++i){
				hero=ags[i].hero;
				if(hero && hero.property.isAngerFull && hero.skillPool.getBigSkill()){
					if(hero.putBagSkillDelay<=0){
						hero.useBigSkill(true);
					}
				}
			}
			if(ReplayCache.mode==1 && (Datas.battleData.isAuto || WarringData.isAutoMap)){
				ags=BattleContent.camp0;
				for(i=0;i<ags.length;++i){
					hero=ags[i].hero;
					if(hero && hero.property.isAngerFull && hero.skillPool.getBigSkill()){
						hero.useBigSkill(true,true);
					}
				}
			}
		}
		ReplayCache.update();
		this.victoryJudge();
		if(WarringData.isVerification)return;
		this.updateDisplay();
		BattleSound.ins.checkSound();
	}

	__proto.skip=function(){
		while(!this.isVictoryOutput){
			this.update();
		}
		this.dispatchReport();
	}

	// WarringData.isSkipMode=false;
	__proto.calcResultSync=function(){
		while(!this.isVictoryOutput){
			this.update();
		}
		this.dispatchReport();
	}

	/**
	*快进
	*@param frame 到第几帧
	*
	*/
	__proto.fastForward=function(frame){
		while(!this.isVictoryOutput && BattleUtil.currentFrame < frame){
			this.update();
		}
		this.dispatchReport();
	}

	__proto.updateProperty=function(){
		this.lordDamageQueue.calc();
		this.buffDamageQueue.calc();
		this.normalDamageQueue.calc();
		var i=0;
		var len=this._armyGroups.length;
		if(BattleUtil.ticker==0){
			for(i=0;i< len;++i)
			this._armyGroups[i].calcRoundAction();
		}
		else if(BattleUtil.ticker==1){
			var ag;
			for(i=0;i< this._armyGroups.length;i++){
				ag=this._armyGroups[i];
				ag.updateDeath();
			}
		}
		else if(BattleUtil.ticker==2){
			for(i=0;i< len;++i)
			this._armyGroups[i].calcCoverPos();
		}
		if(WarringData.phase !=3 && BattleUtil.currentFrame % 30==0){
			WarringData.updateLordEnergy(1);
		}
		len=this._armyGroups.length;
		for(i=0;i<len;++i){
			if(this._armyGroups[i])this._armyGroups[i].update();
		}
	}

	__proto.updateDisplay=function(){
		var i=0;
		var len=0;
		var currentIndex=0;
		var bbs;
		len=this._children.length;
		for(i=0;i<len;++i){
			bbs=this._children[i];
			if(bbs){
				if(currentIndex !=i){
					this._children[currentIndex]=bbs;
					this._children[i]=null;
				}
				bbs.advanceTime(BattleUtil.interval);
				++currentIndex;
			}
		}
		if(currentIndex !=i){
			len=this._children.length;
			while(i< len){
				this._children[currentIndex++]=this._children[i++];
			}
			this._children.length=currentIndex;
		}
		if(BattleUtil.currentFrame % 13==0){
			this.layerSort(3);
		}
	}

	__proto.victoryJudge=function(){
		if(this.isVictoryOutput)return;
		var flag=this.getVictory();
		if(flag >0){
			if(WarringData.isVerification && WarringData.mode==2){
			}
			WarringData.stat[flag]+=1;
			this.isVictoryOutput=true;
			WarringData.phase=3;
			WarringData.isWarOver=true;
			WarringData.statisticalHeroProp();
			var ag;
			for(var $each_ag in this._armyGroups){
				ag=this._armyGroups[$each_ag];
				ag.onEvent("standby");
			}
			console.info("战斗打完,共跑了帧数"+BattleUtil.currentFrame);
		}
	}

	__proto.dispatchReport=function(){
		if(this.isVictoryOutput && !this.isSendResult){
			this.isSendResult=true;
			BattleSound.ins.stopMovingSound();
			if(WarringData.isVerification && !WarringData.isSkipMode){
				this.sendResult(0);
			}
			else{
				GuideManager.instance.dispatchGuide("BattleEnd",[Datas.battleData.pk_type,Datas.battleData.pk_index],new Handler(this,this.sendResult,[Datas.battleData.seed]));
			}
		}
	}

	__proto.sendResult=function(flag){
		(flag===void 0)&& (flag=0);
		if(flag!=0){
			framework.assert(flag==Datas.battleData.seed);
		};
		var replay={};
		replay.winner=this.getVictory();
		replay.mode=ReplayCache.mode;
		replay.seed=Datas.battleData.seed;
		replay.vcr=ReplayCache.data;
		replay.map=Datas.battleData.map;
		replay.ver=2.8;
		replay.totalFrames=BattleUtil.currentFrame;
		WarringData.report.replay=replay;
		WarringData.report.winner=replay.winner;
		WarringData.report.mode=replay.mode;
		WarringData.report.fps=Math.ceil(WarringData.averageFps);
		WarringData.report.sleep=WarringData.mayBeSleep;
		WarringData.report.pk_type=WarringData.pk_type;
		WarringData.report.pk_index=WarringData.pk_index;
		WarringData.report.myCamp=WarringData.myCamp;
		EventCenter.dispatchEvent("war_result_export",WarringData.report);
		WarringData.requestVo.onOutputResult && WarringData.requestVo.onOutputResult.runWith(WarringData.report);
	}

	__proto.getVictory=function(){ ///***
		if(BattleContent.camp0.length==0){
			return 1;
		}
		else if(BattleContent.camp1.length==0){
			return 2;
		}
		else if(WarringData.getBattleTime()<0){
			return 2;
		}
		else
		return 0;
	}

	__proto.layerSort=function(layer){
		var layerSp=BattleWorld.layers[layer];
		var ary=[];
		var i=0;
		var len=layerSp.numChildren;
		for(i=0;i< len;++i)
		ary.push(layerSp.getChildAt(i));
		ary.sort(function(a,b){
			if(a.realGridY < b.realGridY){
				return-1;
			}
			else if(a.realGridY==b.realGridY){
				return 0;
			}
			else{
				return 1;
			}
		});
		var temp;
		for(i=0;i<len;++i){
			temp=ary[i];
			if(layerSp.getChildIndex(temp)!=i)
				layerSp.setChildIndex(temp,i);
		}
	}

	__proto.initArmyGroup=function(){
		this._children=[];
		this._armyGroups=BattleContent.allArmyGroups;
		var agInfo;
		var all=Datas.battleData.campList1.concat(Datas.battleData.campList2);
		for(var i=0;i<all.length;++i){
			agInfo=all[i];
			agInfo.id=i+1;
			this.addArmyGroup(agInfo);
		}
		this.passiveSkillWork();
		this.layerSort(3);
	}

	__proto.addArmyGroup=function(info){
		var ag=Pool.getItemByClass("sign_ArmyGroup",ArmyGroup);
		var tempProp=new ArmyGroupProperty();
		tempProp.info=info;
		ag.renew();
		ag.property=tempProp;
		ag.id=info.id;
		ag.index=info.pos;
		ag.nickName=EnumBattleConfig.getCampName(info.camp)+info.heroId;
		ag.info=info;
		ag.gridX=info.gridX;
		ag.gridY=info.gridY;
		ag.camp=info.camp;
		ag.dir=info.camp==2?"front":"back"; ///***
		ag.soldierId=info.soldierId;
		ag.visible=false;
		if(ag.soldierId){
			ag.soldierJsonConfig=HeroLocalConfig.table[info.soldierId];
			ag.soldierConfig=SoldierConfig.getConfig(info.soldierId);
			ag.soldierConfigProperty=ag.soldierConfig.property;
			WarringData.totalSoldierCount+=info.totalSoldiers;
			WarringData.totalSoldierType[ag.soldierConfig.type]++;
		}
		if(info.heroId){
			ag.heroId=info.heroId;
			ag.heroConfig=HeroConfig.getConfig(info.heroId);
			ag.heroJsonConfig=HeroLocalConfig.table[info.heroId];
		};
		var pt=ISOMath.isoToScreen(ag.gridX,ag.gridY);
		ag.place(pt.x ,pt.y);
		this.add(ag ,3);
		ag.createFighter();
		return ag;
	}

	__proto.passiveSkillWork=function(){
		var ags=BattleContent.allArmyGroups;
		var ag;
		for(var $each_ag in ags){
			ag=ags[$each_ag];
			if(ag.hero && ag.hero.skillPool.passiveSkill)
				ag.hero.skillPool.passiveSkill.takeEffect();
		}
	}

	__proto.add=function(bbSprite,layerFlag){
		bbSprite.world=this;
		if((bbSprite instanceof battle.entitys.ArmyGroup ))BattleContent.addGroup(bbSprite);
		else
		this._children.push(bbSprite);
		BattleWorld.layers[layerFlag].addChild(bbSprite);
	}

	__proto.remove=function(bbSprite){
		if(bbSprite.world==null)return;
		if((bbSprite instanceof battle.entitys.ArmyGroup )){
			BattleContent.removeGroup(bbSprite);
		}
		else{
			var i=this._children.indexOf(bbSprite);
			if(i>=0)this._children[i]=null;
		}
		if(bbSprite.parent)bbSprite.parent.removeChild(bbSprite);
		bbSprite.world=null;
	}

	__proto.removeAll=function(){
		this._children.length=0;
		this.removeByLayer(BattleWorld.groundLayer);
		this.removeByLayer(BattleWorld.fighterLayer);
		this.removeByLayer(BattleWorld.skillLayer);
		this.removeByLayer(BattleWorld.tempLayer);
	}

	__proto.removeByLayer=function(layer){
		var sp;
		while(layer.numChildren >0){
			sp=layer.removeChildAt(layer.numChildren-1);
			if((sp instanceof battle.entitys.BaseBattleSprite )){
				if(!sp.destructed){
					sp.destruct();
					if((sp instanceof battle.entitys.ArmyGroup )){
						Pool.recover("sign_ArmyGroup" ,sp);
					}
					else if((sp instanceof battle.entitys.HeroFighter )){
						Pool.recover("sign_HeroFighter" ,sp);
					}
					else if((sp instanceof battle.entitys.SoldierFighter )){
						Pool.recover("sign_SoldierFighter" ,sp);
					}
				}
			}
			else if((sp instanceof framework.mvc.view.player.BattleSwfPlayer )){
				PlayerUtil.returnBattleSwfPlayer((sp));
			}
			else if((sp instanceof framework.mvc.view.player.SwfPlayer )){
				PlayerUtil.returnSwfPlayer((sp));
			}
			else{
				framework.assertFalse();
			}
		}
	}

	__proto.addEffect=function(effect,layerFlag){
		BattleWorld.layers[layerFlag].addChild(effect);
	}

	__proto.removeEffect=function(effect){
		effect.removeSelf();
	}

	__getset(0,__proto,'isPause',function(){return this._isPause;});
	BattleWorld.getInstance=function(){
		if(BattleWorld._instance==null)
			BattleWorld._instance=new BattleWorld();
		return BattleWorld._instance;
	}

	BattleWorld.tileMapLayer=null;
	BattleWorld.shadowLayer=null;
	BattleWorld.groundLayer=null;
	BattleWorld.fighterLayer=null;
	BattleWorld.skillLayer=null;
	BattleWorld.topLayer=null;
	BattleWorld.maskLayer=null;
	BattleWorld.tempLayer=null;
	BattleWorld.layers=null;
	BattleWorld._instance=null;
	return BattleWorld;
})(BaseSprite)


/**
*军团
*@author fenglijun
*
*/
//class battle.entitys.ArmyGroup extends battle.entitys.BaseBattleSprite
var ArmyGroup=(function(_super){
	function ArmyGroup(){
		this._group=[];
		this.row0=[];
		//第一行队列 0 0 这是相对军团面向的第一行
		this.row1=[];
		//第二行队列 1 0
		this.row2=[];
		//第三行队列 2 0
		this.absoluteRow0=[];
		//这时相对坐标系的绝对行,在正向时,取的是末行,背向时,取的是首行
		this.absoluteRow1=[];
		this.absoluteRow2=[];
		this.absRowsEmptyMap=[];
		//记录每排队伍是否为空的缓存
		this._camp=0;
		//方向
		this.info=null;
		this.soldierId=null;
		//携带的士兵类型
		this.soldierConfig=null;
		//士兵配置
		this.soldierJsonConfig=null;
		//士兵本地配置自用
		this.soldierConfigProperty=null;
		//士兵策划配置
		this.heroId=null;
		//军团英雄类型
		this.heroJsonConfig=null;
		//英雄本地配置数据
		this.heroConfig=null;
		//英雄策划配置
		this.hero=null;
		//英雄实体,只有一个
		this.heroAbsRow=0;
		//英雄所在的绝对行
		this._state=null;
		//当前状态
		this._moveControl=null;
		this.nickName=null;
		this.needCoverPos=false;
		//是否需要补位标识
		this.needUpdatePos=false;
		//是否需要更新站位
		this.needRecalcBounds=false;
		//是否需要重新计算军团占位
		this.buffStatus=null;
		//buff状态,由军团下的战斗单位维护
		this._property=null;
		this.defaultDir=null;
		/**
		*1代表是向右横向移动,-1向左横向移动 0前进
		*/
		this.crosswiseMoveFlag=0;
		this._destX=0;
		this._destY=0;
		this.buffOffsetPtMap=null;
		this.buffEffectCountMap=null;
		this.buffEffectMap=null;
		this.isFloating=false;
		this._map=new Dictionary();
		this._dir="back";
		this.tempAttackRange=new Rectangle();
		this.tempRect=new Rectangle(0,0,7,0);
		this.tempTilePoint=new Point();
		this.tempCenterTilePoint=new Point();
		this.beforeFloatY
		ArmyGroup.__super.call(this);
		this._moveControl=new MoveControl(this);
		this.buffStatus=new BuffStatus();
	}

	__class(ArmyGroup,'battle.entitys.ArmyGroup',_super);
	var __proto=ArmyGroup.prototype;
	Laya.imps(__proto,{"framework.interfaces.IResuable":true})
	__proto.renew=function(){
		_super.prototype.renew.call(this);
		this.buffStatus.renew();
		this.alpha=1;
		this._dir="back";
		this.state=new StandByState(this);
		this._moveControl.renew();
		this._group.length=0;
		this.absRowsEmptyMap.length=this.absoluteRow0.length=this.absoluteRow1.length=this.absoluteRow2.length=0;
		this.row0.length=this.row1.length=this.row2.length=0;
		this.isFloating=false;
		this._map.clear();
		this.buffEffectCountMap={};
		this.buffEffectMap={};
		this.buffOffsetPtMap={};
	}

	__proto.destruct=function(){
		this.crosswiseMoveFlag=0;
		var buffSwf;
		for (var key in this.buffEffectMap){
			buffSwf=this.buffEffectMap[key];
			delete this.buffEffectMap[key];
			BattleWorld.getInstance().removeEffect(buffSwf);
			if(!buffSwf.destructed)
				PlayerUtil.returnBattleSwfPlayer(buffSwf);
		}
		this._state=null;
		var f;
		for(var $each_f in this._group){
			f=this._group[$each_f];
			if(!f)continue ;
			if(f.parent)f.parent.removeChild(f);
			f.destruct();
			if(f.type=="soldier"){
				Pool.recover("sign_SoldierFighter" ,f);
			}
			else{
				Pool.recover("sign_HeroFighter" ,f);
			}
		}
		this._group.length=0;
		this.info=null;
		this.hero=null;
		_super.prototype.destruct.call(this);
	}

	__proto.playAction=function(value){
		var len=this._group.length;
		var fighter;
		for(var i=0;i<len;++i){
			fighter=this._group[i];
			if(fighter){
				fighter.changeState(value);
			}
		}
	}

	__proto.keepChildrenDir=function(){
		var len=this._group.length;
		for(var i=0;i<len;++i){
			if(this._group[i])this._group[i].dir=this._dir;
		}
	}

	__proto.reverse=function(dir){
		if(dir=="left" || dir=="right")return false;
		if(this.defaultDir==dir)return false;
		this.defaultDir=dir;
		var rowLen=this.rowLength;
		var temp;
		if(rowLen==3){
			this.heroAbsRow=2-this.heroAbsRow;
			temp=this.absoluteRow2;
			this.absoluteRow2=this.absoluteRow0;
			this.absoluteRow0=temp;
		}
		else if(rowLen==2){
			if(this.absRowsEmptyMap[0]){
				this.heroAbsRow=3-this.heroAbsRow;
				temp=this.absoluteRow2;
				this.absoluteRow2=this.absoluteRow1;
				this.absoluteRow1=temp;
			}
			else if(this.absRowsEmptyMap[1]){
				this.heroAbsRow=2-this.heroAbsRow;
				temp=this.absoluteRow2;
				this.absoluteRow2=this.absoluteRow0;
				this.absoluteRow0=temp;
			}
			else{
				this.heroAbsRow=1-this.heroAbsRow;
				temp=this.absoluteRow0;
				this.absoluteRow0=this.absoluteRow1;
				this.absoluteRow1=temp;
			}
		}
		return true;
	}

	/**转身**/
	__proto.turnAround=function(){
		if(this.crosswiseMoveFlag !=0)return;
		this.dir=this.isFaceFornt ? "back":"front";
	}

	__proto.createFighter=function(){
		this.defaultDir=this._dir;
		if(this.isFaceFornt){
			this.heroAbsRow=2-this.info.heroPos;
			this.absoluteRow0=this.row2;
			this.absoluteRow1=this.row1;
			this.absoluteRow2=this.row0;
		}
		else{
			this.heroAbsRow=this.info.heroPos;
			this.absoluteRow0=this.row0;
			this.absoluteRow1=this.row1;
			this.absoluteRow2=this.row2;
		};
		var fighter=null;
		var i=0;
		var prop;
		var myCamp=Datas.battleData.getMyCamp();
		var isCreatedHero=false;
		for(var row=0;row<3;++row){
			for(var col=0;col<5;++col){
				if(row==this.info.heroPos && this.info.heroId && col==2){
					if(this.info.dead)continue ;
					fighter=FighterFactory.newFighter("hero");
					isCreatedHero=true;
				}
				else if(row==this.info.heroPos && ((EnumBattleSetting.soldierMode==2 && (col==1 || col==3))|| EnumBattleSetting.soldierMode==3))
				continue ;
				else if(i < this.info.totalSoldiers){
					fighter=FighterFactory.newFighter("soldier");
					i++;
				}
				else
				continue ;
				fighter.renew();
				fighter.id=row *5+col;
				fighter.world=this.world;
				if(this.isFaceFornt)
					fighter.index=(2-row)*5+col;
				else
				fighter.index=row *5+col;
				fighter.belongGroup=this;
				prop=new FighterProperty();
				prop.camp=this.camp;
				prop.belongGroupId=this.id;
				prop.belongHeroId=this.info.heroId;
				prop.belongGroupProp=this._property;
				prop.isHero=fighter.isHero;
				prop.pos=this.info.pos;
				prop.team_pos=this.info.team_pos;
				fighter.dir=this._dir;
				if(fighter.isHero){
					if(this.id<10000){
						if(prop.camp==1)
							WarringData.heroPropListCamp1.push(prop);
						else
						WarringData.heroPropListCamp2.push(prop);
					}
					prop.elementId=this.info.heroId;
					prop.elementType="hero";
					prop.military_lv=this.info.military_lv;
					prop.mstar=this.info.star;
					prop.index=this.id;
					prop.anger_max=EnumBattleConfig.MAX_HERO_ANGER;
					prop.f_anger=FightConstant.hero_initial_anger;
					prop.setConfig(this.heroConfig);
					prop.setProperty(this.info.heroProperty);
					if(this.id<10000 && this.info.lord_property){
						prop.addLordProperty(this.info.lord_property);
					}
					fighter.nickName=this.nickName;
					fighter.bodyUrl=UrlManager.getRoleAtkModelUrl(this.heroJsonConfig.model);
					fighter.setModelScale(EnumBattleConfig.heroScale);
					fighter.keyFrame=this.heroJsonConfig.keyframe;
					fighter.skillPool=new SkillPool(fighter,this.info.heroSkills,this.heroConfig.loop_1,this.heroConfig.loop_2);
					this.hero=fighter;
				}
				else{
					prop.elementId=this.info.soldierId;
					prop.elementType="soldier";
					prop.grade=this.soldierConfig.grade;
					prop.setConfig(this.soldierConfig);
					prop.setProperty(this.info.soldierProperty);
					prop.feature=this.info.feature;
					if(this.info.soldier_buff){
						prop.addProperty(this.info.soldier_buff);
					}
					prop.index=10000+fighter.index;
					fighter.nickName=this.nickName+"_"+this.soldierJsonConfig.name;
					fighter.bodyUrl=UrlManager.getBattleSoldierSwfUrl(this.soldierJsonConfig.model ,WarringData.getCampColor(this.camp));
					fighter.setModelScale(EnumBattleConfig.soliderScale);
					fighter.keyFrame=this.soldierJsonConfig.keyframe;
					var sks={};
					sks[this.soldierConfig.property.skill_1]=1;
					fighter.skillPool=new SkillPool(fighter,sks ,null,"0");
				}
				if(this.info.buff)
					prop.addProperty(this.info.buff);
				fighter.property=prop;
				this.addChild(fighter);
				var rows=this.getRow(row);
				rows[col]=fighter;
				fighter.cols=rows;
				fighter.colIndex=col;
				this._group.push(fighter);
				this._map.set(fighter.id,fighter);
				WarringData.hpMax[this.camp]+=prop.f_hp_max;
				WarringData.hp[this.camp]+=prop.f_hp;
			}
		}
		this.calcEmptyRows(-1);
		this.updatePos();
		this.sort();
	}

	__proto.updateSoliderOrder=function(){
		if((this.state instanceof battle.control.FSM.FightState ))this.sort();
	}

	__proto.updatePos=function(){
		var rows;
		var fighter=null;
		var pt;
		for(var row=0;row<3;++row){
			rows=this.getAbsRow(row);
			for(var col=0;col<5;++col){
				fighter=rows[col];
				if(null !=fighter){
					fighter.gridX=col;
					fighter.gridY=row *EnumTile.SPACE_HEIGHT;
					pt=ISOMath.isoToScreen(fighter.gridX,fighter.gridY ,EnumTile.TILE_SIZE_WIDTH);
					fighter.x=int(pt.x);
					fighter.y=int(pt.y);
				}
			}
		}
	}

	//sort();
	__proto.sort=function(){
		var temp=[];
		var len=this.numChildren;
		for(var i=0;i<len;++i)
		temp.push(this.getChildAt(i));
		temp.sort(function(a,b){
			if(a.y < b.y){
				return-1;
			}
			else if(a.y==b.y){
				return 0;
			}
			else{
				return 1;
			}
		});
		for(i=0;i<len;++i){
			if(i !=this.getChildIndex(temp[i]))
				this.setChildIndex(temp[i],i);
		}
	}

	//重置每排的队列情况
	__proto.calcEmptyRows=function(row){
		if(row>=0){
			this.absRowsEmptyMap[row]=BattleUtil.isEmptyRow(this.getAbsRow(row));
		}
		else{
			this.absRowsEmptyMap[0]=BattleUtil.isEmptyRow(this.absoluteRow0);
			this.absRowsEmptyMap[1]=BattleUtil.isEmptyRow(this.absoluteRow1);
			this.absRowsEmptyMap[2]=BattleUtil.isEmptyRow(this.absoluteRow2);
		}
	}

	//头行
	__proto.getHeadline=function(){
		if(this.isFaceFornt){
			if(!this.absRowsEmptyMap[2])return 2;
			else if(!this.absRowsEmptyMap[1])return 1;
			else return 0;
		}
		else{
			if(!this.absRowsEmptyMap[0])return 0;
			else if(!this.absRowsEmptyMap[1])return 1;
			else return 2;
		}
	}

	//军团尾行
	__proto.getFootline=function(){
		if(this.isFaceFornt){
			if(!this.absRowsEmptyMap[0])return 0;
			else if(!this.absRowsEmptyMap[1])return 1;
			else return 2;
		}
		else{
			if(!this.absRowsEmptyMap[2])return 2;
			else if(!this.absRowsEmptyMap[1])return 1;
			else return 0;
		}
	}

	__proto.moveTo=function(gridX,gridY){
		this._destX=Math.floor(gridX);
		this._destY=Math.floor(gridY);
		framework.assert(this.gridX !=this._destX || this.gridY !=this._destY,"怎么会移动到当前格子去?");
		this.playAction("run");
		if(gridX > this._gridX){
			this.crosswiseMoveFlag=1;
			this.dir="right";
		}
		else if(gridX < this._gridX){
			this.crosswiseMoveFlag=-1;
			this.dir="left";
		}
		else{
			this.crosswiseMoveFlag=0;
			if(this._gridY < gridY)
				this.dir="front";
			else if(this._gridY > gridY)
			this.dir="back";
		}
		if(this.crosswiseMoveFlag !=0){
			BattleContent.removeFormRow(this ,this._gridX);
			BattleContent.addToRow(this,gridX);
		}
		this._move();
	}

	__proto._move=function(){
		if(this._gridX==this._destX && this._gridY==this._destY){
			return false;
		}
		else{
			var newX=this._gridX;
			var newY=this._gridY;
			if(this._gridX > this._destX){
				newX--;
			}
			else if(this.gridX < this._destX){
				newX++;
			}
			else if(this._gridY > this._destY){
				newY--;
			}
			else{
				newY++;
			}
			this._moveControl.moveTo(newX,newY ,this.getSpeed(),this,this.onMoveEnd)
			this._gridX=newX;
			this._gridY=newY;
			return true;
		}
	}

	__proto.onMoveEnd=function(){
		if(!this._move()){
			if(this.crosswiseMoveFlag!=0){
				this.crosswiseMoveFlag=0;
			}
		}
	}

	__proto.place=function(x,y){
		_super.prototype.place.call(this,x,y);
		var pt;
		var swf;
		for(var $each_swf in this.buffEffectMap){
			swf=this.buffEffectMap[$each_swf];
			pt=this.buffOffsetPtMap[swf];
			if(pt){
				swf.x=this.x+pt.x;
				swf.y=this.y+pt.y;
			}
		}
	}

	/**
	*获取军团移动速度
	*/
	__proto.getSpeed=function(){
		if(this.soldierId && this.hasSolider())
			return this.soldierConfigProperty.spd_m;
		return this.heroConfig.spd_m;
	}

	__proto.faceTo=function(target){
		if(this.crosswiseMoveFlag!=0)return;
		this.dir=target.getTilePoint().y > this.getTilePoint().y ? "front":"back";
	}

	__proto.isFacingTarget=function(target){
		var y1=this.getTilePoint().y;
		var y2=target.getTilePoint().y;
		if(y1 > y2 && this._dir=="back")
			return true;
		else if(y1 < y2 && this._dir=="front")
		return true;
		return false;
	}

	/**
	*获取军团某一排的攻击范围
	*@param row 0第一排 1第二排 2第三排
	*@param faceFornt 根据的面向情况
	*@param atkWidth 自定义的横向攻击距离 0为默认取士兵的
	*@param atkHeight 自定义的纵向攻击距离 0为默认取士兵的
	*@return 返回攻击范围矩阵
	*/
	__proto.getAttackRangeByRow=function(row,faceFornt,atkWidth,atkHeight){
		(atkWidth===void 0)&& (atkWidth=0);
		(atkHeight===void 0)&& (atkHeight=0);
		var result;
		if(this.soldierId)
			result=new Rectangle(this._gridX,this._gridY,this.soldierConfigProperty.ran_v,this.soldierConfigProperty.ran_h);
		else
		result=new Rectangle(this._gridX,this._gridY,this.heroConfig.ran_v,this.heroConfig.ran_h);
		if(atkWidth !=0)result.width=atkWidth;
		if(atkHeight !=0)result.height=atkHeight;
		if(faceFornt)
			result.y+=(row *EnumTile.SPACE_HEIGHT)+1;
		else
		result.y+=row *EnumTile.SPACE_HEIGHT-result.height;
		if(result.width !=5){
			var offsetX=Math.floor((5-result.width)*0.5);
			result.x+=offsetX;
			result.width=5-offsetX;
		}
		return result;
	}

	/**英雄攻击范围**/
	__proto.getHeroAttackRange=function(faceFornt){
		var result=new Rectangle(this._gridX,this._gridY,this.heroConfig.ran_v,this.heroConfig.ran_h);
		if(faceFornt){
			result.y+=this.heroAbsRow *EnumTile.SPACE_HEIGHT+1;
		}
		else{
			result.y+=this.heroAbsRow *EnumTile.SPACE_HEIGHT-result.height;
		}
		if(result.width !=5){
			var offsetX=Math.floor((5-result.width)*0.5);
			result.x+=offsetX;
			result.width=5-offsetX;
		}
		return result;
	}

	/**获取末行的攻击范围,如果英雄也在该行,返回两者最小的横向距离**/
	__proto.getFootlineAttackRange=function(isFornt){
		var row=this.getFootline();
		if(row==this.heroAbsRow && !this.hasSolider()){
			return this.getAttackRangeByRow(row,this._dir=="front" ,this.heroConfig.ran_v,this.heroConfig.ran_h);
		}
		return this.getAttackRangeByRow(row,isFornt);
	}

	/**获取首行的攻击范围,如果英雄也在该行,返回两者最大的横向距离**/
	__proto.getHeadlineAttackRange=function(isFornt){
		var row=this.getHeadline();
		if(this.hero && this.soldierId){
			if(this.heroConfig.ran_h > this.soldierConfigProperty.ran_h)
				return this.getAttackRangeByRow(row,isFornt ,this.heroConfig.ran_v,this.heroConfig.ran_h);
		}
		return this.getAttackRangeByRow(row,isFornt);
	}

	/**
	*军团当前实际占用的格子矩阵,映射成Rectangle
	*如:一个满兵的阵形是3*5在坐标0,2,位置,映射的rectangle=Rectangle(0,2,5,3)
	*@return
	*/
	__proto.getTileBounds=function(){
		this.tempRect.x=this._gridX;
		this.tempRect.y=this._gridY;
		this.tempRect.width=7;
		this.tempRect.height=6;
		if(this.absRowsEmptyMap[0]){
			this.tempRect.top+=EnumTile.SPACE_HEIGHT;
		}
		if(this.absRowsEmptyMap[2]){
			this.tempRect.bottom-=EnumTile.SPACE_HEIGHT;
		}
		if(this.absRowsEmptyMap[1]){
			if(this.absRowsEmptyMap[0]){
				this.tempRect.top+=EnumTile.SPACE_HEIGHT;
			}
			else if(this.absRowsEmptyMap[2]){
				this.tempRect.bottom-=EnumTile.SPACE_HEIGHT;
			}
		}
		return this.tempRect;
	}

	/**
	*军团当前占用的格子矩阵,映射成Rectangle
	*对比getTileBounds,当横移的时候，该方法会占满2道
	*如:一个满兵的阵形是3*5在坐标0,2,位置,映射的rectangle=Rectangle(0,2,5,3)
	*@return
	*/
	__proto.getPlaceBounds=function(){
		this.tempRect.x=this._gridX;
		this.tempRect.y=this._gridY;
		this.tempRect.width=7;
		this.tempRect.height=6;
		if(this.absRowsEmptyMap[0]){
			this.tempRect.top+=EnumTile.SPACE_HEIGHT;
		}
		if(this.absRowsEmptyMap[2]){
			this.tempRect.bottom-=EnumTile.SPACE_HEIGHT;
		}
		if(this.absRowsEmptyMap[1]){
			if(this.absRowsEmptyMap[0]){
				this.tempRect.top+=EnumTile.SPACE_HEIGHT;
			}
			else if(this.absRowsEmptyMap[2]){
				this.tempRect.bottom-=EnumTile.SPACE_HEIGHT;
			}
		}
		if(this.crosswiseMoveFlag > 0){
			if(this.tempRect.x >7){
				this.tempRect.right=20;
			}
			else if(this.tempRect.x >0){
				this.tempRect.right=14;
			}
		}
		else if(this.crosswiseMoveFlag < 0){
			if(this.tempRect.x < 7){
				this.tempRect.left=0;
			}
			else if(this.tempRect.x < 14){
				this.tempRect.left=7;
			}
		}
		return this.tempRect;
	}

	__proto.getTilePoint=function(){
		this.tempTilePoint.x=this._gridX;
		this.tempTilePoint.y=this._gridY;
		if(this.absRowsEmptyMap[0]){
			this.tempTilePoint.y+=EnumTile.SPACE_HEIGHT;
			if(this.absRowsEmptyMap[1]){
				this.tempTilePoint.y+=EnumTile.SPACE_HEIGHT;
			}
		}
		return this.tempTilePoint;
	}

	__proto.getCenterTilePoint=function(){
		var rect=this.getPlaceBounds();
		this.tempCenterTilePoint.x=rect.x;
		this.tempCenterTilePoint.y=int(Math.floor(rect.y+(rect.height *0.5)));
		return this.tempCenterTilePoint;
	}

	__proto.update=function(){
		this._moveControl.move();
		var len=this._group.length;
		var currentIndex=0;
		var fighter;
		for(var i=0;i<len;++i){
			fighter=this._group[i];
			if(fighter){
				if(currentIndex !=i){
					this._group[currentIndex]=fighter;
					this._group[i]=null;
				}
				fighter.update();
				++currentIndex;
			}
		}
		if(currentIndex !=i){
			this._group.length=currentIndex;
		}
		if(this._group.length==0)this.lost();
		else if(this.needUpdatePos){
			this.needUpdatePos=false;
			this.updatePos();
		}
		if(WarringData.isVerification)return;
		if(BattleUtil.currentFrame==this.id && !this.visible){
			this.visible=true;
		}
		if((BattleUtil.currentFrame+this.id)% 15==0)
			this.sort();
		if(this.isFloating){
			this.y=int(this.beforeFloatY+Math.floor(Math.sin(BattleUtil.currentFrame *0.2)*20));
		}
	}

	__proto.calcRoundAction=function(){
		this._state.update();
	}

	__proto.updateDeath=function(){
		var len=this._group.length;
		var fighter;
		var hadDeath=false;
		for(var i=0;i<len;++i){
			fighter=this._group[i];
			if(fighter && fighter.property.f_hp<=0){
				hadDeath=true; ///***
				if(fighter.isHero){
					WarringData.report[String(this.camp)].heroDead.push(this.heroId);
				}
				else{
					var o=WarringData.report[String(this.camp)].soldierDead;
					if(!o[this.info.team_pos])o[this.info.team_pos]=1;
					else o[this.info.team_pos]++;
				}
				this._group[i]=null;
				fighter.die();
				this._map.remove(fighter.id);
				if(fighter.isHero)
					this.hero=null;
			}
		}
		if(hadDeath){
			this.needCoverPos=true;
			this.needRecalcBounds=true;
		}
	}

	__proto.calcCoverPos=function(){
		if(this.needCoverPos && (this.state instanceof battle.control.FSM.FightState )&& this.buffStatus.move<=0){
			this.needCoverPos=false;
			this.coverPosition();
			this.calcEmptyRows(-1);
		}
	}

	//补位操作
	__proto.coverPosition=function(){
		var rows;
		var reserve;
		var needCoverOrder=BattleUtil.AttackOrder[2];
		var order;
		var head=this.getHeadline();
		var end=this.getFootline();
		var fighter;
		var start=head;
		while(start !=end){
			rows=this.getAbsRow(start);
			var j;
			for(var $each_j in needCoverOrder){
				j=needCoverOrder[$each_j];
				if(start==this.heroAbsRow && this.hero && ((EnumBattleSetting.soldierMode==2 && (j==1 || j==3))||EnumBattleSetting.soldierMode==3))
					continue ;
				if(rows[j]==null){
					reserve=this.getAbsRow(head < end? start+1:start-1);
					order=BattleUtil.AttackOrder[j];
					var i=0;
					for(var k=0;k<order.length;++k){
						i=order[k];
						fighter=reserve[i];
						if(fighter && !fighter.isHero && fighter.dir==this._dir){
							fighter.index=start *5+j;
							rows[j]=fighter;
							fighter.cols=rows;
							fighter.colIndex=j;
							reserve[i]=null;
							fighter.coverPosition(j ,start *EnumTile.SPACE_HEIGHT);
							break ;
						}
					}
				}
			}
			start+=(head < end? 1:-1);
		}
	}

	/**是否有同列敌人**/
	__proto.hasEnemyInSameCol=function(){
		if(this.crosswiseMoveFlag !=0)return false;
		var enemys=BattleContent.getEnemyGroup(this._camp);
		var ag;
		for(var $each_ag in enemys){
			ag=enemys[$each_ag];
			if((ag.state instanceof battle.control.FSM.DeathState ))continue ;
			if(ag.gridX==this._gridX)
				return true;
		}
		return false;
	}

	//状态机事件入口
	__proto.onEvent=function(type){
		if(this._state==null)return;
		var newState=this._state.change(type);
		this.state=newState;
	}

	/**
	*获取军团的所有排,默认是按正面的升序排序
	*@param sortOptions 正面开始,还是背面开始
	*@return 返回军团所有排
	*
	*/
	__proto.getRows=function(sortOptions){
		(sortOptions===void 0)&& (sortOptions=999);
		if(sortOptions==999)
			sortOptions=Array.NUMERIC;
		var head=this.getHeadline();
		var len=this.rowLength;
		var result=[];
		do{
			result.push(head,this.getAbsRow(head));
			head-=1;
		}while(Math.abs(head)!=len)
		if(result.length >1 && sortOptions==Array.DESCENDING)
			return result.reverse();
		return result;
	}

	/**
	*根据受击范围,找出该军团可被攻击到的每一排
	*@param attacker 攻击方
	*@param beAttackRect 受击范围
	*@return
	*
	*/
	__proto.findRowsInAttackRange=function(attacker,beAttackRect){
		var result=[];
		var i=0;
		if(attacker.gridY > this._gridY){
			for(i=beAttackRect.bottom-1;i>=beAttackRect.y;i-=EnumTile.SPACE_HEIGHT){
				result.push(this.getAbsRow(Math.floor((i-this._gridY)/ EnumTile.SPACE_HEIGHT)));
			}
		}
		else{
			for(i=beAttackRect.y;i<beAttackRect.bottom;i+=EnumTile.SPACE_HEIGHT){
				result.push(this.getAbsRow(Math.floor((i-this._gridY)/ EnumTile.SPACE_HEIGHT)));
			}
		}
		return result;
	}

	__proto.tryGoAhead=function(){
		var rect=this.getPlaceBounds();
		if(this.isFaceFornt){
			rect.y+=1;
		}
		else{
			rect.y-=1;
		}
		return !BattleContent.checkNewPlace(rect,this);
	}

	__proto.remove=function(fighter){
		var index=this._group.indexOf(fighter);
		if(index >=0){
			this._group[index]=null;
			this._map.remove(fighter.id);
			this.needCoverPos=true;
			this.needRecalcBounds=true;
			if(fighter.isHero){
				this.hero=null;
			}
		}
	}

	//失败
	__proto.lost=function(){
		this.onEvent("death");
		if (this.info !=null && this.info.camp==2 && Datas.battleData.pk_type==4){
			if (this.info.item !=null){
				EventCenter.dispatchEvent("battle_drop_item",{dropItem:this.info.item,dropPoint:this.centerPoint});
			}
		}
		if(this.world){
			var temp=this.world;
			this.world.remove(this);
			FighterFactory.returnArmygroup(this);
		}
	}

	__proto.hasSolider=function(){
		if(this._group.length>1)
			return true;
		if(this._group.length==1 && !this.hero)
			return true;
		return false;
	}

	/**
	*军团情况
	*@return 0只有英雄 1只有士兵 2 两者都有-1空
	*/
	__proto.checkTeamStatus=function(){
		var result=-1;
		if(this._group.length>1)
			result=this.hero ? 2 :1;
		else if(this._group.length==1)
		result=this.hero ? 0 :1;
		return result;
	}

	__proto.addBuffEffect=function(buff){
		if(this.buffEffectCountMap[buff.buffId]==undefined){
			this.buffEffectCountMap[buff.buffId]=1;
			var swf=PlayerUtil.getBattleSwfPlayer(UrlManager.getBuffModeUrl("buff"),null,buff.buffId+"/stand",0);
			var pt=this.centerPoint;
			swf.x=pt.x;
			swf.y=pt.y;
			pt.x=swf.x-this.x;
			pt.y=swf.y-this.y;
			this.buffOffsetPtMap[swf]=pt;
			BattleWorld.getInstance().addEffect(swf,EffectConfig.table[buff.buffId].layer>0?4:2);
			this.buffEffectMap[buff.buffId]=swf;
			if(buff.c.state=="float")
				this.floating();
		}
		else
		this.buffEffectCountMap[buff.buffId]++;
	}

	__proto.removeBuffEffect=function(buff){
		if(this._destructed)return;
		if(this.buffEffectCountMap[buff.buffId]==undefined)return;
		this.buffEffectCountMap[buff.buffId]=this.buffEffectCountMap[buff.buffId]-1;
		if(this.buffEffectCountMap[buff.buffId]==0){
			var buffEffect=this.buffEffectMap[buff.buffId];
			BattleWorld.getInstance().removeEffect(buffEffect);
			if(!buffEffect.destructed)
				PlayerUtil.returnBattleSwfPlayer(buffEffect);
			delete this.buffEffectCountMap[buff.buffId];
			delete this.buffEffectMap[buff.buffId];
			delete this.buffOffsetPtMap[buffEffect];
			if(buff.c.state=="float")
				this.stopFloating();
		}
	}

	//浮空
	__proto.floating=function(){
		if(!this.isFloating){
			this.isFloating=true;
			this.beforeFloatY=this.y-50;
			this.y-=this.beforeFloatY;
		}
	}

	__proto.stopFloating=function(){
		if(this.isFloating){
			this.isFloating=false;
			this.y=this.beforeFloatY+50;
		}
	}

	__proto.getFighterByid=function(id){
		return this._map.get(id);
	}

	__proto.findEmptyPlaceByDir=function(dir){
		return null;
	}

	__proto.getRow=function(i){
		if(i==0){
			return this.row0;
		}
		else if(i==1){
			return this.row1;
		}
		else{
			return this.row2;
		}
	}

	__proto.getAbsRow=function(i){
		if(i==0){
			return this.absoluteRow0;
		}
		else if(i==1){
			return this.absoluteRow1;
		}
		else{
			return this.absoluteRow2;
		}
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		framework.assertFalse();
	}

	__getset(0,__proto,'property',function(){
		return this._property;
		},function(value){
		this._property=value;
	});

	__getset(0,__proto,'centerX',function(){
		var rect=this.getTileBounds();
		return ISOMath.isoToScreenX(rect.x+2,Math.floor(rect.y+((rect.height-1)*0.5)),28);
	});

	__getset(0,__proto,'dir',function(){return this._dir;},function(value){
		if(value !=this._dir){
			this._dir=value;
			if(this.reverse(value))
				this.needUpdatePos=true;
			var len=this._group.length;
			for(var i=0;i<len;++i){
				if(this._group[i])this._group[i].dir=value;
			}
		}
	});

	__getset(0,__proto,'camp',function(){return this._camp;},function(value){this._camp=value;});
	__getset(0,__proto,'group',function(){return this._group;});
	__getset(0,__proto,'centerY',function(){
		var rect=this.getTileBounds();
		return ISOMath.isoToScreenY(rect.x+2,Math.floor(rect.y+((rect.height-1)*0.5)),28);
	});

	__getset(0,__proto,'centerPoint',function(){
		var rect=this.getTileBounds();
		return ISOMath.isoToScreen(rect.x+2,Math.floor(rect.y+(rect.height-1)*0.5),28);
	});

	// fighter.hitStatus=0;
	__getset(0,__proto,'state',function(){return this._state;},function(value){
		if(value==null)return;
		if(this._state)this._state.exit();
		this._state=value;
		this._state.entry();
	});

	__getset(0,__proto,'isFaceFornt',function(){return this._dir=="front";});
	/**军团目前有多少排 **/
	__getset(0,__proto,'rowLength',function(){
		var i=0;
		if(!this.absRowsEmptyMap[0])i++;
		if(!this.absRowsEmptyMap[1])i++;
		if(!this.absRowsEmptyMap[2])i++;
		return i;
	});

	__getset(0,__proto,'visible',_super.prototype._$get_visible,function(value){
		Laya.superSet(BaseBattleSprite,this,'visible',value);
		var fighter;
		for(var $each_fighter in this._group){
			fighter=this._group[$each_fighter];
			if(fighter && fighter.shadow){
				fighter.visible=value;
			}
		}
	});

	__getset(0,__proto,'isMoving',function(){return this._moveControl.isMoving;});
	__getset(0,__proto,'realGridY',function(){
		var result=this._gridY;
		if(this.absRowsEmptyMap[0]){
			result+=EnumTile.SPACE_HEIGHT;
			if(this.absRowsEmptyMap[1])
				result+=EnumTile.SPACE_HEIGHT;
		}
		return this._gridX+result;
	});

	__getset(0,__proto,'pixelPoint',function(){
		return Laya.superGet(BaseBattleSprite,this,'pixelPoint');
	});

	__getset(0,__proto,'x',function(){
		return Laya.superGet(BaseBattleSprite,this,'x');
	},_super.prototype._$set_x);

	__getset(0,__proto,'y',function(){
		return Laya.superGet(BaseBattleSprite,this,'y');
	},_super.prototype._$set_y);

	return ArmyGroup;
})(BaseBattleSprite)


/**
*战斗单位
*@author fenglijun
*
*/
//class battle.entitys.Fighter extends battle.entitys.BaseBattleSprite
var Fighter=(function(_super){
	function Fighter(){
		this._bodyUrl=null;
		this._bodySwf=null;
		this._ultimateSwf=null;
		this._belongGroup=null;
		this._property=null;
		this.atkTarget=null;
		this._nickName=null;
		this.buffSwfPlayers=null;
		this._moveControl=null;
		this._skillPool=null;
		this.cols=null;
		this.colIndex=0;
		this.buffStatus=null;
		this.shadow=null;
		// public var hitStatus:int;
		this.type=null;
		//作战单位类型
		this._keyFrame=null;
		this._curFrame=0;
		this._state=null;
		this._dir=null;
		this.CDTime=0;
		this._onPlayFrameEnd=null;
		this.onKeyFrameCallback=null;
		this.isCanAttack=false;
		/**攻击动作状态,0不在攻击 1=普通攻击 2=大招攻击**/
		this.attackStatus=0;
		this.oldTickPos=-1;
		this.totalPassedTime=NaN;
		this._frameTime=0;
		this.debuffsId=null;
		this._head=null;
		this.skillConfig=null;
		this.targets=null;
		this.fadeOutTime=0;
		this.flyTween=null;
		this._buffAry=[];
		this._curBuffState=null;
		this.buffMap=new Dictionary();
		this._centerPoint=new Point();
		Fighter.__super.call(this);
		this.type="soldier";
		this._moveControl=new MoveControl(this);
		this._bodySwf=new BattleSwfPlayer();
		this._bodySwf.stop();
		this.addChildAt(this._bodySwf ,0);
		this.buffSwfPlayers=__newvec(3,null);
		this.buffStatus=new BuffStatus();
		this.debuffsId=[];
		if((SwfParams.getInstance().atlas_scale_sd=="phone" || SwfParams.getInstance().atlas_scale_sd=="phoneld")){
			this.shadow=new Sprite();
			this.shadow.visible=false;
			this.shadow.loadImage("comp/shadow.png");
			this.shadow.pivot(75/2,39/2);
			this.on("added",this,this.onAdded);
			this.on("removed",this,this.onRemoved);
		}
	}

	__class(Fighter,'battle.entitys.Fighter',_super);
	var __proto=Fighter.prototype;
	__proto.onAdded=function(){
		BattleWorld.shadowLayer.addChild(this.shadow);
		this.updateShadow();
	}

	__proto.updateShadow=function(){
		if(this.shadow){
			this.shadow.visible=this.belongGroup.visible
			this.shadow.pos(this.mapX,this.mapY);
		}
	}

	__proto.onRemoved=function(){
		BattleWorld.shadowLayer.removeChild(this.shadow);
	}

	__proto.renew=function(){
		_super.prototype.renew.call(this);
		this._frameTime=Config.animationInterval;
		this.totalPassedTime=0;
		this.oldTickPos=-1;
		this._moveControl.renew();
		this.buffStatus.renew();
		this.isCanAttack=true;
		this.alpha=1;
		this._dir="front";
		this.CDTime=0;
		this.scaleX=this.scaleY=1;
		this.attackStatus=0;
		this._state="stand";
		this.filters=null;
		this.debuffsId.length=0;
		this._buffAry.length=0;
		this._bodyUrl=null;
		this.fadeOutTime=0;
		this.cols=null;
		this.colIndex=-1;
		this.buffMap.clear();
	}

	__proto.destruct=function(){
		this.atkTarget=null;
		this._world=null;
		if(this.flyTween !=null){
			this.flyTween.clear();
			this.flyTween=null;
		}
		this._bodySwf.stop();
		this._bodySwf.destruct();
		if(this._ultimateSwf){
			PlayerUtil.returnBattleSwfPlayer(this._ultimateSwf);
			this._ultimateSwf=null;
		}
		this._skillPool=null;
		this._onPlayFrameEnd=null;
		this._curBuffState=null;
		this.onKeyFrameCallback=null;
		for(var i=0;i<this.buffSwfPlayers.length;++i){
			if(this.buffSwfPlayers[i]){
				if(!this.buffSwfPlayers[i].destructed)
					PlayerUtil.returnBattleSwfPlayer(this.buffSwfPlayers[i]);
				this.buffSwfPlayers[i]=null;
			}
		}
		if(this._property){
			this._property.destroy();
			this._property=null;
		}
		if(this._head){
			this._head.property=null;
		}
		if(this._skillPool){
			this._skillPool.destroy();
			this._skillPool=null;
		}
		_super.prototype.destruct.call(this);
	}

	__proto.getSwfPlayerDir=function(){
		return (this._dir=="front"?1:3);
	}

	// }
	__proto.onBodyModelLoaded=function(swfPlayer){
		this._head.y=this.type=="hero" ?-130 :-60;
	}

	__proto.changeState=function(value,onPlayEndFrame,loop){
		(loop===void 0)&& (loop=true);
		if(this.isMoving)return;
		if(this.attackStatus==2)return;
		this.attackStatus=0;
		this._onPlayFrameEnd=onPlayEndFrame;
		this._state=value;
		this._curFrame=0;
		this.onKeyFrameCallback=null;
		if(!WarringData.isVerification){
			if(value=="skill1"){
				this._bodySwf.visible=false;
				if(!this.belongGroup.heroJsonConfig.noUltimateAct){
					this._ultimateSwf=PlayerUtil.getBattleSwfPlayer(UrlManager.getRoleAtkModelUrl("ultimate"+this.belongGroup.heroJsonConfig.model),null,"skill1",EnumBattleConfig.convertSwfDir(this._dir));
					this._ultimateSwf.loop=loop;
					this._ultimateSwf.onFrameEnd(this,this.onGotoFrameEnd);
					this.addChildAt(this._ultimateSwf,this.getChildIndex(this._bodySwf)+1);
					this._ultimateSwf.play(0,loop);
				}
			}
			else{
				this.returnUltimateSwf();
				this._bodySwf.visible=true;
				this._bodySwf.loop=loop;
				this._bodySwf.changeState(value);
				this._bodySwf.onFrameEnd(this,this.onGotoFrameEnd);
			}
			BattleSound.ins.changeState(this);
		}
	}

	__proto.onGotoFrameEnd=function(){
		var toState=this.judgeState();
		if(this.bodystate !=toState){
			this._bodySwf.visible=true;
			this._bodySwf.changeState(toState);
		}
		this.returnUltimateSwf();
		if(this._onPlayFrameEnd !=null){
			var cb=this._onPlayFrameEnd;
			this._onPlayFrameEnd=null;
			cb.call(this);
		}
	}

	__proto.returnUltimateSwf=function(){
		if(this._ultimateSwf){
			var url=UrlManager.getRoleAtkModelUrl("ultimate"+this.belongGroup.heroJsonConfig.model);
			PlayerUtil.returnBattleSwfPlayer(this._ultimateSwf);
			this._ultimateSwf=null;
			PlayerUtil._clearTexRes(url);
		}
	}

	__proto.judgeState=function(){
		var s=this.bodystate;
		if(s=="beatk" || s=="beatk2")
			return "stand";
		if(SwfConst.isAttackAction(s))
			return "stand";
		return s;
	}

	__proto.faceTo=function(target){
		if(this._belongGroup.getTilePoint().y < target.belongGroup.getTilePoint().y)
			this.dir="front";
		else
		this.dir="back";
	}

	__proto.isTimeCdOver=function(){return this.CDTime<=0;}
	__proto.attack=function(target){
		if(!this.isCanAttack)return false;
		if(this.attackStatus !=0)return false;
		if(!this.isTimeCdOver())return false;
		if(target.curBuffState && target.curBuffState.buffState=="float"
			&& !this._property.isRemoteFighter){
			return false;
		}
		this.skillConfig=this._skillPool.getCurrentSkill();
		if(this.buffStatus.skill > 0 && this.skillConfig.type !=0){
			return false;
		}
		if(this.buffStatus.attack > 0 && this.skillConfig.type==0){
			return false;
		}
		this._skillPool.switchNext();
		this.atkTarget=target;
		var findType=0;
		var targetType;
		if(this.skillConfig.effect_enemy){
			findType=2;
			targetType=this.skillConfig.effect_enemy.target;
		}
		else{
			findType=1;
			targetType=this.skillConfig.effect_self.target;
		}
		this.targets=TargetFinder.findTargets(this,target,findType ,targetType);
		if(!this.targets||this.targets.length<=0){
			framework.assertFalse("技能没寻找到目标,怎么打哦!");
			return false;
		}
		this.cooldown();
		this.changeState(this.skillConfig.local.action);
		if (this.isHero && !WarringData.isVerification){
			BattleSound.ins.heroAttack(this,this.skillConfig.type,"prepare");
		}
		this.onKeyFrameCallback=this.onAtkGotoKeyFrame;
		this.attackStatus=1;
		return true;
	}

	__proto.onAtkGotoKeyFrame=function(){
		this.attackStatus=0;
		if(!this.targets || this.targets.length<=0)return;
		AttackStep.newAttackStep().attack(this,this.skillConfig ,this.targets);
		if(WarringData.isVerification)return;
		BattleSound.ins.addFight(this);
	}

	// BattleUtil.showDamage(this,getLang("name_"+skillConfig.skid),EnumBattleConfig.DAMAGE_NORMAL,int.MAX_VALUE ,1,-30 ,2);
	__proto.cooldown=function(){
		this.CDTime=this._property.f_spd_a *10;
		if(this.CDTime< 12)this.CDTime=12;
	}

	__proto.beAttack=function(skill){
		if(this._curBuffState && this._curBuffState.buffState=="sleep"){
			this._curBuffState.cancel();
			this.curBuffState=null;
		}
		if(!WarringData.isVerification){
			if(this.buffStatus.attacked_react<=0){
				if(this.attackStatus==0 && !this.belongGroup.isMoving){
					if(this.bodystate !="beatk"){
						this._bodySwf.changeState("beatk");
					}
				}
			}
		}
	}

	//changeState(SwfConst.BEATK );
	__proto.die=function(){
		if(this._skillPool.passiveSkill)
			this._skillPool.passiveSkill.loseEffect();
		this.logoutBuffStatus();
		if(this.isMoving)this.stopMove();
		this.place(this.mapX ,this.mapY);
		this.cols[this.colIndex]=null;
		this._belongGroup.world.add(this ,2);
		this.changeState("die" ,null ,false);
		if(WarringData.isVerification){
			this.onRmoveFadeComplete();
		}
		else{
			this.fadeOutTime=120;
			if(!this._bodySwf.isPlaying)
				this._bodySwf.play();
			if(Math.random()> 0.1)
				this.beHitFly(Math.floor(Math.random()*180));
		}
	}

	__proto.onRmoveFadeComplete=function(){
		if(!this.isHero){
			this._world.remove(this);
			FighterFactory.returnFighter(this);
		}
	}

	__proto.setModelScale=function(scale){
		if(this._bodySwf)this._bodySwf.scaleX=this._bodySwf.scaleY=scale;
	}

	//补位
	__proto.coverPosition=function(gridX,gridY){
		this.changeState("run");
		this._moveControl.moveTo(gridX,gridY ,this._property.f_spd_m ,this,this.onMoveEnd);
		this.gridX=gridX;
		this.gridY=gridY;
	}

	__proto.stopMove=function(gotoDest){
		(gotoDest===void 0)&& (gotoDest=false);
		if(gotoDest)this._moveControl.stopAndGotoDest();
		else this._moveControl.stop();
	}

	__proto.onMoveEnd=function(){
		if(!this._belongGroup.isMoving)
			this.changeState("stand");
	}

	__proto.beHitFly=function(length,onComplete){
		var _$this=this;
		var angle=-FP.RAD *(this._dir=="front" ?-30 :150);
		var dx=this.mapX+length *Math.cos(angle);
		var dy=this.mapY+length *Math.sin(angle);
		this.flyTween=Tween.to(this,{x:dx,y:dy },500,Ease.linearOut,new Handler(this,function(){_$this.flyTween=null;onComplete&&onComplete();}));
	}

	__proto.update=function(){
		if(this.CDTime >0 && BattleUtil.ticker==0)this.CDTime--;
		if(!this.buffStatus.move)
			this._moveControl.move();
		this.totalPassedTime+=BattleUtil.interval;
		var nowTickPos=Math.floor(this.totalPassedTime / this._frameTime);
		if (nowTickPos!=this.oldTickPos){
			this.oldTickPos=nowTickPos;
			if(this.onKeyFrameCallback !=null && this._keyFrame[this._state]==this._curFrame){
				this.onKeyFrameCallback();
				this.onKeyFrameCallback=null;
			}
			this._curFrame++;
		}
		if(WarringData.isVerification)return;
		this._bodySwf.advanceTime(BattleUtil.interval);
		this.updateShadow();
		if(this.fadeOutTime>0){
			this.fadeOutTime--;
			if(this.isHero)
				this.alpha=0.5+0.5 *(this.fadeOutTime / 75);
			else
			this.alpha=1 *(this.fadeOutTime / 80);
			if(this.fadeOutTime<=0)
				this.onRmoveFadeComplete();
		};
		var len=this.buffSwfPlayers.length;
		for(var i=0;i<len;++i){
			if(this.buffSwfPlayers[i])this.buffSwfPlayers[i].advanceTime(BattleUtil.interval);
		}
		this._head.update();
	}

	__proto.addBuffEffect=function(buff){
		var temp=this._buffAry[buff.c.display];
		if(temp){
			this.removeBuffEffect(temp);
		}
		this._buffAry[buff.c.display]=buff;
		BuffEffect.add(this,buff);
	}

	__proto.removeBuffEffect=function(buff){
		if(this._buffAry[buff.c.display]==buff){
			this._buffAry[buff.c.display]=null;
			BuffEffect.remove(this,buff);
		}
	}

	__proto.flag_attacked_react=function(v){
		this.buffStatus.attacked_react+=v;
		this._belongGroup.buffStatus.attacked_react+=v;
	}

	__proto.flag_break_act=function(v){
		this.buffStatus.break_act+=v;
		this._belongGroup.buffStatus.break_act+=v;
		if(v>0){
			this.breakSkill();
		}
	}

	__proto.flag_move=function(v){
		this.buffStatus.move+=v;
		this._belongGroup.buffStatus.move+=v;
	}

	__proto.flag_noskill=function(v){
		this.buffStatus.skill+=v;
		this._belongGroup.buffStatus.skill+=v;
	}

	__proto.flag_attack=function(v){
		this.buffStatus.attack+=v;
		this._belongGroup.buffStatus.attack+=v;
	}

	/**注销该单位影响的军团buffstatus,死亡后应该做这处理**/
	__proto.logoutBuffStatus=function(){
		this._belongGroup.buffStatus.attack-=this.buffStatus.attack;
		this._belongGroup.buffStatus.attacked_react-=this.buffStatus.attacked_react;
		this._belongGroup.buffStatus.move-=this.buffStatus.move;
		this._belongGroup.buffStatus.skill-=this.buffStatus.skill;
		this._belongGroup.buffStatus.break_act-=this.buffStatus.break_act;
	}

	__proto.addBuff=function(buffid_lv){
		if(this._property.f_hp<=0)return 0;
		if(this._property.f_inbuff >0){
			return 0;
		};
		var damageUnit=DamageUnitFactory.create(2);
		var buff=new Buff(buffid_lv,this);
		damageUnit.setProp(buff ,this);
		this.world.buffDamageQueue.push(damageUnit);
		if(!buff.c.positive){
			this.debuffsId.push(damageUnit.id);
		}
		this.buffMap.set(damageUnit.id,buffid_lv);
		return damageUnit.id;
	}

	__proto.removeBuff=function(id){
		if(!this.world)return;
		if(this.buffMap.get(id)){
			this.buffMap.remove(id);
			var unit=this.world.buffDamageQueue.getUnit(id);
			if(unit)unit.cancel();
		}
	}

	/**驱散所有减益buff */
	__proto.disperseDeBuff=function(){
		var len=this.debuffsId.length;
		if(len<=0)return;
		for(var i=0;i<len;++i)
		this.removeBuff(this.debuffsId[i]);
		this.debuffsId.length=0;
	}

	__proto.breakSkill=function(){
		this.onKeyFrameCallback=null;
		this.attackStatus=0;
		this.changeState("stand");
		this.targets=null;
		this.skillConfig=null;
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		framework.assertFalse();
	}

	__getset(0,__proto,'mapY',function(){
		if((this.parent instanceof battle.entitys.ArmyGroup ))
			return this._belongGroup.y+this.y;
		return this.y;
	});

	__getset(0,__proto,'property',function(){return this._property;},function(value){
		this._property=value;
		if(!WarringData.isVerification){
			this._head.property=value;
			this._head.visible=value.isHero;
		}
	});

	__getset(0,__proto,'dir',function(){return this._dir;},function(value){
		if(this._dir !=value){
			this._dir=value;
			if(this.isMoving)this.stopMove(true);
			if(this._bodySwf.isLoaded()){
				this._bodySwf.changeDir(EnumBattleConfig.convertSwfDir(this._dir));
			}
		}
	});

	__getset(0,__proto,'centerX',function(){return this.mapX;});
	__getset(0,__proto,'skillPool',function(){return this._skillPool;},function(value){
		this._skillPool=value;
	});

	__getset(0,__proto,'mapGridY',function(){return this._belongGroup.gridY+this._gridY;});
	__getset(0,__proto,'centerY',function(){return this.mapY;});
	__getset(0,__proto,'mapGridX',function(){return this._belongGroup.gridX+this._gridX;});
	__getset(0,__proto,'mapX',function(){
		if((this.parent instanceof battle.entitys.ArmyGroup ))
			return this._belongGroup.x+this.x;
		return this.x;
	});

	__getset(0,__proto,'gridPoint',function(){
		this.tempGridPoint.x=this.gridX;
		this.tempGridPoint.y=this.gridY;
		return this.tempGridPoint;
	});

	__getset(0,__proto,'centerPoint',function(){
		this._centerPoint.x=this.mapX;
		this._centerPoint.y=this.mapY;
		return this._centerPoint;
	});

	__getset(0,__proto,'nickName',function(){return this._nickName;},function(value){this._nickName=value;});
	__getset(0,__proto,'isHero',function(){return (this instanceof battle.entitys.HeroFighter );});
	__getset(0,__proto,'belongGroup',function(){return this._belongGroup;},function(value){this._belongGroup=value;});
	__getset(0,__proto,'isFaceFornt',function(){return this._dir=="front";});
	__getset(0,__proto,'bodyUrl',function(){return this._bodyUrl;},function(value){
		if(this._bodyUrl!=value){
			this._bodyUrl=value;
			this._state="stand";
			this._bodySwf.renew();
			this._bodySwf.changeState("stand");
			this._bodySwf.changeDir(EnumBattleConfig.convertSwfDir(this._dir));
			if(!WarringData.isVerification){
				this._bodySwf.loadData(this._bodyUrl ,Handler.create(this,this.onBodyModelLoaded,[this._bodySwf]));
				this._bodySwf.play();
			}
		}
	});

	__getset(0,__proto,'bodySwf',function(){return this._bodySwf;});
	__getset(0,__proto,'index',_super.prototype._$get_index,function(value){
		Laya.superSet(BaseBattleSprite,this,'index',value);
	});

	// _txt.x=int(-_txt.textWidth/2);
	__getset(0,__proto,'state',function(){return this._state;});
	__getset(0,__proto,'bodystate',function(){return this._ultimateSwf?this._ultimateSwf.curState:this._bodySwf.curState;});
	__getset(0,__proto,'isMoving',function(){return this._moveControl.isMoving;});
	__getset(0,__proto,'curBuffState',function(){return this._curBuffState;},function(value){
		this._curBuffState=value;
		this._property.buffState=value?value.buffState:null;
		if(WarringData.isVerification)return;
		if(value){
			var __state=value.buffState;
			if(__state=="stone" || __state=="ice"
				|| __state=="float"){
				this._bodySwf.stop();
			}
		}
		else{
			this._bodySwf.play();
		}
	});

	__getset(0,__proto,'hpPercent',function(){return this._property.hp_percent;});
	__getset(0,__proto,'isOurFighter',function(){return this._property.camp==1});
	__getset(0,__proto,'keyFrame',null,function(value){
		this._keyFrame=value;
	});

	Fighter.DEFAULT_FRAME_TIME=41;
	return Fighter;
})(BaseBattleSprite)


//class battle.text.GreenTextField extends laya.display.Text
var GreenTextField=(function(_super){
	function GreenTextField(){
		GreenTextField.__super.call(this);
	}

	__class(GreenTextField,'battle.text.GreenTextField',_super);
	return GreenTextField;
})(Text)


//class battle.text.OrangeTextField extends laya.display.Text
var OrangeTextField=(function(_super){
	function OrangeTextField(){
		OrangeTextField.__super.call(this);
		this.color="#b55006";
	}

	__class(OrangeTextField,'battle.text.OrangeTextField',_super);
	return OrangeTextField;
})(Text)


//class battle.text.RedTextField extends laya.display.Text
var RedTextField=(function(_super){
	function RedTextField(){
		RedTextField.__super.call(this);
		this.color="#bb0303";
	}

	__class(RedTextField,'battle.text.RedTextField',_super);
	return RedTextField;
})(Text)


/**
*英雄
*@author fenglijun
*
*/
//class battle.entitys.HeroFighter extends battle.entitys.Fighter
var HeroFighter=(function(_super){
	function HeroFighter(){
		this._validTime=0;
		this.putBagSkillDelay=0;
		this._mask=false;
		this._isScaling=false;
		this.bigSkillTargets=null;
		this.bigSkillConfig=null;
		HeroFighter.__super.call(this);
		this.type="hero";
		this._head=new HeroFigherHead();
		this.addChild(this._head);
	}

	__class(HeroFighter,'battle.entitys.HeroFighter',_super);
	var __proto=HeroFighter.prototype;
	// _warnSwf.play();
	__proto.renew=function(){
		_super.prototype.renew.call(this);
		this.putBagSkillDelay=-1;
		this._isScaling=false;
	}

	__proto.destruct=function(){
		_super.prototype.destruct.call(this);
		this.bigSkillConfig=null;
		this.bigSkillTargets=null;
	}

	// campIcon.bitmapData=getSkinInstance("battle","skin.battle.iconcamp"+_property.camp );
	__proto.onBodyModelLoaded=function(swfPlayer){
		_super.prototype.onBodyModelLoaded.call(this,swfPlayer);
	}

	/**
	*使用大招
	*@param mask 是否遮罩
	*@return
	*0 使用成功
	*1 正在做大招动作,不能使用
	*2军团正在横移,不能使用
	*3中了不能使用大招buff
	*4目标找不到
	*
	*/
	__proto.useBigSkill=function(mask,record){
		(mask===void 0)&& (mask=true);
		(record===void 0)&& (record=false);
		if(WarringData.isVerification){
			if(!this._property.isAngerFull){
				WarringData.exceptionMsg.push(BattleUtil.currentFrame+"英雄没怒气放大招？heroid="+this._property.heroConfig.hero_id);
			}
		}
		if(this.attackStatus==2){
			return 1;
		}
		if(this._belongGroup.crosswiseMoveFlag !=0){
			this.putBagSkillDelay=-1;
			return 2;
		}
		if(this.buffStatus.skill > 0){
			this.putBagSkillDelay=-1;
			return 3;
		}
		this.bigSkillConfig=this._skillPool.getBigSkill();
		var findType=0;
		var targetType;
		if(this.bigSkillConfig.effect_enemy){
			findType=2;
			targetType=this.bigSkillConfig.effect_enemy.target;
		}
		else{
			findType=1;
			targetType=this.bigSkillConfig.effect_self.target;
		}
		this.bigSkillTargets=TargetFinder.findTargets(this,this.atkTarget,findType ,targetType);
		if(!this.bigSkillTargets||this.bigSkillTargets.length<=0){
			this.putBagSkillDelay=-1;
			return 4;
		}
		if(this.putBagSkillDelay<0 && WarringData.needUseBigWarn && this._property.camp==2){
			this.warnSkill();
			return 3;
		}
		this._property.f_anger=0;
		this._mask=mask;
		this.changeState(this.bigSkillConfig.local.action ,this.scalingNormal);
		if(mask){
			SkillMask.add(this,this.bigSkillTargets ,WarringData.isMyCamp(this._property.camp)&& EnumBattleSetting.isFollowHeroWhenUseBigSkill);
			this.scalingBig();
		}
		this.onKeyFrameCallback=this._$5_onAtkGotoKeyFrame;
		this.attackStatus=2;
		if(record){
			ReplayCache.record(1,{id:this.belongGroup.index});
		}
		if(!WarringData.isVerification){
			BattleSound.ins.heroAttack(this,this.bigSkillConfig.type,"prepare");
		}
		EventCenter.dispatchWith("put_big_skill_success",[[this.bigSkillConfig.skid,this._property.camp,this._property.elementId ,this._property.pos]]);
		return 0;
	}

	__proto._$5_onAtkGotoKeyFrame=function(){
		this.putBagSkillDelay=-1;
		if(this._mask){
			SkillMask.back(this);
		}
		this.attackStatus=0;
		this.cooldown();
		this._property.f_anger=0;
		for(var i=0;i< this.bigSkillTargets.length;++i){
			AttackStep.newAttackStep().attack(this,this.bigSkillConfig ,[this.bigSkillTargets[i]]);
		}
	}

	__proto.update=function(){
		_super.prototype.update.call(this);
		if(this.putBagSkillDelay>0)
			this.putBagSkillDelay--;
		if(WarringData.isVerification)
			return;
		if(this._validTime >0){
			this._validTime--;
			this.updateTime();
		}
		if(this.putBagSkillDelay>0){
		}
		else{
		}
	}

	// removeChild(_warnSwf );
	__proto.warnSkill=function(){
		this.putBagSkillDelay=60;
	}

	__proto.updateTime=function(){
		var second=Math.ceil(this._validTime/30).toString();
	}

	__proto.changeState=function(value,onPlayEndFrame,loop){
		(loop===void 0)&& (loop=true);
		if(this._isScaling)
			this.scalingNormal();
		_super.prototype.changeState.call(this,value,onPlayEndFrame,loop);
	}

	__proto.scalingBig=function(){
		if(WarringData.isVerification)return;
		if(this._bodySwf.curFrameNum()>0){
			this._isScaling=true;
			Tween.to(this,{scaleX:EnumBattleConfig.useBigSkillHeroScale,scaleY:EnumBattleConfig.useBigSkillHeroScale},800,null,null,0,true);
		}
	}

	__proto.scalingNormal=function(){
		if(WarringData.isVerification)return;
		this._isScaling=false;
		Tween.to(this,{scaleX:1,scaleY:1},800,null ,null,0,true);
	}

	// TweenLite.to(this,0.8,{scaleX:1,scaleY:1,overwrite:1});
	__proto.breakSkill=function(){
		this.putBagSkillDelay=-1;
		this.bigSkillTargets=null;
		this.bigSkillConfig=null;
		_super.prototype.breakSkill.call(this);
	}

	__getset(0,__proto,'property',_super.prototype._$get_property,function(value){
		Laya.superSet(Fighter,this,'property',value);
	});

	__getset(0,__proto,'validTime',function(){
		return this._validTime / 30;
		},function(value){
		this._validTime=value *30;
		if(value > 0){
			this.updateTime();
		}
	});

	// campIcon.y=-swfPlayer.height-40;
	__getset(0,__proto,'nickName',_super.prototype._$get_nickName,function(value){
		if(this._nickName !=value){
			this._nickName=value;
		}
	});

	return HeroFighter;
})(Fighter)


/**
*士兵
*@author fenglijun
*
*/
//class battle.entitys.SoldierFighter extends battle.entitys.Fighter
var SoldierFighter=(function(_super){
	function SoldierFighter(){
		SoldierFighter.__super.call(this);
		this._head=new SoldierHead();
		this.addChild(this._head);
	}

	__class(SoldierFighter,'battle.entitys.SoldierFighter',_super);
	return SoldierFighter;
})(Fighter)


//class battle.view.BattleTopInfoPanel extends laya.ui.View
var BattleTopInfoPanel=(function(_super){
	function BattleTopInfoPanel(){
		this.leftTips=null;
		this.rightTips=null;
		BattleTopInfoPanel.__super.call(this);
		this.leftTips=[];
		for(var i=0;i<12;++i)
		this.leftTips.push(new battle_left_skill_tipUI());
		this.rightTips=[];
		for(i=0;i<12;++i)
		this.rightTips.push(new battle_right_skill_tipUI());
	}

	__class(BattleTopInfoPanel,'battle.view.BattleTopInfoPanel',_super);
	var __proto=BattleTopInfoPanel.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.leftTips=this.rightTips=null;
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.onAddToStage=function(){
		EventCenter.add("put_big_skill_success" ,this,this.onPutBigSkillSuccess);
	}

	__proto.onRemovedFromStage=function(){
		EventCenter.remove("put_big_skill_success" ,this,this.onPutBigSkillSuccess);
	}

	__proto.onPutBigSkillSuccess=function(data){
		if(WarringData.isVerification || WarringData.isSkipMode)return;
		var tip;
		var ary=data;
		var destX=0;
		var centralline=Laya.stage.width *0.5;
		var offsetx=300;
		if(ary[1]==1){
			tip=this.leftTips.pop();
			if(!tip)tip=new battle_left_skill_tipUI();
			tip.x=centralline-offsetx;
			tip.y=72;
			destX=centralline-100;
		}
		else{
			tip=this.rightTips.pop();
			if(!tip)tip=new battle_right_skill_tipUI();
			tip.x=centralline+offsetx;;
			tip.y=72;
			destX=centralline+100;
		}
		tip.txt_name.text=shell.facade.getLang("name_"+ary[0]);
		tip.img_head.skin=UrlManager.getHeroIcon76X76(ary[2]);
		this.addChild(tip);
		var timeLine=new TimeLine();
		timeLine.to(tip,{x:destX},500,Ease.circOut);
		timeLine.to(tip,{},1000);
		timeLine.once("complete",this,this.onMoveComplete,[tip,timeLine]);
		timeLine.play();
	}

	__proto.onMoveComplete=function(tip,timeLine){
		timeLine.destroy();
		tip.removeSelf();
		tip.img_head.skin="";
		if((tip instanceof ui.battle.battle_left_skill_tipUI )){
			this.leftTips.push(tip);
		}
		else{
			this.rightTips.push(tip);
		}
	}

	__proto.update=function(){}
	// }
	__proto.onWarStart=function(e){}
	// }
	__proto.layout=function(){
		this.width=Laya.stage.width;
	}

	return BattleTopInfoPanel;
})(View)


/**
*战斗主场景
*@author fenglijun
*
*/
//class battle.BattleScenePanel extends ui.battle.BattleMainViewUI
var BattleScenePanel=(function(_super){
	function BattleScenePanel(){
		// private var debugPanel:BattleDebugPanel;
		this.mapImage=null;
		//背景地图
		this._effectLayer=null;
		//场景特效
		this._battleWorld=null;
		// private var _lordSkillTargetTipsText:TextField;
		this.isPlaying=false;
		this._shakeEffect=null;
		this._uiLayer=null;
		this.__DESTROY_DISABLED__=true;
		this._subViews=null;
		// }
		this.isCammeraMoving=false;
		//super.centerX=value;
		this.cammeraTL=null;
		this._onCameraMoveEnd=null;
		this.__mouseX=0;
		this.__mouseY=0;
		this._isDragging=false;
		// layer.mouseEnabled=true;
		this._shape=null;
		this._maskAlpha=0;
		this._chatPanel=null;
		BattleScenePanel.__super.call(this);
		AttackStep.initPool();
		BattleScenePanel.instance=this;
		this.size(1800,1024);
		this.layer=RootView.battleLayer;
		this.mapImage=new Image();
		this.addChild(this.mapImage);
		this._effectLayer=new Sprite();
		this.addChild(this._effectLayer);
		this._uiLayer=new Sprite();
		this.addChild(this._uiLayer);
		this._battleWorld=BattleWorld.getInstance();
		this._battleWorld.y=25;
		this._battleWorld.x=1680;
		this.addChild(this._battleWorld);
		this._subViews=[];
		BattleScenePanel.heroOperationPanel=new BattleHeroOperationPanel();
		BattleScenePanel.heroOperationPanel.mouseThrough=true;
		BattleScenePanel.heroOperationPanel.layer=this.layer;
		this._subViews.push(BattleScenePanel.heroOperationPanel);
		BattleScenePanel.topPanel=new BattleTopInfoPanel();
		BattleScenePanel.topPanel.mouseThrough=true;
		BattleScenePanel.topPanel.layer=this.layer;
		this._subViews.push(BattleScenePanel.topPanel);
		BattleScenePanel.settingPanel=new BattleSettingPanel();
		BattleScenePanel.settingPanel.layer=this.layer;
		this._subViews.push(BattleScenePanel.settingPanel);
		BattleScenePanel.operationSubPanel=new BattleOperationSubPanel();
		BattleScenePanel.operationSubPanel.layer=this.layer;
		BattleScenePanel.operationSubPanel.mouseThrough=true;
		this._subViews.push(BattleScenePanel.operationSubPanel);
		BattleScenePanel.pausePanel=new BattlePausePanel();
		this._subViews.push(BattleScenePanel.pausePanel);
		BattleScenePanel.settingPanel=new BattleSettingPanel();
		this._subViews.push(BattleScenePanel.settingPanel);
		this._shakeEffect=new ShakeEffect$1();
		this.pause();
	}

	__class(BattleScenePanel,'battle.BattleScenePanel',_super);
	var __proto=BattleScenePanel.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this._battleWorld=null;
		var view;
		for(var $each_view in this._subViews){
			view=this._subViews[$each_view];
			view.destroy();
		}
		BattleScenePanel.heroOperationPanel=null;
		battle.BattleScenePanel.operationSubPanel=null;
		battle.BattleScenePanel.pausePanel=null;
		battle.BattleScenePanel.settingPanel=null;
		battle.BattleScenePanel.topPanel=null;
		if(this._shakeEffect)
			this._shakeEffect.destroy();
		this._shakeEffect=null;
		BattleScenePanel.instance=null;
		laya.ui.View.prototype.destroy.call(this,destroyChild);
	}

	__proto.onAddToStage=function(){
		framework.debug.logDebug("战斗场景进入");
		this._battleWorld.visible=true;
		this.x=0;
		this.y=this.stage.height-1024;
		BattleScenePanel.heroOperationPanel.show();
		BattleScenePanel.topPanel.show();
		BattleScenePanel.operationSubPanel.show();
		this._chatPanel=new MainChatPanel();
		this._chatPanel.isDialog(true,true);
		RootView.topLayer.addChild(this._chatPanel);
		if (Datas.battleData.pk_type==19){
			BattleScenePanel.operationSubPanel.close();
		}
		Laya.scaleTimer.frameLoop(1,this,this.onEnterFrame);
		EventCenter.add("war_init" ,this,this.onWarInit);
		EventCenter.add("war_start" ,this,this.onWarStart);
		EventCenter.add("war_end" ,this,this.onWarEnd);
		EventCenter.add("war_result_export",this,this.onWarResultExport);
		this.on("mousedown",this,this.onMouseDown);
		EventCenter.dispatchEvent("enter_world_complete");
		this.layout();
	}

	__proto.onStageDown=function(e){
		framework.debug.logDebug(e.target);
	}

	__proto.onRemovedFromStage=function(){
		Laya.scaleTimer.scale=1;
		framework.debug.logDebug("退出战斗场景");
		BattleScenePanel.heroOperationPanel.close();
		BattleScenePanel.topPanel.close();
		this._chatPanel.removeSelf();
		BattleScenePanel.settingPanel.close();
		BattleScenePanel.operationSubPanel.close();
		BattleScenePanel.pausePanel.close();
		Laya.scaleTimer.clear(this,this.onEnterFrame);
		EventCenter.remove("war_init",this,this.onWarInit);
		EventCenter.remove("war_start",this,this.onWarStart);
		EventCenter.remove("war_end" ,this,this.onWarEnd);
		EventCenter.remove("war_result_export",this,this.onWarResultExport);
		this.off("mousedown",this,this.onMouseDown);
		this.pause();
		this.stopdrag();
		while(this.mapImage.numChildren > 0){
			this.mapImage.removeChildAt(this.mapImage.numChildren-1);
		}
	}

	__proto.onWarResultExport=function(){
		WarringData.endFPS();
	}

	__proto.onWarInit=function(){
		this.showUI();
		this.mapImage.graphics.clear();
		var i=0;
		var mx=0;
		var my=0;
		for (i=1;i <=4;i++){
			mx=i%2==0?900:0;
			my=i>2?512:0;
			this.mapImage.loadImage(UrlManager.getBattleMap(Datas.battleData.map+"_0"+i),mx,my);
		}
		if(Laya.stage.width > 1800 || Laya.stage.height > 1024){
			var scaleNum=Math.max(Laya.stage.width/1800,Laya.stage.height/1024);
			this.mapImage.scaleX=scaleNum;
			this.mapImage.scaleY=scaleNum;
		}
		this.clearLayer(this._uiLayer);
		this.clearLayer(this._effectLayer);
		this.createEffects();
		if(Datas.battleData.map=="BR26" || Datas.battleData.map=="BR2"){
			this.addWavesEff();
		}
		else if(Datas.battleData.map=="BR3" || Datas.battleData.map=="BR10" || Datas.battleData.map=="BR13" || Datas.battleData.map=="BR17" || Datas.battleData.map=="BR1" || Datas.battleData.map=="BR25"){
			this.addFireEff();
		}
		else if(Datas.battleData.map=="BR9" || Datas.battleData.map=="BR22"){
			this.addTreeEff();
		}
		else if(Datas.battleData.map=="BR5"){
			this.addBlueLightEff();
		}
		else if(Datas.battleData.map=="BR6"){
			this.addBlueParticleEff();
		}
		else if(Datas.battleData.map=="BR7"){
			this.addFireFilesEff();
			this.addGreenLightEff();
		}
		else if(Datas.battleData.map=="BR11"){
			this.addCrystalParticleEff();
		}
		else if(Datas.battleData.map=="BR12"){
			this.addYellowLightEff();
		}
		else if(Datas.battleData.map=="BR14" || Datas.battleData.map=="BR24"){
			this.addSnowEff();
		}
		else if(Datas.battleData.map=="BR16"){
			this.addSparyEff();
			this.addPortalParticleEff();
		}
		else if(Datas.battleData.map=="BR18"){
			this.addDoorLightEff();
		}
		else if(Datas.battleData.map=="BR19"){
			this.addYellowSandEff();
		}
		else if(Datas.battleData.map=="BR20"){
			this.addJackLanternEff();
		}
		else if(Datas.battleData.map=="BR23"){
			this.addGreenEyesEff();
			this.addGreenSmokeEff();
		}
	}

	__proto.onWarStart=function(){
		framework.debug.logDebug("onWarStart");
		WarringData.startFPS();
		this.run();
	}

	__proto.run=function(){
		if(WarringData.isSkipMode){
			this.pause();
			this.skip();
		}
		else{
			this.cameraFollowToPoint(900,512 ,1.5);
			this.play();
		}
	}

	__proto.onWarEnd=function(){
		this.pause();
	}

	__proto.onClickBtnHandler=function(e){
		switch(e.target){
			}
	}

	// break;
	__proto.skip=function(){
		this.pause();
		this.calc();
	}

	__proto.calc=function(){
		var oldSkipMode=WarringData.isSkipMode;
		var oldV=WarringData.isVerification;
		WarringData.isSkipMode=true;
		WarringData.isVerification=true;
		this._battleWorld.skip();
		WarringData.isSkipMode=oldSkipMode;
		WarringData.isVerification=oldV;
		this.play();
	}

	// this.show();
	__proto.play=function(){
		if(!this.isPlaying){
			BattleSound.ins.play();
			this.isPlaying=true;
			EventCenter.dispatchEvent("battle_resume");
		}
	}

	__proto.pause=function(){
		if(this.isPlaying){
			this.isPlaying=false;
			BattleSound.ins.stop();
			if(this._shakeEffect.isShakeing)
				this._shakeEffect.stopShake();
			EventCenter.dispatchEvent("battle_pause");
		}
	}

	__proto.toggle=function(){
		if(this.isPlaying){
			this.pause()
		}
		else{
			this.play();
		}
	}

	__proto.onEnterFrame=function(event){
		WarringData.updateFPS();
		if(this.isPlaying){
			var i=0;
			while(i++<EnumBattleConfig.BattleSpeed){
				this._battleWorld.update();
				this._battleWorld.dispatchReport();
			}
			BattleScenePanel.heroOperationPanel.update();
			BattleScenePanel.operationSubPanel.update();
			this._shakeEffect.advanceTime(GameDefine.FRAME_TIME);
		}
	}

	/**
	*缓动镜头居中显示场景的某个显示对象
	*对象必须是BattleScened的元素
	*@param target 目标显示对象
	*
	*/
	__proto.cammeraFollowTo=function(target,time){
		(time===void 0)&& (time=0.8);
		var stagePt=target.localToGlobal(new Point());
		var scenePt=this.globalToLocal(stagePt);
		this.cameraFollowToPoint(scenePt.x,scenePt.y,time);
	}

	__proto.cameraFollowToPoint=function(gx,gy,time,onMoveEnd){
		var _$this=this;
		(time===void 0)&& (time=0.8);
		this._onCameraMoveEnd=onMoveEnd;
		var stage=Laya.stage;
		var offsetX=this.x+Math.floor((stage.width *0.5-gx)-this.x);
		var offsetY=this.y+Math.floor((stage.height *0.5-gy)-this.y);
		if(offsetX > 0)
			offsetX=0;
		else if(offsetX <stage.width-(1800 *this.mapImage.scaleX))
		offsetX=int(stage.width-(1800 *this.mapImage.scaleX));
		if(offsetY > 0)
			offsetY=0;
		else if(offsetY <stage.height-(1024 *this.mapImage.scaleY))
		offsetY=int(stage.height-(1024 *this.mapImage.scaleY));
		this.isCammeraMoving=true;
		this.cammeraTL=Tween.to(this,{x:offsetX,y:offsetY},time *1000,null,Handler.create(null,onCammeraMoveEnd));
		function onCammeraMoveEnd (){
			framework.debug.logDebug("移动完毕");
			_$this.isCammeraMoving=false;
			_$this.cammeraTL=null;
			if(_$this._onCameraMoveEnd!=null){
				_$this._onCameraMoveEnd.run();
				_$this._onCameraMoveEnd=null;
			}
		}
	}

	// cammeraTL=TweenLite.to(this,time,{x:offsetX,y:offsetY ,onComplete:onCammeraMoveEnd});
	__proto.shake=function(duration,amplitude){
		this._shakeEffect.shake(this,duration,amplitude);
	}

	__proto.onMouseDown=function(event){
		framework.debug.logDebug(this.isCammeraMoving);
		if(this.isCammeraMoving)
			return;
		this.__mouseX=this.mouseX;
		this.__mouseY=this.mouseY;
		this.clearIntervalTimer();
		Laya.timer.loop(30,this,this.onMouseMove ,[event]);
		this.on("mouseup",this,this.onMouseUp);
		if(!this.hasListener("mouseout"))
			this.on("mouseout" ,this,this.onRollOut);
	}

	// this.addEventListener(MouseEvent.ROLL_OUT,onRollOut );
	__proto.clearIntervalTimer=function(){
		Laya.timer.clear(this,this.onMouseMove);
	}

	__proto.onMouseMove=function(event){
		if(Math.abs(this.mouseX-this.__mouseX)>10 || Math.abs(this.mouseY-this.__mouseY)>10){
			this.startdrag();
		}
	}

	__proto.onMouseUp=function(event){
		this.clearIntervalTimer();
		if(this._isDragging){
			this.stopdrag();
		}
	}

	__proto.startdrag=function(__params){
		var params=arguments;
		if(!this._isDragging){
			this._isDragging=true;
			this.startDrag(new Rectangle(Laya.stage.width-1800 ,Laya.stage.height-1024 ,1800-Laya.stage.width,1024-this.stage.height));
		}
	}

	__proto.stopdrag=function(){
		this.clearIntervalTimer();
		if(this._isDragging){
			this._isDragging=false;
			this.stopDrag();
			this.off("mouseup",this,this.onMouseUp);
		}
	}

	__proto.onRollOut=function(event){
		framework.debug.logDebug("rollout");
		this.stopdrag();
	}

	__proto.showUI=function(){
		BattleScenePanel.heroOperationPanel.visible=true;
		BattleScenePanel.operationSubPanel.visible=true;
	}

	// layer.mouseEnabled=false;
	__proto.hideUI=function(){
		BattleScenePanel.heroOperationPanel.visible=false;
		BattleScenePanel.operationSubPanel.visible=false;
	}

	__proto.setMaskVisible=function(value,alpha){
		(alpha===void 0)&& (alpha=0.5);
		if(value){
			this._maskAlpha=alpha;
			if(!this._shape){
				this._shape=new Sprite();
			}
			this.parent.addChild(this._shape);
			this.drawMask();
		}
		else{
			if(this._shape.parent)
				this._shape.parent.removeChild(this._shape);
		}
	}

	__proto.drawMask=function(){
		if(this._shape && this._shape.parent){
			var _graphics=new Graphics();
			_graphics.clear();
			_graphics.drawRect(0,0,Global.stage.width,Global.stage.height ,'#000000');
			this._shape.graphics=_graphics;
		}
	}

	__proto.showCancelBtn=function(value){}
	// _lordSkillTargetTipsText.visible=value;
	__proto.showTips=function(text){}
	// _lordSkillTargetTipsText.text=text;
	__proto.layout=function(){
		if(this.cammeraTL){
			this.cammeraTL.clear();
			this.cammeraTL=null;
		}
		if(this.x>0)
			this.x=0;
		else if(this.x < this.stage.width-(1800 *this.mapImage.scaleX))
		this.x=int(this.stage.width-(1800 *this.mapImage.scaleX));
		if(this.y > 0)
			this.y=0;
		else if(this.y < this.stage.height-(1024 *this.mapImage.scaleY))
		this.y=int(this.stage.height-(1024 *this.mapImage.scaleY));
		BattleScenePanel.heroOperationPanel.layout();
		BattleScenePanel.topPanel.layout();
		BattleScenePanel.settingPanel.layout();
		BattleScenePanel.operationSubPanel.layout();
		BattleScenePanel.pausePanel.layout();
		this.drawMask();
	}

	__proto.createEffects=function(){}
	/**
	*清空
	*
	*/
	__proto.clearLayer=function(layer){
		var sp;
		while(layer.numChildren > 0){
			sp=layer.removeChildAt(layer.numChildren-1);
			if((sp instanceof framework.mvc.view.player.SwfPlayer )){
				PlayerUtil.returnSwfPlayer((sp));
			}
		}
	}

	/**
	*向uiLayer中添加副本战斗掉落物品
	*@param dropItem
	*
	*/
	__proto.addDropItem=function(dropItem){
		this.uiLayer.addChild(dropItem);
	}

	// }
	__proto.getCurSecond=function(){
		return BattleUtil.currentFrame/30;
	}

	__proto.onHideEnd=function(type){}
	// TODO Auto Generated method stub
	__proto.onMessageHanlder=function(e){}
	// TODO Auto Generated method stub
	__proto.onShowEnd=function(){}
	//水波特效
	__proto.addWavesEff=function(){
		var wavesEffAry=this.createMoreEff(1,"ani_waves");
		if(Datas.battleData.map=="BR2"){
			wavesEffAry[0].pos(150,-130);
		}
		else{
			wavesEffAry[0].pos(150,60);
		}
	}

	//火特效
	__proto.addFireEff=function(){
		if(Datas.battleData.map=="BR3"){
			var fireEffAry=this.createMoreEff(3,"ani_fire");
			fireEffAry[0].pos(367,30);
			fireEffAry[1].pos(433,16);
			fireEffAry[2].pos(122,-110);
		}
		else if(Datas.battleData.map=="BR10"){
			var fireEffAry=this.createMoreEff(4,"ani_fire");
			fireEffAry[0].pos(427,-20);
			fireEffAry[1].pos(217,80);
			fireEffAry[2].pos(1217,340);
			fireEffAry[3].pos(1053,420);
		}
		else if(Datas.battleData.map=="BR13"){
			var fireEffAry=this.createMoreEff(6,"ani_fire");
			fireEffAry[0].pos(-245,355);
			fireEffAry[1].pos(447,-20);
			fireEffAry[2].pos(980,-270);
			fireEffAry[3].pos(750,635);
			fireEffAry[4].pos(1140,470);
			fireEffAry[5].pos(1545,230);
		}
		else if(Datas.battleData.map=="BR17"){
			var fireEffAry=this.createMoreEff(2,"ani_fire");
			fireEffAry[0].pos(625,-75);
			fireEffAry[1].pos(1290,670);
		}
		else if(Datas.battleData.map=="BR1"){
			var fireEffAry=this.createMoreEff(5,"ani_fire");
			fireEffAry[0].pos(905,-130);
			fireEffAry[1].pos(15,270);
			fireEffAry[2].pos(-220,410);
			fireEffAry[3].pos(735,600);
			fireEffAry[4].pos(1450,280);
		}
		else{
			var fireEffAry=this.createMoreEff(4,"ani_fire");
			fireEffAry[0].pos(565,725);
			fireEffAry[1].pos(860,575);
			fireEffAry[2].pos(1150,430);
			fireEffAry[3].pos(1430,290);
		}
	}

	//落叶特效
	__proto.addTreeEff=function(){
		if(Datas.battleData.map=="BR9"){
			var treeEffAry=this.createMoreEff(4,"ani_tree");
			treeEffAry[0].pos(-200,300);
			treeEffAry[1].pos(100,-20);
			treeEffAry[2].pos(600,-100);
			treeEffAry[3].pos(1500,700);
		}
		else{
			var treeEffAry=this.createMoreEff(3,"ani_tree");
			treeEffAry[0].pos(-250,-50);
			treeEffAry[1].pos(580,-80);
			treeEffAry[2].pos(1500,700);
		}
	}

	//蓝色灯光特效
	__proto.addBlueLightEff=function(){
		var blueLightEffAry=this.createMoreEff(4,"ani_blue_light");
		blueLightEffAry[0].pos(420,-23);
		blueLightEffAry[1].pos(527,-80);
		blueLightEffAry[2].pos(720,-50);
		blueLightEffAry[3].pos(815,-96);
		blueLightEffAry[2].scaleX=0.8;
		blueLightEffAry[2].scaleY=0.8;
		blueLightEffAry[3].scaleX=0.8;
		blueLightEffAry[3].scaleY=0.8;
	}

	//蓝色粒子特效
	__proto.addBlueParticleEff=function(){
		var blueParticleEffAry=this.createMoreEff(2,"ani_blue_particle");
		blueParticleEffAry[0].pos(100,-200);
		blueParticleEffAry[1].pos(500,-200);
	}

	//萤火虫特效
	__proto.addFireFilesEff=function(){
		var fireFilesEffAry=this.createMoreEff(1,"ani_firefiles");
		fireFilesEffAry[0].pos(540,-50);
	}

	//绿灯特效
	__proto.addGreenLightEff=function(){
		var greenLightEffAry=this.createMoreEff(2,"ani_green_light");
		greenLightEffAry[0].pos(-40,-90);
		greenLightEffAry[1].pos(135,-150);
		greenLightEffAry[1].scaleX=0.7;
		greenLightEffAry[1].scaleY=0.7;
	}

	//水晶粒子特效
	__proto.addCrystalParticleEff=function(){
		var crystalParticleEffAry=this.createMoreEff(4,"ani_crystal_particle");
		crystalParticleEffAry[0].pos(350,-50);
		crystalParticleEffAry[1].pos(100,-225);
		crystalParticleEffAry[2].pos(900,750);
		crystalParticleEffAry[3].pos(700,750);
	}

	//黄灯光特效
	__proto.addYellowLightEff=function(){
		var yellowLightEffAry=this.createMoreEff(1,"ani_yellow_light");
		yellowLightEffAry[0].pos(615,-147);
	}

	//雪花特效
	__proto.addSnowEff=function(){
		var snowEffAry=this.createMoreEff(3,"ani_snow");
		if(Datas.battleData.map=="BR14"){
			snowEffAry[0].pos(-200,300);
			snowEffAry[1].pos(250,0);
			snowEffAry[2].pos(570,-140);
		}
		else{
			snowEffAry[0].pos(-100,100);
			snowEffAry[1].pos(250,120);
			snowEffAry[2].pos(650,-40);
			snowEffAry[1].scaleX=0.7;
			snowEffAry[1].scaleY=0.7;
		}
	}

	//水花特效
	__proto.addSparyEff=function(){
		var sparyEffAry=this.createMoreEff(2,"ani_spray");
		sparyEffAry[0].pos(708,7);
		sparyEffAry[1].pos(605,-43);
	}

	//传送门粒子特效
	__proto.addPortalParticleEff=function(){
		var portalParticleEffAry=this.createMoreEff(1,"ani_portal_particle");
		portalParticleEffAry[0].pos(448,90);
	}

	//门光特效
	__proto.addDoorLightEff=function(){
		var doorLightEffAry=this.createMoreEff(1,"ani_door_light");
		doorLightEffAry[0].pos(-140,-80);
	}

	//黄沙特效
	__proto.addYellowSandEff=function(){
		var yellowSandEffAry=this.createMoreEff(3,"ani_yellow_sand");
		yellowSandEffAry[0].pos(-250,150);
		yellowSandEffAry[1].pos(500,20);
		yellowSandEffAry[2].pos(800,-120);
	}

	//鬼火特效
	__proto.addJackLanternEff=function(){
		var jackLanternEffAry=this.createMoreEff(1,"ani_jack_lantern");
		jackLanternEffAry[0].pos(230,-90);
	}

	//绿眼特效
	__proto.addGreenEyesEff=function(){
		var greenEyesEffAry=this.createMoreEff(1,"ani_green_eyes");
		greenEyesEffAry[0].pos(325,-198);
	}

	//绿烟特效
	__proto.addGreenSmokeEff=function(){
		var greenSmokeEffAry=this.createMoreEff(2,"ani_green_smoke");
		greenSmokeEffAry[0].pos(170,50);
		greenSmokeEffAry[1].pos(1150,750);
	}

	__proto.createMoreEff=function(num,fileName){
		var effAry=[];
		for(var i=0;i<num;i++){
			var eff=new Animation();
			eff.loadAtlas(UrlManager.getAniAtlas(fileName));
			this.mapImage.addChild(eff);
			eff.play();
			effAry[i]=eff;
		}
		return effAry;
	}

	__getset(0,__proto,'centerX',_super.prototype._$get_centerX,function(value){
	});

	__getset(0,__proto,'uiLayer',function(){
		return this._uiLayer;
	});

	// }
	__getset(0,__proto,'battleWorld',function(){return this._battleWorld;});
	BattleScenePanel.heroOperationPanel=null;
	BattleScenePanel.topPanel=null;
	BattleScenePanel.operationSubPanel=null;
	BattleScenePanel.pausePanel=null;
	BattleScenePanel.settingPanel=null;
	BattleScenePanel.instance=null;
	return BattleScenePanel;
})(BattleMainViewUI)


//class battle.display.BattleGuideArrow extends ui.battle.BattleWeakGuideArrowUI
var BattleGuideArrow=(function(_super){
	function BattleGuideArrow(){
		this.target=null;
		BattleGuideArrow.__super.call(this);
	}

	__class(BattleGuideArrow,'battle.display.BattleGuideArrow',_super);
	var __proto=BattleGuideArrow.prototype;
	__proto.onAddToStage=function(){
		laya.ui.View.prototype.onAddToStage.call(this);
		this.ani1.play();
	}

	__proto.onRemovedFromStage=function(){
		laya.ui.View.prototype.onRemovedFromStage.call(this);
		this.ani1.stop();
	}

	__proto.showAt=function(targetObj,text,mParent){
		this.target=targetObj;
		this.tfText.text=text;
		this.tfText.height=this.tfText.textField.textHeight;
		this.textBg.height=this.tfText.height+10;
		this.textBg.y=-int(this.textBg.height *0.5);
		mParent.addChild(this);
		this.layout();
	}

	__proto._onResize=function(e){
		laya.ui.View.prototype._onResize.call(this,e);
		this.layout();
	}

	__proto.layout=function(){
		laya.ui.View.prototype.layout.call(this);
		var targetPos;
		var arrowX=0;
		var arrowY=0;
		targetPos=this.target.localToGlobal(new Point(0,0));
		arrowX=targetPos.x;
		arrowY=targetPos.y+this.target.height/2;
		this.x=arrowX;
		this.y=arrowY;
	}

	return BattleGuideArrow;
})(BattleWeakGuideArrowUI)


//class battle.display.FighterHeadBase extends ui.battle.Battle_Fighter_headUI
var FighterHeadBase=(function(_super){
	function FighterHeadBase(){
		this._property=null;
		this.hpHideTime=0;
		FighterHeadBase.__super.call(this);
	}

	__class(FighterHeadBase,'battle.display.FighterHeadBase',_super);
	var __proto=FighterHeadBase.prototype;
	__proto.layout=function(){
		this.x=-(this.width *0.5);
	}

	__proto.update=function(){
		if(this._property.f_hp<=0){
			this.visible=false;
		}
		else if((this._property.isHero && EnumBattleSetting.isShowHeroHp)|| (!this._property.isHero && EnumBattleSetting.isShowSoldierHp)){
			if(this._property.f_hp !=this.hp.cur){
				this.hpHideTime=150;
				this.visible=true;
			}
			else if(!this._property.isHero && this.hpHideTime>0){
				if(--this.hpHideTime<=0){
					this.visible=false;
				}
			}
			this.hp.setProgress(this._property.f_hp ,this._property.f_hp_max);
		}
		else{
			this.visible=false;
		}
	}

	// addChild(_txthp );
	__getset(0,__proto,'property',function(){
		return this._property;
		},function(value){
		this._property=value;
		if(value){
			this.hp.visible=true;
			this.hpHideTime=0;
		}
	});

	return FighterHeadBase;
})(Battle_Fighter_headUI)


/**
*战斗界面底部
*领主和英雄操作区域
*@author fenglijun
*
*/
//class battle.view.BattleHeroOperationPanel extends ui.battle.battle_hero_operation_viewUI
var BattleHeroOperationPanel=(function(_super){
	function BattleHeroOperationPanel(){
		// private var heroBitmapText:Vector.<UIBitmapTextField>=new Vector.<UIBitmapTextField>(6);
		this.heroIconStartX=0;
		this.hideTimer=0;
		BattleHeroOperationPanel.__super.call(this);
		this.heroIcons=__newvec(6,null);
		this.tempRect=new Rectangle(0,0,0,11);
		var btn;
		var head;
		var tempBitmap;
		var tempSwf;
		for(var i=0;i<this.heroIcons.length;i++){
			btn=this["hero"+i];
			head=new HeroHead(70,false);
			btn.hitTestPrior=true;
			btn.addChildAt(head,0);
			this.heroIcons[i]=head;
		}
		this.hideTip();
	}

	__class(BattleHeroOperationPanel,'battle.view.BattleHeroOperationPanel',_super);
	var __proto=BattleHeroOperationPanel.prototype;
	__proto.onAddToStage=function(){
		this.on("click",this,this.onClick);
		EventCenter.add("war_init" ,this,this.onWarReady);
		EventCenter.add("battle_pause",this,this.onBattlePauseOrResume);
		EventCenter.add("battle_resume",this,this.onBattlePauseOrResume);
		EventCenter.add("put_big_skill_success" ,this,this.onPutBigSkill);
		this.resumeEffects();
	}

	__proto.onRemovedFromStage=function(){
		this.off("click",this,this.onClick);
		EventCenter.remove("war_init" ,this,this.onWarReady);
		EventCenter.remove("battle_pause",this,this.onBattlePauseOrResume);
		EventCenter.remove("battle_resume",this,this.onBattlePauseOrResume);
		EventCenter.remove("put_big_skill_success" ,this,this.onPutBigSkill);
		for (var i=0;i < Datas.battleData.campList1.length;i++){
			Controllers.guideController.removeClickRect("battle_hero_skill_btn_"+Datas.battleData.campList1[i].heroId);
		}
		this.updateTips(false);
		this.pauseEffects();
	}

	__proto.onPutBigSkill=function(data){
		if(WarringData.isVerification)return;
		if(WarringData.myCamp !=data[1])return;
		var pos=data[3];
		var myHeroPropList=WarringData.getMyHeroPropList();
		for(var i=0;i<myHeroPropList.length;++i){
			if(myHeroPropList[i].pos==pos){
				this.playExplodeEffect(i);
				break ;
			}
		}
	}

	__proto.playExplodeEffect=function(i){
		var btn=this["hero"+i];
		btn.ani.clear();
		btn.ani.loadAtlas(UrlManager.getAniAtlas("ani_hero_useskill"));
		btn.ani.once("complete",null,function(){
			btn.ani.clear();
			btn.ani.visible=false;
		});
		btn.ani.visible=true;
		btn.ani.play(0,false);
	}

	__proto.onBattlePauseOrResume=function(type){
		this.updateTips(type=="battle_pause");
	}

	__proto.showTip=function(i,str){
		this.txt.text=str;
		this.tip.visible=true;
		var icon=this["hero"+i];
		this.tip.x=int(icon.x+icon.width *0.5);
		this.tip.y=icon.y;
		Laya.timer.loop(3000,this,this.hideTip);
	}

	__proto.hideTip=function(){
		this.hideTimer=0;
		this.tip.visible=false;
	}

	__proto.removeEffects=function(){}
	// }
	__proto.resumeEffects=function(){}
	// }
	__proto.pauseEffects=function(){}
	__proto.onWarReady=function(){
		this.removeEffects();
		var campList=WarringData.getMyHeroPropList();
		var prop;
		var pos=0;
		var count=campList.length;
		var btn;
		var info;
		for(var i=0;i<6;i++){
			btn=this["hero"+i];
			btn.ani.visible=false;
			if(i<count){
				prop=campList[i];
				info=prop.belongGroupProp.info;
				this.heroIcons[i].headData=new HeroHeadData(info.heroId,0,info.star,info.military_lv);
				btn.txt_cd.visible=false;
				btn.visible=true;
				btn.gray=false;
				Controllers.guideController.addClickRect("battle_hero_skill_btn_"+info.heroId,this["hero"+i],this.heroIcons[i]);
				pos++;
			}
			else{
				btn.visible=false;
			}
		}
		if(this.stage)
			this.layout();
	}

	__proto.updateTips=function(value){}
	// }
	__proto.onClick=function(event){
		switch(event.target){
			case this.hero0:
			case this.hero1:
			case this.hero2:
			case this.hero3:
			case this.hero4:
			case this.hero5:
				if(WarringData.isAutoMap){
					return;
				};
				var i=int(event.target.name.charAt(event.target.name.length-1));
				this.putHeroSkill(i+1);
				break ;
			}
	}

	__proto.putHeroSkill=function(i){
		if(WarringData.isWarOver){
			BattleAlert.show(shell.facade.getLang("battle_tips2"));
			return;
		}
		if(ReplayCache.mode==2){
			BattleAlert.show(shell.facade.getLang("battle_tips3"));
			return;
		};
		var list=BattleContent.getMyArmyGroupList();
		var ag;
		for(var $each_ag in list){
			ag=list[$each_ag];
			if(ag.hero){
				if(ag.id==i){
					if(ag.hero.property.f_hp <=0)
						return;
					if(ag.hero.property.f_anger < ag.hero.property.anger_max){
						BattleAlert.show(shell.facade.getLang("battle_tips4"));
						return;
					}
					if(ag.hero.buffStatus.skill > 0){
						BattleAlert.show(shell.facade.getLang("battle_tips7"));
						return;
					};
					var flag=ag.hero.useBigSkill(true,true);
					if(flag==4){
						this.showTip(i-1,shell.facade.getLang("war_tips_6"));
					}
					break ;
				}
			}
		}
	}

	__proto.update=function(){
		var pro;
		var btn;
		var newWidth=0;
		var myHeroPropList=WarringData.getMyHeroPropList();
		for(var i=0;i<myHeroPropList.length;++i){
			pro=myHeroPropList[i];
			btn=this["hero"+i];
			btn.hp.setProgress(pro.f_hp ,pro.f_hp_max);
			btn.anger.setProgress(pro.f_anger ,pro.anger_max);
			if(pro.f_hp<=0){
				btn.gray=true;
				if(btn.ani.visible){
					btn.ani.stop();
					btn.ani.visible=false;
				}
			}
			else{
				if(pro.f_anger >=pro.anger_max){
					if(!btn.ani.visible){
						btn.ani.visible=true;
						btn.ani.loadAtlas(UrlManager.getAniAtlas("ani_hero_anger_cycle"),null,"ani_hero_anger_cycle");
						btn.ani.play();
					}
				}
				if(pro.noskillTime){
					btn.mouseEnabled=false;
					var v=int(pro.noskillTime / 30).toString();
					btn.txt_cd.visible=true;
					btn.txt_cd.text=v;
					btn.gray=true;
				}
				else{
					btn.mouseEnabled=true;
					btn.txt_cd.visible=false;
					btn.gray=false;
				}
			}
		}
	}

	__proto.layout=function(){
		var count=Datas.battleData.campList1.length;
		for(var i=0;i<count;++i){
			this["hero"+i].x=int(123 *i);
		}
		this.y=this.stage.height-30;
		this.x=int((this.stage.width-(123 *count-(123-73)))*0.5);
	}

	BattleHeroOperationPanel.HP_WIDTH=70;
	BattleHeroOperationPanel.BTN_WIDTH=123;
	return BattleHeroOperationPanel;
})(battle_hero_operation_viewUI)


//class battle.view.BattleOperationSubPanel extends ui.battle.battle_top_menuUI
var BattleOperationSubPanel=(function(_super){
	function BattleOperationSubPanel(){
		this._dropGoldNum=0;
		this._dropItemBoxNum=0;
		this._arrow=null;
		BattleOperationSubPanel.__super.call(this);
		this.btn_skip.visible=false;
		this.spBattleDrop.removeSelf();
		if(SwfParams.instance.lang=="ru"){
			this.btn_auto.skin="battle/btn_auto_ru.png";
			}else if(SwfParams.instance.platFrom=="360"){
			this.btn_auto.skin="battle/btn_auto_zh.png";
			}else{
			this.btn_auto.skin="battle/btn_auto.png";
		}
		this.on("click",this,this.onClick);
	}

	__class(BattleOperationSubPanel,'battle.view.BattleOperationSubPanel',_super);
	var __proto=BattleOperationSubPanel.prototype;
	__proto.initialize=function(){
		laya.ui.Component.prototype.initialize.call(this);
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		if(this._arrow)
			this._arrow.destroy();
		this._arrow=null;
		laya.ui.View.prototype.destroy.call(this,destroyChild);
	}

	__proto.onAddToStage=function(){
		EventCenter.add("battle_pause",this,this.onBattleResumeOrPause);
		EventCenter.add("battle_resume",this,this.onBattleResumeOrPause);
		EventCenter.add("battle_drop_item",this,this.onBattleDropItem);
		EventCenter.add("war_result_export",this,this.onBattleResultReported);
		this.txt_cd.text=this.toTimeString(WarringData.getBattleTime()/ 30);
		EventCenter.add("war_init" ,this,this.onWarInit);
		EventCenter.add("war_start" ,this,this.onWarStart);
		this.spBattleDrop.visible=Datas.battleData.pk_type==4;
		this.dropGoldNum=0;
		this.dropItemBoxNum=0;
		if(Render.isConchApp && Browser.onIOS){
			EventCenter.add(GameEvent.IPHONE_X_BANS_EVENT,this,this.checkBangs);
		}
	}

	__proto.onRemovedFromStage=function(){
		EventCenter.remove("battle_pause",this,this.onBattleResumeOrPause);
		EventCenter.remove("battle_resume",this,this.onBattleResumeOrPause);
		EventCenter.remove("war_init" ,this,this.onWarInit);
		EventCenter.remove("war_start" ,this,this.onWarStart);
		EventCenter.remove("battle_drop_item",this,this.onBattleDropItem);
		EventCenter.remove("war_result_export",this,this.onBattleResultReported);
		this.removeArrow();
		if(Render.isConchApp && Browser.onIOS){
			EventCenter.remove(GameEvent.IPHONE_X_BANS_EVENT,this,this.checkBangs);
		}
	}

	__proto.onBattleResultReported=function(e){
		this.removeArrow();
	}

	__proto.onMessageHanlder=function(msg){}
	// }
	__proto.onWarStart=function(e){
		if(Datas.battleData.pk_type==4 && Datas.battleData.mapId=="BR2_1"
			&& !shell.utils.getLocalCache("isFirst_BR2_1",2)&& !Datas.battleData.isAuto){
			shell.utils.setLocalCache("isFirst_BR2_1",true,2);
			if(!this._arrow)
				this._arrow=new BattleGuideArrow();
			this._arrow.showAt(this.btn_auto ,shell.facade.getLang("war_tips_8"),RootView.topLayer);
		}
	}

	__proto.removeArrow=function(){
		if(this._arrow){
			if(this._arrow.parent)
				this._arrow.parent.removeChild(this._arrow);
			this._arrow=null;
		}
	}

	__proto.showOppositeInfo=function(){}
	// Tween.to(sp_info,{y:0},200,null,null,0,true );
	__proto.hideOppositeInfo=function(){}
	// }},200 );
	__proto.onWarInit=function(e){
		var pkType=Datas.battleData.pk_type;
		var info=Datas.battleData.getEnemyLordInfo();
		if(!info)return;
		if((pkType==3 || pkType==12 ||
			WarringData.pk_type==11)
		&& info.is_npc !=1){
			this.showOppositeInfo();
		}
		else{
		}
		this.updateBtn();
		this.dropGoldNum=0;
		this.dropItemBoxNum=0;
	}

	__proto.onBattleResumeOrPause=function(e){
		this.updateBtn();
	}

	__proto.onClick=function(event){
		switch(event.target){
			case this.btn_pause:
				BattleScenePanel.instance.pause();
				BattleScenePanel.pausePanel.popup();
				break ;
			case this.btn_skip:
				if(WarringData.phase==3){
					BattleAlert.show(shell.facade.getLang("battle_tips2"));
					return;
				}
				BattleScenePanel.instance.skip();
				break ;
			case this.btn_auto:
				this.removeArrow();
				if(WarringData.isAutoMap){
					BattleAlert.show(shell.facade.getLang("battle_tips6"));
					return;
				}
				Datas.battleData.setAuto(!Datas.battleData.isAuto);
				this.updateBtn();
				break ;
			case this.btn_spd1:
			case this.btn_spd2:
				EnumBattleConfig.BattleSpeed=3-EnumBattleConfig.BattleSpeed;
				this.updateBtn();
				break ;
			}
	}

	// break;
	__proto.onBattleDropItem=function(data){
		var dropItem=data.dropItem;
		var dropPoint=BattleWorld.fighterLayer.localToGlobal(new Point(data.dropPoint.x,data.dropPoint.y));
		var targetPoint;
		dropPoint=BattleScenePanel.instance.uiLayer.globalToLocal(dropPoint);
		for (var itemId in dropItem){
			if (itemId==EnumGameID.gold){
				var goldNum=dropItem[itemId];
				targetPoint=this.spBattleDrop.localToGlobal(new Point(this.tfGoldNum.x-16,this.tfGoldNum.y+11));
				targetPoint=BattleScenePanel.instance.uiLayer.globalToLocal(targetPoint);
				BattleDropUtil.flyGold(dropPoint,targetPoint,new Handler(this,this.onGoldFlyComplete),goldNum);
			}
			else{
				targetPoint=this.spBattleDrop.localToGlobal(new Point(this.tfItemNum.x-39,this.tfItemNum.y));
				targetPoint=BattleScenePanel.instance.uiLayer.globalToLocal(targetPoint);
				BattleDropUtil.flyItemBox(dropPoint,targetPoint,new Handler(this,this.onItemBoxFlyComplete));
			}
		}
	}

	/**
	*金币飞行结束回调，刷新金币数量显示
	*@param godlNum
	*
	*/
	__proto.onGoldFlyComplete=function(godlNum){
		this.dropGoldNum=this.dropGoldNum+godlNum;
	}

	/**
	*宝箱飞行结束回调，刷新宝箱数量显示
	*
	*/
	__proto.onItemBoxFlyComplete=function(){
		this.dropItemBoxNum=this.dropItemBoxNum+1;
	}

	__proto.updateBtn=function(){
		var lordLevel=Datas.battleData.lord["1"].lv;
		this.btn_pause.visible=true;
		if (LocalStorage.getJSON("local_monkey")|| TaskData.isGuiding){
			this.btn_pause.visible=false;
		}
		if(Datas.battleData.isUnlockAuto()&& WarringData.mode==1){
			this.btn_auto.visible=true;
			this.btn_auto.gray=!(Datas.battleData.isAuto || WarringData.isAutoMap);
		}
		else{
			this.btn_auto.visible=false;
		}
		if(Browser.onPC && Datas.battleData.isUnlockAuto()&& WarringData.pk_type !=11){
			if(EnumBattleConfig.BattleSpeed==1){
				this.btn_spd1.visible=true;
				this.btn_spd2.visible=false;
			}
			else{
				this.btn_spd1.visible=false;
				this.btn_spd2.visible=true;
			}
		}
		else{
			this.btn_spd1.visible=false;
			this.btn_spd2.visible=false;
		}
		if(WarringData.isCanSkip){
			this.btn_skip.visible=true;
			this.btn_spd1.visible=false;
			this.btn_spd2.visible=false;
		}
		else{
			this.btn_skip.visible=false;
		}
		this.updateAutoState();
		this.updateButtonLayoutY([this.btn_spd2,this.btn_spd1,this.btn_auto,this.btn_skip,this.btn_pause],15);
		this.frameOnce(5,this,this.layout);
	}

	__proto.layout=function(){
		this.size(Laya.stage.width,Laya.stage.height);
		var stage=Global.stage;
		this.sp_operation.x=Laya.stage.width-this.sp_operation.getBounds().width-10;
		if(this._arrow)
			this._arrow.layout();
		this.layoutAutoIcon();
		this.checkBangs();
	}

	__proto.updateButtonLayoutY=function(btns,spaceY){
		if(btns.length <=0)return;
		var prevIndex=-1;
		for(var i=btns.length-1;i>=0;--i){
			if(!btns[i].visible)continue ;
			if(prevIndex==-1)
				btns[i].y=0;
			else
			btns[i].y=btns[prevIndex].y+btns[prevIndex].height+spaceY;
			prevIndex=i;
		}
	}

	__proto.update=function(){
		if(WarringData.phase==3)return;
		if(BattleUtil.currentFrame % 30==0){
			var frame=WarringData.getBattleTime();
			if(frame>=0){
				var second=frame / 30;
				this.txt_cd.text=this.toTimeString(second);
			}
		}
	}

	// }
	__proto.updateAutoState=function(){
		this.img_lock.visible=WarringData.isAutoMap;
		this.btn_auto.mouseEnabled=!this.img_lock.visible;
	}

	// }
	__proto.layoutAutoIcon=function(){}
	// }
	__proto.toTimeString=function(second){
		var time=Math.floor(second/60)+":";
		var s=Math.floor(second%60);
		if(s < 10)
			time+="0"+s;
		else
		time+=s;
		return time;
	}

	__proto.checkBangs=function(){
		if(Render.isConchApp && Browser.onIOS){
			var ret=Global.appPlatform.haveBangs;
			var offset=42;
			if(0==ret){
				this.sp_operation.x=Laya.stage.width-this.sp_operation.getBounds().width-10;
				}else if(1==ret){
				this.sp_operation.x=Laya.stage.width-this.sp_operation.getBounds().width-10-offset;
			}
			if(this._arrow){
				if(this._arrow.parent){
					this._arrow.parent.removeChild(this._arrow);
				}
				this._arrow=new BattleGuideArrow();
				this._arrow.showAt(this.btn_auto ,shell.facade.getLang("war_tips_8"),RootView.topLayer);
			}
		}
	}

	/**
	*战斗中掉落的宝箱数量
	*@return
	*
	*/
	__getset(0,__proto,'dropItemBoxNum',function(){
		return this._dropItemBoxNum;
		},function(value){
		this._dropItemBoxNum=value;
		this.tfItemNum.text=value.toString();
	});

	/**
	*战斗中掉落的金币数量
	*@return
	*
	*/
	__getset(0,__proto,'dropGoldNum',function(){
		return this._dropGoldNum;
		},function(value){
		this._dropGoldNum=value;
		this.tfGoldNum.text=this._dropGoldNum.toString();
	});

	return BattleOperationSubPanel;
})(battle_top_menuUI)


//class battle.view.BattlePausePanel extends ui.battle.battle_pause_viewUI
var BattlePausePanel=(function(_super){
	function BattlePausePanel(){
		BattlePausePanel.__super.call(this);
		this.bg.labTitle.text=shell.facade.getLang("word_setUp");
		this.btn_set.label=shell.facade.getLang("SetUp_tips7");
		this.btn_resume.label=shell.facade.getLang("SetUp_tips8");
		this.btn_quit.label=shell.facade.getLang("SetUp_tips9");
		this.btn_set.text.overflow="";
		this.btn_resume.text.overflow="";
		this.btn_quit.text.overflow="";
		if(this.btn_set.text.textWidth > this.btn_set.width)
			this.btn_set.text.x=int((this.btn_set.width-this.btn_set.text.textWidth)/2);
		if(this.btn_resume.text.textWidth > this.btn_resume.width)
			this.btn_resume.text.x=int((this.btn_resume.width-this.btn_resume.text.textWidth)/2);
		if(this.btn_quit.text.textWidth > this.btn_quit.width)
			this.btn_quit.text.x=int((this.btn_quit.width-this.btn_quit.text.textWidth)/2);
		this.on("click",this,this.onClickHandler);
	}

	__class(BattlePausePanel,'battle.view.BattlePausePanel',_super);
	var __proto=BattlePausePanel.prototype;
	__proto.close=function(type,showEffect){
		(showEffect===void 0)&& (showEffect=true);
		if(type=="side")
			return;
		laya.ui.Dialog.prototype.close.call(this,type,showEffect);
	}

	__proto.onClosed=function(type){
		if(type=="close" || type=="resume")
			BattleScenePanel.instance.play();
	}

	__proto.onClickHandler=function(event){
		if(event.target.name=="cancel"){
			this.close("resume");
			return;
		}
		switch(event.target){
			case this.btn_set:
				BattleScenePanel.settingPanel.popup();
				break ;
			case this.btn_quit:
				this.close();
				Controllers.entryController.exitBattleWorld();
				break ;
			case this.btn_resume:
				this.close("resume");
				break ;
			}
	}

	return BattlePausePanel;
})(battle_pause_viewUI)


//class battle.view.BattleSettingPanel extends ui.battle.battle_setting_viewUI
var BattleSettingPanel=(function(_super){
	function BattleSettingPanel(){
		BattleSettingPanel.__super.call(this);
	}

	__class(BattleSettingPanel,'battle.view.BattleSettingPanel',_super);
	var __proto=BattleSettingPanel.prototype;
	__proto.initialize=function(){
		laya.ui.Dialog.prototype.initialize.call(this);
		this.bg.labTitle.text=shell.facade.getLang("word_setUp");
		this.isShowSoldierDamagePrompt.label=shell.facade.getLang("SetUp_tips1");
		this.isShowHeroDamagePrompt.label=shell.facade.getLang("SetUp_tips2");
		this.isShowSoldierHp.label=shell.facade.getLang("SetUp_tips3");
		this.isFollowHeroWhenUseBigSkill.label=shell.facade.getLang("SetUp_tips5");
		this.isShowHeroHp.label=shell.facade.getLang("SetUp_tips4");
		this.isHideLordSkillAnimation.label=shell.facade.getLang("SetUp_tips26");
		this.isHideLordSkillAnimation.visible=false;
		this.btn_ok.label=shell.facade.getLang("word_confirm");
		this.btn_sound.visible=false;
		this.isShowSoldierDamagePrompt._childs[0].width=this.isShowHeroDamagePrompt._childs[0].width=this.isShowSoldierHp._childs[0].width=
		this.isFollowHeroWhenUseBigSkill._childs[0].width=this.isShowHeroHp._childs[0].width=216;
		this.isShowSoldierDamagePrompt._childs[0].wordWrap=this.isShowHeroDamagePrompt._childs[0].wordWrap=this.isShowSoldierHp._childs[0].wordWrap=
		this.isFollowHeroWhenUseBigSkill._childs[0].wordWrap=this.isShowHeroHp._childs[0].wordWrap=true;
	}

	// }
	__proto.onAddToStage=function(){
		this.update();
		this.on("click",this,this.onClickHandler);
	}

	__proto.onRemovedFromStage=function(){
		this.off("click",this,this.onClickHandler);
	}

	__proto.onClickHandler=function(event){
		if(event.target==this.btn_ok){
			this.close();
		}
		else if(event.target==this.btn_sound){
		}
		else if((event.target instanceof laya.ui.CheckBox )){
			EnumBattleSetting[event.target.name]=(event.target).selected;
		}
	}

	__proto.onChange=function(){
		var target=this.event.target;
		EnumBattleSetting.update(target.name,target.selected);
		EnumBattleSetting.update(target.name,target.selected);
		EnumBattleSetting.update(target.name,target.selected);
		EnumBattleSetting.update(target.name,target.selected);
		EnumBattleSetting.update(target.name,target.selected);
	}

	__proto.update=function(){
		this.isShowSoldierDamagePrompt.selected=EnumBattleSetting[this.isShowSoldierDamagePrompt.name];
		this.isShowHeroDamagePrompt.selected=EnumBattleSetting[this.isShowHeroDamagePrompt.name];
		this.isShowSoldierHp.selected=EnumBattleSetting[this.isShowSoldierHp.name];
		this.isFollowHeroWhenUseBigSkill.selected=EnumBattleSetting[this.isFollowHeroWhenUseBigSkill.name];
		this.isShowHeroHp.selected=EnumBattleSetting[this.isShowHeroHp.name];
		this.isHideLordSkillAnimation.selected=EnumBattleSetting[this.isHideLordSkillAnimation.name];
	}

	return BattleSettingPanel;
})(battle_setting_viewUI)


//class battle.display.HeroFigherHead extends battle.display.FighterHeadBase
var HeroFigherHead=(function(_super){
	function HeroFigherHead(){
		this.txt=null;
		HeroFigherHead.__super.call(this);
		this.size(75,24);
		if(EnumBattleConfig.SHOW_ARMYGROUP_ID){
			this.txt=GameUtil.createText(50,20,20,null);
			this.addChild(this.txt);
			this.txt.y=-20;
		}
	}

	__class(HeroFigherHead,'battle.display.HeroFigherHead',_super);
	var __proto=HeroFigherHead.prototype;
	// }
	__proto.update=function(){
		if(this._property.f_hp<=0){
			this.visible=false;
		}
		else if(EnumBattleSetting.isShowHeroHp){
			this.visible=true;
			if(this._property.f_hp !=this.hp.cur || this._property.f_hp_max !=this.hp.maximum){
				this.hp.setProgress(this._property.f_hp ,this._property.f_hp_max);
			}
		}
		else{
			this.visible=false;
		}
	}

	__getset(0,__proto,'property',_super.prototype._$get_property,function(value){
		Laya.superSet(FighterHeadBase,this,'property',value);
		if(value){
			if(WarringData.getCampColor(value.camp)==2)
				this.hp.skin="battle/progress_hongse.png";
			else
			this.hp.skin="battle/progress_lvse.png";
			this.visible=true;
			this.hp.value=1;
			if(this.txt)this.txt.text=value.belongGroupId.toString();
			this.img_rank.skin="battle/rk"+value.military_lv+".png";
			this.layout();
		}
	});

	return HeroFigherHead;
})(FighterHeadBase)


//class battle.display.SoldierHead extends battle.display.FighterHeadBase
var SoldierHead=(function(_super){
	function SoldierHead(){
		SoldierHead.__super.call(this);
		this.size(28,5);
		this.img_rank.visible=false;
		this.hp.x=0;
	}

	__class(SoldierHead,'battle.display.SoldierHead',_super);
	var __proto=SoldierHead.prototype;
	__proto.update=function(){
		if(this._property.f_hp<=0){
			this.visible=false;
		}
		else if(EnumBattleSetting.isShowSoldierHp){
			if(this._property.f_hp !=this.hp.cur || this._property.f_hp_max !=this.hp.maximum){
				if(BattleUtil.currentFrame <5)return;
				this.visible=true;
				this.hp.setProgress(this._property.f_hp ,this._property.f_hp_max);
				this.hpHideTime=150;
				this.visible=true;
			}
			else if(this.hpHideTime>0){
				if(--this.hpHideTime<=0){
					this.visible=false;
				}
			}
		}
		else{
			if(this.visible)this.visible=false;
		}
	}

	__getset(0,__proto,'property',_super.prototype._$get_property,function(value){
		Laya.superSet(FighterHeadBase,this,'property',value);
		if(value){
			if(WarringData.getCampColor(value.camp)==2)
				this.hp.skin="battle/progress_shibinghongse.png";
			else
			this.hp.skin="battle/progress_shibinglvse.png";
			this.hp.setProgress(this._property.f_hp ,this._property.f_hp_max);
			this.visible=false;
		}
	});

	return SoldierHead;
})(FighterHeadBase)


	Laya.__init([DamageUnitFactory,SkillMask]);
})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}
