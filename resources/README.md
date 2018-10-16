These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

- Cuando se crea un proveedor y esta la importación -> import { IonicPage, NavController, NavParams } from 'ionic-angular'; acordarse de poner en el constructor (navParams) por defecto aparece navParam.
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Proveedor1Provider) {}

  - entramos al proyecto enla raiz myApp(como s ellame)
    ejecutamos el comando:

    ionic cordova build android
    ionic cordova build ios

    ejemplo cuando se ejecute : 	/usr/local/var/www/ionicApp/myApp/platforms/android/app/build/outputs/apk/debug/app-debug.apk

    -emular la aplicacion
    ionic cordova emulator
