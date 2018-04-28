/**
* 获取固定导航器
 *
*/
import { NavigationActions } from 'react-navigation';

let _navigatorTop;//顶级路由器 Stack 的 screens
let _navigatorSide;//Drew 内嵌套的 stack 的 screens
let _navigatorDraw;//tab 路由器 Draw 的 screens

function setTopLevelNavigator(navigatorRef) {
    _navigatorTop = navigatorRef;
}

//todo side侧边内调用时左滑返回tab而不是draw
function navigateTop(routeName, params) {
    _navigatorTop.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName,
            params:{...params,TOTOP:true},
        })
    );

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
        NavigationActions.popToTop()
    );
}



function setDrawNavigator(navigatorRef) {
    _navigatorDraw = navigatorRef;
}

function navigateDraw(routeName, params) {
    _navigatorDraw.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    );

}


function setSideNavigator(navigatorRef) {
    _navigatorSide = navigatorRef;
}

function navigateSide(routeName, params) {
    _navigatorSide.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
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