//
//  Ray.hpp
//  testApp
//
//  Created by Gael Hugo on 29.04.21.
//

#pragma once

#include "ofMain.h"
#include "Boundary.h"

class Ray{
public:
    Ray(ofVec2f _pos, float _angle);
    void lookAt(float x, float y);
    void show();
    ofVec2f cast(Boundary wall);
    
    ofVec2f pos;
    ofVec2f dir;
};
