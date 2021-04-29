//
//  Particle.cpp
//  testApp
//
//  Created by Gael Hugo on 29.04.21.
//

#include "Particle.h"

Particle::Particle(){
    pos = ofVec2f(ofGetWidth()/2,ofGetHeight()/2);
    
    for(int a = 0;a<360;a++){
        rays.push_back(Ray(pos,ofDegToRad(a)));
    }
}

void Particle::update(float x, float y){
    pos.set(x,y);
    for(int i = 0;i<rays.size();i++){
        rays[i].pos = pos;
    }
}

void Particle::look(vector<Boundary> walls){
    for(int i = 0;i<rays.size();i++){
        Ray ray = rays[i];
        ofVec2f closest = ofVec2f();
        float record = 1000000000000000000000000.0 ; // infinity
        for(int j = 0;j<walls.size();j++){
            Boundary wall = walls[j];
            ofVec2f pt = ray.cast(wall);
//          cout<<pt.length()<<endl;
            if (pt.length()!=0) {
                float d = pos.distance( pt );
                if (d < record) {
                    record = d;
                    closest = pt;
                }
            }
        }
        
        if (closest.length()!=0) {
            // colorMode(HSB);
            // stroke((i + frameCount * 2) % 360, 255, 255, 50);
            // stroke(255, 100);
            ofSetColor(255, 255, 255,100);
            ofDrawLine(pos.x, pos.y, closest.x, closest.y);
        }
    }
}

void Particle::show(){
    ofSetColor(255, 255, 255);
    ofDrawCircle(pos.x, pos.y, 4.0);
    for(int i = 0;i<rays.size();i++){
        rays[i].show();
    }
}
