/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule],
  exports: [BrowserModule, CommonModule, RouterModule],
  declarations: [],
  providers: [],
})
export class CoreModule {}
