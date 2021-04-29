#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    xoff = 0;
    yoff = 10000;
    for(int i = 0 ;i<5;i++){
        int x1 = ofRandom(ofGetWidth());
        int x2 = ofRandom(ofGetWidth());
        int y1 = ofRandom(ofGetHeight());
        int y2 = ofRandom(ofGetHeight());
//        Boundary b = Boundary(x1,y1,x2,y1);
        walls.push_back(Boundary(x1,y1,x2,y2));
    }
    walls.push_back(Boundary(0,0,ofGetWidth(),0));
    walls.push_back(Boundary(ofGetWidth(),0,ofGetWidth(),ofGetHeight()));
    walls.push_back(Boundary(ofGetWidth(),ofGetHeight(),0,ofGetHeight()));
    walls.push_back(Boundary(0,ofGetHeight(),0,0));
    
    particle = Particle();
}

//--------------------------------------------------------------
void ofApp::update(){
    xoff += 0.01;
    yoff += 0.01;
}

//--------------------------------------------------------------
void ofApp::draw(){

    for(int i = 0; i < walls.size(); i++){
       walls[i].show();
    }

//    ofLog(OF_LOG_NOTICE,"xoff is %d",xoff);
    particle.update(ofNoise(xoff)*ofGetWidth(), ofNoise(yoff)*ofGetHeight());
    particle.show();
    particle.look(walls);
    
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
