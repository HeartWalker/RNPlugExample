package com.rnplugexample;

import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RNPlugExample";
    }

     @Override
        protected void onCreate(Bundle savedInstanceState) {
            try{
                 SplashScreen.show(this);
            }catch (Exception e){
                e.printStackTrace();
            }

            super.onCreate(savedInstanceState);
        }
}
