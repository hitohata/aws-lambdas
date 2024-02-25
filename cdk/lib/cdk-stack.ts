import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }

  pythonFunction(id: string) {}
  tsFunction(id: string) {}
  jsFunction(id: string) {}
  rustFunction(id: string) {}
}
