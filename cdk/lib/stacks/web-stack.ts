import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import {WebDeploymentConstruct} from "../constructs/web-deployment.construct";

export class WebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new WebDeploymentConstruct(this, 'WebDeploymentConstruct');
  }
}
