//
//  Ray.cpp
//  testApp
//
//  Created by Gael Hugo on 29.04.21.
//

#include "Ray.h"

Ray::Ray(ofVec2f _pos, float _angle){
    pos = _pos;
    dir = ofVec2f(cos(_angle),sin(_angle));
}

//void Ray::lookAt(float x, float y){
//    dir.x = x-pos.x;
//    dir.y = y-pos.y;
//    dir.normalize();
//}

void Ray::show(){
    ofSetColor(255, 255, 255);
    ofPushMatrix();
    ofTranslate(pos.x, pos.y);
    ofDrawLine(0, 0, dir.x*10, dir.y*10);
    ofPopMatrix();
}

ofVec2f Ray::cast(Boundary wall){
    float x1 = wall.a.x;
    float y1 = wall.a.y;
    float x2 = wall.b.x;
    float y2 = wall.b.y;
    
    float x3 = pos.x;
    float y3 = pos.y;
    float x4 = pos.x + dir.x;
    float y4 = pos.y + dir.y;
    
    float den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return ofVec2f();
    }
    
    float t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    float u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
        ofVec2f pt = ofVec2f();
        pt.x = x1 + t * (x2 - x1);
        pt.y = y1 + t * (y2 - y1);
        return pt;
    } else {
        return ofVec2f();
    }
}
