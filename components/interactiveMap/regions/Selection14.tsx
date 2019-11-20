import React from "react";
import { RegionProps } from "../types";
export default (props: RegionProps) => (
  <path
    onClick={props.onClick}
    className={`region _${props.owner}`}
    id="Selection #14"
    fill="currentColor"
    stroke="black"
    stroke-width="1"
    d="M 747.17,1124.68 C 742.45,1125.12 734.91,1122.51 719.00,1125.46 712.38,1126.69 705.86,1130.03 703.76,1137.00 701.37,1144.89 716.96,1147.14 718.65,1152.21 719.54,1154.78 716.78,1156.98 718.65,1159.49 720.00,1161.37 724.77,1162.51 727.00,1163.14 732.44,1164.69 739.29,1166.48 744.00,1169.61 747.17,1171.71 752.95,1177.26 755.30,1180.32 757.70,1183.43 758.84,1186.89 762.10,1189.30 762.10,1189.30 780.00,1196.38 780.00,1196.38 786.89,1199.86 787.23,1202.27 792.09,1206.82 799.57,1213.83 806.23,1212.86 810.98,1214.99 813.37,1216.06 815.89,1217.93 815.12,1220.91 814.49,1223.34 810.94,1225.58 809.00,1227.00 806.19,1229.04 800.45,1233.18 797.00,1233.35 792.13,1233.59 791.96,1229.74 781.00,1232.51 771.34,1234.96 772.09,1239.19 755.00,1239.00 749.92,1238.94 742.55,1237.83 738.00,1235.58 734.36,1233.77 727.45,1228.52 724.00,1227.59 720.02,1226.53 711.42,1229.47 707.00,1228.28 707.00,1228.28 694.00,1221.44 694.00,1221.44 694.00,1221.44 660.00,1205.69 660.00,1205.69 660.00,1205.69 647.00,1197.31 647.00,1197.31 639.57,1193.87 626.00,1202.38 617.09,1194.66 609.34,1187.94 611.13,1181.65 609.68,1173.00 608.49,1165.94 603.96,1156.21 598.90,1151.17 589.27,1141.57 584.01,1142.19 578.17,1137.39 571.58,1131.96 565.55,1118.20 558.71,1111.17 555.28,1107.64 549.17,1104.47 548.73,1099.00 548.51,1096.20 550.67,1092.39 552.04,1090.00 555.38,1084.15 561.56,1075.43 567.00,1071.57 572.93,1067.37 574.22,1071.05 579.00,1070.24 579.00,1070.24 588.00,1067.17 588.00,1067.17 588.00,1067.17 601.96,1065.42 601.96,1065.42 604.91,1064.34 609.39,1059.52 612.00,1057.27 615.82,1053.98 630.83,1042.94 635.00,1041.65 640.84,1039.85 648.05,1043.47 651.41,1042.91 655.91,1042.16 656.70,1037.50 661.09,1036.31 665.75,1035.06 674.18,1036.80 679.00,1036.96 679.00,1036.96 697.00,1035.04 697.00,1035.04 708.98,1034.57 721.16,1041.65 727.00,1041.63 733.96,1041.61 741.00,1034.15 752.00,1034.00 760.27,1033.89 771.52,1034.87 779.09,1031.24 785.17,1028.34 801.32,1014.75 806.66,1009.75 810.84,1005.83 812.18,1002.42 818.00,999.80 818.00,999.80 841.00,993.56 841.00,993.56 844.61,991.67 846.12,989.41 848.42,987.90 851.16,986.10 852.99,986.53 857.00,983.59 860.66,980.91 861.97,978.09 867.00,978.64 872.17,979.53 873.47,980.87 879.00,978.64 883.43,976.55 885.10,973.85 888.17,973.36 888.17,973.36 900.00,974.65 900.00,974.65 903.72,974.56 908.19,972.34 912.00,971.52 912.00,971.52 919.00,970.45 919.00,970.45 923.97,969.12 925.99,966.25 930.00,964.07 934.58,961.58 939.49,961.95 944.00,959.56 948.39,957.23 949.12,954.51 954.00,952.00 954.00,952.00 952.63,960.45 952.63,960.45 951.33,962.71 940.77,966.50 938.15,968.65 933.81,972.19 936.33,976.23 931.00,977.00 928.14,981.57 925.17,980.61 921.18,983.80 916.44,987.59 915.76,992.37 915.00,998.00 915.00,998.00 928.00,999.00 928.00,999.00 926.97,1013.64 941.45,1017.13 947.61,1011.43 953.11,1006.34 948.58,1000.46 957.00,996.00 956.21,997.88 953.98,1001.80 954.03,1003.58 954.20,1008.94 961.74,1011.33 966.00,1012.00 966.00,1012.00 965.00,1023.00 965.00,1023.00 955.74,1023.52 954.42,1027.63 948.00,1028.40 944.05,1029.17 941.70,1027.13 939.27,1028.40 937.12,1029.20 935.92,1032.84 935.56,1035.00 934.16,1043.24 940.60,1041.72 938.00,1050.00 930.83,1049.60 926.67,1055.25 920.00,1056.95 917.46,1057.60 902.56,1054.78 896.11,1058.31 890.65,1061.30 892.52,1067.02 891.79,1072.00 891.24,1075.74 890.17,1076.60 890.00,1081.00 890.00,1081.00 889.00,1085.00 889.00,1085.00 883.87,1085.79 868.62,1089.10 865.00,1092.00 859.05,1092.11 856.15,1096.98 851.00,1099.44 851.00,1099.44 835.00,1104.87 835.00,1104.87 831.13,1106.53 824.00,1110.56 820.00,1110.61 816.23,1110.65 811.74,1107.42 808.00,1106.00 807.57,1098.34 801.14,1090.15 794.00,1097.83 794.00,1097.83 787.00,1097.83 787.00,1097.83 787.00,1097.83 780.00,1095.89 780.00,1095.89 774.21,1095.19 760.33,1101.22 755.00,1104.02 752.13,1105.52 744.20,1109.33 744.20,1112.91 744.19,1114.91 752.07,1121.30 754.00,1123.00 754.00,1123.00 747.17,1124.68 747.17,1124.68 Z"
  />
);