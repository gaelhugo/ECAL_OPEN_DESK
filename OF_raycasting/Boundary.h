//
//  Boundary.hpp
//  testApp
//
//  Created by Gael Hugo on 29.04.21.
//

#pragma once

#include "ofMain.h"

class Boundary{
public:
    Boundary(int x1,int y1, int x2, int y2);
    void show();
    
    ofVec2f a;
    ofVec2f b;
};
