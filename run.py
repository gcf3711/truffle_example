# docker y_fuzz execute

import os,subprocess

run_path = "/workdir/truffle_example/elysium"

# for root,dirs,files in os.walk(run_path):
#     for dir in dirs:
# for dir in os.listdir(run_path):
#     subprocess.run("./run.sh",shell=True,cwd=os.path.join(run_path,dir))
dir = ["0xe07e687dc4b244d574f37490948c7f4aa921d958",
"0xd113244b9049943d4bc6fef3048d24edf92dd788",
"0xcb58a0bddb9c972d1020d3f9e94c3401960a12d8",
"0xc8986ecd41fb420268f1f4285931379357c4142b",
"0xc7d020d8c92d099b3ade17321310b4815ef20a90",
"0x92033cc5d60de8fc01e7d4125713e05194989e1e",
"0x87be69e5c196e0309cdf6957fd7141fda1df2b97",
"0x79a198b2355ca2aef695d8a4987582e093911ebb",
"0x6a57883b5748bf3631ac2e0d43bf0d6f6cbcd16b",
"0x6994699c731dd7e389c209201ec51e8aff283bf9",
"0x6459fe2c8d7c26c0011772310d8ca0f570f1d667",# manually change the migrations/1_deploy_contract.js
"0x53CE47cbe7F2be0AEcD086a70182A98c907D024d",
"0x5027880b5A4C5BBB88D229a334Aa8F31e6e67197",
"0x169e59a41ba10600fddd1b0a72921f503b31d96b",# manually change the migrations/1_deploy_contract.js
"0x0961375ed779fe16435d5d430da00a5bac527e46",# manually change the migrations/1_deploy_contract.js
"0x0a630de26e5B41eaef08741e74da4018A6C2E14c"]
for file in dir:
    subprocess.run("./run.sh",shell=True,cwd=os.path.join(run_path,file))