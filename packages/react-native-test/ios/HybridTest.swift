//
//  HybridTest.swift
//  Pods
//
//  Created by ismaelsousa on 7/25/2026.
//

import Foundation
import VisionCamera
import NitroModules
import AVFoundation

class HybridTest: HybridTestSpec {
    func call(frame: any HybridFrameSpec) throws {
        frame.orientation
    }
    
    
    func sum(num1: Double, num2: Double) throws -> Double {
        return num1 + num2
    }
    
  
}
