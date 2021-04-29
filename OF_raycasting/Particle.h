//
//  Particle.hpp
//  testApp
//
//  Created by Gael Hugo on 29.04.21.
//

#pragma once

#include "ofMain.h"
#include "Ray.h"
#include "Boundary.h"

class Particle{
public:
    Particle();
    void update(float x, float y);
    void look(vector<Boundary> walls);
    void show();
    
    ofVec2f pos;
    vector<Ray> rays;
};
