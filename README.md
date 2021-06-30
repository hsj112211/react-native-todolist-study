# react-native-todolist-study

## 스무디 한잔 마시며 끝내는 React Native 교재로 공부한 내용

- 교재 내용은 IOS를 기준으로 MAC OS로 되어있으나 나의 PC는 Window이기에 Android 를 기준으로 공부하였다.
- Android Studio설치 및 Android SDK 설정 / AVM 설정 등 교재내용을 바탕으로 공부하였다.
- 이 프로젝트는 Chapter6의 내용만을 담고 있고 교재내용을 따라가다 보면 마지막에 UI 깨짐 현상이 발생하는데
- 교재에 적힌 git hub 주소로 들어가서 Chapter6 내용의 최종 push 내용과 비교해 보면 TodoInput.tsx 파일의 내용이 다르다.
- 다른점은 Platform이 ios인지 아닌지에 따라 behavior padding 값 적용하는지 아닌지의 차이점이다.

# ISSUE

- 교재를 토대로 Android Stuio 환경설정을 하던 중 발생한 이슈사항으로
- Inter HAXM 의 설치가 제대로 되지 못하는 문제가 발생하였다. 해당 내용은 아래와 같다.

1. npm install -g react-native-cli
2. chocolatey 설치 ( mac 의 brew 와 같은 것 )
3. choco install openjdk8 ( java 소스가 포함되어 있어서 jdk가 필요하다 버전은 각자 알아서 ) --> 굳이 chocolatey로 jdk를 설치하지 않고 수동으로 설치해도 될 것으로 보인다.
   문서는 초코레이티에 대한 설명이 많음.
4. jdk 환경변수 path 설정
5. android sdk 설치하는데 path name : ANDROID_HOME , path : C:\Users\user\AppData\Local\Android\Sdk
6. android platform tool 환경변수 설정도 필요 path만 추가 C:\Users\user\AppData\Local\Android\Sdk\platform-tools
7. adnroid studio 설치 및 설정
8. default check로 쭉쭉 설치 하고 설치가 완료되고 나면 android studio가 실행 되는데 우측 하단의 Configure에서 SDK Manager 에서 내가 설치한 sdk 버전을 설정해준다.
9. android studio 우측 하단의 Configure에서 AVM Manager 설정을 해주는데, Intel HAXM 설치 관련 이슈가 발생.
   ==> C:\Users\user\AppData\Local\Temp\haxm_install-20210628_1318 과 같이 에러로그가 나오는데 지원 또는 가능 여부가 No 인 상태의 값을 Yes로 만들어 주어야 해결이 가능하고
   ==> 나의 경우는 HAXM install 중 VMX enabled 항목에서 No가 되서 설치가 되지 못하고, 이 부분이 해결되지 못하면 가상의 안드로이드 에뮬레이터를 실행시킬 수 없다.
   ==> 가상의 에뮬레이터라는 것은 마치 안드로이드 핸드폰이 데스크톱에 연결이 되어있는 것과 같이 인식 할 수 있도록 해주는 도구이다.
   ==> 해당 부분 해결 방안으로는 https://www.asus.com/kr/support/FAQ/1043786/ 블로그를 참조하여 바이오스 모드에서 VMX Disabled 상태를 Enabled 로 수정해주어 해결했다.
10. 안드로이드 스튜디오 Configure -> AVM Manager에서 가상의 에뮬레이터를 실행시켜 준다.
11. 터미널 또는 쉘에서 react-native init myProject 와 같이 네이티브 프로젝트를 생성한다. ( 카멜케이스만 적용 가능해보임 )
12. package.json 에서 실행명령어를 확인하여 실행시키면 잘 동작한다.
