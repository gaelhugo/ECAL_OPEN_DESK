//
//  Boundary.cpp
//  testApp
//
//  Created by Gael Hugo on 29.04.21.
//

#include "Boundary.h"

Boundary::Boundary(int x1,int y1, int x2, int y2){
    a = ofVec2f(x1,y1);
    b = ofVec2f(x2,y2);
}

void Boundary::show(){
    ofSetColor(255, 255, 255);
    ofDrawLine(a.x, a.y, b.x, b.y);
}
