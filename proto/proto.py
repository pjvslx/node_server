import sys,os
import shutil
tmp_dir = './tmp'
if os.path.exists(tmp_dir) == True:
    shutil.rmtree(tmp_dir)
# os.mkdir(tmp_dir)

proto_file_list = ["account.proto"]
protobuf_cmd = "pbjs -t static-module -w commonjs -o ./GameProto.js"
for i in proto_file_list:
    protobuf_cmd = protobuf_cmd + " " + i
os.system(protobuf_cmd)
os.system("pbts -o GameProto.d.ts ./GameProto.js")

# old_text = "var $protobuf = require(\"protobufjs/minimal\");"
# new_text = "var $protobuf = protobuf;"
# file_name = "./tmp/GameProto.js"

# f = open(file_name,"rb")

# new_file = open("GameProto.js","wb")

# for line in f.xreadlines():
#     new_file.write(line.replace(old_text,new_text))
# f.close()
# new_file.close()
# shutil.rmtree(tmp_dir)