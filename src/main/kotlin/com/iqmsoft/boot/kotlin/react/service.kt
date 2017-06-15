package com.iqmsoft.boot.kotlin.react

import org.springframework.stereotype.Service

@Service
class HelloService {

    fun hello() = "Welcome!"

}

@Service
class TwoService {

    fun two() = "Two Service Call!"

}