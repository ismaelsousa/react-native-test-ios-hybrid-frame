package com.test

import com.margelo.nitro.test.HybridTestSpec

class HybridTest: HybridTestSpec() {    
    override fun sum(num1: Double, num2: Double): Double {
        return num1 + num2
    }
}
