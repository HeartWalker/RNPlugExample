/**
* 获取固定导航器
 *
*/
import { NavigationActions,StackActions,  } from 'react-navigation';

let _navigatorTop:any;//顶级路由器 Stack 的 screens
let _navigatorSide:any;//Drew 内嵌套的 stack 的 screens
let _navigatorDraw:any;//tab 路由器 Draw 的 screens

function setTopLevelNavigator(navigatorRef:any) {
    _navigatorTop = navigatorRef;
}

//todo side侧边内调用时左滑返回tab而不是draw
function navigateTop(routeName:string, params={}, tabRoute='My') {


    if(!/Drawer/gi.test(routeName)){

    _navigatorTop.dispatch(
        NavigationActions.navigate({
            //type: NavigationActions.NAVIGATE,
            routeName:tabRoute ,
            params:{},
        })
        )
    }

    //定时器减缓
    _navigatorTop.dispatch(
        NavigationActions.navigate({
            //type: NavigationActions.NAVIGATE,
            routeName,
            params:{...params},
        })
    )
  /*  _navigatorTop.dispatch(
        NavigationActions.reset({
            index: 1,
            actions: [NavigationActions.navigate({ routeName: 'Main' }),NavigationActions.navigate({  type: NavigationActions.NAVIGATE,
                routeName,
                params, })],
        })
    );
*/
    // 调用的同时重置side侧边路由到最顶级
    _navigatorSide && _navigatorSide.dispatch(
        StackActions.popToTop({})
    );
}



function setDrawNavigator(navigatorRef:any) {
    _navigatorDraw = navigatorRef;
}

function navigateDraw(routeName:string, params?:object) {
    _navigatorDraw.dispatch(
        NavigationActions.navigate({
            //type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    );

}


function setSideNavigator(navigatorRef:any) {
    _navigatorSide = navigatorRef;
}

function navigateSide(routeName:string, params?:object) {
    _navigatorSide.dispatch(
        NavigationActions.navigate({
            //type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigateTop,
    setTopLevelNavigator,
    navigateSide,
    setSideNavigator,
    setDrawNavigator,
    navigateDraw
};