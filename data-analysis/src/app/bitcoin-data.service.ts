import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class BitcoinDataService implements InMemoryDbService{

  createDb() {
    const bitcoin = [
          {
            "Date": "2010-07-16",
            "Open": 0.04951,
            "High": 0.04951,
            "Low": 0.04951,
            "Close": 0.04951,
            "Adj Close": 0.04951,
            "Volume": 0
          },
          {
            "Date": "2010-07-17",
            "Open": 0.04951,
            "High": 0.08585,
            "Low": 0.05941,
            "Close": 0.08584,
            "Adj Close": 0.08584,
            "Volume": 5
          },
          {
            "Date": "2010-07-18",
            "Open": 0.08584,
            "High": 0.09307,
            "Low": 0.07723,
            "Close": 0.0808,
            "Adj Close": 0.0808,
            "Volume": 49
          },
          {
            "Date": "2010-07-19",
            "Open": 0.0808,
            "High": 0.08181,
            "Low": 0.07426,
            "Close": 0.07474,
            "Adj Close": 0.07474,
            "Volume": 20
          },
          {
            "Date": "2010-07-20",
            "Open": 0.07474,
            "High": 0.07921,
            "Low": 0.06634,
            "Close": 0.07921,
            "Adj Close": 0.07921,
            "Volume": 42
          },
          {
            "Date": "2010-07-21",
            "Open": 0.07921,
            "High": 0.08181,
            "Low": 0.0505,
            "Close": 0.0505,
            "Adj Close": 0.0505,
            "Volume": 129
          },
          {
            "Date": "2010-07-22",
            "Open": 0.0505,
            "High": 0.06767,
            "Low": 0.0505,
            "Close": 0.06262,
            "Adj Close": 0.06262,
            "Volume": 141
          },
          {
            "Date": "2010-07-23",
            "Open": 0.06262,
            "High": 0.06161,
            "Low": 0.05049,
            "Close": 0.05454,
            "Adj Close": 0.05454,
            "Volume": 26
          },
          {
            "Date": "2010-07-24",
            "Open": 0.05454,
            "High": 0.05941,
            "Low": 0.0505,
            "Close": 0.0505,
            "Adj Close": 0.0505,
            "Volume": 85
          },
          {
            "Date": "2010-07-25",
            "Open": 0.0505,
            "High": 0.056,
            "Low": 0.05,
            "Close": 0.056,
            "Adj Close": 0.056,
            "Volume": 46
          },
          {
            "Date": "2010-07-26",
            "Open": 0.056,
            "High": 0.0605,
            "Low": 0.053,
            "Close": 0.06,
            "Adj Close": 0.06,
            "Volume": 196
          },
          {
            "Date": "2010-07-27",
            "Open": 0.06,
            "High": 0.062,
            "Low": 0.054,
            "Close": 0.0589,
            "Adj Close": 0.0589,
            "Volume": 255
          },
          {
            "Date": "2010-07-28",
            "Open": 0.0589,
            "High": 0.0699,
            "Low": 0.0571,
            "Close": 0.0699,
            "Adj Close": 0.0699,
            "Volume": 528
          },
          {
            "Date": "2010-07-29",
            "Open": 0.0699,
            "High": 0.0698,
            "Low": 0.0582,
            "Close": 0.0627,
            "Adj Close": 0.0627,
            "Volume": 198
          },
          {
            "Date": "2010-07-30",
            "Open": 0.0627,
            "High": 0.06889,
            "Low": 0.056,
            "Close": 0.06785,
            "Adj Close": 0.06785,
            "Volume": 243
          },
          {
            "Date": "2010-07-31",
            "Open": 0.06785,
            "High": 0.065,
            "Low": 0.06,
            "Close": 0.0611,
            "Adj Close": 0.0611,
            "Volume": 162
          },
          {
            "Date": "2010-08-01",
            "Open": 0.0611,
            "High": 0.0633,
            "Low": 0.06,
            "Close": 0.06,
            "Adj Close": 0.06,
            "Volume": 221
          },
          {
            "Date": "2010-08-02",
            "Open": 0.06,
            "High": 0.065,
            "Low": 0.059,
            "Close": 0.06,
            "Adj Close": 0.06,
            "Volume": 606
          },
          {
            "Date": "2010-08-03",
            "Open": 0.06,
            "High": 0.06231,
            "Low": 0.057,
            "Close": 0.057,
            "Adj Close": 0.057,
            "Volume": 210
          },
          {
            "Date": "2010-08-04",
            "Open": 0.057,
            "High": 0.061,
            "Low": 0.058,
            "Close": 0.061,
            "Adj Close": 0.061,
            "Volume": 303
          },
          {
            "Date": "2010-08-05",
            "Open": 0.061,
            "High": 0.0624,
            "Low": 0.0607,
            "Close": 0.0623,
            "Adj Close": 0.0623,
            "Volume": 85
          },
          {
            "Date": "2010-08-06",
            "Open": 0.0623,
            "High": 0.0622,
            "Low": 0.059,
            "Close": 0.059,
            "Adj Close": 0.059,
            "Volume": 157
          },
          {
            "Date": "2010-08-07",
            "Open": 0.059,
            "High": 0.061,
            "Low": 0.059,
            "Close": 0.0609,
            "Adj Close": 0.0609,
            "Volume": 132
          },
          {
            "Date": "2010-08-08",
            "Open": 0.0609,
            "High": 0.0735,
            "Low": 0.0593,
            "Close": 0.071,
            "Adj Close": 0.071,
            "Volume": 886
          },
          {
            "Date": "2010-08-09",
            "Open": 0.071,
            "High": 0.0709,
            "Low": 0.06651,
            "Close": 0.07,
            "Adj Close": 0.07,
            "Volume": 88
          },
          {
            "Date": "2010-08-10",
            "Open": 0.07,
            "High": 0.07541,
            "Low": 0.06,
            "Close": 0.067,
            "Adj Close": 0.067,
            "Volume": 1015
          },
          {
            "Date": "2010-08-11",
            "Open": 0.067,
            "High": 0.07,
            "Low": 0.06141,
            "Close": 0.07,
            "Adj Close": 0.07,
            "Volume": 134
          },
          {
            "Date": "2010-08-12",
            "Open": 0.07,
            "High": 0.068,
            "Low": 0.0645,
            "Close": 0.0645,
            "Adj Close": 0.0645,
            "Volume": 233
          },
          {
            "Date": "2010-08-13",
            "Open": 0.0645,
            "High": 0.0695,
            "Low": 0.0645,
            "Close": 0.067,
            "Adj Close": 0.067,
            "Volume": 295
          },
          {
            "Date": "2010-08-14",
            "Open": 0.067,
            "High": 0.067,
            "Low": 0.065,
            "Close": 0.06529,
            "Adj Close": 0.06529,
            "Volume": 294
          },
          {
            "Date": "2010-08-15",
            "Open": 0.06529,
            "High": 0.0679,
            "Low": 0.062,
            "Close": 0.0655,
            "Adj Close": 0.0655,
            "Volume": 696
          },
          {
            "Date": "2010-08-16",
            "Open": 0.0655,
            "High": 0.0769,
            "Low": 0.06243,
            "Close": 0.07,
            "Adj Close": 0.07,
            "Volume": 915
          },
          {
            "Date": "2010-08-17",
            "Open": 0.07,
            "High": 0.0733,
            "Low": 0.067,
            "Close": 0.068,
            "Adj Close": 0.068,
            "Volume": 203
          },
          {
            "Date": "2010-08-18",
            "Open": 0.068,
            "High": 0.0679,
            "Low": 0.0667,
            "Close": 0.0667,
            "Adj Close": 0.0667,
            "Volume": 50
          },
          {
            "Date": "2010-08-19",
            "Open": 0.0667,
            "High": 0.0667,
            "Low": 0.065,
            "Close": 0.0655,
            "Adj Close": 0.0655,
            "Volume": 276
          },
          {
            "Date": "2010-08-20",
            "Open": 0.0655,
            "High": 0.0669,
            "Low": 0.0644,
            "Close": 0.0664,
            "Adj Close": 0.0664,
            "Volume": 688
          },
          {
            "Date": "2010-08-21",
            "Open": 0.0664,
            "High": 0.0664,
            "Low": 0.0612,
            "Close": 0.066,
            "Adj Close": 0.066,
            "Volume": 1183
          },
          {
            "Date": "2010-08-22",
            "Open": 0.066,
            "High": 0.06689,
            "Low": 0.063,
            "Close": 0.06491,
            "Adj Close": 0.06491,
            "Volume": 281
          },
          {
            "Date": "2010-08-23",
            "Open": 0.06491,
            "High": 0.0665,
            "Low": 0.06491,
            "Close": 0.065,
            "Adj Close": 0.065,
            "Volume": 444
          },
          {
            "Date": "2010-08-24",
            "Open": 0.065,
            "High": 0.0665,
            "Low": 0.0641,
            "Close": 0.0648,
            "Adj Close": 0.0648,
            "Volume": 278
          },
          {
            "Date": "2010-08-25",
            "Open": 0.0648,
            "High": 0.0658,
            "Low": 0.064,
            "Close": 0.064,
            "Adj Close": 0.064,
            "Volume": 251
          },
          {
            "Date": "2010-08-26",
            "Open": 0.064,
            "High": 0.065,
            "Low": 0.063,
            "Close": 0.065,
            "Adj Close": 0.065,
            "Volume": 583
          },
          {
            "Date": "2010-08-27",
            "Open": 0.065,
            "High": 0.065,
            "Low": 0.0641,
            "Close": 0.0641,
            "Adj Close": 0.0641,
            "Volume": 399
          },
          {
            "Date": "2010-08-28",
            "Open": 0.0641,
            "High": 0.0648,
            "Low": 0.064,
            "Close": 0.064,
            "Adj Close": 0.064,
            "Volume": 204
          },
          {
            "Date": "2010-08-29",
            "Open": 0.064,
            "High": 0.069,
            "Low": 0.03211,
            "Close": 0.06497,
            "Adj Close": 0.06497,
            "Volume": 2135
          },
          {
            "Date": "2010-08-30",
            "Open": 0.06497,
            "High": 0.0649,
            "Low": 0.06,
            "Close": 0.06,
            "Adj Close": 0.06,
            "Volume": 933
          },
          {
            "Date": "2010-08-31",
            "Open": 0.06,
            "High": 0.0629,
            "Low": 0.05961,
            "Close": 0.0629,
            "Adj Close": 0.0629,
            "Volume": 436
          },
          {
            "Date": "2010-09-01",
            "Open": 0.0629,
            "High": 0.0634,
            "Low": 0.0601,
            "Close": 0.0634,
            "Adj Close": 0.0634,
            "Volume": 498
          },
          {
            "Date": "2010-09-02",
            "Open": 0.0634,
            "High": 0.063,
            "Low": 0.06085,
            "Close": 0.06085,
            "Adj Close": 0.06085,
            "Volume": 54
          },
          {
            "Date": "2010-09-03",
            "Open": 0.06085,
            "High": 0.06238,
            "Low": 0.0612,
            "Close": 0.06238,
            "Adj Close": 0.06238,
            "Volume": 202
          },
          {
            "Date": "2010-09-04",
            "Open": 0.06238,
            "High": 0.064,
            "Low": 0.0605,
            "Close": 0.0616,
            "Adj Close": 0.0616,
            "Volume": 527
          },
          {
            "Date": "2010-09-05",
            "Open": 0.0616,
            "High": 0.0627,
            "Low": 0.0616,
            "Close": 0.0616,
            "Adj Close": 0.0616,
            "Volume": 56
          },
          {
            "Date": "2010-09-06",
            "Open": 0.0616,
            "High": 0.06201,
            "Low": 0.0603,
            "Close": 0.061,
            "Adj Close": 0.061,
            "Volume": 212
          },
          {
            "Date": "2010-09-07",
            "Open": 0.061,
            "High": 0.062,
            "Low": 0.06099,
            "Close": 0.062,
            "Adj Close": 0.062,
            "Volume": 143
          },
          {
            "Date": "2010-09-08",
            "Open": 0.062,
            "High": 0.0624,
            "Low": 0.06109,
            "Close": 0.06111,
            "Adj Close": 0.06111,
            "Volume": 107
          },
          {
            "Date": "2010-09-09",
            "Open": 0.06111,
            "High": 0.0618,
            "Low": 0.06014,
            "Close": 0.0618,
            "Adj Close": 0.0618,
            "Volume": 301
          },
          {
            "Date": "2010-09-10",
            "Open": 0.0618,
            "High": 0.065,
            "Low": 0.0619,
            "Close": 0.06366,
            "Adj Close": 0.06366,
            "Volume": 491
          },
          {
            "Date": "2010-09-11",
            "Open": 0.06366,
            "High": 0.0621,
            "Low": 0.0615,
            "Close": 0.0615,
            "Adj Close": 0.0615,
            "Volume": 48
          },
          {
            "Date": "2010-09-12",
            "Open": 0.0615,
            "High": 0.064,
            "Low": 0.0607,
            "Close": 0.06219,
            "Adj Close": 0.06219,
            "Volume": 632
          },
          {
            "Date": "2010-09-13",
            "Open": 0.06219,
            "High": 0.175,
            "Low": 0.061,
            "Close": 0.06199,
            "Adj Close": 0.06199,
            "Volume": 876
          },
          {
            "Date": "2010-09-14",
            "Open": 0.06199,
            "High": 0.0625,
            "Low": 0.0604,
            "Close": 0.0604,
            "Adj Close": 0.0604,
            "Volume": 223
          },
          {
            "Date": "2010-09-15",
            "Open": 0.0604,
            "High": 0.0619,
            "Low": 0.0618,
            "Close": 0.0619,
            "Adj Close": 0.0619,
            "Volume": 45
          },
          {
            "Date": "2010-09-16",
            "Open": 0.0619,
            "High": 0.0609,
            "Low": 0.059,
            "Close": 0.059,
            "Adj Close": 0.059,
            "Volume": 438
          },
          {
            "Date": "2010-09-17",
            "Open": 0.059,
            "High": 0.061,
            "Low": 0.05761,
            "Close": 0.061,
            "Adj Close": 0.061,
            "Volume": 427
          },
          {
            "Date": "2010-09-18",
            "Open": 0.061,
            "High": 0.0627,
            "Low": 0.06,
            "Close": 0.0627,
            "Adj Close": 0.0627,
            "Volume": 797
          },
          {
            "Date": "2010-09-19",
            "Open": 0.0627,
            "High": 0.0634,
            "Low": 0.062,
            "Close": 0.0621,
            "Adj Close": 0.0621,
            "Volume": 891
          },
          {
            "Date": "2010-09-20",
            "Open": 0.0621,
            "High": 0.0633,
            "Low": 0.0623,
            "Close": 0.06265,
            "Adj Close": 0.06265,
            "Volume": 359
          },
          {
            "Date": "2010-09-21",
            "Open": 0.06265,
            "High": 0.0624,
            "Low": 0.06147,
            "Close": 0.0622,
            "Adj Close": 0.0622,
            "Volume": 717
          },
          {
            "Date": "2010-09-22",
            "Open": 0.0622,
            "High": 0.063,
            "Low": 0.0615,
            "Close": 0.06231,
            "Adj Close": 0.06231,
            "Volume": 970
          },
          {
            "Date": "2010-09-23",
            "Open": 0.06231,
            "High": 0.0624,
            "Low": 0.06209,
            "Close": 0.0622,
            "Adj Close": 0.0622,
            "Volume": 42
          },
          {
            "Date": "2010-09-24",
            "Open": 0.0622,
            "High": 0.0624,
            "Low": 0.0617,
            "Close": 0.06202,
            "Adj Close": 0.06202,
            "Volume": 133
          },
          {
            "Date": "2010-09-25",
            "Open": 0.06202,
            "High": 0.06228,
            "Low": 0.06186,
            "Close": 0.062,
            "Adj Close": 0.062,
            "Volume": 748
          },
          {
            "Date": "2010-09-26",
            "Open": 0.062,
            "High": 0.06228,
            "Low": 0.0619,
            "Close": 0.0622,
            "Adj Close": 0.0622,
            "Volume": 668
          },
          {
            "Date": "2010-09-27",
            "Open": 0.0622,
            "High": 0.06271,
            "Low": 0.0617,
            "Close": 0.0619,
            "Adj Close": 0.0619,
            "Volume": 439
          },
          {
            "Date": "2010-09-28",
            "Open": 0.0619,
            "High": 0.062,
            "Low": 0.0615,
            "Close": 0.06191,
            "Adj Close": 0.06191,
            "Volume": 1450
          },
          {
            "Date": "2010-09-29",
            "Open": 0.06191,
            "High": 0.0619,
            "Low": 0.06155,
            "Close": 0.0619,
            "Adj Close": 0.0619,
            "Volume": 488
          },
          {
            "Date": "2010-09-30",
            "Open": 0.0619,
            "High": 0.062,
            "Low": 0.06189,
            "Close": 0.06197,
            "Adj Close": 0.06197,
            "Volume": 106
          },
          {
            "Date": "2010-10-01",
            "Open": 0.06197,
            "High": 0.06191,
            "Low": 0.06125,
            "Close": 0.0614,
            "Adj Close": 0.0614,
            "Volume": 802
          },
          {
            "Date": "2010-10-02",
            "Open": 0.0614,
            "High": 0.0614,
            "Low": 0.061,
            "Close": 0.06111,
            "Adj Close": 0.06111,
            "Volume": 439
          },
          {
            "Date": "2010-10-03",
            "Open": 0.06111,
            "High": 0.062,
            "Low": 0.06081,
            "Close": 0.0613,
            "Adj Close": 0.0613,
            "Volume": 2079
          },
          {
            "Date": "2010-10-04",
            "Open": 0.0613,
            "High": 0.06301,
            "Low": 0.0609,
            "Close": 0.0614,
            "Adj Close": 0.0614,
            "Volume": 1699
          },
          {
            "Date": "2010-10-05",
            "Open": 0.0614,
            "High": 0.0635,
            "Low": 0.0612,
            "Close": 0.06281,
            "Adj Close": 0.06281,
            "Volume": 2091
          },
          {
            "Date": "2010-10-06",
            "Open": 0.06281,
            "High": 0.067,
            "Low": 0.0628,
            "Close": 0.067,
            "Adj Close": 0.067,
            "Volume": 2812
          },
          {
            "Date": "2010-10-07",
            "Open": 0.067,
            "High": 0.088,
            "Low": 0.01,
            "Close": 0.08685,
            "Adj Close": 0.08685,
            "Volume": 10784
          },
          {
            "Date": "2010-10-08",
            "Open": 0.08685,
            "High": 0.12,
            "Low": 0.068,
            "Close": 0.0938,
            "Adj Close": 0.0938,
            "Volume": 16104
          },
          {
            "Date": "2010-10-09",
            "Open": 0.0938,
            "High": 0.1301,
            "Low": 0.07999,
            "Close": 0.0965,
            "Adj Close": 0.0965,
            "Volume": 4889
          },
          {
            "Date": "2010-10-10",
            "Open": 0.0965,
            "High": 0.103,
            "Low": 0.091,
            "Close": 0.095,
            "Adj Close": 0.095,
            "Volume": 1395
          },
          {
            "Date": "2010-10-11",
            "Open": 0.095,
            "High": 0.099,
            "Low": 0.082,
            "Close": 0.0949,
            "Adj Close": 0.0949,
            "Volume": 2396
          },
          {
            "Date": "2010-10-12",
            "Open": 0.0949,
            "High": 0.105,
            "Low": 0.092,
            "Close": 0.105,
            "Adj Close": 0.105,
            "Volume": 4558
          },
          {
            "Date": "2010-10-13",
            "Open": 0.105,
            "High": 0.1045,
            "Low": 0.065,
            "Close": 0.102,
            "Adj Close": 0.102,
            "Volume": 3701
          },
          {
            "Date": "2010-10-14",
            "Open": 0.102,
            "High": 0.119,
            "Low": 0.092,
            "Close": 0.105,
            "Adj Close": 0.105,
            "Volume": 2554
          },
          {
            "Date": "2010-10-15",
            "Open": 0.105,
            "High": 0.103,
            "Low": 0.1,
            "Close": 0.101,
            "Adj Close": 0.101,
            "Volume": 633
          },
          {
            "Date": "2010-10-16",
            "Open": 0.101,
            "High": 0.1045,
            "Low": 0.1,
            "Close": 0.102,
            "Adj Close": 0.102,
            "Volume": 1857
          },
          {
            "Date": "2010-10-17",
            "Open": 0.102,
            "High": 0.103,
            "Low": 0.097,
            "Close": 0.1024,
            "Adj Close": 0.1024,
            "Volume": 2591
          },
          {
            "Date": "2010-10-18",
            "Open": 0.1024,
            "High": 0.1019,
            "Low": 0.097,
            "Close": 0.097,
            "Adj Close": 0.097,
            "Volume": 623
          },
          {
            "Date": "2010-10-19",
            "Open": 0.097,
            "High": 0.103,
            "Low": 0.094,
            "Close": 0.099,
            "Adj Close": 0.099,
            "Volume": 3221
          },
          {
            "Date": "2010-10-20",
            "Open": 0.099,
            "High": 0.109,
            "Low": 0.097,
            "Close": 0.107,
            "Adj Close": 0.107,
            "Volume": 4616
          },
          {
            "Date": "2010-10-21",
            "Open": 0.107,
            "High": 0.109,
            "Low": 0.1015,
            "Close": 0.1025,
            "Adj Close": 0.1025,
            "Volume": 3665
          },
          {
            "Date": "2010-10-22",
            "Open": 0.1025,
            "High": 0.109,
            "Low": 0.1045,
            "Close": 0.1055,
            "Adj Close": 0.1055,
            "Volume": 481
          },
          {
            "Date": "2010-10-23",
            "Open": 0.1055,
            "High": 0.19,
            "Low": 0.108,
            "Close": 0.115,
            "Adj Close": 0.115,
            "Volume": 1560
          },
          {
            "Date": "2010-10-24",
            "Open": 0.115,
            "High": 0.19,
            "Low": 0.09009,
            "Close": 0.132,
            "Adj Close": 0.132,
            "Volume": 4450
          },
          {
            "Date": "2010-10-25",
            "Open": 0.132,
            "High": 0.18,
            "Low": 0.133,
            "Close": 0.1503,
            "Adj Close": 0.1503,
            "Volume": 2995
          },
          {
            "Date": "2010-10-26",
            "Open": 0.1503,
            "High": 0.19,
            "Low": 0.151,
            "Close": 0.1877,
            "Adj Close": 0.1877,
            "Volume": 11594
          },
          {
            "Date": "2010-10-27",
            "Open": 0.1877,
            "High": 0.191,
            "Low": 0.1731,
            "Close": 0.1731,
            "Adj Close": 0.1731,
            "Volume": 4009
          },
          {
            "Date": "2010-10-28",
            "Open": 0.1731,
            "High": 0.19,
            "Low": 0.173,
            "Close": 0.19,
            "Adj Close": 0.19,
            "Volume": 5380
          },
          {
            "Date": "2010-10-29",
            "Open": 0.19,
            "High": 0.199,
            "Low": 0.1875,
            "Close": 0.1989,
            "Adj Close": 0.1989,
            "Volume": 5112
          },
          {
            "Date": "2010-10-30",
            "Open": 0.1989,
            "High": 0.1989,
            "Low": 0.171,
            "Close": 0.1925,
            "Adj Close": 0.1925,
            "Volume": 7829
          },
          {
            "Date": "2010-11-01",
            "Open": 0.1925,
            "High": 0.1955,
            "Low": 0.172,
            "Close": 0.1955,
            "Adj Close": 0.1955,
            "Volume": 4049
          },
          {
            "Date": "2010-11-02",
            "Open": 0.1955,
            "High": 0.195,
            "Low": 0.1905,
            "Close": 0.1938,
            "Adj Close": 0.1938,
            "Volume": 1121
          },
          {
            "Date": "2010-11-03",
            "Open": 0.1938,
            "High": 0.275,
            "Low": 0.125,
            "Close": 0.1931,
            "Adj Close": 0.1931,
            "Volume": 11769
          },
          {
            "Date": "2010-11-04",
            "Open": 0.1931,
            "High": 0.236,
            "Low": 0.1934,
            "Close": 0.23,
            "Adj Close": 0.23,
            "Volume": 6229
          },
          {
            "Date": "2010-11-05",
            "Open": 0.23,
            "High": 0.2639,
            "Low": 0.2101,
            "Close": 0.26,
            "Adj Close": 0.26,
            "Volume": 8757
          },
          {
            "Date": "2010-11-06",
            "Open": 0.26,
            "High": 0.5,
            "Low": 0.2402,
            "Close": 0.39,
            "Adj Close": 0.39,
            "Volume": 9396
          },
          {
            "Date": "2010-11-07",
            "Open": 0.39,
            "High": 0.47,
            "Low": 0.286,
            "Close": 0.34,
            "Adj Close": 0.34,
            "Volume": 27937
          },
          {
            "Date": "2010-11-08",
            "Open": 0.34,
            "High": 0.37,
            "Low": 0.2261,
            "Close": 0.243,
            "Adj Close": 0.243,
            "Volume": 38339
          },
          {
            "Date": "2010-11-09",
            "Open": 0.243,
            "High": 0.323,
            "Low": 0.199,
            "Close": 0.21,
            "Adj Close": 0.21,
            "Volume": 12808
          },
          {
            "Date": "2010-11-10",
            "Open": 0.21,
            "High": 0.24,
            "Low": 0.14,
            "Close": 0.24,
            "Adj Close": 0.24,
            "Volume": 6110
          },
          {
            "Date": "2010-11-11",
            "Open": 0.24,
            "High": 0.24,
            "Low": 0.21,
            "Close": 0.2231,
            "Adj Close": 0.2231,
            "Volume": 1111
          },
          {
            "Date": "2010-11-12",
            "Open": 0.2231,
            "High": 0.29,
            "Low": 0.223,
            "Close": 0.2682,
            "Adj Close": 0.2682,
            "Volume": 10494
          },
          {
            "Date": "2010-11-13",
            "Open": 0.2682,
            "High": 0.3,
            "Low": 0.2683,
            "Close": 0.276,
            "Adj Close": 0.276,
            "Volume": 6351
          },
          {
            "Date": "2010-11-14",
            "Open": 0.276,
            "High": 0.299,
            "Low": 0.2702,
            "Close": 0.279,
            "Adj Close": 0.279,
            "Volume": 4793
          },
          {
            "Date": "2010-11-15",
            "Open": 0.279,
            "High": 0.2828,
            "Low": 0.2682,
            "Close": 0.2682,
            "Adj Close": 0.2682,
            "Volume": 2337
          },
          {
            "Date": "2010-11-16",
            "Open": 0.2682,
            "High": 0.275,
            "Low": 0.223,
            "Close": 0.223,
            "Adj Close": 0.223,
            "Volume": 8609
          },
          {
            "Date": "2010-11-17",
            "Open": 0.223,
            "High": 0.29,
            "Low": 0.2116,
            "Close": 0.2299,
            "Adj Close": 0.2299,
            "Volume": 8662
          },
          {
            "Date": "2010-11-18",
            "Open": 0.2299,
            "High": 0.283,
            "Low": 0.2221,
            "Close": 0.2678,
            "Adj Close": 0.2678,
            "Volume": 10253
          },
          {
            "Date": "2010-11-19",
            "Open": 0.2678,
            "High": 0.28,
            "Low": 0.2682,
            "Close": 0.28,
            "Adj Close": 0.28,
            "Volume": 583
          },
          {
            "Date": "2010-11-20",
            "Open": 0.28,
            "High": 0.29,
            "Low": 0.2682,
            "Close": 0.283,
            "Adj Close": 0.283,
            "Volume": 4119
          },
          {
            "Date": "2010-11-21",
            "Open": 0.283,
            "High": 0.282,
            "Low": 0.2763,
            "Close": 0.2767,
            "Adj Close": 0.2767,
            "Volume": 212
          },
          {
            "Date": "2010-11-22",
            "Open": 0.2767,
            "High": 0.2879,
            "Low": 0.269,
            "Close": 0.2879,
            "Adj Close": 0.2879,
            "Volume": 7818
          },
          {
            "Date": "2010-11-23",
            "Open": 0.2879,
            "High": 0.2845,
            "Low": 0.276,
            "Close": 0.2829,
            "Adj Close": 0.2829,
            "Volume": 1361
          },
          {
            "Date": "2010-11-24",
            "Open": 0.2829,
            "High": 0.283,
            "Low": 0.2761,
            "Close": 0.283,
            "Adj Close": 0.283,
            "Volume": 710
          },
          {
            "Date": "2010-11-25",
            "Open": 0.283,
            "High": 0.2825,
            "Low": 0.278,
            "Close": 0.28,
            "Adj Close": 0.28,
            "Volume": 469
          },
          {
            "Date": "2010-11-26",
            "Open": 0.28,
            "High": 0.289,
            "Low": 0.2761,
            "Close": 0.2844,
            "Adj Close": 0.2844,
            "Volume": 9510
          },
          {
            "Date": "2010-11-27",
            "Open": 0.2844,
            "High": 0.2844,
            "Low": 0.2826,
            "Close": 0.283,
            "Adj Close": 0.283,
            "Volume": 515
          },
          {
            "Date": "2010-11-28",
            "Open": 0.283,
            "High": 0.2846,
            "Low": 0.27,
            "Close": 0.27,
            "Adj Close": 0.27,
            "Volume": 5746
          },
          {
            "Date": "2010-11-29",
            "Open": 0.27,
            "High": 0.279,
            "Low": 0.2151,
            "Close": 0.2299,
            "Adj Close": 0.2299,
            "Volume": 8802
          },
          {
            "Date": "2010-11-30",
            "Open": 0.2299,
            "High": 0.2299,
            "Low": 0.204,
            "Close": 0.2082,
            "Adj Close": 0.2082,
            "Volume": 4570
          },
          {
            "Date": "2010-12-01",
            "Open": 0.2082,
            "High": 0.2299,
            "Low": 0.2095,
            "Close": 0.2275,
            "Adj Close": 0.2275,
            "Volume": 1752
          },
          {
            "Date": "2010-12-02",
            "Open": 0.2275,
            "High": 0.2553,
            "Low": 0.218,
            "Close": 0.255,
            "Adj Close": 0.255,
            "Volume": 4800
          },
          {
            "Date": "2010-12-03",
            "Open": 0.255,
            "High": 0.2552,
            "Low": 0.243,
            "Close": 0.251,
            "Adj Close": 0.251,
            "Volume": 633
          },
          {
            "Date": "2010-12-04",
            "Open": 0.251,
            "High": 0.2589,
            "Low": 0.205,
            "Close": 0.205,
            "Adj Close": 0.205,
            "Volume": 6673
          },
          {
            "Date": "2010-12-05",
            "Open": 0.205,
            "High": 0.235,
            "Low": 0.19,
            "Close": 0.19,
            "Adj Close": 0.19,
            "Volume": 1178
          },
          {
            "Date": "2010-12-06",
            "Open": 0.19,
            "High": 0.225,
            "Low": 0.1841,
            "Close": 0.204,
            "Adj Close": 0.204,
            "Volume": 863
          },
          {
            "Date": "2010-12-07",
            "Open": 0.204,
            "High": 0.2477,
            "Low": 0.1701,
            "Close": 0.233,
            "Adj Close": 0.233,
            "Volume": 5411
          },
          {
            "Date": "2010-12-08",
            "Open": 0.233,
            "High": 0.24,
            "Low": 0.22,
            "Close": 0.2388,
            "Adj Close": 0.2388,
            "Volume": 789
          },
          {
            "Date": "2010-12-09",
            "Open": 0.2388,
            "High": 0.233,
            "Low": 0.1701,
            "Close": 0.2,
            "Adj Close": 0.2,
            "Volume": 4411
          },
          {
            "Date": "2010-12-10",
            "Open": 0.2,
            "High": 0.204,
            "Low": 0.1825,
            "Close": 0.204,
            "Adj Close": 0.204,
            "Volume": 328
          },
          {
            "Date": "2010-12-11",
            "Open": 0.204,
            "High": 0.228,
            "Low": 0.1907,
            "Close": 0.228,
            "Adj Close": 0.228,
            "Volume": 1267
          },
          {
            "Date": "2010-12-12",
            "Open": 0.228,
            "High": 0.2279,
            "Low": 0.2068,
            "Close": 0.22,
            "Adj Close": 0.22,
            "Volume": 418
          },
          {
            "Date": "2010-12-13",
            "Open": 0.22,
            "High": 0.23,
            "Low": 0.21,
            "Close": 0.2299,
            "Adj Close": 0.2299,
            "Volume": 1425
          },
          {
            "Date": "2010-12-14",
            "Open": 0.2299,
            "High": 0.2468,
            "Low": 0.21,
            "Close": 0.2467,
            "Adj Close": 0.2467,
            "Volume": 2403
          },
          {
            "Date": "2010-12-15",
            "Open": 0.2467,
            "High": 0.246,
            "Low": 0.238,
            "Close": 0.238,
            "Adj Close": 0.238,
            "Volume": 901
          },
          {
            "Date": "2010-12-16",
            "Open": 0.238,
            "High": 0.255,
            "Low": 0.2222,
            "Close": 0.25,
            "Adj Close": 0.25,
            "Volume": 3522
          },
          {
            "Date": "2010-12-17",
            "Open": 0.25,
            "High": 0.249,
            "Low": 0.24,
            "Close": 0.24,
            "Adj Close": 0.24,
            "Volume": 130
          },
          {
            "Date": "2010-12-18",
            "Open": 0.24,
            "High": 0.2488,
            "Low": 0.241,
            "Close": 0.241,
            "Adj Close": 0.241,
            "Volume": 41
          },
          {
            "Date": "2010-12-19",
            "Open": 0.241,
            "High": 0.2499,
            "Low": 0.24,
            "Close": 0.2401,
            "Adj Close": 0.2401,
            "Volume": 487
          },
          {
            "Date": "2010-12-20",
            "Open": 0.2401,
            "High": 0.275,
            "Low": 0.24,
            "Close": 0.267,
            "Adj Close": 0.267,
            "Volume": 2769
          },
          {
            "Date": "2010-12-21",
            "Open": 0.267,
            "High": 0.267,
            "Low": 0.24,
            "Close": 0.24,
            "Adj Close": 0.24,
            "Volume": 2291
          },
          {
            "Date": "2010-12-22",
            "Open": 0.24,
            "High": 0.25,
            "Low": 0.244,
            "Close": 0.25,
            "Adj Close": 0.25,
            "Volume": 949
          },
          {
            "Date": "2010-12-23",
            "Open": 0.25,
            "High": 0.25,
            "Low": 0.241,
            "Close": 0.25,
            "Adj Close": 0.25,
            "Volume": 2160
          },
          {
            "Date": "2010-12-24",
            "Open": 0.25,
            "High": 0.25,
            "Low": 0.242,
            "Close": 0.248,
            "Adj Close": 0.248,
            "Volume": 1252
          },
          {
            "Date": "2010-12-25",
            "Open": 0.248,
            "High": 0.25,
            "Low": 0.2475,
            "Close": 0.2499,
            "Adj Close": 0.2499,
            "Volume": 175
          },
          {
            "Date": "2010-12-26",
            "Open": 0.2499,
            "High": 0.27,
            "Low": 0.2464,
            "Close": 0.265,
            "Adj Close": 0.265,
            "Volume": 4203
          },
          {
            "Date": "2010-12-27",
            "Open": 0.265,
            "High": 0.27,
            "Low": 0.251,
            "Close": 0.265,
            "Adj Close": 0.265,
            "Volume": 1270
          },
          {
            "Date": "2010-12-28",
            "Open": 0.265,
            "High": 0.281,
            "Low": 0.2612,
            "Close": 0.281,
            "Adj Close": 0.281,
            "Volume": 4238
          },
          {
            "Date": "2010-12-29",
            "Open": 0.281,
            "High": 0.301,
            "Low": 0.271,
            "Close": 0.3,
            "Adj Close": 0.3,
            "Volume": 5363
          },
          {
            "Date": "2010-12-30",
            "Open": 0.3,
            "High": 0.3,
            "Low": 0.291,
            "Close": 0.3,
            "Adj Close": 0.3,
            "Volume": 759
          },
          {
            "Date": "2010-12-31",
            "Open": 0.3,
            "High": 0.3,
            "Low": 0.292,
            "Close": 0.3,
            "Adj Close": 0.3,
            "Volume": 428
          },
          {
            "Date": "2011-01-01",
            "Open": 0.3,
            "High": 0.3,
            "Low": 0.292,
            "Close": 0.3,
            "Adj Close": 0.3,
            "Volume": 841
          },
          {
            "Date": "2011-01-02",
            "Open": 0.3,
            "High": 0.3,
            "Low": 0.289,
            "Close": 0.3,
            "Adj Close": 0.3,
            "Volume": 1584
          },
          {
            "Date": "2011-01-03",
            "Open": 0.3,
            "High": 0.2999,
            "Low": 0.29,
            "Close": 0.295,
            "Adj Close": 0.295,
            "Volume": 420
          },
          {
            "Date": "2011-01-04",
            "Open": 0.295,
            "High": 0.2999,
            "Low": 0.289,
            "Close": 0.2989,
            "Adj Close": 0.2989,
            "Volume": 548
          },
          {
            "Date": "2011-01-05",
            "Open": 0.2989,
            "High": 0.299,
            "Low": 0.29,
            "Close": 0.299,
            "Adj Close": 0.299,
            "Volume": 106
          },
          {
            "Date": "2011-01-06",
            "Open": 0.299,
            "High": 0.299,
            "Low": 0.29,
            "Close": 0.298,
            "Adj Close": 0.298,
            "Volume": 1031
          },
          {
            "Date": "2011-01-07",
            "Open": 0.298,
            "High": 0.322,
            "Low": 0.2975,
            "Close": 0.32,
            "Adj Close": 0.32,
            "Volume": 13152
          },
          {
            "Date": "2011-01-08",
            "Open": 0.32,
            "High": 0.3229,
            "Low": 0.309,
            "Close": 0.3229,
            "Adj Close": 0.3229,
            "Volume": 512
          },
          {
            "Date": "2011-01-09",
            "Open": 0.3229,
            "High": 0.323,
            "Low": 0.3229,
            "Close": 0.323,
            "Adj Close": 0.323,
            "Volume": 546
          },
          {
            "Date": "2011-01-10",
            "Open": 0.323,
            "High": 0.329,
            "Low": 0.3175,
            "Close": 0.3266,
            "Adj Close": 0.3266,
            "Volume": 3360
          },
          {
            "Date": "2011-01-11",
            "Open": 0.3266,
            "High": 0.3266,
            "Low": 0.3176,
            "Close": 0.3266,
            "Adj Close": 0.3266,
            "Volume": 1578
          },
          {
            "Date": "2011-01-12",
            "Open": 0.3266,
            "High": 0.3557,
            "Low": 0.318,
            "Close": 0.3188,
            "Adj Close": 0.3188,
            "Volume": 10508
          },
          {
            "Date": "2011-01-13",
            "Open": 0.3188,
            "High": 0.405,
            "Low": 0.3176,
            "Close": 0.3176,
            "Adj Close": 0.3176,
            "Volume": 7147
          },
          {
            "Date": "2011-01-14",
            "Open": 0.3176,
            "High": 0.45,
            "Low": 0.3176,
            "Close": 0.4,
            "Adj Close": 0.4,
            "Volume": 10691
          },
          {
            "Date": "2011-01-15",
            "Open": 0.4,
            "High": 0.4,
            "Low": 0.385,
            "Close": 0.386,
            "Adj Close": 0.386,
            "Volume": 591
          },
          {
            "Date": "2011-01-16",
            "Open": 0.386,
            "High": 0.4,
            "Low": 0.386,
            "Close": 0.3868,
            "Adj Close": 0.3868,
            "Volume": 1085
          },
          {
            "Date": "2011-01-17",
            "Open": 0.3868,
            "High": 0.3868,
            "Low": 0.315,
            "Close": 0.3495,
            "Adj Close": 0.3495,
            "Volume": 6360
          },
          {
            "Date": "2011-01-18",
            "Open": 0.3495,
            "High": 0.3495,
            "Low": 0.305,
            "Close": 0.313,
            "Adj Close": 0.313,
            "Volume": 4950
          },
          {
            "Date": "2011-01-19",
            "Open": 0.313,
            "High": 0.313,
            "Low": 0.305,
            "Close": 0.313,
            "Adj Close": 0.313,
            "Volume": 2247
          },
          {
            "Date": "2011-01-20",
            "Open": 0.313,
            "High": 0.39,
            "Low": 0.31,
            "Close": 0.39,
            "Adj Close": 0.39,
            "Volume": 6900
          },
          {
            "Date": "2011-01-21",
            "Open": 0.39,
            "High": 0.44,
            "Low": 0.368,
            "Close": 0.4199,
            "Adj Close": 0.4199,
            "Volume": 3351
          },
          {
            "Date": "2011-01-22",
            "Open": 0.4199,
            "High": 0.4443,
            "Low": 0.39,
            "Close": 0.4443,
            "Adj Close": 0.4443,
            "Volume": 4513
          },
          {
            "Date": "2011-01-23",
            "Open": 0.4443,
            "High": 0.4443,
            "Low": 0.42,
            "Close": 0.4424,
            "Adj Close": 0.4424,
            "Volume": 505
          },
          {
            "Date": "2011-01-24",
            "Open": 0.4424,
            "High": 0.4424,
            "Low": 0.381,
            "Close": 0.4199,
            "Adj Close": 0.4199,
            "Volume": 4516
          },
          {
            "Date": "2011-01-25",
            "Open": 0.4199,
            "High": 0.425,
            "Low": 0.4,
            "Close": 0.41,
            "Adj Close": 0.41,
            "Volume": 901
          },
          {
            "Date": "2011-01-26",
            "Open": 0.41,
            "High": 0.42,
            "Low": 0.3904,
            "Close": 0.417,
            "Adj Close": 0.417,
            "Volume": 6315
          },
          {
            "Date": "2011-01-27",
            "Open": 0.417,
            "High": 0.45,
            "Low": 0.4085,
            "Close": 0.4212,
            "Adj Close": 0.4212,
            "Volume": 12086
          },
          {
            "Date": "2011-01-28",
            "Open": 0.4212,
            "High": 0.446,
            "Low": 0.4212,
            "Close": 0.446,
            "Adj Close": 0.446,
            "Volume": 2301
          },
          {
            "Date": "2011-01-29",
            "Open": 0.446,
            "High": 0.445,
            "Low": 0.43,
            "Close": 0.439,
            "Adj Close": 0.439,
            "Volume": 643
          },
          {
            "Date": "2011-01-30",
            "Open": 0.439,
            "High": 0.48,
            "Low": 0.445,
            "Close": 0.4799,
            "Adj Close": 0.4799,
            "Volume": 4775
          },
          {
            "Date": "2011-01-31",
            "Open": 0.4799,
            "High": 0.95,
            "Low": 0.47,
            "Close": 0.52,
            "Adj Close": 0.52,
            "Volume": 32708
          },
          {
            "Date": "2011-02-01",
            "Open": 0.52,
            "High": 0.85,
            "Low": 0.5201,
            "Close": 0.7,
            "Adj Close": 0.7,
            "Volume": 23264
          },
          {
            "Date": "2011-02-02",
            "Open": 0.7,
            "High": 0.76,
            "Low": 0.69,
            "Close": 0.716,
            "Adj Close": 0.716,
            "Volume": 4126
          },
          {
            "Date": "2011-02-03",
            "Open": 0.716,
            "High": 0.75,
            "Low": 0.6501,
            "Close": 0.69,
            "Adj Close": 0.69,
            "Volume": 6064
          },
          {
            "Date": "2011-02-04",
            "Open": 0.69,
            "High": 0.88,
            "Low": 0.67,
            "Close": 0.811,
            "Adj Close": 0.811,
            "Volume": 33965
          },
          {
            "Date": "2011-02-05",
            "Open": 0.811,
            "High": 0.92,
            "Low": 0.8115,
            "Close": 0.92,
            "Adj Close": 0.92,
            "Volume": 13634
          },
          {
            "Date": "2011-02-06",
            "Open": 0.92,
            "High": 0.92,
            "Low": 0.83,
            "Close": 0.8997,
            "Adj Close": 0.8997,
            "Volume": 7608
          },
          {
            "Date": "2011-02-07",
            "Open": 0.8997,
            "High": 0.9,
            "Low": 0.83,
            "Close": 0.89,
            "Adj Close": 0.89,
            "Volume": 1949
          },
          {
            "Date": "2011-02-08",
            "Open": 0.89,
            "High": 0.918,
            "Low": 0.8617,
            "Close": 0.918,
            "Adj Close": 0.918,
            "Volume": 6306
          },
          {
            "Date": "2011-02-09",
            "Open": 0.918,
            "High": 1.09,
            "Low": 0.82,
            "Close": 1.09,
            "Adj Close": 1.09,
            "Volume": 47455
          },
          {
            "Date": "2011-02-10",
            "Open": 1.09,
            "High": 1.1,
            "Low": 0.8,
            "Close": 0.9803,
            "Adj Close": 0.9803,
            "Volume": 25568
          },
          {
            "Date": "2011-02-11",
            "Open": 0.9803,
            "High": 1.09,
            "Low": 0.9264,
            "Close": 1.07,
            "Adj Close": 1.07,
            "Volume": 13213
          },
          {
            "Date": "2011-02-12",
            "Open": 1.07,
            "High": 1.08,
            "Low": 0.9906,
            "Close": 1.08,
            "Adj Close": 1.08,
            "Volume": 4353
          },
          {
            "Date": "2011-02-13",
            "Open": 1.08,
            "High": 1.08,
            "Low": 1.02,
            "Close": 1.05,
            "Adj Close": 1.05,
            "Volume": 3398
          },
          {
            "Date": "2011-02-14",
            "Open": 1.05,
            "High": 1.08,
            "Low": 1.03,
            "Close": 1.07,
            "Adj Close": 1.07,
            "Volume": 7532
          },
          {
            "Date": "2011-02-15",
            "Open": 1.07,
            "High": 1.09,
            "Low": 1.03,
            "Close": 1.05,
            "Adj Close": 1.05,
            "Volume": 9085
          },
          {
            "Date": "2011-02-16",
            "Open": 1.05,
            "High": 1.05,
            "Low": 1.02,
            "Close": 1.05,
            "Adj Close": 1.05,
            "Volume": 7465
          },
          {
            "Date": "2011-02-17",
            "Open": 1.05,
            "High": 1.05,
            "Low": 1.02,
            "Close": 1.04,
            "Adj Close": 1.04,
            "Volume": 4184
          },
          {
            "Date": "2011-02-18",
            "Open": 1.04,
            "High": 1.04,
            "Low": 0.7801,
            "Close": 0.8989,
            "Adj Close": 0.8989,
            "Volume": 32719
          },
          {
            "Date": "2011-02-19",
            "Open": 0.8989,
            "High": 0.98,
            "Low": 0.8376,
            "Close": 0.949,
            "Adj Close": 0.949,
            "Volume": 3454
          },
          {
            "Date": "2011-02-20",
            "Open": 0.949,
            "High": 0.949,
            "Low": 0.83,
            "Close": 0.85,
            "Adj Close": 0.85,
            "Volume": 8503
          },
          {
            "Date": "2011-02-21",
            "Open": 0.85,
            "High": 0.8796,
            "Low": 0.8313,
            "Close": 0.8345,
            "Adj Close": 0.8345,
            "Volume": 1435
          },
          {
            "Date": "2011-02-22",
            "Open": 0.8345,
            "High": 0.95,
            "Low": 0.8313,
            "Close": 0.8702,
            "Adj Close": 0.8702,
            "Volume": 10650
          },
          {
            "Date": "2011-02-23",
            "Open": 0.8702,
            "High": 0.945,
            "Low": 0.8681,
            "Close": 0.9,
            "Adj Close": 0.9,
            "Volume": 6057
          },
          {
            "Date": "2011-02-24",
            "Open": 0.9,
            "High": 1,
            "Low": 0.9,
            "Close": 0.9974,
            "Adj Close": 0.9974,
            "Volume": 12708
          },
          {
            "Date": "2011-02-25",
            "Open": 0.9974,
            "High": 0.9998,
            "Low": 0.9111,
            "Close": 0.9111,
            "Adj Close": 0.9111,
            "Volume": 4276
          },
          {
            "Date": "2011-02-26",
            "Open": 0.9111,
            "High": 0.97,
            "Low": 0.9106,
            "Close": 0.958,
            "Adj Close": 0.958,
            "Volume": 4452
          },
          {
            "Date": "2011-02-27",
            "Open": 0.958,
            "High": 0.958,
            "Low": 0.89,
            "Close": 0.89,
            "Adj Close": 0.89,
            "Volume": 21576
          },
          {
            "Date": "2011-02-28",
            "Open": 0.89,
            "High": 0.92,
            "Low": 0.845,
            "Close": 0.86,
            "Adj Close": 0.86,
            "Volume": 4108
          },
          {
            "Date": "2011-03-01",
            "Open": 0.86,
            "High": 0.97,
            "Low": 0.8502,
            "Close": 0.9202,
            "Adj Close": 0.9202,
            "Volume": 21413
          },
          {
            "Date": "2011-03-02",
            "Open": 0.9202,
            "High": 0.94,
            "Low": 0.9102,
            "Close": 0.9399,
            "Adj Close": 0.9399,
            "Volume": 2533
          },
          {
            "Date": "2011-03-03",
            "Open": 0.9399,
            "High": 0.9399,
            "Low": 0.91,
            "Close": 0.9391,
            "Adj Close": 0.9391,
            "Volume": 2520
          },
          {
            "Date": "2011-03-04",
            "Open": 0.9391,
            "High": 0.9391,
            "Low": 0.9001,
            "Close": 0.901,
            "Adj Close": 0.901,
            "Volume": 2469
          },
          {
            "Date": "2011-03-05",
            "Open": 0.901,
            "High": 0.9189,
            "Low": 0.8111,
            "Close": 0.9103,
            "Adj Close": 0.9103,
            "Volume": 11115
          },
          {
            "Date": "2011-03-06",
            "Open": 0.9103,
            "High": 0.9098,
            "Low": 0.81,
            "Close": 0.8999,
            "Adj Close": 0.8999,
            "Volume": 10775
          },
          {
            "Date": "2011-03-07",
            "Open": 0.8999,
            "High": 0.909,
            "Low": 0.846,
            "Close": 0.885,
            "Adj Close": 0.885,
            "Volume": 13527
          },
          {
            "Date": "2011-03-08",
            "Open": 0.885,
            "High": 0.885,
            "Low": 0.85,
            "Close": 0.87,
            "Adj Close": 0.87,
            "Volume": 3931
          },
          {
            "Date": "2011-03-09",
            "Open": 0.87,
            "High": 0.87,
            "Low": 0.85,
            "Close": 0.8645,
            "Adj Close": 0.8645,
            "Volume": 3881
          },
          {
            "Date": "2011-03-10",
            "Open": 0.8645,
            "High": 0.9329,
            "Low": 0.8497,
            "Close": 0.9329,
            "Adj Close": 0.9329,
            "Volume": 7895
          },
          {
            "Date": "2011-03-11",
            "Open": 0.9329,
            "High": 0.925,
            "Low": 0.8601,
            "Close": 0.88,
            "Adj Close": 0.88,
            "Volume": 3301
          },
          {
            "Date": "2011-03-12",
            "Open": 0.88,
            "High": 0.9197,
            "Low": 0.88,
            "Close": 0.918,
            "Adj Close": 0.918,
            "Volume": 4319
          },
          {
            "Date": "2011-03-13",
            "Open": 0.918,
            "High": 0.918,
            "Low": 0.8898,
            "Close": 0.8925,
            "Adj Close": 0.8925,
            "Volume": 595
          },
          {
            "Date": "2011-03-14",
            "Open": 0.8925,
            "High": 0.9,
            "Low": 0.88,
            "Close": 0.8949,
            "Adj Close": 0.8949,
            "Volume": 4676
          },
          {
            "Date": "2011-03-15",
            "Open": 0.8949,
            "High": 0.8949,
            "Low": 0.87,
            "Close": 0.87,
            "Adj Close": 0.87,
            "Volume": 2405
          },
          {
            "Date": "2011-03-16",
            "Open": 0.87,
            "High": 0.88,
            "Low": 0.836,
            "Close": 0.86,
            "Adj Close": 0.86,
            "Volume": 6761
          },
          {
            "Date": "2011-03-17",
            "Open": 0.86,
            "High": 0.88,
            "Low": 0.81,
            "Close": 0.8254,
            "Adj Close": 0.8254,
            "Volume": 6042
          },
          {
            "Date": "2011-03-18",
            "Open": 0.8254,
            "High": 0.8506,
            "Low": 0.71,
            "Close": 0.8165,
            "Adj Close": 0.8165,
            "Volume": 10971
          },
          {
            "Date": "2011-03-19",
            "Open": 0.8165,
            "High": 0.797,
            "Low": 0.7313,
            "Close": 0.765,
            "Adj Close": 0.765,
            "Volume": 7457
          },
          {
            "Date": "2011-03-20",
            "Open": 0.765,
            "High": 0.79,
            "Low": 0.7402,
            "Close": 0.7411,
            "Adj Close": 0.7411,
            "Volume": 4502
          },
          {
            "Date": "2011-03-21",
            "Open": 0.7411,
            "High": 0.7724,
            "Low": 0.7405,
            "Close": 0.759,
            "Adj Close": 0.759,
            "Volume": 2780
          },
          {
            "Date": "2011-03-22",
            "Open": 0.759,
            "High": 0.81,
            "Low": 0.7405,
            "Close": 0.809,
            "Adj Close": 0.809,
            "Volume": 9499
          },
          {
            "Date": "2011-03-23",
            "Open": 0.809,
            "High": 0.85,
            "Low": 0.78,
            "Close": 0.8497,
            "Adj Close": 0.8497,
            "Volume": 11029
          },
          {
            "Date": "2011-03-24",
            "Open": 0.8497,
            "High": 0.9,
            "Low": 0.8266,
            "Close": 0.8669,
            "Adj Close": 0.8669,
            "Volume": 12259
          },
          {
            "Date": "2011-03-25",
            "Open": 0.8669,
            "High": 0.89,
            "Low": 0.861,
            "Close": 0.8838,
            "Adj Close": 0.8838,
            "Volume": 4225
          },
          {
            "Date": "2011-03-26",
            "Open": 0.8838,
            "High": 0.905,
            "Low": 0.841,
            "Close": 0.8552,
            "Adj Close": 0.8552,
            "Volume": 10250
          },
          {
            "Date": "2011-03-27",
            "Open": 0.8552,
            "High": 0.8721,
            "Low": 0.8152,
            "Close": 0.82,
            "Adj Close": 0.82,
            "Volume": 4439
          },
          {
            "Date": "2011-03-27",
            "Open": 0.82,
            "High": 0.85,
            "Low": 0.76,
            "Close": 0.799,
            "Adj Close": 0.799,
            "Volume": 10141
          },
          {
            "Date": "2011-03-28",
            "Open": 0.799,
            "High": 0.7997,
            "Low": 0.7648,
            "Close": 0.7925,
            "Adj Close": 0.7925,
            "Volume": 3312
          },
          {
            "Date": "2011-03-29",
            "Open": 0.7925,
            "High": 0.795,
            "Low": 0.766,
            "Close": 0.7897,
            "Adj Close": 0.7897,
            "Volume": 2532
          },
          {
            "Date": "2011-03-30",
            "Open": 0.7897,
            "High": 0.801,
            "Low": 0.768,
            "Close": 0.7846,
            "Adj Close": 0.7846,
            "Volume": 5429
          },
          {
            "Date": "2011-03-31",
            "Open": 0.7846,
            "High": 0.797,
            "Low": 0.7741,
            "Close": 0.7741,
            "Adj Close": 0.7741,
            "Volume": 2483
          },
          {
            "Date": "2011-04-01",
            "Open": 0.7741,
            "High": 0.7998,
            "Low": 0.7741,
            "Close": 0.782,
            "Adj Close": 0.782,
            "Volume": 1965
          },
          {
            "Date": "2011-04-02",
            "Open": 0.782,
            "High": 0.7949,
            "Low": 0.777,
            "Close": 0.779,
            "Adj Close": 0.779,
            "Volume": 3074
          },
          {
            "Date": "2011-04-03",
            "Open": 0.779,
            "High": 0.785,
            "Low": 0.5619,
            "Close": 0.68,
            "Adj Close": 0.68,
            "Volume": 21652
          },
          {
            "Date": "2011-04-04",
            "Open": 0.68,
            "High": 0.7478,
            "Low": 0.58,
            "Close": 0.71,
            "Adj Close": 0.71,
            "Volume": 6522
          },
          {
            "Date": "2011-04-05",
            "Open": 0.71,
            "High": 0.75,
            "Low": 0.6902,
            "Close": 0.74,
            "Adj Close": 0.74,
            "Volume": 6264
          },
          {
            "Date": "2011-04-06",
            "Open": 0.74,
            "High": 0.7849,
            "Low": 0.7205,
            "Close": 0.7538,
            "Adj Close": 0.7538,
            "Volume": 8178
          },
          {
            "Date": "2011-04-07",
            "Open": 0.7538,
            "High": 0.799,
            "Low": 0.7309,
            "Close": 0.75,
            "Adj Close": 0.75,
            "Volume": 13854
          },
          {
            "Date": "2011-04-08",
            "Open": 0.75,
            "High": 0.7676,
            "Low": 0.7205,
            "Close": 0.73,
            "Adj Close": 0.73,
            "Volume": 8940
          },
          {
            "Date": "2011-04-09",
            "Open": 0.73,
            "High": 0.7589,
            "Low": 0.71,
            "Close": 0.7369,
            "Adj Close": 0.7369,
            "Volume": 3946
          },
          {
            "Date": "2011-04-10",
            "Open": 0.7369,
            "High": 0.799,
            "Low": 0.7103,
            "Close": 0.77,
            "Adj Close": 0.77,
            "Volume": 11255
          },
          {
            "Date": "2011-04-11",
            "Open": 0.77,
            "High": 0.899,
            "Low": 0.7703,
            "Close": 0.86,
            "Adj Close": 0.86,
            "Volume": 41333
          },
          {
            "Date": "2011-04-12",
            "Open": 0.86,
            "High": 1,
            "Low": 0.86,
            "Close": 0.9225,
            "Adj Close": 0.9225,
            "Volume": 40467
          },
          {
            "Date": "2011-04-13",
            "Open": 0.9225,
            "High": 1,
            "Low": 0.91,
            "Close": 1,
            "Adj Close": 1,
            "Volume": 29643
          },
          {
            "Date": "2011-04-14",
            "Open": 1,
            "High": 1.09,
            "Low": 0.911,
            "Close": 0.9899,
            "Adj Close": 0.9899,
            "Volume": 50488
          },
          {
            "Date": "2011-04-15",
            "Open": 0.9899,
            "High": 1.1,
            "Low": 0.9541,
            "Close": 1.05,
            "Adj Close": 1.05,
            "Volume": 30097
          },
          {
            "Date": "2011-04-16",
            "Open": 1.05,
            "High": 1.14,
            "Low": 1.03,
            "Close": 1.11,
            "Adj Close": 1.11,
            "Volume": 26085
          },
          {
            "Date": "2011-04-17",
            "Open": 1.11,
            "High": 1.2,
            "Low": 1.11,
            "Close": 1.16,
            "Adj Close": 1.16,
            "Volume": 31552
          },
          {
            "Date": "2011-04-18",
            "Open": 1.16,
            "High": 1.2,
            "Low": 1.14,
            "Close": 1.2,
            "Adj Close": 1.2,
            "Volume": 14782
          },
          {
            "Date": "2011-04-19",
            "Open": 1.2,
            "High": 1.2,
            "Low": 1.13,
            "Close": 1.14,
            "Adj Close": 1.14,
            "Volume": 24691
          },
          {
            "Date": "2011-04-20",
            "Open": 1.14,
            "High": 1.21,
            "Low": 1.14,
            "Close": 1.21,
            "Adj Close": 1.21,
            "Volume": 46345
          },
          {
            "Date": "2011-04-21",
            "Open": 1.21,
            "High": 1.41,
            "Low": 1.19,
            "Close": 1.41,
            "Adj Close": 1.41,
            "Volume": 50929
          },
          {
            "Date": "2011-04-22",
            "Open": 1.41,
            "High": 1.95,
            "Low": 1.32,
            "Close": 1.7,
            "Adj Close": 1.7,
            "Volume": 103242
          },
          {
            "Date": "2011-04-23",
            "Open": 1.7,
            "High": 1.95,
            "Low": 1.6,
            "Close": 1.63,
            "Adj Close": 1.63,
            "Volume": 36076
          },
          {
            "Date": "2011-04-24",
            "Open": 1.63,
            "High": 1.7,
            "Low": 1.52,
            "Close": 1.56,
            "Adj Close": 1.56,
            "Volume": 21226
          },
          {
            "Date": "2011-04-25",
            "Open": 1.56,
            "High": 1.79,
            "Low": 1.53,
            "Close": 1.79,
            "Adj Close": 1.79,
            "Volume": 40211
          },
          {
            "Date": "2011-04-26",
            "Open": 1.79,
            "High": 1.95,
            "Low": 1.72,
            "Close": 1.9,
            "Adj Close": 1.9,
            "Volume": 62403
          },
          {
            "Date": "2011-04-27",
            "Open": 1.9,
            "High": 2.65,
            "Low": 1.66,
            "Close": 2.21,
            "Adj Close": 2.21,
            "Volume": 203392
          },
          {
            "Date": "2011-04-28",
            "Open": 2.21,
            "High": 2.95,
            "Low": 2.21,
            "Close": 2.88,
            "Adj Close": 2.88,
            "Volume": 148954
          },
          {
            "Date": "2011-04-29",
            "Open": 2.88,
            "High": 4.15,
            "Low": 2.75,
            "Close": 3.5,
            "Adj Close": 3.5,
            "Volume": 214977
          },
          {
            "Date": "2011-04-30",
            "Open": 3.5,
            "High": 3.87,
            "Low": 2.5,
            "Close": 3.03,
            "Adj Close": 3.03,
            "Volume": 143521
          },
          {
            "Date": "2011-05-01",
            "Open": 3.03,
            "High": 3.5,
            "Low": 3.03,
            "Close": 3.2,
            "Adj Close": 3.2,
            "Volume": 59421
          },
          {
            "Date": "2011-05-02",
            "Open": 3.2,
            "High": 3.49,
            "Low": 3.11,
            "Close": 3.41,
            "Adj Close": 3.41,
            "Volume": 56187
          },
          {
            "Date": "2011-05-03",
            "Open": 3.41,
            "High": 3.58,
            "Low": 3.25,
            "Close": 3.41,
            "Adj Close": 3.41,
            "Volume": 59434
          },
          {
            "Date": "2011-05-04",
            "Open": 3.41,
            "High": 3.45,
            "Low": 3.33,
            "Close": 3.33,
            "Adj Close": 3.33,
            "Volume": 52331
          },
          {
            "Date": "2011-05-05",
            "Open": 3.33,
            "High": 3.61,
            "Low": 3.29,
            "Close": 3.45,
            "Adj Close": 3.45,
            "Volume": 80063
          },
          {
            "Date": "2011-05-06",
            "Open": 3.45,
            "High": 3.7,
            "Low": 3.43,
            "Close": 3.64,
            "Adj Close": 3.64,
            "Volume": 64359
          },
          {
            "Date": "2011-05-07",
            "Open": 3.64,
            "High": 3.94,
            "Low": 3.63,
            "Close": 3.87,
            "Adj Close": 3.87,
            "Volume": 79620
          },
          {
            "Date": "2011-05-08",
            "Open": 3.87,
            "High": 3.9,
            "Low": 3.69,
            "Close": 3.8,
            "Adj Close": 3.8,
            "Volume": 43805
          },
          {
            "Date": "2011-05-09",
            "Open": 3.8,
            "High": 5.99,
            "Low": 3.81,
            "Close": 5.81,
            "Adj Close": 5.81,
            "Volume": 266466
          },
          {
            "Date": "2011-05-10",
            "Open": 5.81,
            "High": 6.07,
            "Low": 4.6,
            "Close": 5.5,
            "Adj Close": 5.5,
            "Volume": 281496
          },
          {
            "Date": "2011-05-11",
            "Open": 5.5,
            "High": 6.49,
            "Low": 5.22,
            "Close": 6.3,
            "Adj Close": 6.3,
            "Volume": 184839
          },
          {
            "Date": "2011-05-12",
            "Open": 6.3,
            "High": 8.45,
            "Low": 6.32,
            "Close": 8.2,
            "Adj Close": 8.2,
            "Volume": 478840
          },
          {
            "Date": "2011-05-13",
            "Open": 8.2,
            "High": 8.9,
            "Low": 5.83,
            "Close": 7.2,
            "Adj Close": 7.2,
            "Volume": 435571
          },
          {
            "Date": "2011-05-14",
            "Open": 7.2,
            "High": 7.78,
            "Low": 6.2,
            "Close": 6.99,
            "Adj Close": 6.99,
            "Volume": 123255
          },
          {
            "Date": "2011-05-15",
            "Open": 6.99,
            "High": 8.5,
            "Low": 6.75,
            "Close": 8.03,
            "Adj Close": 8.03,
            "Volume": 343050
          },
          {
            "Date": "2011-05-16",
            "Open": 8.03,
            "High": 8.39,
            "Low": 6.98,
            "Close": 7.19,
            "Adj Close": 7.19,
            "Volume": 265868
          },
          {
            "Date": "2011-05-17",
            "Open": 7.19,
            "High": 7.5,
            "Low": 6.6,
            "Close": 6.88,
            "Adj Close": 6.88,
            "Volume": 181331
          },
          {
            "Date": "2011-05-18",
            "Open": 6.88,
            "High": 7.34,
            "Low": 6.61,
            "Close": 6.81,
            "Adj Close": 6.81,
            "Volume": 170134
          },
          {
            "Date": "2011-05-19",
            "Open": 6.81,
            "High": 7.1,
            "Low": 5.58,
            "Close": 5.59,
            "Adj Close": 5.59,
            "Volume": 278992
          },
          {
            "Date": "2011-05-20",
            "Open": 5.59,
            "High": 6.52,
            "Low": 5.58,
            "Close": 6.12,
            "Adj Close": 6.12,
            "Volume": 185640
          },
          {
            "Date": "2011-05-21",
            "Open": 6.12,
            "High": 6.76,
            "Low": 5.99,
            "Close": 6.69,
            "Adj Close": 6.69,
            "Volume": 154432
          },
          {
            "Date": "2011-05-22",
            "Open": 6.69,
            "High": 7.45,
            "Low": 6.69,
            "Close": 7.15,
            "Adj Close": 7.15,
            "Volume": 250601
          },
          {
            "Date": "2011-05-23",
            "Open": 7.15,
            "High": 7.51,
            "Low": 6.96,
            "Close": 7.42,
            "Adj Close": 7.42,
            "Volume": 211827
          },
          {
            "Date": "2011-05-24",
            "Open": 7.42,
            "High": 9.33,
            "Low": 7.22,
            "Close": 8.4,
            "Adj Close": 8.4,
            "Volume": 510905
          },
          {
            "Date": "2011-05-25",
            "Open": 8.4,
            "High": 8.99,
            "Low": 8.01,
            "Close": 8.8,
            "Adj Close": 8.8,
            "Volume": 244820
          },
          {
            "Date": "2011-05-26",
            "Open": 8.8,
            "High": 8.83,
            "Low": 8.5,
            "Close": 8.5,
            "Adj Close": 8.5,
            "Volume": 125149
          },
          {
            "Date": "2011-05-27",
            "Open": 8.5,
            "High": 8.7,
            "Low": 8.11,
            "Close": 8.3,
            "Adj Close": 8.3,
            "Volume": 103463
          },
          {
            "Date": "2011-05-28",
            "Open": 8.3,
            "High": 8.49,
            "Low": 8.1,
            "Close": 8.43,
            "Adj Close": 8.43,
            "Volume": 62138
          },
          {
            "Date": "2011-05-29",
            "Open": 8.43,
            "High": 9,
            "Low": 8.25,
            "Close": 8.8,
            "Adj Close": 8.8,
            "Volume": 154258
          },
          {
            "Date": "2011-05-30",
            "Open": 8.8,
            "High": 9.5,
            "Low": 8.1,
            "Close": 8.74,
            "Adj Close": 8.74,
            "Volume": 406882
          },
          {
            "Date": "2011-05-31",
            "Open": 8.74,
            "High": 9.7,
            "Low": 8.3,
            "Close": 9.57,
            "Adj Close": 9.57,
            "Volume": 400564
          },
          {
            "Date": "2011-06-01",
            "Open": 9.57,
            "High": 10.89,
            "Low": 9.5,
            "Close": 10.6,
            "Adj Close": 10.6,
            "Volume": 415112
          },
          {
            "Date": "2011-06-02",
            "Open": 10.6,
            "High": 14.5,
            "Low": 10.58,
            "Close": 14.29,
            "Adj Close": 14.29,
            "Volume": 954513
          },
          {
            "Date": "2011-06-03",
            "Open": 14.29,
            "High": 18.889999,
            "Low": 14.04,
            "Close": 18.889999,
            "Adj Close": 18.889999,
            "Volume": 729670
          },
          {
            "Date": "2011-06-04",
            "Open": 18.889999,
            "High": 19,
            "Low": 16.200001,
            "Close": 16.700001,
            "Adj Close": 16.700001,
            "Volume": 420612
          },
          {
            "Date": "2011-06-05",
            "Open": 16.700001,
            "High": 19.23,
            "Low": 16.450001,
            "Close": 18.549999,
            "Adj Close": 18.549999,
            "Volume": 1016927
          },
          {
            "Date": "2011-06-06",
            "Open": 18.549999,
            "High": 24.32,
            "Low": 18.26,
            "Close": 23.92,
            "Adj Close": 23.92,
            "Volume": 1068903
          },
          {
            "Date": "2011-06-07",
            "Open": 23.92,
            "High": 31.91,
            "Low": 22.209999,
            "Close": 29.6,
            "Adj Close": 29.6,
            "Volume": 2858820
          },
          {
            "Date": "2011-06-08",
            "Open": 29.6,
            "High": 31.5,
            "Low": 26.15,
            "Close": 28.92,
            "Adj Close": 28.92,
            "Volume": 1861589
          },
          {
            "Date": "2011-06-09",
            "Open": 28.92,
            "High": 29.4,
            "Low": 20.01,
            "Close": 23.950001,
            "Adj Close": 23.950001,
            "Volume": 2274786
          },
          {
            "Date": "2011-06-10",
            "Open": 23.950001,
            "High": 23.99,
            "Low": 13,
            "Close": 14.65,
            "Adj Close": 14.65,
            "Volume": 2146587
          },
          {
            "Date": "2011-06-11",
            "Open": 14.65,
            "High": 24.99,
            "Low": 10.25,
            "Close": 18.549999,
            "Adj Close": 18.549999,
            "Volume": 2451134
          },
          {
            "Date": "2011-06-12",
            "Open": 18.549999,
            "High": 24.5,
            "Low": 16,
            "Close": 19.84,
            "Adj Close": 19.84,
            "Volume": 1476239
          },
          {
            "Date": "2011-06-13",
            "Open": 19.84,
            "High": 20.5,
            "Low": 18,
            "Close": 19.280001,
            "Adj Close": 19.280001,
            "Volume": 696003
          },
          {
            "Date": "2011-06-14",
            "Open": 19.280001,
            "High": 20,
            "Low": 19.02,
            "Close": 19.49,
            "Adj Close": 19.49,
            "Volume": 545336
          },
          {
            "Date": "2011-06-15",
            "Open": 19.49,
            "High": 19.889999,
            "Low": 17,
            "Close": 17,
            "Adj Close": 17,
            "Volume": 927743
          },
          {
            "Date": "2011-06-16",
            "Open": 17,
            "High": 18.34,
            "Low": 13,
            "Close": 15.68,
            "Adj Close": 15.68,
            "Volume": 1684353
          },
          {
            "Date": "2011-06-17",
            "Open": 15.68,
            "High": 16.950001,
            "Low": 15.05,
            "Close": 16.889999,
            "Adj Close": 16.889999,
            "Volume": 569949
          },
          {
            "Date": "2011-06-18",
            "Open": 16.889999,
            "High": 18.879999,
            "Low": 16.85,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 536267
          },
          {
            "Date": "2011-06-19",
            "Open": 17.51,
            "High": 17.51,
            "Low": 17.51,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 0
          },
          {
            "Date": "2011-06-20",
            "Open": 17.51,
            "High": 17.51,
            "Low": 17.51,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 0
          },
          {
            "Date": "2011-06-21",
            "Open": 17.51,
            "High": 17.51,
            "Low": 17.51,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 0
          },
          {
            "Date": "2011-06-22",
            "Open": 17.51,
            "High": 17.51,
            "Low": 17.51,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 0
          },
          {
            "Date": "2011-06-23",
            "Open": 17.51,
            "High": 17.51,
            "Low": 17.51,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 0
          },
          {
            "Date": "2011-06-24",
            "Open": 17.51,
            "High": 17.51,
            "Low": 17.51,
            "Close": 17.51,
            "Adj Close": 17.51,
            "Volume": 0
          },
          {
            "Date": "2011-06-25",
            "Open": 17.51,
            "High": 17.51,
            "Low": 14.01,
            "Close": 16.450001,
            "Adj Close": 16.450001,
            "Volume": 234621
          },
          {
            "Date": "2011-06-26",
            "Open": 16.450001,
            "High": 18,
            "Low": 15,
            "Close": 16.75,
            "Adj Close": 16.75,
            "Volume": 535096
          },
          {
            "Date": "2011-06-27",
            "Open": 16.75,
            "High": 17.52,
            "Low": 16.5,
            "Close": 16.950001,
            "Adj Close": 16.950001,
            "Volume": 413032
          },
          {
            "Date": "2011-06-28",
            "Open": 16.950001,
            "High": 17.200001,
            "Low": 16.67,
            "Close": 16.85,
            "Adj Close": 16.85,
            "Volume": 355303
          },
          {
            "Date": "2011-06-29",
            "Open": 16.85,
            "High": 17,
            "Low": 15.73,
            "Close": 16.1,
            "Adj Close": 16.1,
            "Volume": 577145
          },
          {
            "Date": "2011-06-30",
            "Open": 16.1,
            "High": 16.74,
            "Low": 15.26,
            "Close": 15.4,
            "Adj Close": 15.4,
            "Volume": 529197
          },
          {
            "Date": "2011-07-01",
            "Open": 15.4,
            "High": 15.8,
            "Low": 15.27,
            "Close": 15.4,
            "Adj Close": 15.4,
            "Volume": 302134
          },
          {
            "Date": "2011-07-02",
            "Open": 15.4,
            "High": 15.69,
            "Low": 15.31,
            "Close": 15.44,
            "Adj Close": 15.44,
            "Volume": 259875
          },
          {
            "Date": "2011-07-03",
            "Open": 15.44,
            "High": 15.49,
            "Low": 13.14,
            "Close": 13.86,
            "Adj Close": 13.86,
            "Volume": 756913
          },
          {
            "Date": "2011-07-04",
            "Open": 13.86,
            "High": 15,
            "Low": 11,
            "Close": 12.91,
            "Adj Close": 12.91,
            "Volume": 1076305
          },
          {
            "Date": "2011-07-05",
            "Open": 12.91,
            "High": 16.5,
            "Low": 12.67,
            "Close": 14.78,
            "Adj Close": 14.78,
            "Volume": 1655319
          },
          {
            "Date": "2011-07-06",
            "Open": 14.78,
            "High": 15.9,
            "Low": 14.5,
            "Close": 14.78,
            "Adj Close": 14.78,
            "Volume": 825452
          },
          {
            "Date": "2011-07-07",
            "Open": 14.78,
            "High": 15.64,
            "Low": 13.9,
            "Close": 14.31,
            "Adj Close": 14.31,
            "Volume": 500143
          },
          {
            "Date": "2011-07-08",
            "Open": 14.31,
            "High": 14.7,
            "Low": 14.02,
            "Close": 14.38,
            "Adj Close": 14.38,
            "Volume": 171329
          },
          {
            "Date": "2011-07-09",
            "Open": 14.38,
            "High": 15.68,
            "Low": 14.35,
            "Close": 14.9,
            "Adj Close": 14.9,
            "Volume": 682903
          },
          {
            "Date": "2011-07-10",
            "Open": 14.9,
            "High": 15.2,
            "Low": 13.8,
            "Close": 14.21,
            "Adj Close": 14.21,
            "Volume": 706457
          },
          {
            "Date": "2011-07-11",
            "Open": 14.21,
            "High": 14.64,
            "Low": 13.9,
            "Close": 14.01,
            "Adj Close": 14.01,
            "Volume": 372986
          },
          {
            "Date": "2011-07-12",
            "Open": 14.01,
            "High": 14.15,
            "Low": 13.91,
            "Close": 13.95,
            "Adj Close": 13.95,
            "Volume": 145032
          },
          {
            "Date": "2011-07-13",
            "Open": 13.95,
            "High": 14.07,
            "Low": 13.7,
            "Close": 13.99,
            "Adj Close": 13.99,
            "Volume": 245982
          },
          {
            "Date": "2011-07-14",
            "Open": 13.99,
            "High": 14.09,
            "Low": 13.5,
            "Close": 13.81,
            "Adj Close": 13.81,
            "Volume": 344982
          },
          {
            "Date": "2011-07-15",
            "Open": 13.81,
            "High": 13.81,
            "Low": 13.5,
            "Close": 13.72,
            "Adj Close": 13.72,
            "Volume": 235142
          },
          {
            "Date": "2011-07-16",
            "Open": 13.72,
            "High": 13.75,
            "Low": 13.02,
            "Close": 13.16,
            "Adj Close": 13.16,
            "Volume": 458510
          },
          {
            "Date": "2011-07-17",
            "Open": 13.16,
            "High": 13.92,
            "Low": 12.51,
            "Close": 13.48,
            "Adj Close": 13.48,
            "Volume": 988903
          },
          {
            "Date": "2011-07-18",
            "Open": 13.48,
            "High": 14.7,
            "Low": 13.44,
            "Close": 13.85,
            "Adj Close": 13.85,
            "Volume": 948485
          },
          {
            "Date": "2011-07-19",
            "Open": 13.85,
            "High": 14,
            "Low": 13.4,
            "Close": 13.69,
            "Adj Close": 13.69,
            "Volume": 317332
          },
          {
            "Date": "2011-07-20",
            "Open": 13.69,
            "High": 13.78,
            "Low": 13.4,
            "Close": 13.61,
            "Adj Close": 13.61,
            "Volume": 341665
          },
          {
            "Date": "2011-07-21",
            "Open": 13.61,
            "High": 13.81,
            "Low": 13.45,
            "Close": 13.7,
            "Adj Close": 13.7,
            "Volume": 207044
          },
          {
            "Date": "2011-07-22",
            "Open": 13.7,
            "High": 13.76,
            "Low": 13.51,
            "Close": 13.68,
            "Adj Close": 13.68,
            "Volume": 306380
          },
          {
            "Date": "2011-07-23",
            "Open": 13.68,
            "High": 14.1,
            "Low": 13.6,
            "Close": 13.98,
            "Adj Close": 13.98,
            "Volume": 369041
          },
          {
            "Date": "2011-07-24",
            "Open": 13.98,
            "High": 14.72,
            "Low": 13.76,
            "Close": 14.05,
            "Adj Close": 14.05,
            "Volume": 448277
          },
          {
            "Date": "2011-07-25",
            "Open": 14.05,
            "High": 14.05,
            "Low": 13.77,
            "Close": 13.88,
            "Adj Close": 13.88,
            "Volume": 233585
          },
          {
            "Date": "2011-07-26",
            "Open": 13.88,
            "High": 14.13,
            "Low": 13.85,
            "Close": 13.94,
            "Adj Close": 13.94,
            "Volume": 160645
          },
          {
            "Date": "2011-07-27",
            "Open": 13.94,
            "High": 13.94,
            "Low": 13.31,
            "Close": 13.49,
            "Adj Close": 13.49,
            "Volume": 445690
          },
          {
            "Date": "2011-07-28",
            "Open": 13.49,
            "High": 13.7,
            "Low": 13.33,
            "Close": 13.5,
            "Adj Close": 13.5,
            "Volume": 98020
          },
          {
            "Date": "2011-07-29",
            "Open": 13.5,
            "High": 13.63,
            "Low": 13.45,
            "Close": 13.53,
            "Adj Close": 13.53,
            "Volume": 82590
          },
          {
            "Date": "2011-07-30",
            "Open": 13.53,
            "High": 14.9,
            "Low": 12.83,
            "Close": 13.35,
            "Adj Close": 13.35,
            "Volume": 618135
          },
          {
            "Date": "2011-07-31",
            "Open": 13.35,
            "High": 13.55,
            "Low": 12.85,
            "Close": 13.09,
            "Adj Close": 13.09,
            "Volume": 286373
          },
          {
            "Date": "2011-08-01",
            "Open": 13.09,
            "High": 13.1,
            "Low": 11.5,
            "Close": 12.05,
            "Adj Close": 12.05,
            "Volume": 709463
          },
          {
            "Date": "2011-08-02",
            "Open": 12.05,
            "High": 12.16,
            "Low": 8.7,
            "Close": 9.26,
            "Adj Close": 9.26,
            "Volume": 943628
          },
          {
            "Date": "2011-08-03",
            "Open": 9.26,
            "High": 11.15,
            "Low": 9.27,
            "Close": 10.75,
            "Adj Close": 10.75,
            "Volume": 529876
          },
          {
            "Date": "2011-08-04",
            "Open": 10.75,
            "High": 10.99,
            "Low": 9.5,
            "Close": 9.8,
            "Adj Close": 9.8,
            "Volume": 315866
          },
          {
            "Date": "2011-08-05",
            "Open": 9.8,
            "High": 9.95,
            "Low": 5.74,
            "Close": 6.55,
            "Adj Close": 6.55,
            "Volume": 801213
          },
          {
            "Date": "2011-08-06",
            "Open": 6.55,
            "High": 9.47,
            "Low": 6.01,
            "Close": 7.9,
            "Adj Close": 7.9,
            "Volume": 693796
          },
          {
            "Date": "2011-08-07",
            "Open": 7.9,
            "High": 8.16,
            "Low": 7.06,
            "Close": 7.8,
            "Adj Close": 7.8,
            "Volume": 263570
          },
          {
            "Date": "2011-08-08",
            "Open": 7.8,
            "High": 12.1,
            "Low": 7.67,
            "Close": 9.99,
            "Adj Close": 9.99,
            "Volume": 1112123
          },
          {
            "Date": "2011-08-09",
            "Open": 9.99,
            "High": 10.4,
            "Low": 9.5,
            "Close": 9.98,
            "Adj Close": 9.98,
            "Volume": 242598
          },
          {
            "Date": "2011-08-10",
            "Open": 9.98,
            "High": 10.5,
            "Low": 8.45,
            "Close": 9.46,
            "Adj Close": 9.46,
            "Volume": 550577
          },
          {
            "Date": "2011-08-11",
            "Open": 9.46,
            "High": 9.8,
            "Low": 8.91,
            "Close": 9.46,
            "Adj Close": 9.46,
            "Volume": 387476
          },
          {
            "Date": "2011-08-12",
            "Open": 9.46,
            "High": 10.25,
            "Low": 9.28,
            "Close": 10.13,
            "Adj Close": 10.13,
            "Volume": 291543
          },
          {
            "Date": "2011-08-13",
            "Open": 10.13,
            "High": 11.24,
            "Low": 9.62,
            "Close": 10.8,
            "Adj Close": 10.8,
            "Volume": 468353
          },
          {
            "Date": "2011-08-14",
            "Open": 10.8,
            "High": 11.89,
            "Low": 10.72,
            "Close": 11.15,
            "Adj Close": 11.15,
            "Volume": 431203
          },
          {
            "Date": "2011-08-15",
            "Open": 11.15,
            "High": 11.32,
            "Low": 10.81,
            "Close": 10.96,
            "Adj Close": 10.96,
            "Volume": 169357
          },
          {
            "Date": "2011-08-16",
            "Open": 10.96,
            "High": 11.1,
            "Low": 10.66,
            "Close": 10.95,
            "Adj Close": 10.95,
            "Volume": 249104
          },
          {
            "Date": "2011-08-17",
            "Open": 10.95,
            "High": 11.05,
            "Low": 10.81,
            "Close": 10.83,
            "Adj Close": 10.83,
            "Volume": 89515
          },
          {
            "Date": "2011-08-18",
            "Open": 10.83,
            "High": 11.81,
            "Low": 10.83,
            "Close": 11.65,
            "Adj Close": 11.65,
            "Volume": 384289
          },
          {
            "Date": "2011-08-19",
            "Open": 11.65,
            "High": 11.69,
            "Low": 11.4,
            "Close": 11.45,
            "Adj Close": 11.45,
            "Volume": 113880
          },
          {
            "Date": "2011-08-20",
            "Open": 11.45,
            "High": 11.51,
            "Low": 11.31,
            "Close": 11.31,
            "Adj Close": 11.31,
            "Volume": 99220
          },
          {
            "Date": "2011-08-21",
            "Open": 11.31,
            "High": 11.5,
            "Low": 10.51,
            "Close": 10.9,
            "Adj Close": 10.9,
            "Volume": 407895
          },
          {
            "Date": "2011-08-22",
            "Open": 10.9,
            "High": 11.3,
            "Low": 10.81,
            "Close": 10.94,
            "Adj Close": 10.94,
            "Volume": 141019
          },
          {
            "Date": "2011-08-23",
            "Open": 10.94,
            "High": 11.08,
            "Low": 10.83,
            "Close": 10.85,
            "Adj Close": 10.85,
            "Volume": 85516
          },
          {
            "Date": "2011-08-24",
            "Open": 10.85,
            "High": 10.89,
            "Low": 9.1,
            "Close": 9.66,
            "Adj Close": 9.66,
            "Volume": 555232
          },
          {
            "Date": "2011-08-25",
            "Open": 9.66,
            "High": 9.89,
            "Low": 7.64,
            "Close": 8.18,
            "Adj Close": 8.18,
            "Volume": 718309
          },
          {
            "Date": "2011-08-26",
            "Open": 8.18,
            "High": 9.11,
            "Low": 8.12,
            "Close": 8.59,
            "Adj Close": 8.59,
            "Volume": 189777
          },
          {
            "Date": "2011-08-27",
            "Open": 8.59,
            "High": 9.48,
            "Low": 8.45,
            "Close": 9.07,
            "Adj Close": 9.07,
            "Volume": 216706
          },
          {
            "Date": "2011-08-28",
            "Open": 9.07,
            "High": 9.27,
            "Low": 8.65,
            "Close": 8.97,
            "Adj Close": 8.97,
            "Volume": 193411
          },
          {
            "Date": "2011-08-29",
            "Open": 8.97,
            "High": 9,
            "Low": 8.55,
            "Close": 8.79,
            "Adj Close": 8.79,
            "Volume": 103338
          },
          {
            "Date": "2011-08-30",
            "Open": 8.79,
            "High": 8.79,
            "Low": 8.01,
            "Close": 8.2,
            "Adj Close": 8.2,
            "Volume": 164091
          },
          {
            "Date": "2011-08-31",
            "Open": 8.2,
            "High": 8.36,
            "Low": 8.1,
            "Close": 8.21,
            "Adj Close": 8.21,
            "Volume": 97874
          },
          {
            "Date": "2011-09-01",
            "Open": 8.21,
            "High": 8.71,
            "Low": 8.23,
            "Close": 8.64,
            "Adj Close": 8.64,
            "Volume": 141975
          },
          {
            "Date": "2011-09-02",
            "Open": 8.64,
            "High": 8.69,
            "Low": 8.36,
            "Close": 8.48,
            "Adj Close": 8.48,
            "Volume": 59247
          },
          {
            "Date": "2011-09-03",
            "Open": 8.48,
            "High": 8.49,
            "Low": 7.85,
            "Close": 8.18,
            "Adj Close": 8.18,
            "Volume": 160817
          },
          {
            "Date": "2011-09-04",
            "Open": 8.18,
            "High": 8.19,
            "Low": 7.25,
            "Close": 7.61,
            "Adj Close": 7.61,
            "Volume": 234672
          },
          {
            "Date": "2011-09-05",
            "Open": 7.61,
            "High": 7.66,
            "Low": 6.12,
            "Close": 6.86,
            "Adj Close": 6.86,
            "Volume": 555289
          },
          {
            "Date": "2011-09-06",
            "Open": 6.86,
            "High": 7.6,
            "Low": 6.53,
            "Close": 7.19,
            "Adj Close": 7.19,
            "Volume": 348836
          },
          {
            "Date": "2011-09-07",
            "Open": 7.19,
            "High": 7.2,
            "Low": 6.51,
            "Close": 6.53,
            "Adj Close": 6.53,
            "Volume": 216888
          },
          {
            "Date": "2011-09-08",
            "Open": 6.53,
            "High": 6.58,
            "Low": 4.18,
            "Close": 5.03,
            "Adj Close": 5.03,
            "Volume": 1154613
          },
          {
            "Date": "2011-09-09",
            "Open": 5.03,
            "High": 5.49,
            "Low": 4.63,
            "Close": 4.77,
            "Adj Close": 4.77,
            "Volume": 223562
          },
          {
            "Date": "2011-09-10",
            "Open": 4.77,
            "High": 7.4,
            "Low": 4.6,
            "Close": 5.86,
            "Adj Close": 5.86,
            "Volume": 873010
          },
          {
            "Date": "2011-09-11",
            "Open": 5.86,
            "High": 6.58,
            "Low": 5.41,
            "Close": 6.08,
            "Adj Close": 6.08,
            "Volume": 385739
          },
          {
            "Date": "2011-09-12",
            "Open": 6.08,
            "High": 6.09,
            "Low": 5.7,
            "Close": 5.8,
            "Adj Close": 5.8,
            "Volume": 138683
          },
          {
            "Date": "2011-09-13",
            "Open": 5.8,
            "High": 5.85,
            "Low": 5.32,
            "Close": 5.62,
            "Adj Close": 5.62,
            "Volume": 243197
          },
          {
            "Date": "2011-09-14",
            "Open": 5.62,
            "High": 5.62,
            "Low": 4.44,
            "Close": 4.84,
            "Adj Close": 4.84,
            "Volume": 429502
          },
          {
            "Date": "2011-09-15",
            "Open": 4.84,
            "High": 4.99,
            "Low": 4.61,
            "Close": 4.82,
            "Adj Close": 4.82,
            "Volume": 152408
          },
          {
            "Date": "2011-09-16",
            "Open": 4.82,
            "High": 4.93,
            "Low": 4.7,
            "Close": 4.77,
            "Adj Close": 4.77,
            "Volume": 97582
          },
          {
            "Date": "2011-09-17",
            "Open": 4.77,
            "High": 5.6,
            "Low": 4.72,
            "Close": 5.2,
            "Adj Close": 5.2,
            "Volume": 229468
          },
          {
            "Date": "2011-09-18",
            "Open": 5.2,
            "High": 5.64,
            "Low": 4.9,
            "Close": 5.46,
            "Adj Close": 5.46,
            "Volume": 263597
          },
          {
            "Date": "2011-09-19",
            "Open": 5.46,
            "High": 6.8,
            "Low": 5.45,
            "Close": 6.11,
            "Adj Close": 6.11,
            "Volume": 713430
          },
          {
            "Date": "2011-09-20",
            "Open": 6.11,
            "High": 6.29,
            "Low": 5.06,
            "Close": 5.61,
            "Adj Close": 5.61,
            "Volume": 383918
          },
          {
            "Date": "2011-09-21",
            "Open": 5.61,
            "High": 5.83,
            "Low": 5.29,
            "Close": 5.43,
            "Adj Close": 5.43,
            "Volume": 175258
          },
          {
            "Date": "2011-09-22",
            "Open": 5.43,
            "High": 5.71,
            "Low": 5.41,
            "Close": 5.55,
            "Adj Close": 5.55,
            "Volume": 312415
          },
          {
            "Date": "2011-09-23",
            "Open": 5.55,
            "High": 5.64,
            "Low": 5.32,
            "Close": 5.47,
            "Adj Close": 5.47,
            "Volume": 97847
          },
          {
            "Date": "2011-09-24",
            "Open": 5.47,
            "High": 5.49,
            "Low": 5.32,
            "Close": 5.33,
            "Adj Close": 5.33,
            "Volume": 51288
          },
          {
            "Date": "2011-09-25",
            "Open": 5.33,
            "High": 5.4,
            "Low": 4.72,
            "Close": 4.87,
            "Adj Close": 4.87,
            "Volume": 277987
          },
          {
            "Date": "2011-09-26",
            "Open": 4.87,
            "High": 5.13,
            "Low": 4.78,
            "Close": 4.92,
            "Adj Close": 4.92,
            "Volume": 121363
          },
          {
            "Date": "2011-09-27",
            "Open": 4.92,
            "High": 4.97,
            "Low": 4.63,
            "Close": 4.77,
            "Adj Close": 4.77,
            "Volume": 146110
          },
          {
            "Date": "2011-09-28",
            "Open": 4.77,
            "High": 4.8,
            "Low": 4.67,
            "Close": 4.78,
            "Adj Close": 4.78,
            "Volume": 66817
          },
          {
            "Date": "2011-09-29",
            "Open": 4.78,
            "High": 5.35,
            "Low": 4.74,
            "Close": 5.14,
            "Adj Close": 5.14,
            "Volume": 208038
          },
          {
            "Date": "2011-09-30",
            "Open": 5.14,
            "High": 5.25,
            "Low": 4.86,
            "Close": 5.03,
            "Adj Close": 5.03,
            "Volume": 118531
          },
          {
            "Date": "2011-10-01",
            "Open": 5.03,
            "High": 5.1,
            "Low": 4.91,
            "Close": 5.03,
            "Adj Close": 5.03,
            "Volume": 52128
          },
          {
            "Date": "2011-10-02",
            "Open": 5.03,
            "High": 5.04,
            "Low": 4.89,
            "Close": 5.02,
            "Adj Close": 5.02,
            "Volume": 85880
          },
          {
            "Date": "2011-10-03",
            "Open": 5.02,
            "High": 5.03,
            "Low": 4.92,
            "Close": 4.96,
            "Adj Close": 4.96,
            "Volume": 78377
          },
          {
            "Date": "2011-10-04",
            "Open": 4.96,
            "High": 5.03,
            "Low": 4.83,
            "Close": 4.87,
            "Adj Close": 4.87,
            "Volume": 86107
          },
          {
            "Date": "2011-10-05",
            "Open": 4.87,
            "High": 4.9,
            "Low": 4.5,
            "Close": 4.73,
            "Adj Close": 4.73,
            "Volume": 256723
          },
          {
            "Date": "2011-10-06",
            "Open": 4.73,
            "High": 4.8,
            "Low": 3.78,
            "Close": 4.27,
            "Adj Close": 4.27,
            "Volume": 418394
          },
          {
            "Date": "2011-10-07",
            "Open": 4.27,
            "High": 4.34,
            "Low": 3.83,
            "Close": 4.01,
            "Adj Close": 4.01,
            "Volume": 159656
          },
          {
            "Date": "2011-10-08",
            "Open": 4.01,
            "High": 4.39,
            "Low": 4.01,
            "Close": 4.1,
            "Adj Close": 4.1,
            "Volume": 158762
          },
          {
            "Date": "2011-10-09",
            "Open": 4.1,
            "High": 4.2,
            "Low": 4.01,
            "Close": 4.1,
            "Adj Close": 4.1,
            "Volume": 69188
          },
          {
            "Date": "2011-10-10",
            "Open": 4.1,
            "High": 4.1,
            "Low": 3.85,
            "Close": 3.93,
            "Adj Close": 3.93,
            "Volume": 162268
          },
          {
            "Date": "2011-10-11",
            "Open": 3.93,
            "High": 4.45,
            "Low": 3.9,
            "Close": 4.15,
            "Adj Close": 4.15,
            "Volume": 282490
          },
          {
            "Date": "2011-10-12",
            "Open": 4.15,
            "High": 4.2,
            "Low": 4,
            "Close": 4.05,
            "Adj Close": 4.05,
            "Volume": 80377
          },
          {
            "Date": "2011-10-13",
            "Open": 4.05,
            "High": 4.11,
            "Low": 3.95,
            "Close": 3.99,
            "Adj Close": 3.99,
            "Volume": 80464
          },
          {
            "Date": "2011-10-14",
            "Open": 3.99,
            "High": 4.05,
            "Low": 3.71,
            "Close": 3.84,
            "Adj Close": 3.84,
            "Volume": 163851
          },
          {
            "Date": "2011-10-15",
            "Open": 3.84,
            "High": 3.9,
            "Low": 3.4,
            "Close": 3.56,
            "Adj Close": 3.56,
            "Volume": 131714
          },
          {
            "Date": "2011-10-16",
            "Open": 3.56,
            "High": 3.74,
            "Low": 2.26,
            "Close": 2.56,
            "Adj Close": 2.56,
            "Volume": 591902
          },
          {
            "Date": "2011-10-17",
            "Open": 2.56,
            "High": 2.9,
            "Low": 2.31,
            "Close": 2.42,
            "Adj Close": 2.42,
            "Volume": 229826
          },
          {
            "Date": "2011-10-18",
            "Open": 2.42,
            "High": 2.54,
            "Low": 2.04,
            "Close": 2.27,
            "Adj Close": 2.27,
            "Volume": 232324
          },
          {
            "Date": "2011-10-19",
            "Open": 2.27,
            "High": 2.39,
            "Low": 2.22,
            "Close": 2.35,
            "Adj Close": 2.35,
            "Volume": 113046
          },
          {
            "Date": "2011-10-20",
            "Open": 2.35,
            "High": 2.72,
            "Low": 2.33,
            "Close": 2.57,
            "Adj Close": 2.57,
            "Volume": 185287
          },
          {
            "Date": "2011-10-21",
            "Open": 2.57,
            "High": 3.3,
            "Low": 2.55,
            "Close": 3.16,
            "Adj Close": 3.16,
            "Volume": 361119
          },
          {
            "Date": "2011-10-22",
            "Open": 3.16,
            "High": 3.2,
            "Low": 2.95,
            "Close": 3.17,
            "Adj Close": 3.17,
            "Volume": 114141
          },
          {
            "Date": "2011-10-23",
            "Open": 3.17,
            "High": 3.19,
            "Low": 2.48,
            "Close": 2.55,
            "Adj Close": 2.55,
            "Volume": 258830
          },
          {
            "Date": "2011-10-24",
            "Open": 2.55,
            "High": 3.04,
            "Low": 2.44,
            "Close": 2.77,
            "Adj Close": 2.77,
            "Volume": 278159
          },
          {
            "Date": "2011-10-25",
            "Open": 2.77,
            "High": 2.85,
            "Low": 2.65,
            "Close": 2.77,
            "Adj Close": 2.77,
            "Volume": 80877
          },
          {
            "Date": "2011-10-26",
            "Open": 2.77,
            "High": 3.09,
            "Low": 2.73,
            "Close": 3.04,
            "Adj Close": 3.04,
            "Volume": 171312
          },
          {
            "Date": "2011-10-27",
            "Open": 3.04,
            "High": 3.26,
            "Low": 2.91,
            "Close": 3.19,
            "Adj Close": 3.19,
            "Volume": 162799
          },
          {
            "Date": "2011-10-28",
            "Open": 3.19,
            "High": 3.83,
            "Low": 3.14,
            "Close": 3.58,
            "Adj Close": 3.58,
            "Volume": 281957
          },
          {
            "Date": "2011-10-29",
            "Open": 3.58,
            "High": 3.65,
            "Low": 3.2,
            "Close": 3.27,
            "Adj Close": 3.27,
            "Volume": 171427
          },
          {
            "Date": "2011-10-31",
            "Open": 3.27,
            "High": 3.32,
            "Low": 3.07,
            "Close": 3.25,
            "Adj Close": 3.25,
            "Volume": 98715
          },
          {
            "Date": "2011-11-01",
            "Open": 3.25,
            "High": 3.35,
            "Low": 3.07,
            "Close": 3.15,
            "Adj Close": 3.15,
            "Volume": 120727
          },
          {
            "Date": "2011-11-02",
            "Open": 3.15,
            "High": 3.44,
            "Low": 3.14,
            "Close": 3.25,
            "Adj Close": 3.25,
            "Volume": 104522
          },
          {
            "Date": "2011-11-03",
            "Open": 3.25,
            "High": 3.28,
            "Low": 3.1,
            "Close": 3.15,
            "Adj Close": 3.15,
            "Volume": 78756
          },
          {
            "Date": "2011-11-04",
            "Open": 3.15,
            "High": 3.21,
            "Low": 3.01,
            "Close": 3.11,
            "Adj Close": 3.11,
            "Volume": 123573
          },
          {
            "Date": "2011-11-05",
            "Open": 3.11,
            "High": 3.15,
            "Low": 2.85,
            "Close": 2.97,
            "Adj Close": 2.97,
            "Volume": 159571
          },
          {
            "Date": "2011-11-06",
            "Open": 2.97,
            "High": 3,
            "Low": 2.92,
            "Close": 2.96,
            "Adj Close": 2.96,
            "Volume": 51037
          },
          {
            "Date": "2011-11-07",
            "Open": 2.96,
            "High": 3.03,
            "Low": 2.95,
            "Close": 3.01,
            "Adj Close": 3.01,
            "Volume": 71961
          },
          {
            "Date": "2011-11-08",
            "Open": 3.01,
            "High": 3.21,
            "Low": 3.01,
            "Close": 3.04,
            "Adj Close": 3.04,
            "Volume": 186440
          },
          {
            "Date": "2011-11-09",
            "Open": 3.04,
            "High": 3.11,
            "Low": 2.89,
            "Close": 2.95,
            "Adj Close": 2.95,
            "Volume": 156655
          },
          {
            "Date": "2011-11-10",
            "Open": 2.95,
            "High": 2.97,
            "Low": 2.8,
            "Close": 2.84,
            "Adj Close": 2.84,
            "Volume": 97395
          },
          {
            "Date": "2011-11-11",
            "Open": 2.84,
            "High": 3.11,
            "Low": 2.82,
            "Close": 3.08,
            "Adj Close": 3.08,
            "Volume": 133312
          },
          {
            "Date": "2011-11-12",
            "Open": 3.08,
            "High": 3.11,
            "Low": 3.01,
            "Close": 3.03,
            "Adj Close": 3.03,
            "Volume": 62326
          },
          {
            "Date": "2011-11-13",
            "Open": 3.03,
            "High": 3.05,
            "Low": 2.95,
            "Close": 3,
            "Adj Close": 3,
            "Volume": 28888
          },
          {
            "Date": "2011-11-14",
            "Open": 3,
            "High": 3,
            "Low": 2.1,
            "Close": 2.22,
            "Adj Close": 2.22,
            "Volume": 957693
          },
          {
            "Date": "2011-11-15",
            "Open": 2.22,
            "High": 2.49,
            "Low": 2.11,
            "Close": 2.33,
            "Adj Close": 2.33,
            "Volume": 175520
          },
          {
            "Date": "2011-11-16",
            "Open": 2.33,
            "High": 2.6,
            "Low": 2.3,
            "Close": 2.56,
            "Adj Close": 2.56,
            "Volume": 108654
          },
          {
            "Date": "2011-11-17",
            "Open": 2.56,
            "High": 2.59,
            "Low": 1.99,
            "Close": 2.25,
            "Adj Close": 2.25,
            "Volume": 261039
          },
          {
            "Date": "2011-11-18",
            "Open": 2.25,
            "High": 2.39,
            "Low": 2,
            "Close": 2.05,
            "Adj Close": 2.05,
            "Volume": 210125
          },
          {
            "Date": "2011-11-19",
            "Open": 2.05,
            "High": 2.26,
            "Low": 2,
            "Close": 2.2,
            "Adj Close": 2.2,
            "Volume": 169806
          },
          {
            "Date": "2011-11-20",
            "Open": 2.2,
            "High": 2.5,
            "Low": 2.15,
            "Close": 2.2,
            "Adj Close": 2.2,
            "Volume": 182015
          },
          {
            "Date": "2011-11-21",
            "Open": 2.2,
            "High": 2.31,
            "Low": 2.17,
            "Close": 2.29,
            "Adj Close": 2.29,
            "Volume": 93197
          },
          {
            "Date": "2011-11-22",
            "Open": 2.29,
            "High": 2.35,
            "Low": 2.25,
            "Close": 2.33,
            "Adj Close": 2.33,
            "Volume": 78934
          },
          {
            "Date": "2011-11-23",
            "Open": 2.33,
            "High": 2.38,
            "Low": 2.27,
            "Close": 2.33,
            "Adj Close": 2.33,
            "Volume": 92955
          },
          {
            "Date": "2011-11-24",
            "Open": 2.33,
            "High": 2.56,
            "Low": 2.31,
            "Close": 2.43,
            "Adj Close": 2.43,
            "Volume": 211558
          },
          {
            "Date": "2011-11-25",
            "Open": 2.43,
            "High": 2.53,
            "Low": 2.37,
            "Close": 2.51,
            "Adj Close": 2.51,
            "Volume": 109592
          },
          {
            "Date": "2011-11-26",
            "Open": 2.51,
            "High": 2.53,
            "Low": 2.41,
            "Close": 2.47,
            "Adj Close": 2.47,
            "Volume": 89621
          },
          {
            "Date": "2011-11-27",
            "Open": 2.47,
            "High": 2.49,
            "Low": 2.42,
            "Close": 2.48,
            "Adj Close": 2.48,
            "Volume": 55832
          },
          {
            "Date": "2011-11-28",
            "Open": 2.48,
            "High": 2.55,
            "Low": 2.44,
            "Close": 2.55,
            "Adj Close": 2.55,
            "Volume": 103409
          },
          {
            "Date": "2011-11-29",
            "Open": 2.55,
            "High": 2.98,
            "Low": 2.54,
            "Close": 2.75,
            "Adj Close": 2.75,
            "Volume": 503908
          },
          {
            "Date": "2011-11-30",
            "Open": 2.75,
            "High": 3.09,
            "Low": 2.73,
            "Close": 2.97,
            "Adj Close": 2.97,
            "Volume": 349861
          },
          {
            "Date": "2011-12-01",
            "Open": 2.97,
            "High": 3.14,
            "Low": 2.93,
            "Close": 3.06,
            "Adj Close": 3.06,
            "Volume": 195016
          },
          {
            "Date": "2011-12-02",
            "Open": 3.06,
            "High": 3.14,
            "Low": 3.03,
            "Close": 3.12,
            "Adj Close": 3.12,
            "Volume": 178018
          },
          {
            "Date": "2011-12-03",
            "Open": 3.12,
            "High": 3.13,
            "Low": 2.75,
            "Close": 2.79,
            "Adj Close": 2.79,
            "Volume": 360981
          },
          {
            "Date": "2011-12-04",
            "Open": 2.79,
            "High": 2.9,
            "Low": 2.61,
            "Close": 2.83,
            "Adj Close": 2.83,
            "Volume": 261745
          },
          {
            "Date": "2011-12-05",
            "Open": 2.83,
            "High": 2.93,
            "Low": 2.78,
            "Close": 2.88,
            "Adj Close": 2.88,
            "Volume": 88678
          },
          {
            "Date": "2011-12-06",
            "Open": 2.88,
            "High": 3.05,
            "Low": 2.87,
            "Close": 3.03,
            "Adj Close": 3.03,
            "Volume": 165517
          },
          {
            "Date": "2011-12-07",
            "Open": 3.03,
            "High": 3.08,
            "Low": 2.93,
            "Close": 2.99,
            "Adj Close": 2.99,
            "Volume": 174201
          },
          {
            "Date": "2011-12-08",
            "Open": 2.99,
            "High": 3.01,
            "Low": 2.88,
            "Close": 2.98,
            "Adj Close": 2.98,
            "Volume": 117824
          },
          {
            "Date": "2011-12-09",
            "Open": 2.98,
            "High": 3.04,
            "Low": 2.93,
            "Close": 2.97,
            "Adj Close": 2.97,
            "Volume": 102810
          },
          {
            "Date": "2011-12-10",
            "Open": 2.97,
            "High": 3.13,
            "Low": 2.93,
            "Close": 3.05,
            "Adj Close": 3.05,
            "Volume": 225642
          },
          {
            "Date": "2011-12-11",
            "Open": 3.05,
            "High": 3.38,
            "Low": 2.99,
            "Close": 3.25,
            "Adj Close": 3.25,
            "Volume": 346453
          },
          {
            "Date": "2011-12-12",
            "Open": 3.25,
            "High": 3.29,
            "Low": 3.08,
            "Close": 3.14,
            "Adj Close": 3.14,
            "Volume": 126940
          },
          {
            "Date": "2011-12-13",
            "Open": 3.14,
            "High": 3.25,
            "Low": 3.14,
            "Close": 3.25,
            "Adj Close": 3.25,
            "Volume": 104930
          },
          {
            "Date": "2011-12-14",
            "Open": 3.25,
            "High": 3.25,
            "Low": 2.99,
            "Close": 3.15,
            "Adj Close": 3.15,
            "Volume": 225975
          },
          {
            "Date": "2011-12-15",
            "Open": 3.15,
            "High": 3.21,
            "Low": 3.11,
            "Close": 3.2,
            "Adj Close": 3.2,
            "Volume": 95417
          },
          {
            "Date": "2011-12-16",
            "Open": 3.2,
            "High": 3.22,
            "Low": 3.15,
            "Close": 3.2,
            "Adj Close": 3.2,
            "Volume": 95114
          },
          {
            "Date": "2011-12-17",
            "Open": 3.2,
            "High": 3.23,
            "Low": 3.16,
            "Close": 3.2,
            "Adj Close": 3.2,
            "Volume": 52586
          },
          {
            "Date": "2011-12-18",
            "Open": 3.2,
            "High": 3.22,
            "Low": 3.18,
            "Close": 3.19,
            "Adj Close": 3.19,
            "Volume": 34542
          },
          {
            "Date": "2011-12-19",
            "Open": 3.19,
            "High": 3.7,
            "Low": 3.19,
            "Close": 3.52,
            "Adj Close": 3.52,
            "Volume": 476965
          },
          {
            "Date": "2011-12-20",
            "Open": 3.52,
            "High": 4.5,
            "Low": 3.48,
            "Close": 3.95,
            "Adj Close": 3.95,
            "Volume": 739231
          },
          {
            "Date": "2011-12-21",
            "Open": 3.95,
            "High": 4.04,
            "Low": 3.81,
            "Close": 3.89,
            "Adj Close": 3.89,
            "Volume": 191659
          },
          {
            "Date": "2011-12-22",
            "Open": 3.89,
            "High": 3.99,
            "Low": 3.51,
            "Close": 3.89,
            "Adj Close": 3.89,
            "Volume": 216558
          },
          {
            "Date": "2011-12-23",
            "Open": 3.89,
            "High": 3.95,
            "Low": 3.82,
            "Close": 3.95,
            "Adj Close": 3.95,
            "Volume": 80030
          },
          {
            "Date": "2011-12-24",
            "Open": 3.95,
            "High": 3.97,
            "Low": 3.86,
            "Close": 3.94,
            "Adj Close": 3.94,
            "Volume": 58567
          },
          {
            "Date": "2011-12-25",
            "Open": 3.94,
            "High": 4.39,
            "Low": 3.78,
            "Close": 4.22,
            "Adj Close": 4.22,
            "Volume": 334511
          },
          {
            "Date": "2011-12-26",
            "Open": 4.22,
            "High": 4.31,
            "Low": 3.81,
            "Close": 4.02,
            "Adj Close": 4.02,
            "Volume": 358539
          },
          {
            "Date": "2011-12-27",
            "Open": 4.02,
            "High": 4.1,
            "Low": 3.96,
            "Close": 4.07,
            "Adj Close": 4.07,
            "Volume": 121501
          },
          {
            "Date": "2011-12-28",
            "Open": 4.07,
            "High": 4.25,
            "Low": 3.99,
            "Close": 4.19,
            "Adj Close": 4.19,
            "Volume": 140029
          },
          {
            "Date": "2011-12-29",
            "Open": 4.19,
            "High": 4.33,
            "Low": 4.12,
            "Close": 4.17,
            "Adj Close": 4.17,
            "Volume": 223710
          },
          {
            "Date": "2011-12-30",
            "Open": 4.17,
            "High": 4.3,
            "Low": 4.06,
            "Close": 4.25,
            "Adj Close": 4.25,
            "Volume": 172118
          },
          {
            "Date": "2011-12-31",
            "Open": 4.25,
            "High": 5,
            "Low": 4.2,
            "Close": 4.72,
            "Adj Close": 4.72,
            "Volume": 596240
          },
          {
            "Date": "2012-01-01",
            "Open": 4.72,
            "High": 5.5,
            "Low": 4.62,
            "Close": 5.27,
            "Adj Close": 5.27,
            "Volume": 553045
          },
          {
            "Date": "2012-01-02",
            "Open": 5.27,
            "High": 5.47,
            "Low": 4.8,
            "Close": 5.22,
            "Adj Close": 5.22,
            "Volume": 360357
          },
          {
            "Date": "2012-01-03",
            "Open": 5.22,
            "High": 5.29,
            "Low": 4.65,
            "Close": 4.88,
            "Adj Close": 4.88,
            "Volume": 619170
          },
          {
            "Date": "2012-01-04",
            "Open": 4.88,
            "High": 5.7,
            "Low": 4.75,
            "Close": 5.57,
            "Adj Close": 5.57,
            "Volume": 688717
          },
          {
            "Date": "2012-01-05",
            "Open": 5.57,
            "High": 7.22,
            "Low": 5.57,
            "Close": 6.95,
            "Adj Close": 6.95,
            "Volume": 1130623
          },
          {
            "Date": "2012-01-06",
            "Open": 6.95,
            "High": 7.21,
            "Low": 6.13,
            "Close": 6.7,
            "Adj Close": 6.7,
            "Volume": 1481327
          },
          {
            "Date": "2012-01-07",
            "Open": 6.7,
            "High": 7.02,
            "Low": 6.38,
            "Close": 6.81,
            "Adj Close": 6.81,
            "Volume": 325053
          },
          {
            "Date": "2012-01-08",
            "Open": 6.81,
            "High": 7.2,
            "Low": 6.73,
            "Close": 7.11,
            "Adj Close": 7.11,
            "Volume": 403151
          },
          {
            "Date": "2012-01-09",
            "Open": 7.11,
            "High": 7.19,
            "Low": 5.81,
            "Close": 6.33,
            "Adj Close": 6.33,
            "Volume": 960592
          },
          {
            "Date": "2012-01-10",
            "Open": 6.33,
            "High": 6.89,
            "Low": 6,
            "Close": 6.36,
            "Adj Close": 6.36,
            "Volume": 705056
          },
          {
            "Date": "2012-01-11",
            "Open": 6.36,
            "High": 7.14,
            "Low": 6.41,
            "Close": 6.9,
            "Adj Close": 6.9,
            "Volume": 677642
          },
          {
            "Date": "2012-01-12",
            "Open": 6.9,
            "High": 7,
            "Low": 6.34,
            "Close": 6.8,
            "Adj Close": 6.8,
            "Volume": 944165
          },
          {
            "Date": "2012-01-13",
            "Open": 6.8,
            "High": 6.8,
            "Low": 6.4,
            "Close": 6.41,
            "Adj Close": 6.41,
            "Volume": 398312
          },
          {
            "Date": "2012-01-14",
            "Open": 6.41,
            "High": 6.95,
            "Low": 6.22,
            "Close": 6.75,
            "Adj Close": 6.75,
            "Volume": 935192
          },
          {
            "Date": "2012-01-15",
            "Open": 6.75,
            "High": 7.08,
            "Low": 6.74,
            "Close": 7,
            "Adj Close": 7,
            "Volume": 429700
          },
          {
            "Date": "2012-01-16",
            "Open": 7,
            "High": 7.19,
            "Low": 6.51,
            "Close": 6.68,
            "Adj Close": 6.68,
            "Volume": 837413
          },
          {
            "Date": "2012-01-17",
            "Open": 6.68,
            "High": 6.95,
            "Low": 4.64,
            "Close": 5.6,
            "Adj Close": 5.6,
            "Volume": 1288538
          },
          {
            "Date": "2012-01-18",
            "Open": 5.6,
            "High": 6.95,
            "Low": 5.1,
            "Close": 5.92,
            "Adj Close": 5.92,
            "Volume": 1354753
          },
          {
            "Date": "2012-01-19",
            "Open": 5.92,
            "High": 6.36,
            "Low": 5.87,
            "Close": 6.36,
            "Adj Close": 6.36,
            "Volume": 709705
          },
          {
            "Date": "2012-01-20",
            "Open": 6.36,
            "High": 6.58,
            "Low": 6.26,
            "Close": 6.49,
            "Adj Close": 6.49,
            "Volume": 429803
          },
          {
            "Date": "2012-01-21",
            "Open": 6.49,
            "High": 6.55,
            "Low": 6.1,
            "Close": 6.18,
            "Adj Close": 6.18,
            "Volume": 407116
          },
          {
            "Date": "2012-01-22",
            "Open": 6.18,
            "High": 6.45,
            "Low": 6.1,
            "Close": 6.31,
            "Adj Close": 6.31,
            "Volume": 282233
          },
          {
            "Date": "2012-01-23",
            "Open": 6.31,
            "High": 6.39,
            "Low": 6.21,
            "Close": 6.36,
            "Adj Close": 6.36,
            "Volume": 111630
          },
          {
            "Date": "2012-01-24",
            "Open": 6.36,
            "High": 6.39,
            "Low": 6.22,
            "Close": 6.29,
            "Adj Close": 6.29,
            "Volume": 224665
          },
          {
            "Date": "2012-01-25",
            "Open": 6.29,
            "High": 6.32,
            "Low": 5.5,
            "Close": 5.75,
            "Adj Close": 5.75,
            "Volume": 782053
          },
          {
            "Date": "2012-01-26",
            "Open": 5.75,
            "High": 5.92,
            "Low": 5.3,
            "Close": 5.34,
            "Adj Close": 5.34,
            "Volume": 692624
          },
          {
            "Date": "2012-01-27",
            "Open": 5.34,
            "High": 5.51,
            "Low": 5.05,
            "Close": 5.29,
            "Adj Close": 5.29,
            "Volume": 611581
          },
          {
            "Date": "2012-01-28",
            "Open": 5.29,
            "High": 5.76,
            "Low": 5.26,
            "Close": 5.63,
            "Adj Close": 5.63,
            "Volume": 499881
          },
          {
            "Date": "2012-01-29",
            "Open": 5.63,
            "High": 5.7,
            "Low": 5.33,
            "Close": 5.38,
            "Adj Close": 5.38,
            "Volume": 254457
          },
          {
            "Date": "2012-01-30",
            "Open": 5.38,
            "High": 5.6,
            "Low": 5.37,
            "Close": 5.49,
            "Adj Close": 5.49,
            "Volume": 233179
          },
          {
            "Date": "2012-01-31",
            "Open": 5.49,
            "High": 5.65,
            "Low": 5.43,
            "Close": 5.48,
            "Adj Close": 5.48,
            "Volume": 267099
          },
          {
            "Date": "2012-02-01",
            "Open": 5.48,
            "High": 6.2,
            "Low": 5.47,
            "Close": 6.08,
            "Adj Close": 6.08,
            "Volume": 672632
          },
          {
            "Date": "2012-02-02",
            "Open": 6.08,
            "High": 6.2,
            "Low": 5.82,
            "Close": 6.1,
            "Adj Close": 6.1,
            "Volume": 328716
          },
          {
            "Date": "2012-02-03",
            "Open": 6.1,
            "High": 6.14,
            "Low": 5.72,
            "Close": 5.96,
            "Adj Close": 5.96,
            "Volume": 350818
          },
          {
            "Date": "2012-02-04",
            "Open": 5.96,
            "High": 5.99,
            "Low": 5.84,
            "Close": 5.87,
            "Adj Close": 5.87,
            "Volume": 122071
          },
          {
            "Date": "2012-02-05",
            "Open": 5.87,
            "High": 5.88,
            "Low": 5.45,
            "Close": 5.69,
            "Adj Close": 5.69,
            "Volume": 683010
          },
          {
            "Date": "2012-02-06",
            "Open": 5.69,
            "High": 5.72,
            "Low": 5.45,
            "Close": 5.45,
            "Adj Close": 5.45,
            "Volume": 500693
          },
          {
            "Date": "2012-02-07",
            "Open": 5.45,
            "High": 5.78,
            "Low": 5.45,
            "Close": 5.69,
            "Adj Close": 5.69,
            "Volume": 408854
          },
          {
            "Date": "2012-02-08",
            "Open": 5.69,
            "High": 5.85,
            "Low": 5.3,
            "Close": 5.6,
            "Adj Close": 5.6,
            "Volume": 1342007
          },
          {
            "Date": "2012-02-09",
            "Open": 5.6,
            "High": 5.92,
            "Low": 5.5,
            "Close": 5.83,
            "Adj Close": 5.83,
            "Volume": 516915
          },
          {
            "Date": "2012-02-10",
            "Open": 5.83,
            "High": 5.99,
            "Low": 5.8,
            "Close": 5.91,
            "Adj Close": 5.91,
            "Volume": 230967
          },
          {
            "Date": "2012-02-11",
            "Open": 5.91,
            "High": 6,
            "Low": 5.54,
            "Close": 5.6,
            "Adj Close": 5.6,
            "Volume": 397688
          },
          {
            "Date": "2012-02-12",
            "Open": 5.6,
            "High": 5.85,
            "Low": 5.43,
            "Close": 5.51,
            "Adj Close": 5.51,
            "Volume": 459004
          },
          {
            "Date": "2012-02-13",
            "Open": 5.51,
            "High": 5.72,
            "Low": 5.2,
            "Close": 5.26,
            "Adj Close": 5.26,
            "Volume": 909500
          },
          {
            "Date": "2012-02-14",
            "Open": 5.26,
            "High": 5.45,
            "Low": 4.21,
            "Close": 4.46,
            "Adj Close": 4.46,
            "Volume": 1399443
          },
          {
            "Date": "2012-02-15",
            "Open": 4.46,
            "High": 4.88,
            "Low": 4.2,
            "Close": 4.33,
            "Adj Close": 4.33,
            "Volume": 741639
          },
          {
            "Date": "2012-02-16",
            "Open": 4.33,
            "High": 4.44,
            "Low": 3.88,
            "Close": 4.27,
            "Adj Close": 4.27,
            "Volume": 697818
          },
          {
            "Date": "2012-02-17",
            "Open": 4.27,
            "High": 4.77,
            "Low": 4.23,
            "Close": 4.41,
            "Adj Close": 4.41,
            "Volume": 606244
          },
          {
            "Date": "2012-02-18",
            "Open": 4.41,
            "High": 4.5,
            "Low": 4.12,
            "Close": 4.22,
            "Adj Close": 4.22,
            "Volume": 300903
          },
          {
            "Date": "2012-02-19",
            "Open": 4.22,
            "High": 4.52,
            "Low": 4.18,
            "Close": 4.39,
            "Adj Close": 4.39,
            "Volume": 271300
          },
          {
            "Date": "2012-02-20",
            "Open": 4.39,
            "High": 4.47,
            "Low": 4.29,
            "Close": 4.36,
            "Adj Close": 4.36,
            "Volume": 162939
          },
          {
            "Date": "2012-02-21",
            "Open": 4.36,
            "High": 4.4,
            "Low": 4.21,
            "Close": 4.27,
            "Adj Close": 4.27,
            "Volume": 222970
          },
          {
            "Date": "2012-02-22",
            "Open": 4.27,
            "High": 4.54,
            "Low": 4.27,
            "Close": 4.42,
            "Adj Close": 4.42,
            "Volume": 460671
          },
          {
            "Date": "2012-02-23",
            "Open": 4.42,
            "High": 5.2,
            "Low": 4.42,
            "Close": 5.01,
            "Adj Close": 5.01,
            "Volume": 792557
          },
          {
            "Date": "2012-02-24",
            "Open": 5.01,
            "High": 5.1,
            "Low": 4.83,
            "Close": 5.03,
            "Adj Close": 5.03,
            "Volume": 446896
          },
          {
            "Date": "2012-02-25",
            "Open": 5.03,
            "High": 5.07,
            "Low": 4.65,
            "Close": 4.77,
            "Adj Close": 4.77,
            "Volume": 420213
          },
          {
            "Date": "2012-02-26",
            "Open": 4.77,
            "High": 5.1,
            "Low": 4.77,
            "Close": 4.92,
            "Adj Close": 4.92,
            "Volume": 347092
          },
          {
            "Date": "2012-02-27",
            "Open": 4.92,
            "High": 4.99,
            "Low": 4.89,
            "Close": 4.96,
            "Adj Close": 4.96,
            "Volume": 145288
          },
          {
            "Date": "2012-02-28",
            "Open": 4.96,
            "High": 5,
            "Low": 4.74,
            "Close": 4.87,
            "Adj Close": 4.87,
            "Volume": 305075
          },
          {
            "Date": "2012-02-29",
            "Open": 4.87,
            "High": 4.9,
            "Low": 4.8,
            "Close": 4.86,
            "Adj Close": 4.86,
            "Volume": 129089
          },
          {
            "Date": "2012-03-01",
            "Open": 4.86,
            "High": 4.99,
            "Low": 4.86,
            "Close": 4.92,
            "Adj Close": 4.92,
            "Volume": 218150
          },
          {
            "Date": "2012-03-02",
            "Open": 4.92,
            "High": 4.95,
            "Low": 4.51,
            "Close": 4.7,
            "Adj Close": 4.7,
            "Volume": 613272
          },
          {
            "Date": "2012-03-03",
            "Open": 4.7,
            "High": 4.78,
            "Low": 4.51,
            "Close": 4.61,
            "Adj Close": 4.61,
            "Volume": 187646
          },
          {
            "Date": "2012-03-04",
            "Open": 4.61,
            "High": 4.95,
            "Low": 4.61,
            "Close": 4.82,
            "Adj Close": 4.82,
            "Volume": 283142
          },
          {
            "Date": "2012-03-05",
            "Open": 4.82,
            "High": 5.05,
            "Low": 4.82,
            "Close": 4.98,
            "Adj Close": 4.98,
            "Volume": 325526
          },
          {
            "Date": "2012-03-06",
            "Open": 4.98,
            "High": 5.07,
            "Low": 4.9,
            "Close": 4.99,
            "Adj Close": 4.99,
            "Volume": 221579
          },
          {
            "Date": "2012-03-07",
            "Open": 4.99,
            "High": 5.05,
            "Low": 4.84,
            "Close": 4.94,
            "Adj Close": 4.94,
            "Volume": 227645
          },
          {
            "Date": "2012-03-08",
            "Open": 4.94,
            "High": 5,
            "Low": 4.76,
            "Close": 4.93,
            "Adj Close": 4.93,
            "Volume": 283093
          },
          {
            "Date": "2012-03-09",
            "Open": 4.93,
            "High": 4.95,
            "Low": 4.82,
            "Close": 4.86,
            "Adj Close": 4.86,
            "Volume": 160227
          },
          {
            "Date": "2012-03-10",
            "Open": 4.86,
            "High": 4.91,
            "Low": 4.75,
            "Close": 4.83,
            "Adj Close": 4.83,
            "Volume": 135426
          },
          {
            "Date": "2012-03-11",
            "Open": 4.83,
            "High": 4.99,
            "Low": 4.81,
            "Close": 4.91,
            "Adj Close": 4.91,
            "Volume": 208576
          },
          {
            "Date": "2012-03-12",
            "Open": 4.91,
            "High": 4.95,
            "Low": 4.86,
            "Close": 4.89,
            "Adj Close": 4.89,
            "Volume": 108198
          },
          {
            "Date": "2012-03-13",
            "Open": 4.89,
            "High": 5.41,
            "Low": 4.87,
            "Close": 5.27,
            "Adj Close": 5.27,
            "Volume": 656673
          },
          {
            "Date": "2012-03-14",
            "Open": 5.27,
            "High": 5.45,
            "Low": 5.25,
            "Close": 5.38,
            "Adj Close": 5.38,
            "Volume": 337721
          },
          {
            "Date": "2012-03-15",
            "Open": 5.38,
            "High": 5.45,
            "Low": 5.26,
            "Close": 5.33,
            "Adj Close": 5.33,
            "Volume": 219063
          },
          {
            "Date": "2012-03-16",
            "Open": 5.33,
            "High": 5.4,
            "Low": 5.3,
            "Close": 5.34,
            "Adj Close": 5.34,
            "Volume": 174983
          },
          {
            "Date": "2012-03-17",
            "Open": 5.34,
            "High": 5.4,
            "Low": 5.21,
            "Close": 5.22,
            "Adj Close": 5.22,
            "Volume": 207915
          },
          {
            "Date": "2012-03-18",
            "Open": 5.22,
            "High": 5.34,
            "Low": 5.21,
            "Close": 5.28,
            "Adj Close": 5.28,
            "Volume": 120310
          },
          {
            "Date": "2012-03-19",
            "Open": 5.28,
            "High": 5.31,
            "Low": 4.5,
            "Close": 4.69,
            "Adj Close": 4.69,
            "Volume": 922722
          },
          {
            "Date": "2012-03-20",
            "Open": 4.69,
            "High": 4.9,
            "Low": 4.59,
            "Close": 4.84,
            "Adj Close": 4.84,
            "Volume": 318065
          },
          {
            "Date": "2012-03-21",
            "Open": 4.84,
            "High": 4.87,
            "Low": 4.75,
            "Close": 4.81,
            "Adj Close": 4.81,
            "Volume": 223605
          },
          {
            "Date": "2012-03-22",
            "Open": 4.81,
            "High": 4.88,
            "Low": 4.6,
            "Close": 4.7,
            "Adj Close": 4.7,
            "Volume": 276226
          },
          {
            "Date": "2012-03-23",
            "Open": 4.7,
            "High": 4.79,
            "Low": 4.6,
            "Close": 4.69,
            "Adj Close": 4.69,
            "Volume": 254329
          },
          {
            "Date": "2012-03-24",
            "Open": 4.69,
            "High": 4.73,
            "Low": 4.6,
            "Close": 4.68,
            "Adj Close": 4.68,
            "Volume": 181738
          },
          {
            "Date": "2012-03-25",
            "Open": 4.68,
            "High": 4.68,
            "Low": 4.3,
            "Close": 4.55,
            "Adj Close": 4.55,
            "Volume": 322035
          },
          {
            "Date": "2012-03-25",
            "Open": 4.55,
            "High": 4.74,
            "Low": 4.52,
            "Close": 4.62,
            "Adj Close": 4.62,
            "Volume": 324896
          },
          {
            "Date": "2012-03-26",
            "Open": 4.62,
            "High": 4.85,
            "Low": 4.49,
            "Close": 4.81,
            "Adj Close": 4.81,
            "Volume": 342922
          },
          {
            "Date": "2012-03-27",
            "Open": 4.81,
            "High": 4.84,
            "Low": 4.72,
            "Close": 4.79,
            "Adj Close": 4.79,
            "Volume": 182050
          },
          {
            "Date": "2012-03-28",
            "Open": 4.79,
            "High": 4.86,
            "Low": 4.71,
            "Close": 4.81,
            "Adj Close": 4.81,
            "Volume": 180963
          },
          {
            "Date": "2012-03-29",
            "Open": 4.81,
            "High": 4.88,
            "Low": 4.72,
            "Close": 4.86,
            "Adj Close": 4.86,
            "Volume": 187496
          },
          {
            "Date": "2012-03-30",
            "Open": 4.86,
            "High": 4.95,
            "Low": 4.82,
            "Close": 4.91,
            "Adj Close": 4.91,
            "Volume": 173670
          },
          {
            "Date": "2012-03-31",
            "Open": 4.91,
            "High": 4.92,
            "Low": 4.73,
            "Close": 4.83,
            "Adj Close": 4.83,
            "Volume": 172377
          },
          {
            "Date": "2012-04-01",
            "Open": 4.83,
            "High": 5.08,
            "Low": 4.76,
            "Close": 4.97,
            "Adj Close": 4.97,
            "Volume": 398480
          },
          {
            "Date": "2012-04-02",
            "Open": 4.97,
            "High": 4.99,
            "Low": 4.81,
            "Close": 4.95,
            "Adj Close": 4.95,
            "Volume": 384710
          },
          {
            "Date": "2012-04-03",
            "Open": 4.95,
            "High": 4.97,
            "Low": 4.89,
            "Close": 4.91,
            "Adj Close": 4.91,
            "Volume": 251784
          },
          {
            "Date": "2012-04-04",
            "Open": 4.91,
            "High": 4.93,
            "Low": 4.87,
            "Close": 4.92,
            "Adj Close": 4.92,
            "Volume": 165880
          },
          {
            "Date": "2012-04-05",
            "Open": 4.92,
            "High": 4.98,
            "Low": 4.88,
            "Close": 4.95,
            "Adj Close": 4.95,
            "Volume": 287735
          },
          {
            "Date": "2012-04-06",
            "Open": 4.95,
            "High": 4.95,
            "Low": 4.69,
            "Close": 4.69,
            "Adj Close": 4.69,
            "Volume": 388783
          },
          {
            "Date": "2012-04-07",
            "Open": 4.69,
            "High": 4.8,
            "Low": 4.62,
            "Close": 4.79,
            "Adj Close": 4.79,
            "Volume": 197917
          },
          {
            "Date": "2012-04-08",
            "Open": 4.79,
            "High": 4.88,
            "Low": 4.73,
            "Close": 4.87,
            "Adj Close": 4.87,
            "Volume": 187709
          },
          {
            "Date": "2012-04-09",
            "Open": 4.87,
            "High": 4.9,
            "Low": 4.76,
            "Close": 4.84,
            "Adj Close": 4.84,
            "Volume": 256671
          },
          {
            "Date": "2012-04-10",
            "Open": 4.84,
            "High": 4.98,
            "Low": 4.79,
            "Close": 4.93,
            "Adj Close": 4.93,
            "Volume": 327827
          },
          {
            "Date": "2012-04-11",
            "Open": 4.93,
            "High": 4.95,
            "Low": 4.84,
            "Close": 4.92,
            "Adj Close": 4.92,
            "Volume": 226872
          },
          {
            "Date": "2012-04-12",
            "Open": 4.92,
            "High": 4.94,
            "Low": 4.73,
            "Close": 4.94,
            "Adj Close": 4.94,
            "Volume": 452385
          },
          {
            "Date": "2012-04-13",
            "Open": 4.94,
            "High": 5.03,
            "Low": 4.9,
            "Close": 4.96,
            "Adj Close": 4.96,
            "Volume": 317996
          },
          {
            "Date": "2012-04-14",
            "Open": 4.96,
            "High": 4.98,
            "Low": 4.86,
            "Close": 4.97,
            "Adj Close": 4.97,
            "Volume": 163921
          },
          {
            "Date": "2012-04-15",
            "Open": 4.97,
            "High": 4.98,
            "Low": 4.91,
            "Close": 4.93,
            "Adj Close": 4.93,
            "Volume": 154236
          },
          {
            "Date": "2012-04-16",
            "Open": 4.93,
            "High": 5.02,
            "Low": 4.93,
            "Close": 4.98,
            "Adj Close": 4.98,
            "Volume": 151983
          },
          {
            "Date": "2012-04-17",
            "Open": 4.98,
            "High": 5.18,
            "Low": 4.96,
            "Close": 5.12,
            "Adj Close": 5.12,
            "Volume": 401659
          },
          {
            "Date": "2012-04-18",
            "Open": 5.12,
            "High": 5.19,
            "Low": 5.1,
            "Close": 5.14,
            "Adj Close": 5.14,
            "Volume": 240310
          },
          {
            "Date": "2012-04-19",
            "Open": 5.14,
            "High": 5.48,
            "Low": 5.1,
            "Close": 5.35,
            "Adj Close": 5.35,
            "Volume": 544263
          },
          {
            "Date": "2012-04-20",
            "Open": 5.35,
            "High": 5.48,
            "Low": 5.11,
            "Close": 5.26,
            "Adj Close": 5.26,
            "Volume": 321118
          },
          {
            "Date": "2012-04-21",
            "Open": 5.26,
            "High": 5.32,
            "Low": 5.1,
            "Close": 5.2,
            "Adj Close": 5.2,
            "Volume": 192195
          },
          {
            "Date": "2012-04-22",
            "Open": 5.2,
            "High": 5.22,
            "Low": 4.96,
            "Close": 4.96,
            "Adj Close": 4.96,
            "Volume": 252978
          },
          {
            "Date": "2012-04-23",
            "Open": 4.96,
            "High": 5.2,
            "Low": 4.95,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 360126
          },
          {
            "Date": "2012-04-24",
            "Open": 5.1,
            "High": 5.18,
            "Low": 5.04,
            "Close": 5.13,
            "Adj Close": 5.13,
            "Volume": 182736
          },
          {
            "Date": "2012-04-25",
            "Open": 5.13,
            "High": 5.17,
            "Low": 4.99,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 291333
          },
          {
            "Date": "2012-04-26",
            "Open": 5.1,
            "High": 5.12,
            "Low": 5.03,
            "Close": 5.11,
            "Adj Close": 5.11,
            "Volume": 131461
          },
          {
            "Date": "2012-04-27",
            "Open": 5.11,
            "High": 5.11,
            "Low": 4.85,
            "Close": 4.98,
            "Adj Close": 4.98,
            "Volume": 453939
          },
          {
            "Date": "2012-04-28",
            "Open": 4.98,
            "High": 5.02,
            "Low": 4.88,
            "Close": 4.9,
            "Adj Close": 4.9,
            "Volume": 109717
          },
          {
            "Date": "2012-04-29",
            "Open": 4.9,
            "High": 5,
            "Low": 4.87,
            "Close": 4.95,
            "Adj Close": 4.95,
            "Volume": 275744
          },
          {
            "Date": "2012-04-30",
            "Open": 4.95,
            "High": 5,
            "Low": 4.92,
            "Close": 5,
            "Adj Close": 5,
            "Volume": 181986
          },
          {
            "Date": "2012-05-01",
            "Open": 5,
            "High": 5.18,
            "Low": 4.97,
            "Close": 5.07,
            "Adj Close": 5.07,
            "Volume": 487937
          },
          {
            "Date": "2012-05-02",
            "Open": 5.07,
            "High": 5.18,
            "Low": 5.02,
            "Close": 5.13,
            "Adj Close": 5.13,
            "Volume": 180427
          },
          {
            "Date": "2012-05-03",
            "Open": 5.13,
            "High": 5.15,
            "Low": 5.07,
            "Close": 5.07,
            "Adj Close": 5.07,
            "Volume": 223210
          },
          {
            "Date": "2012-05-04",
            "Open": 5.07,
            "High": 5.12,
            "Low": 5.03,
            "Close": 5.08,
            "Adj Close": 5.08,
            "Volume": 95532
          },
          {
            "Date": "2012-05-05",
            "Open": 5.08,
            "High": 5.1,
            "Low": 5.01,
            "Close": 5.05,
            "Adj Close": 5.05,
            "Volume": 97474
          },
          {
            "Date": "2012-05-06",
            "Open": 5.05,
            "High": 5.1,
            "Low": 4.97,
            "Close": 5.06,
            "Adj Close": 5.06,
            "Volume": 232779
          },
          {
            "Date": "2012-05-07",
            "Open": 5.06,
            "High": 5.1,
            "Low": 4.96,
            "Close": 5.05,
            "Adj Close": 5.05,
            "Volume": 342801
          },
          {
            "Date": "2012-05-08",
            "Open": 5.05,
            "High": 5.1,
            "Low": 5,
            "Close": 5.04,
            "Adj Close": 5.04,
            "Volume": 196640
          },
          {
            "Date": "2012-05-09",
            "Open": 5.04,
            "High": 5.13,
            "Low": 4.8,
            "Close": 4.85,
            "Adj Close": 4.85,
            "Volume": 347144
          },
          {
            "Date": "2012-05-10",
            "Open": 4.85,
            "High": 5,
            "Low": 4.8,
            "Close": 4.96,
            "Adj Close": 4.96,
            "Volume": 311100
          },
          {
            "Date": "2012-05-11",
            "Open": 4.96,
            "High": 5,
            "Low": 4.92,
            "Close": 4.95,
            "Adj Close": 4.95,
            "Volume": 103382
          },
          {
            "Date": "2012-05-12",
            "Open": 4.95,
            "High": 5,
            "Low": 4.92,
            "Close": 4.93,
            "Adj Close": 4.93,
            "Volume": 69673
          },
          {
            "Date": "2012-05-13",
            "Open": 4.93,
            "High": 5.04,
            "Low": 4.9,
            "Close": 5.01,
            "Adj Close": 5.01,
            "Volume": 263695
          },
          {
            "Date": "2012-05-14",
            "Open": 5.01,
            "High": 5.04,
            "Low": 4.95,
            "Close": 5.04,
            "Adj Close": 5.04,
            "Volume": 220957
          },
          {
            "Date": "2012-05-15",
            "Open": 5.04,
            "High": 5.13,
            "Low": 5,
            "Close": 5.09,
            "Adj Close": 5.09,
            "Volume": 351814
          },
          {
            "Date": "2012-05-16",
            "Open": 5.09,
            "High": 5.1,
            "Low": 5.05,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 135248
          },
          {
            "Date": "2012-05-17",
            "Open": 5.1,
            "High": 5.13,
            "Low": 5.06,
            "Close": 5.12,
            "Adj Close": 5.12,
            "Volume": 268289
          },
          {
            "Date": "2012-05-18",
            "Open": 5.12,
            "High": 5.14,
            "Low": 5.07,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 118319
          },
          {
            "Date": "2012-05-19",
            "Open": 5.1,
            "High": 5.15,
            "Low": 5.09,
            "Close": 5.09,
            "Adj Close": 5.09,
            "Volume": 95644
          },
          {
            "Date": "2012-05-20",
            "Open": 5.09,
            "High": 5.13,
            "Low": 5.06,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 171340
          },
          {
            "Date": "2012-05-21",
            "Open": 5.1,
            "High": 5.12,
            "Low": 5.05,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 237263
          },
          {
            "Date": "2012-05-22",
            "Open": 5.1,
            "High": 5.17,
            "Low": 5.07,
            "Close": 5.14,
            "Adj Close": 5.14,
            "Volume": 271619
          },
          {
            "Date": "2012-05-23",
            "Open": 5.14,
            "High": 5.15,
            "Low": 5.07,
            "Close": 5.12,
            "Adj Close": 5.12,
            "Volume": 148029
          },
          {
            "Date": "2012-05-24",
            "Open": 5.12,
            "High": 5.15,
            "Low": 5.1,
            "Close": 5.15,
            "Adj Close": 5.15,
            "Volume": 118398
          },
          {
            "Date": "2012-05-25",
            "Open": 5.15,
            "High": 5.15,
            "Low": 5.1,
            "Close": 5.1,
            "Adj Close": 5.1,
            "Volume": 84985
          },
          {
            "Date": "2012-05-26",
            "Open": 5.1,
            "High": 5.15,
            "Low": 5.1,
            "Close": 5.14,
            "Adj Close": 5.14,
            "Volume": 80709
          },
          {
            "Date": "2012-05-27",
            "Open": 5.14,
            "High": 5.16,
            "Low": 5.11,
            "Close": 5.14,
            "Adj Close": 5.14,
            "Volume": 141508
          },
          {
            "Date": "2012-05-28",
            "Open": 5.14,
            "High": 5.16,
            "Low": 5.01,
            "Close": 5.15,
            "Adj Close": 5.15,
            "Volume": 313167
          },
          {
            "Date": "2012-05-29",
            "Open": 5.15,
            "High": 5.17,
            "Low": 5.1,
            "Close": 5.14,
            "Adj Close": 5.14,
            "Volume": 205489
          },
          {
            "Date": "2012-05-30",
            "Open": 5.14,
            "High": 5.2,
            "Low": 5.11,
            "Close": 5.18,
            "Adj Close": 5.18,
            "Volume": 203750
          },
          {
            "Date": "2012-05-31",
            "Open": 5.18,
            "High": 5.28,
            "Low": 5.18,
            "Close": 5.27,
            "Adj Close": 5.27,
            "Volume": 234080
          },
          {
            "Date": "2012-06-01",
            "Open": 5.27,
            "High": 5.27,
            "Low": 5.21,
            "Close": 5.25,
            "Adj Close": 5.25,
            "Volume": 79520
          },
          {
            "Date": "2012-06-02",
            "Open": 5.25,
            "High": 5.25,
            "Low": 5.21,
            "Close": 5.21,
            "Adj Close": 5.21,
            "Volume": 66238
          },
          {
            "Date": "2012-06-03",
            "Open": 5.21,
            "High": 5.28,
            "Low": 5.18,
            "Close": 5.27,
            "Adj Close": 5.27,
            "Volume": 268035
          },
          {
            "Date": "2012-06-04",
            "Open": 5.27,
            "High": 5.5,
            "Low": 5.22,
            "Close": 5.44,
            "Adj Close": 5.44,
            "Volume": 452286
          },
          {
            "Date": "2012-06-05",
            "Open": 5.44,
            "High": 5.49,
            "Low": 5.39,
            "Close": 5.46,
            "Adj Close": 5.46,
            "Volume": 221376
          },
          {
            "Date": "2012-06-06",
            "Open": 5.46,
            "High": 5.59,
            "Low": 5.41,
            "Close": 5.59,
            "Adj Close": 5.59,
            "Volume": 264420
          },
          {
            "Date": "2012-06-07",
            "Open": 5.59,
            "High": 5.66,
            "Low": 5.56,
            "Close": 5.63,
            "Adj Close": 5.63,
            "Volume": 302527
          },
          {
            "Date": "2012-06-08",
            "Open": 5.63,
            "High": 5.7,
            "Low": 5.46,
            "Close": 5.56,
            "Adj Close": 5.56,
            "Volume": 206719
          },
          {
            "Date": "2012-06-09",
            "Open": 5.56,
            "High": 5.58,
            "Low": 5.43,
            "Close": 5.47,
            "Adj Close": 5.47,
            "Volume": 134034
          },
          {
            "Date": "2012-06-10",
            "Open": 5.47,
            "High": 5.6,
            "Low": 5.43,
            "Close": 5.57,
            "Adj Close": 5.57,
            "Volume": 221882
          },
          {
            "Date": "2012-06-11",
            "Open": 5.57,
            "High": 5.75,
            "Low": 5.5,
            "Close": 5.7,
            "Adj Close": 5.7,
            "Volume": 442662
          },
          {
            "Date": "2012-06-12",
            "Open": 5.7,
            "High": 5.96,
            "Low": 5.66,
            "Close": 5.93,
            "Adj Close": 5.93,
            "Volume": 335216
          },
          {
            "Date": "2012-06-13",
            "Open": 5.93,
            "High": 5.97,
            "Low": 5.81,
            "Close": 5.95,
            "Adj Close": 5.95,
            "Volume": 206567
          },
          {
            "Date": "2012-06-14",
            "Open": 5.95,
            "High": 6.59,
            "Low": 5.88,
            "Close": 6.5,
            "Adj Close": 6.5,
            "Volume": 401826
          },
          {
            "Date": "2012-06-15",
            "Open": 6.5,
            "High": 6.6,
            "Low": 6.26,
            "Close": 6.4,
            "Adj Close": 6.4,
            "Volume": 505216
          },
          {
            "Date": "2012-06-16",
            "Open": 6.4,
            "High": 6.53,
            "Low": 6.1,
            "Close": 6.16,
            "Adj Close": 6.16,
            "Volume": 308913
          },
          {
            "Date": "2012-06-17",
            "Open": 6.16,
            "High": 6.36,
            "Low": 6.03,
            "Close": 6.31,
            "Adj Close": 6.31,
            "Volume": 293446
          },
          {
            "Date": "2012-06-18",
            "Open": 6.31,
            "High": 6.53,
            "Low": 6.28,
            "Close": 6.5,
            "Adj Close": 6.5,
            "Volume": 282752
          },
          {
            "Date": "2012-06-19",
            "Open": 6.5,
            "High": 6.71,
            "Low": 6.45,
            "Close": 6.67,
            "Adj Close": 6.67,
            "Volume": 423271
          },
          {
            "Date": "2012-06-20",
            "Open": 6.67,
            "High": 6.8,
            "Low": 6.56,
            "Close": 6.68,
            "Adj Close": 6.68,
            "Volume": 347681
          },
          {
            "Date": "2012-06-21",
            "Open": 6.68,
            "High": 6.8,
            "Low": 6.43,
            "Close": 6.55,
            "Adj Close": 6.55,
            "Volume": 374175
          },
          {
            "Date": "2012-06-22",
            "Open": 6.55,
            "High": 6.65,
            "Low": 6.4,
            "Close": 6.43,
            "Adj Close": 6.43,
            "Volume": 130792
          },
          {
            "Date": "2012-06-23",
            "Open": 6.43,
            "High": 6.47,
            "Low": 6.35,
            "Close": 6.35,
            "Adj Close": 6.35,
            "Volume": 217549
          },
          {
            "Date": "2012-06-24",
            "Open": 6.35,
            "High": 6.45,
            "Low": 6.22,
            "Close": 6.3,
            "Adj Close": 6.3,
            "Volume": 395654
          },
          {
            "Date": "2012-06-25",
            "Open": 6.3,
            "High": 6.47,
            "Low": 6.29,
            "Close": 6.42,
            "Adj Close": 6.42,
            "Volume": 311935
          },
          {
            "Date": "2012-06-26",
            "Open": 6.42,
            "High": 6.65,
            "Low": 6.4,
            "Close": 6.65,
            "Adj Close": 6.65,
            "Volume": 274046
          },
          {
            "Date": "2012-06-27",
            "Open": 6.65,
            "High": 6.67,
            "Low": 6.49,
            "Close": 6.61,
            "Adj Close": 6.61,
            "Volume": 282297
          },
          {
            "Date": "2012-06-28",
            "Open": 6.61,
            "High": 6.68,
            "Low": 6.54,
            "Close": 6.65,
            "Adj Close": 6.65,
            "Volume": 174369
          },
          {
            "Date": "2012-06-29",
            "Open": 6.65,
            "High": 6.69,
            "Low": 6.6,
            "Close": 6.69,
            "Adj Close": 6.69,
            "Volume": 137136
          },
          {
            "Date": "2012-06-30",
            "Open": 6.69,
            "High": 6.69,
            "Low": 6.54,
            "Close": 6.63,
            "Adj Close": 6.63,
            "Volume": 135823
          },
          {
            "Date": "2012-07-01",
            "Open": 6.63,
            "High": 6.77,
            "Low": 6.58,
            "Close": 6.76,
            "Adj Close": 6.76,
            "Volume": 217005
          },
          {
            "Date": "2012-07-02",
            "Open": 6.76,
            "High": 6.76,
            "Low": 6.4,
            "Close": 6.45,
            "Adj Close": 6.45,
            "Volume": 465280
          },
          {
            "Date": "2012-07-03",
            "Open": 6.45,
            "High": 6.55,
            "Low": 6.45,
            "Close": 6.51,
            "Adj Close": 6.51,
            "Volume": 217804
          },
          {
            "Date": "2012-07-04",
            "Open": 6.51,
            "High": 6.77,
            "Low": 6.48,
            "Close": 6.67,
            "Adj Close": 6.67,
            "Volume": 301701
          },
          {
            "Date": "2012-07-05",
            "Open": 6.67,
            "High": 6.72,
            "Low": 6.55,
            "Close": 6.65,
            "Adj Close": 6.65,
            "Volume": 286978
          },
          {
            "Date": "2012-07-06",
            "Open": 6.65,
            "High": 6.87,
            "Low": 6.63,
            "Close": 6.76,
            "Adj Close": 6.76,
            "Volume": 257213
          },
          {
            "Date": "2012-07-07",
            "Open": 6.76,
            "High": 6.86,
            "Low": 6.72,
            "Close": 6.8,
            "Adj Close": 6.8,
            "Volume": 123756
          },
          {
            "Date": "2012-07-08",
            "Open": 6.8,
            "High": 7.1,
            "Low": 6.74,
            "Close": 7.02,
            "Adj Close": 7.02,
            "Volume": 425223
          },
          {
            "Date": "2012-07-09",
            "Open": 7.02,
            "High": 7.25,
            "Low": 6.96,
            "Close": 7.2,
            "Adj Close": 7.2,
            "Volume": 497668
          },
          {
            "Date": "2012-07-10",
            "Open": 7.2,
            "High": 7.26,
            "Low": 7.02,
            "Close": 7.15,
            "Adj Close": 7.15,
            "Volume": 297644
          },
          {
            "Date": "2012-07-11",
            "Open": 7.15,
            "High": 7.9,
            "Low": 7.1,
            "Close": 7.76,
            "Adj Close": 7.76,
            "Volume": 471834
          },
          {
            "Date": "2012-07-12",
            "Open": 7.76,
            "High": 7.82,
            "Low": 7.42,
            "Close": 7.67,
            "Adj Close": 7.67,
            "Volume": 499441
          },
          {
            "Date": "2012-07-13",
            "Open": 7.67,
            "High": 7.67,
            "Low": 7.52,
            "Close": 7.54,
            "Adj Close": 7.54,
            "Volume": 121635
          },
          {
            "Date": "2012-07-14",
            "Open": 7.54,
            "High": 7.7,
            "Low": 7.45,
            "Close": 7.62,
            "Adj Close": 7.62,
            "Volume": 204616
          },
          {
            "Date": "2012-07-15",
            "Open": 7.62,
            "High": 8.65,
            "Low": 7.62,
            "Close": 8.5,
            "Adj Close": 8.5,
            "Volume": 835550
          },
          {
            "Date": "2012-07-16",
            "Open": 8.5,
            "High": 9.49,
            "Low": 7.32,
            "Close": 8.8,
            "Adj Close": 8.8,
            "Volume": 1757815
          },
          {
            "Date": "2012-07-17",
            "Open": 8.8,
            "High": 9.4,
            "Low": 8.5,
            "Close": 9.11,
            "Adj Close": 9.11,
            "Volume": 955210
          },
          {
            "Date": "2012-07-18",
            "Open": 9.11,
            "High": 9.23,
            "Low": 8.82,
            "Close": 8.87,
            "Adj Close": 8.87,
            "Volume": 438703
          },
          {
            "Date": "2012-07-19",
            "Open": 8.87,
            "High": 8.87,
            "Low": 7.6,
            "Close": 8.52,
            "Adj Close": 8.52,
            "Volume": 1267523
          },
          {
            "Date": "2012-07-20",
            "Open": 8.52,
            "High": 9.7,
            "Low": 7.96,
            "Close": 8.85,
            "Adj Close": 8.85,
            "Volume": 1242153
          },
          {
            "Date": "2012-07-21",
            "Open": 8.85,
            "High": 8.97,
            "Low": 8.27,
            "Close": 8.41,
            "Adj Close": 8.41,
            "Volume": 259113
          },
          {
            "Date": "2012-07-22",
            "Open": 8.41,
            "High": 9.2,
            "Low": 7.75,
            "Close": 8.45,
            "Adj Close": 8.45,
            "Volume": 1238579
          },
          {
            "Date": "2012-07-23",
            "Open": 8.45,
            "High": 8.85,
            "Low": 8.34,
            "Close": 8.6,
            "Adj Close": 8.6,
            "Volume": 353506
          },
          {
            "Date": "2012-07-24",
            "Open": 8.6,
            "High": 8.9,
            "Low": 8.37,
            "Close": 8.8,
            "Adj Close": 8.8,
            "Volume": 555883
          },
          {
            "Date": "2012-07-25",
            "Open": 8.8,
            "High": 8.9,
            "Low": 8.6,
            "Close": 8.9,
            "Adj Close": 8.9,
            "Volume": 283993
          },
          {
            "Date": "2012-07-26",
            "Open": 8.9,
            "High": 8.95,
            "Low": 8.81,
            "Close": 8.9,
            "Adj Close": 8.9,
            "Volume": 237223
          },
          {
            "Date": "2012-07-27",
            "Open": 8.9,
            "High": 8.93,
            "Low": 8.71,
            "Close": 8.89,
            "Adj Close": 8.89,
            "Volume": 143179
          },
          {
            "Date": "2012-07-28",
            "Open": 8.89,
            "High": 8.89,
            "Low": 8.7,
            "Close": 8.71,
            "Adj Close": 8.71,
            "Volume": 100508
          },
          {
            "Date": "2012-07-29",
            "Open": 8.71,
            "High": 9.15,
            "Low": 8.7,
            "Close": 9.1,
            "Adj Close": 9.1,
            "Volume": 458873
          },
          {
            "Date": "2012-07-30",
            "Open": 9.1,
            "High": 9.44,
            "Low": 9.08,
            "Close": 9.35,
            "Adj Close": 9.35,
            "Volume": 648746
          },
          {
            "Date": "2012-07-31",
            "Open": 9.35,
            "High": 9.65,
            "Low": 9.11,
            "Close": 9.55,
            "Adj Close": 9.55,
            "Volume": 647522
          },
          {
            "Date": "2012-08-01",
            "Open": 9.55,
            "High": 11,
            "Low": 9.41,
            "Close": 10.53,
            "Adj Close": 10.53,
            "Volume": 1283817
          },
          {
            "Date": "2012-08-02",
            "Open": 10.53,
            "High": 11.12,
            "Low": 10.3,
            "Close": 10.97,
            "Adj Close": 10.97,
            "Volume": 661588
          },
          {
            "Date": "2012-08-03",
            "Open": 10.97,
            "High": 11.3,
            "Low": 10.53,
            "Close": 10.98,
            "Adj Close": 10.98,
            "Volume": 575464
          },
          {
            "Date": "2012-08-04",
            "Open": 10.98,
            "High": 11.29,
            "Low": 10.11,
            "Close": 10.87,
            "Adj Close": 10.87,
            "Volume": 714863
          },
          {
            "Date": "2012-08-05",
            "Open": 10.87,
            "High": 11.19,
            "Low": 10.64,
            "Close": 10.86,
            "Adj Close": 10.86,
            "Volume": 562801
          },
          {
            "Date": "2012-08-06",
            "Open": 10.86,
            "High": 11.1,
            "Low": 10.65,
            "Close": 11.1,
            "Adj Close": 11.1,
            "Volume": 451978
          },
          {
            "Date": "2012-08-07",
            "Open": 11.1,
            "High": 11.15,
            "Low": 10.85,
            "Close": 11.06,
            "Adj Close": 11.06,
            "Volume": 345666
          },
          {
            "Date": "2012-08-08",
            "Open": 11.06,
            "High": 12,
            "Low": 10.8,
            "Close": 11.06,
            "Adj Close": 11.06,
            "Volume": 1153809
          },
          {
            "Date": "2012-08-09",
            "Open": 11.06,
            "High": 11.6,
            "Low": 11.01,
            "Close": 11.39,
            "Adj Close": 11.39,
            "Volume": 725605
          },
          {
            "Date": "2012-08-10",
            "Open": 11.39,
            "High": 11.6,
            "Low": 11.39,
            "Close": 11.51,
            "Adj Close": 11.51,
            "Volume": 250620
          },
          {
            "Date": "2012-08-11",
            "Open": 11.51,
            "High": 11.77,
            "Low": 11.45,
            "Close": 11.62,
            "Adj Close": 11.62,
            "Volume": 353092
          },
          {
            "Date": "2012-08-12",
            "Open": 11.62,
            "High": 12.05,
            "Low": 11.49,
            "Close": 12.04,
            "Adj Close": 12.04,
            "Volume": 637059
          },
          {
            "Date": "2012-08-13",
            "Open": 12.04,
            "High": 12.34,
            "Low": 11.89,
            "Close": 12.19,
            "Adj Close": 12.19,
            "Volume": 532302
          },
          {
            "Date": "2012-08-14",
            "Open": 12.19,
            "High": 13.25,
            "Low": 12.16,
            "Close": 13.25,
            "Adj Close": 13.25,
            "Volume": 725834
          },
          {
            "Date": "2012-08-15",
            "Open": 13.25,
            "High": 13.84,
            "Low": 12.5,
            "Close": 13.5,
            "Adj Close": 13.5,
            "Volume": 1277714
          },
          {
            "Date": "2012-08-16",
            "Open": 13.5,
            "High": 15.4,
            "Low": 10.6,
            "Close": 11.58,
            "Adj Close": 11.58,
            "Volume": 2930580
          },
          {
            "Date": "2012-08-17",
            "Open": 11.58,
            "High": 12.9,
            "Low": 11.02,
            "Close": 11.61,
            "Adj Close": 11.61,
            "Volume": 1045361
          },
          {
            "Date": "2012-08-18",
            "Open": 11.61,
            "High": 11.62,
            "Low": 7.58,
            "Close": 8,
            "Adj Close": 8,
            "Volume": 2170411
          },
          {
            "Date": "2012-08-19",
            "Open": 8,
            "High": 10.5,
            "Low": 7.81,
            "Close": 10.1,
            "Adj Close": 10.1,
            "Volume": 1835053
          },
          {
            "Date": "2012-08-20",
            "Open": 10.1,
            "High": 10.3,
            "Low": 9.7,
            "Close": 9.92,
            "Adj Close": 9.92,
            "Volume": 722740
          },
          {
            "Date": "2012-08-21",
            "Open": 9.92,
            "High": 10.1,
            "Low": 9.57,
            "Close": 9.81,
            "Adj Close": 9.81,
            "Volume": 665544
          },
          {
            "Date": "2012-08-22",
            "Open": 9.81,
            "High": 10.25,
            "Low": 9.71,
            "Close": 10.1,
            "Adj Close": 10.1,
            "Volume": 560012
          },
          {
            "Date": "2012-08-23",
            "Open": 10.1,
            "High": 10.62,
            "Low": 9.85,
            "Close": 10.6,
            "Adj Close": 10.6,
            "Volume": 945182
          },
          {
            "Date": "2012-08-24",
            "Open": 10.6,
            "High": 10.63,
            "Low": 10.2,
            "Close": 10.52,
            "Adj Close": 10.52,
            "Volume": 420388
          },
          {
            "Date": "2012-08-25",
            "Open": 10.52,
            "High": 10.62,
            "Low": 10.45,
            "Close": 10.61,
            "Adj Close": 10.61,
            "Volume": 277773
          },
          {
            "Date": "2012-08-26",
            "Open": 10.61,
            "High": 12.15,
            "Low": 10.54,
            "Close": 10.95,
            "Adj Close": 10.95,
            "Volume": 1957673
          },
          {
            "Date": "2012-08-27",
            "Open": 10.95,
            "High": 11.21,
            "Low": 10.5,
            "Close": 10.94,
            "Adj Close": 10.94,
            "Volume": 598168
          },
          {
            "Date": "2012-08-28",
            "Open": 10.94,
            "High": 11.13,
            "Low": 10.55,
            "Close": 10.92,
            "Adj Close": 10.92,
            "Volume": 581687
          },
          {
            "Date": "2012-08-29",
            "Open": 10.92,
            "High": 10.93,
            "Low": 10.6,
            "Close": 10.78,
            "Adj Close": 10.78,
            "Volume": 332208
          },
          {
            "Date": "2012-08-30",
            "Open": 10.78,
            "High": 10.83,
            "Low": 9.66,
            "Close": 10.16,
            "Adj Close": 10.16,
            "Volume": 690452
          },
          {
            "Date": "2012-08-31",
            "Open": 10.16,
            "High": 10.3,
            "Low": 9.78,
            "Close": 9.97,
            "Adj Close": 9.97,
            "Volume": 233777
          },
          {
            "Date": "2012-09-01",
            "Open": 9.97,
            "High": 10.36,
            "Low": 9.72,
            "Close": 10.2,
            "Adj Close": 10.2,
            "Volume": 251932
          },
          {
            "Date": "2012-09-02",
            "Open": 10.2,
            "High": 10.59,
            "Low": 10.09,
            "Close": 10.53,
            "Adj Close": 10.53,
            "Volume": 237264
          },
          {
            "Date": "2012-09-03",
            "Open": 10.53,
            "High": 10.53,
            "Low": 10.15,
            "Close": 10.38,
            "Adj Close": 10.38,
            "Volume": 359404
          },
          {
            "Date": "2012-09-04",
            "Open": 10.38,
            "High": 11.17,
            "Low": 10.26,
            "Close": 11,
            "Adj Close": 11,
            "Volume": 653374
          },
          {
            "Date": "2012-09-05",
            "Open": 11,
            "High": 11.29,
            "Low": 10.64,
            "Close": 11.18,
            "Adj Close": 11.18,
            "Volume": 733288
          },
          {
            "Date": "2012-09-06",
            "Open": 11.18,
            "High": 11.21,
            "Low": 10.95,
            "Close": 11,
            "Adj Close": 11,
            "Volume": 394463
          },
          {
            "Date": "2012-09-07",
            "Open": 11,
            "High": 11.14,
            "Low": 10.77,
            "Close": 11.04,
            "Adj Close": 11.04,
            "Volume": 266231
          },
          {
            "Date": "2012-09-08",
            "Open": 11.04,
            "High": 11.14,
            "Low": 10.92,
            "Close": 11.02,
            "Adj Close": 11.02,
            "Volume": 155002
          },
          {
            "Date": "2012-09-09",
            "Open": 11.02,
            "High": 11.19,
            "Low": 10.87,
            "Close": 11.17,
            "Adj Close": 11.17,
            "Volume": 467067
          },
          {
            "Date": "2012-09-10",
            "Open": 11.17,
            "High": 11.35,
            "Low": 10.88,
            "Close": 11.33,
            "Adj Close": 11.33,
            "Volume": 721708
          },
          {
            "Date": "2012-09-11",
            "Open": 11.33,
            "High": 11.39,
            "Low": 10.78,
            "Close": 11.36,
            "Adj Close": 11.36,
            "Volume": 657004
          },
          {
            "Date": "2012-09-12",
            "Open": 11.36,
            "High": 11.4,
            "Low": 11.22,
            "Close": 11.4,
            "Adj Close": 11.4,
            "Volume": 233401
          },
          {
            "Date": "2012-09-13",
            "Open": 11.4,
            "High": 11.8,
            "Low": 11.32,
            "Close": 11.67,
            "Adj Close": 11.67,
            "Volume": 500768
          },
          {
            "Date": "2012-09-14",
            "Open": 11.67,
            "High": 11.79,
            "Low": 11.6,
            "Close": 11.75,
            "Adj Close": 11.75,
            "Volume": 190511
          },
          {
            "Date": "2012-09-15",
            "Open": 11.75,
            "High": 11.99,
            "Low": 11.72,
            "Close": 11.87,
            "Adj Close": 11.87,
            "Volume": 359833
          },
          {
            "Date": "2012-09-16",
            "Open": 11.87,
            "High": 11.96,
            "Low": 11.77,
            "Close": 11.89,
            "Adj Close": 11.89,
            "Volume": 316662
          },
          {
            "Date": "2012-09-17",
            "Open": 11.89,
            "High": 12.35,
            "Low": 11.84,
            "Close": 12.25,
            "Adj Close": 12.25,
            "Volume": 494030
          },
          {
            "Date": "2012-09-18",
            "Open": 12.25,
            "High": 12.69,
            "Low": 12.15,
            "Close": 12.57,
            "Adj Close": 12.57,
            "Volume": 519593
          },
          {
            "Date": "2012-09-19",
            "Open": 12.57,
            "High": 12.66,
            "Low": 12.25,
            "Close": 12.28,
            "Adj Close": 12.28,
            "Volume": 406467
          },
          {
            "Date": "2012-09-20",
            "Open": 12.28,
            "High": 12.5,
            "Low": 12.01,
            "Close": 12.37,
            "Adj Close": 12.37,
            "Volume": 439674
          },
          {
            "Date": "2012-09-21",
            "Open": 12.37,
            "High": 12.4,
            "Low": 12.14,
            "Close": 12.24,
            "Adj Close": 12.24,
            "Volume": 183186
          },
          {
            "Date": "2012-09-22",
            "Open": 12.24,
            "High": 12.27,
            "Low": 11.63,
            "Close": 12.19,
            "Adj Close": 12.19,
            "Volume": 479223
          },
          {
            "Date": "2012-09-23",
            "Open": 12.19,
            "High": 12.3,
            "Low": 11.95,
            "Close": 12.1,
            "Adj Close": 12.1,
            "Volume": 330885
          },
          {
            "Date": "2012-09-24",
            "Open": 12.1,
            "High": 12.23,
            "Low": 12.01,
            "Close": 12.2,
            "Adj Close": 12.2,
            "Volume": 257174
          },
          {
            "Date": "2012-09-25",
            "Open": 12.2,
            "High": 12.46,
            "Low": 12.02,
            "Close": 12.27,
            "Adj Close": 12.27,
            "Volume": 287416
          },
          {
            "Date": "2012-09-26",
            "Open": 12.27,
            "High": 12.4,
            "Low": 12.21,
            "Close": 12.31,
            "Adj Close": 12.31,
            "Volume": 238051
          },
          {
            "Date": "2012-09-27",
            "Open": 12.31,
            "High": 12.45,
            "Low": 12.12,
            "Close": 12.39,
            "Adj Close": 12.39,
            "Volume": 329436
          },
          {
            "Date": "2012-09-28",
            "Open": 12.39,
            "High": 12.49,
            "Low": 12.21,
            "Close": 12.36,
            "Adj Close": 12.36,
            "Volume": 211507
          },
          {
            "Date": "2012-09-29",
            "Open": 12.36,
            "High": 12.45,
            "Low": 12.3,
            "Close": 12.4,
            "Adj Close": 12.4,
            "Volume": 96462
          },
          {
            "Date": "2012-09-30",
            "Open": 12.4,
            "High": 12.48,
            "Low": 12.32,
            "Close": 12.4,
            "Adj Close": 12.4,
            "Volume": 307618
          },
          {
            "Date": "2012-10-01",
            "Open": 12.4,
            "High": 12.88,
            "Low": 12.34,
            "Close": 12.84,
            "Adj Close": 12.84,
            "Volume": 642027
          },
          {
            "Date": "2012-10-02",
            "Open": 12.84,
            "High": 12.99,
            "Low": 12.68,
            "Close": 12.89,
            "Adj Close": 12.89,
            "Volume": 422995
          },
          {
            "Date": "2012-10-03",
            "Open": 12.89,
            "High": 13.09,
            "Low": 12.6,
            "Close": 12.85,
            "Adj Close": 12.85,
            "Volume": 488811
          },
          {
            "Date": "2012-10-04",
            "Open": 12.85,
            "High": 12.97,
            "Low": 12.51,
            "Close": 12.69,
            "Adj Close": 12.69,
            "Volume": 398427
          },
          {
            "Date": "2012-10-05",
            "Open": 12.69,
            "High": 12.86,
            "Low": 12.35,
            "Close": 12.51,
            "Adj Close": 12.51,
            "Volume": 310513
          },
          {
            "Date": "2012-10-06",
            "Open": 12.51,
            "High": 12.62,
            "Low": 11.7,
            "Close": 11.8,
            "Adj Close": 11.8,
            "Volume": 762812
          },
          {
            "Date": "2012-10-07",
            "Open": 11.8,
            "High": 11.95,
            "Low": 10.62,
            "Close": 11.78,
            "Adj Close": 11.78,
            "Volume": 1102329
          },
          {
            "Date": "2012-10-08",
            "Open": 11.78,
            "High": 12.35,
            "Low": 11.57,
            "Close": 11.9,
            "Adj Close": 11.9,
            "Volume": 559694
          },
          {
            "Date": "2012-10-09",
            "Open": 11.9,
            "High": 12.19,
            "Low": 11.77,
            "Close": 12.12,
            "Adj Close": 12.12,
            "Volume": 333351
          },
          {
            "Date": "2012-10-10",
            "Open": 12.12,
            "High": 12.15,
            "Low": 11.86,
            "Close": 12.03,
            "Adj Close": 12.03,
            "Volume": 238483
          },
          {
            "Date": "2012-10-11",
            "Open": 12.03,
            "High": 12.15,
            "Low": 11.92,
            "Close": 12,
            "Adj Close": 12,
            "Volume": 259522
          },
          {
            "Date": "2012-10-12",
            "Open": 12,
            "High": 12.11,
            "Low": 11.85,
            "Close": 11.86,
            "Adj Close": 11.86,
            "Volume": 141870
          },
          {
            "Date": "2012-10-13",
            "Open": 11.86,
            "High": 12.03,
            "Low": 11.5,
            "Close": 11.74,
            "Adj Close": 11.74,
            "Volume": 271135
          },
          {
            "Date": "2012-10-14",
            "Open": 11.74,
            "High": 11.99,
            "Low": 11.43,
            "Close": 11.84,
            "Adj Close": 11.84,
            "Volume": 317633
          },
          {
            "Date": "2012-10-15",
            "Open": 11.84,
            "High": 11.99,
            "Low": 11.5,
            "Close": 11.85,
            "Adj Close": 11.85,
            "Volume": 485720
          },
          {
            "Date": "2012-10-16",
            "Open": 11.85,
            "High": 11.96,
            "Low": 11.7,
            "Close": 11.81,
            "Adj Close": 11.81,
            "Volume": 279774
          },
          {
            "Date": "2012-10-17",
            "Open": 11.81,
            "High": 11.96,
            "Low": 11.75,
            "Close": 11.94,
            "Adj Close": 11.94,
            "Volume": 259855
          },
          {
            "Date": "2012-10-18",
            "Open": 11.94,
            "High": 11.97,
            "Low": 11.62,
            "Close": 11.74,
            "Adj Close": 11.74,
            "Volume": 272640
          },
          {
            "Date": "2012-10-19",
            "Open": 11.74,
            "High": 11.85,
            "Low": 11.56,
            "Close": 11.74,
            "Adj Close": 11.74,
            "Volume": 259113
          },
          {
            "Date": "2012-10-20",
            "Open": 11.74,
            "High": 11.77,
            "Low": 11.61,
            "Close": 11.63,
            "Adj Close": 11.63,
            "Volume": 109479
          },
          {
            "Date": "2012-10-21",
            "Open": 11.63,
            "High": 11.81,
            "Low": 11.47,
            "Close": 11.71,
            "Adj Close": 11.71,
            "Volume": 440140
          },
          {
            "Date": "2012-10-22",
            "Open": 11.71,
            "High": 12,
            "Low": 11.41,
            "Close": 11.65,
            "Adj Close": 11.65,
            "Volume": 637306
          },
          {
            "Date": "2012-10-23",
            "Open": 11.65,
            "High": 11.79,
            "Low": 11.59,
            "Close": 11.65,
            "Adj Close": 11.65,
            "Volume": 254132
          },
          {
            "Date": "2012-10-24",
            "Open": 11.65,
            "High": 11.7,
            "Low": 10.52,
            "Close": 10.86,
            "Adj Close": 10.86,
            "Volume": 934190
          },
          {
            "Date": "2012-10-25",
            "Open": 10.86,
            "High": 10.95,
            "Low": 9.74,
            "Close": 10.17,
            "Adj Close": 10.17,
            "Volume": 1020616
          },
          {
            "Date": "2012-10-26",
            "Open": 10.17,
            "High": 10.84,
            "Low": 9.82,
            "Close": 10.26,
            "Adj Close": 10.26,
            "Volume": 496747
          },
          {
            "Date": "2012-10-27",
            "Open": 10.26,
            "High": 10.95,
            "Low": 10.25,
            "Close": 10.7,
            "Adj Close": 10.7,
            "Volume": 236640
          },
          {
            "Date": "2012-10-29",
            "Open": 10.7,
            "High": 10.94,
            "Low": 10.32,
            "Close": 10.6,
            "Adj Close": 10.6,
            "Volume": 400173
          },
          {
            "Date": "2012-10-30",
            "Open": 10.6,
            "High": 10.89,
            "Low": 10.58,
            "Close": 10.89,
            "Adj Close": 10.89,
            "Volume": 279843
          },
          {
            "Date": "2012-10-31",
            "Open": 10.89,
            "High": 11.21,
            "Low": 10.71,
            "Close": 11.2,
            "Adj Close": 11.2,
            "Volume": 448359
          },
          {
            "Date": "2012-11-01",
            "Open": 11.2,
            "High": 11.28,
            "Low": 10.4,
            "Close": 10.57,
            "Adj Close": 10.57,
            "Volume": 550327
          },
          {
            "Date": "2012-11-02",
            "Open": 10.57,
            "High": 10.8,
            "Low": 10.33,
            "Close": 10.47,
            "Adj Close": 10.47,
            "Volume": 258957
          },
          {
            "Date": "2012-11-03",
            "Open": 10.47,
            "High": 10.65,
            "Low": 10.4,
            "Close": 10.64,
            "Adj Close": 10.64,
            "Volume": 176345
          },
          {
            "Date": "2012-11-04",
            "Open": 10.64,
            "High": 10.9,
            "Low": 10.51,
            "Close": 10.8,
            "Adj Close": 10.8,
            "Volume": 178761
          },
          {
            "Date": "2012-11-05",
            "Open": 10.8,
            "High": 10.88,
            "Low": 10.61,
            "Close": 10.75,
            "Adj Close": 10.75,
            "Volume": 233650
          },
          {
            "Date": "2012-11-06",
            "Open": 10.75,
            "High": 10.9,
            "Low": 10.67,
            "Close": 10.9,
            "Adj Close": 10.9,
            "Volume": 291515
          },
          {
            "Date": "2012-11-07",
            "Open": 10.9,
            "High": 11.22,
            "Low": 10.8,
            "Close": 10.92,
            "Adj Close": 10.92,
            "Volume": 348474
          },
          {
            "Date": "2012-11-08",
            "Open": 10.92,
            "High": 11.07,
            "Low": 10.75,
            "Close": 10.93,
            "Adj Close": 10.93,
            "Volume": 284556
          },
          {
            "Date": "2012-11-09",
            "Open": 10.93,
            "High": 10.98,
            "Low": 10.79,
            "Close": 10.82,
            "Adj Close": 10.82,
            "Volume": 159984
          },
          {
            "Date": "2012-11-10",
            "Open": 10.82,
            "High": 10.96,
            "Low": 10.75,
            "Close": 10.89,
            "Adj Close": 10.89,
            "Volume": 146349
          },
          {
            "Date": "2012-11-11",
            "Open": 10.89,
            "High": 10.94,
            "Low": 10.7,
            "Close": 10.87,
            "Adj Close": 10.87,
            "Volume": 136448
          },
          {
            "Date": "2012-11-12",
            "Open": 10.87,
            "High": 11.18,
            "Low": 10.77,
            "Close": 11.01,
            "Adj Close": 11.01,
            "Volume": 431080
          },
          {
            "Date": "2012-11-13",
            "Open": 11.01,
            "High": 11.13,
            "Low": 10.92,
            "Close": 10.95,
            "Adj Close": 10.95,
            "Volume": 184368
          },
          {
            "Date": "2012-11-14",
            "Open": 10.95,
            "High": 11.05,
            "Low": 10.82,
            "Close": 10.95,
            "Adj Close": 10.95,
            "Volume": 268636
          },
          {
            "Date": "2012-11-15",
            "Open": 10.95,
            "High": 11.3,
            "Low": 10.86,
            "Close": 11.2,
            "Adj Close": 11.2,
            "Volume": 353356
          },
          {
            "Date": "2012-11-16",
            "Open": 11.2,
            "High": 11.8,
            "Low": 11.17,
            "Close": 11.75,
            "Adj Close": 11.75,
            "Volume": 669422
          },
          {
            "Date": "2012-11-17",
            "Open": 11.75,
            "High": 11.8,
            "Low": 11.52,
            "Close": 11.79,
            "Adj Close": 11.79,
            "Volume": 223039
          },
          {
            "Date": "2012-11-18",
            "Open": 11.79,
            "High": 11.83,
            "Low": 11.62,
            "Close": 11.65,
            "Adj Close": 11.65,
            "Volume": 181716
          },
          {
            "Date": "2012-11-19",
            "Open": 11.65,
            "High": 11.84,
            "Low": 11.6,
            "Close": 11.8,
            "Adj Close": 11.8,
            "Volume": 295260
          },
          {
            "Date": "2012-11-20",
            "Open": 11.8,
            "High": 11.8,
            "Low": 11.57,
            "Close": 11.73,
            "Adj Close": 11.73,
            "Volume": 318291
          },
          {
            "Date": "2012-11-21",
            "Open": 11.73,
            "High": 11.78,
            "Low": 11.64,
            "Close": 11.77,
            "Adj Close": 11.77,
            "Volume": 225308
          },
          {
            "Date": "2012-11-22",
            "Open": 11.77,
            "High": 12.43,
            "Low": 11.67,
            "Close": 12.42,
            "Adj Close": 12.42,
            "Volume": 703582
          },
          {
            "Date": "2012-11-23",
            "Open": 12.42,
            "High": 12.41,
            "Low": 12.13,
            "Close": 12.35,
            "Adj Close": 12.35,
            "Volume": 233370
          },
          {
            "Date": "2012-11-24",
            "Open": 12.35,
            "High": 12.48,
            "Low": 12.25,
            "Close": 12.41,
            "Adj Close": 12.41,
            "Volume": 242058
          },
          {
            "Date": "2012-11-25",
            "Open": 12.41,
            "High": 12.6,
            "Low": 12.31,
            "Close": 12.48,
            "Adj Close": 12.48,
            "Volume": 299989
          },
          {
            "Date": "2012-11-26",
            "Open": 12.48,
            "High": 12.65,
            "Low": 11.89,
            "Close": 12.25,
            "Adj Close": 12.25,
            "Volume": 443753
          },
          {
            "Date": "2012-11-27",
            "Open": 12.25,
            "High": 12.34,
            "Low": 11.9,
            "Close": 12.2,
            "Adj Close": 12.2,
            "Volume": 401692
          },
          {
            "Date": "2012-11-28",
            "Open": 12.2,
            "High": 12.41,
            "Low": 12.1,
            "Close": 12.35,
            "Adj Close": 12.35,
            "Volume": 376900
          },
          {
            "Date": "2012-11-29",
            "Open": 12.35,
            "High": 12.6,
            "Low": 12.15,
            "Close": 12.45,
            "Adj Close": 12.45,
            "Volume": 329552
          },
          {
            "Date": "2012-11-30",
            "Open": 12.45,
            "High": 12.65,
            "Low": 12.42,
            "Close": 12.57,
            "Adj Close": 12.57,
            "Volume": 305812
          },
          {
            "Date": "2012-12-01",
            "Open": 12.57,
            "High": 12.69,
            "Low": 12.46,
            "Close": 12.56,
            "Adj Close": 12.56,
            "Volume": 184860
          },
          {
            "Date": "2012-12-02",
            "Open": 12.56,
            "High": 12.68,
            "Low": 12.43,
            "Close": 12.5,
            "Adj Close": 12.5,
            "Volume": 176013
          },
          {
            "Date": "2012-12-03",
            "Open": 12.5,
            "High": 12.68,
            "Low": 12.48,
            "Close": 12.68,
            "Adj Close": 12.68,
            "Volume": 336294
          },
          {
            "Date": "2012-12-04",
            "Open": 12.68,
            "High": 13.5,
            "Low": 12.62,
            "Close": 13.41,
            "Adj Close": 13.41,
            "Volume": 823838
          },
          {
            "Date": "2012-12-05",
            "Open": 13.41,
            "High": 13.42,
            "Low": 13.15,
            "Close": 13.38,
            "Adj Close": 13.38,
            "Volume": 395716
          },
          {
            "Date": "2012-12-06",
            "Open": 13.38,
            "High": 13.69,
            "Low": 12.9,
            "Close": 13.3,
            "Adj Close": 13.3,
            "Volume": 623136
          },
          {
            "Date": "2012-12-07",
            "Open": 13.3,
            "High": 13.55,
            "Low": 12.98,
            "Close": 13.5,
            "Adj Close": 13.5,
            "Volume": 437726
          },
          {
            "Date": "2012-12-08",
            "Open": 13.5,
            "High": 13.55,
            "Low": 13.35,
            "Close": 13.42,
            "Adj Close": 13.42,
            "Volume": 177338
          },
          {
            "Date": "2012-12-09",
            "Open": 13.42,
            "High": 13.53,
            "Low": 13.02,
            "Close": 13.39,
            "Adj Close": 13.39,
            "Volume": 372655
          },
          {
            "Date": "2012-12-10",
            "Open": 13.39,
            "High": 13.55,
            "Low": 13.27,
            "Close": 13.43,
            "Adj Close": 13.43,
            "Volume": 331115
          },
          {
            "Date": "2012-12-11",
            "Open": 13.43,
            "High": 13.67,
            "Low": 13.3,
            "Close": 13.56,
            "Adj Close": 13.56,
            "Volume": 378671
          },
          {
            "Date": "2012-12-12",
            "Open": 13.56,
            "High": 13.8,
            "Low": 13.3,
            "Close": 13.7,
            "Adj Close": 13.7,
            "Volume": 512418
          },
          {
            "Date": "2012-12-13",
            "Open": 13.7,
            "High": 13.8,
            "Low": 13.47,
            "Close": 13.7,
            "Adj Close": 13.7,
            "Volume": 331480
          },
          {
            "Date": "2012-12-14",
            "Open": 13.7,
            "High": 13.9,
            "Low": 13,
            "Close": 13.6,
            "Adj Close": 13.6,
            "Volume": 951046
          },
          {
            "Date": "2012-12-15",
            "Open": 13.6,
            "High": 13.64,
            "Low": 13.44,
            "Close": 13.49,
            "Adj Close": 13.49,
            "Volume": 205671
          },
          {
            "Date": "2012-12-16",
            "Open": 13.49,
            "High": 13.67,
            "Low": 13.13,
            "Close": 13.3,
            "Adj Close": 13.3,
            "Volume": 570895
          },
          {
            "Date": "2012-12-17",
            "Open": 13.3,
            "High": 13.49,
            "Low": 12.75,
            "Close": 13.25,
            "Adj Close": 13.25,
            "Volume": 839092
          },
          {
            "Date": "2012-12-18",
            "Open": 13.25,
            "High": 13.4,
            "Low": 13.11,
            "Close": 13.3,
            "Adj Close": 13.3,
            "Volume": 307326
          },
          {
            "Date": "2012-12-19",
            "Open": 13.3,
            "High": 13.6,
            "Low": 13.2,
            "Close": 13.6,
            "Adj Close": 13.6,
            "Volume": 520163
          },
          {
            "Date": "2012-12-20",
            "Open": 13.6,
            "High": 13.72,
            "Low": 13.33,
            "Close": 13.52,
            "Adj Close": 13.52,
            "Volume": 446364
          },
          {
            "Date": "2012-12-21",
            "Open": 13.52,
            "High": 13.6,
            "Low": 13.42,
            "Close": 13.5,
            "Adj Close": 13.5,
            "Volume": 342557
          },
          {
            "Date": "2012-12-22",
            "Open": 13.5,
            "High": 13.59,
            "Low": 13.32,
            "Close": 13.37,
            "Adj Close": 13.37,
            "Volume": 198463
          },
          {
            "Date": "2012-12-23",
            "Open": 13.37,
            "High": 13.47,
            "Low": 13.01,
            "Close": 13.31,
            "Adj Close": 13.31,
            "Volume": 316965
          },
          {
            "Date": "2012-12-24",
            "Open": 13.31,
            "High": 13.45,
            "Low": 13.21,
            "Close": 13.38,
            "Adj Close": 13.38,
            "Volume": 223315
          },
          {
            "Date": "2012-12-25",
            "Open": 13.38,
            "High": 13.43,
            "Low": 13.14,
            "Close": 13.35,
            "Adj Close": 13.35,
            "Volume": 175265
          },
          {
            "Date": "2012-12-26",
            "Open": 13.35,
            "High": 13.47,
            "Low": 13.2,
            "Close": 13.47,
            "Adj Close": 13.47,
            "Volume": 211349
          },
          {
            "Date": "2012-12-27",
            "Open": 13.47,
            "High": 13.47,
            "Low": 13.25,
            "Close": 13.42,
            "Adj Close": 13.42,
            "Volume": 265311
          },
          {
            "Date": "2012-12-28",
            "Open": 13.42,
            "High": 13.65,
            "Low": 13.34,
            "Close": 13.42,
            "Adj Close": 13.42,
            "Volume": 320223
          },
          {
            "Date": "2012-12-29",
            "Open": 13.42,
            "High": 13.67,
            "Low": 13.27,
            "Close": 13.4,
            "Adj Close": 13.4,
            "Volume": 352722
          },
          {
            "Date": "2012-12-30",
            "Open": 13.4,
            "High": 13.59,
            "Low": 13.35,
            "Close": 13.45,
            "Adj Close": 13.45,
            "Volume": 158277
          },
          {
            "Date": "2012-12-31",
            "Open": 13.45,
            "High": 13.56,
            "Low": 13.37,
            "Close": 13.51,
            "Adj Close": 13.51,
            "Volume": 202798
          },
          {
            "Date": "2013-01-01",
            "Open": 13.51,
            "High": 13.56,
            "Low": 13.16,
            "Close": 13.3,
            "Adj Close": 13.3,
            "Volume": 378879
          },
          {
            "Date": "2013-01-02",
            "Open": 13.3,
            "High": 13.4,
            "Low": 13.16,
            "Close": 13.28,
            "Adj Close": 13.28,
            "Volume": 239156
          },
          {
            "Date": "2013-01-03",
            "Open": 13.28,
            "High": 13.46,
            "Low": 13.25,
            "Close": 13.4,
            "Adj Close": 13.4,
            "Volume": 240845
          },
          {
            "Date": "2013-01-04",
            "Open": 13.4,
            "High": 13.52,
            "Low": 13.27,
            "Close": 13.5,
            "Adj Close": 13.5,
            "Volume": 397884
          },
          {
            "Date": "2013-01-05",
            "Open": 13.5,
            "High": 13.55,
            "Low": 13.31,
            "Close": 13.44,
            "Adj Close": 13.44,
            "Volume": 286932
          },
          {
            "Date": "2013-01-06",
            "Open": 13.44,
            "High": 13.52,
            "Low": 13.36,
            "Close": 13.45,
            "Adj Close": 13.45,
            "Volume": 171497
          },
          {
            "Date": "2013-01-07",
            "Open": 13.45,
            "High": 13.59,
            "Low": 13.4,
            "Close": 13.59,
            "Adj Close": 13.59,
            "Volume": 344083
          },
          {
            "Date": "2013-01-08",
            "Open": 13.59,
            "High": 13.88,
            "Low": 13.5,
            "Close": 13.74,
            "Adj Close": 13.74,
            "Volume": 587223
          },
          {
            "Date": "2013-01-09",
            "Open": 13.74,
            "High": 13.86,
            "Low": 13.62,
            "Close": 13.77,
            "Adj Close": 13.77,
            "Volume": 393192
          },
          {
            "Date": "2013-01-10",
            "Open": 13.77,
            "High": 14.32,
            "Low": 13.77,
            "Close": 14.14,
            "Adj Close": 14.14,
            "Volume": 727790
          },
          {
            "Date": "2013-01-11",
            "Open": 14.14,
            "High": 14.35,
            "Low": 13.91,
            "Close": 14.14,
            "Adj Close": 14.14,
            "Volume": 570677
          },
          {
            "Date": "2013-01-12",
            "Open": 14.14,
            "High": 14.34,
            "Low": 13.98,
            "Close": 14.24,
            "Adj Close": 14.24,
            "Volume": 381546
          },
          {
            "Date": "2013-01-13",
            "Open": 14.24,
            "High": 14.31,
            "Low": 13.95,
            "Close": 14.12,
            "Adj Close": 14.12,
            "Volume": 540759
          },
          {
            "Date": "2013-01-14",
            "Open": 14.12,
            "High": 14.35,
            "Low": 14.11,
            "Close": 14.3,
            "Adj Close": 14.3,
            "Volume": 315016
          },
          {
            "Date": "2013-01-15",
            "Open": 14.3,
            "High": 14.48,
            "Low": 13.99,
            "Close": 14.25,
            "Adj Close": 14.25,
            "Volume": 732428
          },
          {
            "Date": "2013-01-16",
            "Open": 14.25,
            "High": 14.73,
            "Low": 14.21,
            "Close": 14.73,
            "Adj Close": 14.73,
            "Volume": 660929
          },
          {
            "Date": "2013-01-17",
            "Open": 14.73,
            "High": 15.7,
            "Low": 14.63,
            "Close": 15.5,
            "Adj Close": 15.5,
            "Volume": 993185
          },
          {
            "Date": "2013-01-18",
            "Open": 15.5,
            "High": 15.99,
            "Low": 15.41,
            "Close": 15.7,
            "Adj Close": 15.7,
            "Volume": 879655
          },
          {
            "Date": "2013-01-19",
            "Open": 15.7,
            "High": 15.77,
            "Low": 15.25,
            "Close": 15.62,
            "Adj Close": 15.62,
            "Volume": 534667
          },
          {
            "Date": "2013-01-20",
            "Open": 15.62,
            "High": 15.89,
            "Low": 15.51,
            "Close": 15.7,
            "Adj Close": 15.7,
            "Volume": 408455
          },
          {
            "Date": "2013-01-21",
            "Open": 15.7,
            "High": 16.98,
            "Low": 15.63,
            "Close": 16.799999,
            "Adj Close": 16.799999,
            "Volume": 1007686
          },
          {
            "Date": "2013-01-22",
            "Open": 16.799999,
            "High": 17.59,
            "Low": 16.65,
            "Close": 17.26,
            "Adj Close": 17.26,
            "Volume": 1045898
          },
          {
            "Date": "2013-01-23",
            "Open": 17.26,
            "High": 17.59,
            "Low": 16.799999,
            "Close": 17.5,
            "Adj Close": 17.5,
            "Volume": 851188
          },
          {
            "Date": "2013-01-24",
            "Open": 17.5,
            "High": 19.190001,
            "Low": 15.61,
            "Close": 16.9,
            "Adj Close": 16.9,
            "Volume": 3053222
          },
          {
            "Date": "2013-01-25",
            "Open": 16.9,
            "High": 17.799999,
            "Low": 15.39,
            "Close": 17.4,
            "Adj Close": 17.4,
            "Volume": 1345890
          },
          {
            "Date": "2013-01-26",
            "Open": 17.4,
            "High": 17.879999,
            "Low": 16.540001,
            "Close": 17.879999,
            "Adj Close": 17.879999,
            "Volume": 597064
          },
          {
            "Date": "2013-01-27",
            "Open": 17.879999,
            "High": 18,
            "Low": 17.209999,
            "Close": 17.82,
            "Adj Close": 17.82,
            "Volume": 419571
          },
          {
            "Date": "2013-01-28",
            "Open": 17.82,
            "High": 18.879999,
            "Low": 17.75,
            "Close": 18.719999,
            "Adj Close": 18.719999,
            "Volume": 1057611
          },
          {
            "Date": "2013-01-29",
            "Open": 18.719999,
            "High": 19.799999,
            "Low": 18.700001,
            "Close": 19.530001,
            "Adj Close": 19.530001,
            "Volume": 1650126
          },
          {
            "Date": "2013-01-30",
            "Open": 19.530001,
            "High": 19.799999,
            "Low": 19.15,
            "Close": 19.700001,
            "Adj Close": 19.700001,
            "Volume": 877863
          },
          {
            "Date": "2013-01-31",
            "Open": 19.700001,
            "High": 21.43,
            "Low": 19.51,
            "Close": 20.41,
            "Adj Close": 20.41,
            "Volume": 2042238
          },
          {
            "Date": "2013-02-01",
            "Open": 20.41,
            "High": 21.129999,
            "Low": 20.299999,
            "Close": 20.5,
            "Adj Close": 20.5,
            "Volume": 1034619
          },
          {
            "Date": "2013-02-02",
            "Open": 20.5,
            "High": 20.5,
            "Low": 18,
            "Close": 19.629999,
            "Adj Close": 19.629999,
            "Volume": 1567325
          },
          {
            "Date": "2013-02-03",
            "Open": 19.629999,
            "High": 20.9,
            "Low": 19.42,
            "Close": 20.59,
            "Adj Close": 20.59,
            "Volume": 693849
          },
          {
            "Date": "2013-02-04",
            "Open": 20.59,
            "High": 21.049999,
            "Low": 19.860001,
            "Close": 20.43,
            "Adj Close": 20.43,
            "Volume": 1066570
          },
          {
            "Date": "2013-02-05",
            "Open": 20.43,
            "High": 20.790001,
            "Low": 20.200001,
            "Close": 20.6,
            "Adj Close": 20.6,
            "Volume": 600949
          },
          {
            "Date": "2013-02-06",
            "Open": 20.6,
            "High": 21.33,
            "Low": 20.6,
            "Close": 21.18,
            "Adj Close": 21.18,
            "Volume": 1096396
          },
          {
            "Date": "2013-02-07",
            "Open": 21.18,
            "High": 22.219999,
            "Low": 20.77,
            "Close": 22.15,
            "Adj Close": 22.15,
            "Volume": 1388465
          },
          {
            "Date": "2013-02-08",
            "Open": 22.15,
            "High": 22.77,
            "Low": 22,
            "Close": 22.66,
            "Adj Close": 22.66,
            "Volume": 1090678
          },
          {
            "Date": "2013-02-09",
            "Open": 22.66,
            "High": 23.99,
            "Low": 22.58,
            "Close": 23.65,
            "Adj Close": 23.65,
            "Volume": 886034
          },
          {
            "Date": "2013-02-10",
            "Open": 23.65,
            "High": 24.110001,
            "Low": 22.67,
            "Close": 23.969999,
            "Adj Close": 23.969999,
            "Volume": 1321513
          },
          {
            "Date": "2013-02-11",
            "Open": 23.969999,
            "High": 24.68,
            "Low": 23.65,
            "Close": 24.65,
            "Adj Close": 24.65,
            "Volume": 712458
          },
          {
            "Date": "2013-02-12",
            "Open": 24.65,
            "High": 25.83,
            "Low": 24.299999,
            "Close": 25.17,
            "Adj Close": 25.17,
            "Volume": 1862561
          },
          {
            "Date": "2013-02-13",
            "Open": 25.17,
            "High": 26.299999,
            "Low": 24.190001,
            "Close": 24.200001,
            "Adj Close": 24.200001,
            "Volume": 2296830
          },
          {
            "Date": "2013-02-14",
            "Open": 24.200001,
            "High": 27.6,
            "Low": 21.719999,
            "Close": 27.219999,
            "Adj Close": 27.219999,
            "Volume": 3710262
          },
          {
            "Date": "2013-02-15",
            "Open": 27.219999,
            "High": 27.51,
            "Low": 26.1,
            "Close": 27.1,
            "Adj Close": 27.1,
            "Volume": 1396017
          },
          {
            "Date": "2013-02-16",
            "Open": 27.1,
            "High": 27.5,
            "Low": 26.809999,
            "Close": 27.219999,
            "Adj Close": 27.219999,
            "Volume": 511421
          },
          {
            "Date": "2013-02-17",
            "Open": 27.219999,
            "High": 27.4,
            "Low": 25,
            "Close": 26.809999,
            "Adj Close": 26.809999,
            "Volume": 2033614
          },
          {
            "Date": "2013-02-18",
            "Open": 26.809999,
            "High": 27.15,
            "Low": 26.360001,
            "Close": 26.950001,
            "Adj Close": 26.950001,
            "Volume": 795866
          },
          {
            "Date": "2013-02-19",
            "Open": 26.950001,
            "High": 29.65,
            "Low": 26.799999,
            "Close": 29.42,
            "Adj Close": 29.42,
            "Volume": 2810076
          },
          {
            "Date": "2013-02-20",
            "Open": 29.42,
            "High": 29.870001,
            "Low": 28.99,
            "Close": 29.65,
            "Adj Close": 29.65,
            "Volume": 1096641
          },
          {
            "Date": "2013-02-21",
            "Open": 29.65,
            "High": 29.98,
            "Low": 29.309999,
            "Close": 29.75,
            "Adj Close": 29.75,
            "Volume": 1030860
          },
          {
            "Date": "2013-02-22",
            "Open": 29.75,
            "High": 31.299999,
            "Low": 29.67,
            "Close": 30.25,
            "Adj Close": 30.25,
            "Volume": 2039411
          },
          {
            "Date": "2013-02-23",
            "Open": 30.25,
            "High": 30.690001,
            "Low": 28,
            "Close": 29.799999,
            "Adj Close": 29.799999,
            "Volume": 2099763
          },
          {
            "Date": "2013-02-24",
            "Open": 29.799999,
            "High": 30.4,
            "Low": 29.200001,
            "Close": 29.889999,
            "Adj Close": 29.889999,
            "Volume": 722940
          },
          {
            "Date": "2013-02-25",
            "Open": 29.889999,
            "High": 30.4,
            "Low": 29.549999,
            "Close": 30.4,
            "Adj Close": 30.4,
            "Volume": 805270
          },
          {
            "Date": "2013-02-26",
            "Open": 30.4,
            "High": 31.700001,
            "Low": 30.120001,
            "Close": 31.1,
            "Adj Close": 31.1,
            "Volume": 1329295
          },
          {
            "Date": "2013-02-27",
            "Open": 31.1,
            "High": 31.65,
            "Low": 30.790001,
            "Close": 30.9,
            "Adj Close": 30.9,
            "Volume": 951289
          },
          {
            "Date": "2013-02-28",
            "Open": 30.9,
            "High": 34.52,
            "Low": 30.9,
            "Close": 33.380001,
            "Adj Close": 33.380001,
            "Volume": 4136416
          },
          {
            "Date": "2013-03-01",
            "Open": 33.380001,
            "High": 34.900002,
            "Low": 32.919998,
            "Close": 34.5,
            "Adj Close": 34.5,
            "Volume": 1362290
          },
          {
            "Date": "2013-03-02",
            "Open": 34.5,
            "High": 34.810001,
            "Low": 33.150002,
            "Close": 34.25,
            "Adj Close": 34.25,
            "Volume": 1241775
          },
          {
            "Date": "2013-03-03",
            "Open": 34.25,
            "High": 34.5,
            "Low": 33.799999,
            "Close": 34.5,
            "Adj Close": 34.5,
            "Volume": 427480
          },
          {
            "Date": "2013-03-04",
            "Open": 34.5,
            "High": 36.700001,
            "Low": 34.189999,
            "Close": 36.150002,
            "Adj Close": 36.150002,
            "Volume": 1659027
          },
          {
            "Date": "2013-03-05",
            "Open": 36.150002,
            "High": 40.650002,
            "Low": 36.150002,
            "Close": 40.330002,
            "Adj Close": 40.330002,
            "Volume": 3361374
          },
          {
            "Date": "2013-03-06",
            "Open": 40.330002,
            "High": 49.099998,
            "Low": 40.139999,
            "Close": 41.02,
            "Adj Close": 41.02,
            "Volume": 5712472
          },
          {
            "Date": "2013-03-07",
            "Open": 41.02,
            "High": 45.5,
            "Low": 33.299999,
            "Close": 42,
            "Adj Close": 42,
            "Volume": 6439707
          },
          {
            "Date": "2013-03-08",
            "Open": 42,
            "High": 44.5,
            "Low": 41.02,
            "Close": 44.18,
            "Adj Close": 44.18,
            "Volume": 2032649
          },
          {
            "Date": "2013-03-09",
            "Open": 44.18,
            "High": 46.990002,
            "Low": 43.41,
            "Close": 46.849998,
            "Adj Close": 46.849998,
            "Volume": 2020839
          },
          {
            "Date": "2013-03-10",
            "Open": 46.849998,
            "High": 47.950001,
            "Low": 45.470001,
            "Close": 46,
            "Adj Close": 46,
            "Volume": 1703124
          },
          {
            "Date": "2013-03-11",
            "Open": 46,
            "High": 48.470001,
            "Low": 45.540001,
            "Close": 48.400002,
            "Adj Close": 48.400002,
            "Volume": 1970814
          },
          {
            "Date": "2013-03-12",
            "Open": 48.400002,
            "High": 48.400002,
            "Low": 36.650002,
            "Close": 44.290001,
            "Adj Close": 44.290001,
            "Volume": 8014901
          },
          {
            "Date": "2013-03-13",
            "Open": 44.290001,
            "High": 47.299999,
            "Low": 43.75,
            "Close": 46.919998,
            "Adj Close": 46.919998,
            "Volume": 2298258
          },
          {
            "Date": "2013-03-14",
            "Open": 46.919998,
            "High": 47.990002,
            "Low": 46.049999,
            "Close": 47.169998,
            "Adj Close": 47.169998,
            "Volume": 1752628
          },
          {
            "Date": "2013-03-15",
            "Open": 47.169998,
            "High": 47.450001,
            "Low": 46.400002,
            "Close": 46.950001,
            "Adj Close": 46.950001,
            "Volume": 954285
          },
          {
            "Date": "2013-03-16",
            "Open": 46.950001,
            "High": 47.360001,
            "Low": 46.27,
            "Close": 47,
            "Adj Close": 47,
            "Volume": 764861
          },
          {
            "Date": "2013-03-17",
            "Open": 47,
            "High": 47.740002,
            "Low": 46.799999,
            "Close": 47.400002,
            "Adj Close": 47.400002,
            "Volume": 660618
          },
          {
            "Date": "2013-03-18",
            "Open": 47.400002,
            "High": 52.880001,
            "Low": 47.119999,
            "Close": 51.599998,
            "Adj Close": 51.599998,
            "Volume": 3199314
          },
          {
            "Date": "2013-03-19",
            "Open": 51.599998,
            "High": 62,
            "Low": 50,
            "Close": 59.139999,
            "Adj Close": 59.139999,
            "Volume": 6187650
          },
          {
            "Date": "2013-03-20",
            "Open": 59.139999,
            "High": 66,
            "Low": 57.700001,
            "Close": 64.489998,
            "Adj Close": 64.489998,
            "Volume": 5776620
          },
          {
            "Date": "2013-03-21",
            "Open": 64.489998,
            "High": 74.900002,
            "Low": 63.099998,
            "Close": 70.849998,
            "Adj Close": 70.849998,
            "Volume": 6514880
          },
          {
            "Date": "2013-03-22",
            "Open": 70.849998,
            "High": 73.75,
            "Low": 65,
            "Close": 69.870003,
            "Adj Close": 69.870003,
            "Volume": 5171296
          },
          {
            "Date": "2013-03-23",
            "Open": 69.870003,
            "High": 70.5,
            "Low": 52.349998,
            "Close": 64.349998,
            "Adj Close": 64.349998,
            "Volume": 9429382
          },
          {
            "Date": "2013-03-24",
            "Open": 64.349998,
            "High": 72.5,
            "Low": 62.700001,
            "Close": 71.5,
            "Adj Close": 71.5,
            "Volume": 2896432
          },
          {
            "Date": "2013-03-25",
            "Open": 71.5,
            "High": 78,
            "Low": 69.519997,
            "Close": 73.599998,
            "Adj Close": 73.599998,
            "Volume": 5921197
          },
          {
            "Date": "2013-03-26",
            "Open": 73.599998,
            "High": 79.720001,
            "Low": 73.110001,
            "Close": 78.5,
            "Adj Close": 78.5,
            "Volume": 4377374
          },
          {
            "Date": "2013-03-27",
            "Open": 78.5,
            "High": 89.5,
            "Low": 78.400002,
            "Close": 88.919998,
            "Adj Close": 88.919998,
            "Volume": 6129700
          },
          {
            "Date": "2013-03-28",
            "Open": 88.919998,
            "High": 95.699997,
            "Low": 75,
            "Close": 86.18,
            "Adj Close": 86.18,
            "Volume": 12261153
          },
          {
            "Date": "2013-03-29",
            "Open": 86.18,
            "High": 93.059998,
            "Low": 83.010002,
            "Close": 90.5,
            "Adj Close": 90.5,
            "Volume": 7384104
          },
          {
            "Date": "2013-03-30",
            "Open": 90.5,
            "High": 94.980003,
            "Low": 87,
            "Close": 92.190002,
            "Adj Close": 92.190002,
            "Volume": 3420002
          },
          {
            "Date": "2013-03-31",
            "Open": 92.190002,
            "High": 93.800003,
            "Low": 91,
            "Close": 93.029999,
            "Adj Close": 93.029999,
            "Volume": 1959050
          },
          {
            "Date": "2013-03-31",
            "Open": 93.029999,
            "High": 106,
            "Low": 92.239998,
            "Close": 104,
            "Adj Close": 104,
            "Volume": 9060022
          },
          {
            "Date": "2013-04-01",
            "Open": 104,
            "High": 118.360001,
            "Low": 99,
            "Close": 117.980003,
            "Adj Close": 117.980003,
            "Volume": 8747147
          },
          {
            "Date": "2013-04-02",
            "Open": 117.980003,
            "High": 147,
            "Low": 110,
            "Close": 135,
            "Adj Close": 135,
            "Volume": 19533010
          },
          {
            "Date": "2013-04-03",
            "Open": 135,
            "High": 142.119995,
            "Low": 116.389999,
            "Close": 132.119995,
            "Adj Close": 132.119995,
            "Volume": 11624021
          },
          {
            "Date": "2013-04-04",
            "Open": 132.119995,
            "High": 144.940002,
            "Low": 130.240005,
            "Close": 142.320007,
            "Adj Close": 142.320007,
            "Volume": 9549088
          },
          {
            "Date": "2013-04-05",
            "Open": 142.320007,
            "High": 143.899994,
            "Low": 139.539993,
            "Close": 142.630005,
            "Adj Close": 142.630005,
            "Volume": 2599937
          },
          {
            "Date": "2013-04-06",
            "Open": 142.630005,
            "High": 164.899994,
            "Low": 142.630005,
            "Close": 162.300003,
            "Adj Close": 162.300003,
            "Volume": 9402722
          },
          {
            "Date": "2013-04-07",
            "Open": 162.300003,
            "High": 194.899994,
            "Low": 162.600006,
            "Close": 187.5,
            "Adj Close": 187.5,
            "Volume": 20732894
          },
          {
            "Date": "2013-04-08",
            "Open": 187.5,
            "High": 240.110001,
            "Low": 186.5,
            "Close": 230,
            "Adj Close": 230,
            "Volume": 22723191
          },
          {
            "Date": "2013-04-09",
            "Open": 230,
            "High": 266,
            "Low": 105,
            "Close": 165,
            "Adj Close": 165,
            "Volume": 35118119
          },
          {
            "Date": "2013-04-10",
            "Open": 165,
            "High": 188.699997,
            "Low": 110.199997,
            "Close": 124.900002,
            "Adj Close": 124.900002,
            "Volume": 18867223
          },
          {
            "Date": "2013-04-11",
            "Open": 124.900002,
            "High": 140,
            "Low": 54.25,
            "Close": 117,
            "Adj Close": 117,
            "Volume": 47619189
          },
          {
            "Date": "2013-04-12",
            "Open": 117,
            "High": 130,
            "Low": 85.5,
            "Close": 93,
            "Adj Close": 93,
            "Volume": 26277415
          },
          {
            "Date": "2013-04-13",
            "Open": 93,
            "High": 110,
            "Low": 84.440002,
            "Close": 90,
            "Adj Close": 90,
            "Volume": 16197017
          },
          {
            "Date": "2013-04-14",
            "Open": 90,
            "High": 102,
            "Low": 71.510002,
            "Close": 82.389999,
            "Adj Close": 82.389999,
            "Volume": 20607774
          },
          {
            "Date": "2013-04-15",
            "Open": 82.389999,
            "High": 84.5,
            "Low": 50.009998,
            "Close": 68.360001,
            "Adj Close": 68.360001,
            "Volume": 37401572
          },
          {
            "Date": "2013-04-16",
            "Open": 68.360001,
            "High": 98.779999,
            "Low": 63.299999,
            "Close": 93.07,
            "Adj Close": 93.07,
            "Volume": 27937764
          },
          {
            "Date": "2013-04-17",
            "Open": 93.07,
            "High": 113,
            "Low": 86,
            "Close": 109.010002,
            "Adj Close": 109.010002,
            "Volume": 16845410
          },
          {
            "Date": "2013-04-18",
            "Open": 109.010002,
            "High": 136.429993,
            "Low": 105.540001,
            "Close": 118.480003,
            "Adj Close": 118.480003,
            "Volume": 30713924
          },
          {
            "Date": "2013-04-19",
            "Open": 118.480003,
            "High": 132,
            "Low": 115,
            "Close": 126.620003,
            "Adj Close": 126.620003,
            "Volume": 9222871
          },
          {
            "Date": "2013-04-20",
            "Open": 126.620003,
            "High": 130.5,
            "Low": 110,
            "Close": 119.199997,
            "Adj Close": 119.199997,
            "Volume": 12044404
          },
          {
            "Date": "2013-04-21",
            "Open": 119.199997,
            "High": 127.400002,
            "Low": 118.5,
            "Close": 127.400002,
            "Adj Close": 127.400002,
            "Volume": 7289977
          },
          {
            "Date": "2013-04-22",
            "Open": 127.400002,
            "High": 144.020004,
            "Low": 124.970001,
            "Close": 143.479996,
            "Adj Close": 143.479996,
            "Volume": 15637961
          },
          {
            "Date": "2013-04-23",
            "Open": 143.479996,
            "High": 166.429993,
            "Low": 140.970001,
            "Close": 154.199997,
            "Adj Close": 154.199997,
            "Volume": 34351545
          },
          {
            "Date": "2013-04-24",
            "Open": 154.199997,
            "High": 162,
            "Low": 120.089996,
            "Close": 141.710007,
            "Adj Close": 141.710007,
            "Volume": 26847891
          },
          {
            "Date": "2013-04-25",
            "Open": 141.710007,
            "High": 144.990005,
            "Low": 121.449997,
            "Close": 136.899994,
            "Adj Close": 136.899994,
            "Volume": 17061324
          },
          {
            "Date": "2013-04-26",
            "Open": 136.899994,
            "High": 139.880005,
            "Low": 122.709999,
            "Close": 128,
            "Adj Close": 128,
            "Volume": 7855443
          },
          {
            "Date": "2013-04-27",
            "Open": 128,
            "High": 136.679993,
            "Low": 127.5,
            "Close": 134.440002,
            "Adj Close": 134.440002,
            "Volume": 3665399
          },
          {
            "Date": "2013-04-28",
            "Open": 134.440002,
            "High": 149.080002,
            "Low": 133,
            "Close": 144,
            "Adj Close": 144,
            "Volume": 9987126
          },
          {
            "Date": "2013-04-29",
            "Open": 144,
            "High": 146.929993,
            "Low": 134,
            "Close": 139.229996,
            "Adj Close": 139.229996,
            "Volume": 9124397
          },
          {
            "Date": "2013-04-30",
            "Open": 139.229996,
            "High": 140.059998,
            "Low": 104,
            "Close": 116.379997,
            "Adj Close": 116.379997,
            "Volume": 21790982
          },
          {
            "Date": "2013-05-01",
            "Open": 116.379997,
            "High": 126.900002,
            "Low": 91.110001,
            "Close": 106.25,
            "Adj Close": 106.25,
            "Volume": 24937319
          },
          {
            "Date": "2013-05-02",
            "Open": 106.25,
            "High": 109,
            "Low": 79,
            "Close": 98.099998,
            "Adj Close": 98.099998,
            "Volume": 22502892
          },
          {
            "Date": "2013-05-03",
            "Open": 98.099998,
            "High": 116.300003,
            "Low": 92,
            "Close": 112.900002,
            "Adj Close": 112.900002,
            "Volume": 14147864
          },
          {
            "Date": "2013-05-04",
            "Open": 112.900002,
            "High": 118.849998,
            "Low": 107,
            "Close": 115.980003,
            "Adj Close": 115.980003,
            "Volume": 9557650
          },
          {
            "Date": "2013-05-05",
            "Open": 115.980003,
            "High": 124.900002,
            "Low": 106.010002,
            "Close": 112.25,
            "Adj Close": 112.25,
            "Volume": 17607427
          },
          {
            "Date": "2013-05-06",
            "Open": 112.25,
            "High": 114,
            "Low": 97.519997,
            "Close": 109.599998,
            "Adj Close": 109.599998,
            "Volume": 14904474
          },
          {
            "Date": "2013-05-07",
            "Open": 109.599998,
            "High": 116.779999,
            "Low": 109.5,
            "Close": 113.199997,
            "Adj Close": 113.199997,
            "Volume": 6996024
          },
          {
            "Date": "2013-05-08",
            "Open": 113.199997,
            "High": 113.720001,
            "Low": 108.800003,
            "Close": 112.800003,
            "Adj Close": 112.800003,
            "Volume": 3010117
          },
          {
            "Date": "2013-05-09",
            "Open": 112.800003,
            "High": 122.5,
            "Low": 111.540001,
            "Close": 117.699997,
            "Adj Close": 117.699997,
            "Volume": 9145408
          },
          {
            "Date": "2013-05-10",
            "Open": 117.699997,
            "High": 118.739998,
            "Low": 113,
            "Close": 115.639999,
            "Adj Close": 115.639999,
            "Volume": 3240171
          },
          {
            "Date": "2013-05-11",
            "Open": 115.639999,
            "High": 117.470001,
            "Low": 112.400002,
            "Close": 114.82,
            "Adj Close": 114.82,
            "Volume": 2361969
          },
          {
            "Date": "2013-05-12",
            "Open": 114.82,
            "High": 118.879997,
            "Low": 114.5,
            "Close": 117.980003,
            "Adj Close": 117.980003,
            "Volume": 3063381
          },
          {
            "Date": "2013-05-13",
            "Open": 117.980003,
            "High": 119.800003,
            "Low": 109.419998,
            "Close": 111.400002,
            "Adj Close": 111.400002,
            "Volume": 10082102
          },
          {
            "Date": "2013-05-14",
            "Open": 111.400002,
            "High": 116.440002,
            "Low": 103.019997,
            "Close": 114.220001,
            "Adj Close": 114.220001,
            "Volume": 13006447
          },
          {
            "Date": "2013-05-15",
            "Open": 114.220001,
            "High": 118.970001,
            "Low": 112.099998,
            "Close": 118.209999,
            "Adj Close": 118.209999,
            "Volume": 5222066
          },
          {
            "Date": "2013-05-16",
            "Open": 118.209999,
            "High": 125.559998,
            "Low": 116.57,
            "Close": 123.5,
            "Adj Close": 123.5,
            "Volume": 9608029
          },
          {
            "Date": "2013-05-17",
            "Open": 123.5,
            "High": 125.309998,
            "Low": 122.25,
            "Close": 123.209999,
            "Adj Close": 123.209999,
            "Volume": 2804847
          },
          {
            "Date": "2013-05-18",
            "Open": 123.209999,
            "High": 124.5,
            "Low": 119.5,
            "Close": 122.5,
            "Adj Close": 122.5,
            "Volume": 2507881
          },
          {
            "Date": "2013-05-19",
            "Open": 122.5,
            "High": 123.690002,
            "Low": 120.099998,
            "Close": 122.019997,
            "Adj Close": 122.019997,
            "Volume": 2118341
          },
          {
            "Date": "2013-05-20",
            "Open": 122.019997,
            "High": 123.080002,
            "Low": 121.099998,
            "Close": 122.889999,
            "Adj Close": 122.889999,
            "Volume": 1637410
          },
          {
            "Date": "2013-05-21",
            "Open": 122.889999,
            "High": 124.5,
            "Low": 122,
            "Close": 123.800003,
            "Adj Close": 123.800003,
            "Volume": 2252949
          },
          {
            "Date": "2013-05-22",
            "Open": 123.800003,
            "High": 126.93,
            "Low": 123,
            "Close": 126.300003,
            "Adj Close": 126.300003,
            "Volume": 2772751
          },
          {
            "Date": "2013-05-23",
            "Open": 126.300003,
            "High": 133.979996,
            "Low": 125.360001,
            "Close": 133.100006,
            "Adj Close": 133.100006,
            "Volume": 6333389
          },
          {
            "Date": "2013-05-24",
            "Open": 133.100006,
            "High": 133.5,
            "Low": 128.199997,
            "Close": 131.990005,
            "Adj Close": 131.990005,
            "Volume": 2203681
          },
          {
            "Date": "2013-05-25",
            "Open": 131.990005,
            "High": 136,
            "Low": 130.610001,
            "Close": 133.5,
            "Adj Close": 133.5,
            "Volume": 3130389
          },
          {
            "Date": "2013-05-26",
            "Open": 133.5,
            "High": 135.470001,
            "Low": 124,
            "Close": 129.770004,
            "Adj Close": 129.770004,
            "Volume": 6056707
          },
          {
            "Date": "2013-05-27",
            "Open": 129.770004,
            "High": 130.630005,
            "Low": 125.400002,
            "Close": 129,
            "Adj Close": 129,
            "Volume": 2918762
          },
          {
            "Date": "2013-05-28",
            "Open": 129,
            "High": 132.720001,
            "Low": 127.599998,
            "Close": 132.25,
            "Adj Close": 132.25,
            "Volume": 2509796
          },
          {
            "Date": "2013-05-29",
            "Open": 132.25,
            "High": 132.399994,
            "Low": 126.5,
            "Close": 128.800003,
            "Adj Close": 128.800003,
            "Volume": 3195601
          },
          {
            "Date": "2013-05-30",
            "Open": 128.800003,
            "High": 130,
            "Low": 126.330002,
            "Close": 128.820007,
            "Adj Close": 128.820007,
            "Volume": 2124938
          },
          {
            "Date": "2013-05-31",
            "Open": 128.820007,
            "High": 129.789993,
            "Low": 127.099998,
            "Close": 129.300003,
            "Adj Close": 129.300003,
            "Volume": 816323
          },
          {
            "Date": "2013-06-01",
            "Open": 129.300003,
            "High": 130.100006,
            "Low": 115,
            "Close": 122.5,
            "Adj Close": 122.5,
            "Volume": 12335011
          },
          {
            "Date": "2013-06-02",
            "Open": 122.5,
            "High": 122.779999,
            "Low": 115.110001,
            "Close": 120.739998,
            "Adj Close": 120.739998,
            "Volume": 3439235
          },
          {
            "Date": "2013-06-03",
            "Open": 120.739998,
            "High": 123.989998,
            "Low": 118.790001,
            "Close": 121.400002,
            "Adj Close": 121.400002,
            "Volume": 2657125
          },
          {
            "Date": "2013-06-04",
            "Open": 121.400002,
            "High": 123.5,
            "Low": 119.5,
            "Close": 121.900002,
            "Adj Close": 121.900002,
            "Volume": 2021380
          },
          {
            "Date": "2013-06-05",
            "Open": 121.900002,
            "High": 123.300003,
            "Low": 117,
            "Close": 118.970001,
            "Adj Close": 118.970001,
            "Volume": 2646311
          },
          {
            "Date": "2013-06-06",
            "Open": 118.970001,
            "High": 119.129997,
            "Low": 106.150002,
            "Close": 111,
            "Adj Close": 111,
            "Volume": 7372031
          },
          {
            "Date": "2013-06-07",
            "Open": 111,
            "High": 113.190002,
            "Low": 107,
            "Close": 107.889999,
            "Adj Close": 107.889999,
            "Volume": 1874098
          },
          {
            "Date": "2013-06-08",
            "Open": 107.889999,
            "High": 108.989998,
            "Low": 88,
            "Close": 100.440002,
            "Adj Close": 100.440002,
            "Volume": 14647793
          },
          {
            "Date": "2013-06-09",
            "Open": 100.440002,
            "High": 110.629997,
            "Low": 95,
            "Close": 106.349998,
            "Adj Close": 106.349998,
            "Volume": 6786321
          },
          {
            "Date": "2013-06-10",
            "Open": 106.349998,
            "High": 109.599998,
            "Low": 103.230003,
            "Close": 109,
            "Adj Close": 109,
            "Volume": 1727992
          },
          {
            "Date": "2013-06-11",
            "Open": 109,
            "High": 112.25,
            "Low": 106,
            "Close": 108.779999,
            "Adj Close": 108.779999,
            "Volume": 1934487
          },
          {
            "Date": "2013-06-12",
            "Open": 108.779999,
            "High": 110.300003,
            "Low": 100.300003,
            "Close": 103.949997,
            "Adj Close": 103.949997,
            "Volume": 3204375
          },
          {
            "Date": "2013-06-13",
            "Open": 103.949997,
            "High": 104.699997,
            "Low": 97.099998,
            "Close": 100,
            "Adj Close": 100,
            "Volume": 3629511
          },
          {
            "Date": "2013-06-14",
            "Open": 100,
            "High": 103.699997,
            "Low": 97.5,
            "Close": 99.800003,
            "Adj Close": 99.800003,
            "Volume": 2264105
          },
          {
            "Date": "2013-06-15",
            "Open": 99.800003,
            "High": 101.75,
            "Low": 98.900002,
            "Close": 99.900002,
            "Adj Close": 99.900002,
            "Volume": 865174
          },
          {
            "Date": "2013-06-16",
            "Open": 99.900002,
            "High": 102.400002,
            "Low": 98.900002,
            "Close": 101.949997,
            "Adj Close": 101.949997,
            "Volume": 1534858
          },
          {
            "Date": "2013-06-17",
            "Open": 101.949997,
            "High": 113.300003,
            "Low": 101.029999,
            "Close": 107.349998,
            "Adj Close": 107.349998,
            "Volume": 6510457
          },
          {
            "Date": "2013-06-18",
            "Open": 107.349998,
            "High": 110.989998,
            "Low": 104.660004,
            "Close": 108.25,
            "Adj Close": 108.25,
            "Volume": 1895919
          },
          {
            "Date": "2013-06-19",
            "Open": 108.25,
            "High": 114.480003,
            "Low": 107.120003,
            "Close": 111.290001,
            "Adj Close": 111.290001,
            "Volume": 4795256
          },
          {
            "Date": "2013-06-20",
            "Open": 111.290001,
            "High": 115.010002,
            "Low": 107.559998,
            "Close": 109.5,
            "Adj Close": 109.5,
            "Volume": 4241011
          },
          {
            "Date": "2013-06-21",
            "Open": 109.5,
            "High": 109.959999,
            "Low": 107.510002,
            "Close": 108.199997,
            "Adj Close": 108.199997,
            "Volume": 791157
          },
          {
            "Date": "2013-06-22",
            "Open": 108.199997,
            "High": 109,
            "Low": 106.199997,
            "Close": 107.900002,
            "Adj Close": 107.900002,
            "Volume": 1188748
          },
          {
            "Date": "2013-06-23",
            "Open": 107.900002,
            "High": 108.330002,
            "Low": 100.760002,
            "Close": 102.089996,
            "Adj Close": 102.089996,
            "Volume": 2986235
          },
          {
            "Date": "2013-06-24",
            "Open": 102.089996,
            "High": 109.980003,
            "Low": 100,
            "Close": 103.330002,
            "Adj Close": 103.330002,
            "Volume": 9760027
          },
          {
            "Date": "2013-06-25",
            "Open": 103.330002,
            "High": 105.489998,
            "Low": 101.830002,
            "Close": 104,
            "Adj Close": 104,
            "Volume": 1378467
          },
          {
            "Date": "2013-06-26",
            "Open": 104,
            "High": 104,
            "Low": 100.059998,
            "Close": 101.739998,
            "Adj Close": 101.739998,
            "Volume": 1505488
          },
          {
            "Date": "2013-06-27",
            "Open": 101.739998,
            "High": 101.790001,
            "Low": 92.25,
            "Close": 94.660004,
            "Adj Close": 94.660004,
            "Volume": 4625623
          },
          {
            "Date": "2013-06-28",
            "Open": 94.660004,
            "High": 100.440002,
            "Low": 93,
            "Close": 95,
            "Adj Close": 95,
            "Volume": 2469705
          },
          {
            "Date": "2013-06-29",
            "Open": 95,
            "High": 98.120003,
            "Low": 93.849998,
            "Close": 97.510002,
            "Adj Close": 97.510002,
            "Volume": 831721
          },
          {
            "Date": "2013-06-30",
            "Open": 97.510002,
            "High": 98.18,
            "Low": 86.010002,
            "Close": 88.050003,
            "Adj Close": 88.050003,
            "Volume": 4854051
          },
          {
            "Date": "2013-07-01",
            "Open": 88.050003,
            "High": 92.57,
            "Low": 87.510002,
            "Close": 90.410004,
            "Adj Close": 90.410004,
            "Volume": 2501192
          },
          {
            "Date": "2013-07-02",
            "Open": 90.410004,
            "High": 91.199997,
            "Low": 76,
            "Close": 78.889999,
            "Adj Close": 78.889999,
            "Volume": 6126930
          },
          {
            "Date": "2013-07-03",
            "Open": 78.889999,
            "High": 84.269997,
            "Low": 72,
            "Close": 80.040001,
            "Adj Close": 80.040001,
            "Volume": 4976159
          },
          {
            "Date": "2013-07-04",
            "Open": 80.040001,
            "High": 80.599998,
            "Low": 65.419998,
            "Close": 68.5,
            "Adj Close": 68.5,
            "Volume": 6478104
          },
          {
            "Date": "2013-07-05",
            "Open": 68.5,
            "High": 75,
            "Low": 66.809998,
            "Close": 69.660004,
            "Adj Close": 69.660004,
            "Volume": 2885730
          },
          {
            "Date": "2013-07-06",
            "Open": 69.660004,
            "High": 77,
            "Low": 66.599998,
            "Close": 76.5,
            "Adj Close": 76.5,
            "Volume": 3040545
          },
          {
            "Date": "2013-07-07",
            "Open": 76.5,
            "High": 80,
            "Low": 72.459999,
            "Close": 76,
            "Adj Close": 76,
            "Volume": 4542089
          },
          {
            "Date": "2013-07-08",
            "Open": 76,
            "High": 78.300003,
            "Low": 72.510002,
            "Close": 76.699997,
            "Adj Close": 76.699997,
            "Volume": 2462927
          },
          {
            "Date": "2013-07-09",
            "Open": 76.699997,
            "High": 89.839996,
            "Low": 75.529999,
            "Close": 88,
            "Adj Close": 88,
            "Volume": 4950378
          },
          {
            "Date": "2013-07-10",
            "Open": 88,
            "High": 90.699997,
            "Low": 85,
            "Close": 88.980003,
            "Adj Close": 88.980003,
            "Volume": 3115116
          },
          {
            "Date": "2013-07-11",
            "Open": 88.980003,
            "High": 104.169998,
            "Low": 88,
            "Close": 93.989998,
            "Adj Close": 93.989998,
            "Volume": 9793701
          },
          {
            "Date": "2013-07-12",
            "Open": 93.989998,
            "High": 98.32,
            "Low": 87.760002,
            "Close": 98.32,
            "Adj Close": 98.32,
            "Volume": 3206472
          },
          {
            "Date": "2013-07-13",
            "Open": 98.32,
            "High": 99,
            "Low": 92.860001,
            "Close": 94.419998,
            "Adj Close": 94.419998,
            "Volume": 1183919
          },
          {
            "Date": "2013-07-14",
            "Open": 94.419998,
            "High": 101.940002,
            "Low": 93.110001,
            "Close": 98.889999,
            "Adj Close": 98.889999,
            "Volume": 3407701
          },
          {
            "Date": "2013-07-15",
            "Open": 98.889999,
            "High": 100.730003,
            "Low": 96,
            "Close": 97.099998,
            "Adj Close": 97.099998,
            "Volume": 1626929
          },
          {
            "Date": "2013-07-16",
            "Open": 97.099998,
            "High": 100,
            "Low": 96.18,
            "Close": 98.5,
            "Adj Close": 98.5,
            "Volume": 1702482
          },
          {
            "Date": "2013-07-17",
            "Open": 98.5,
            "High": 98.800003,
            "Low": 86.199997,
            "Close": 90.07,
            "Adj Close": 90.07,
            "Volume": 5415947
          },
          {
            "Date": "2013-07-18",
            "Open": 90.07,
            "High": 95.199997,
            "Low": 87.599998,
            "Close": 92,
            "Adj Close": 92,
            "Volume": 2547076
          },
          {
            "Date": "2013-07-19",
            "Open": 92,
            "High": 93.099998,
            "Low": 89.269997,
            "Close": 89.82,
            "Adj Close": 89.82,
            "Volume": 865043
          },
          {
            "Date": "2013-07-20",
            "Open": 89.82,
            "High": 92,
            "Low": 88,
            "Close": 92,
            "Adj Close": 92,
            "Volume": 785274
          },
          {
            "Date": "2013-07-21",
            "Open": 92,
            "High": 92,
            "Low": 89.800003,
            "Close": 91.599998,
            "Adj Close": 91.599998,
            "Volume": 839143
          },
          {
            "Date": "2013-07-22",
            "Open": 91.599998,
            "High": 97.129997,
            "Low": 91.599998,
            "Close": 95.559998,
            "Adj Close": 95.559998,
            "Volume": 2333940
          },
          {
            "Date": "2013-07-23",
            "Open": 95.559998,
            "High": 95.989998,
            "Low": 92.300003,
            "Close": 95.089996,
            "Adj Close": 95.089996,
            "Volume": 1382398
          },
          {
            "Date": "2013-07-24",
            "Open": 95.089996,
            "High": 97.480003,
            "Low": 93.57,
            "Close": 96.949997,
            "Adj Close": 96.949997,
            "Volume": 2171816
          },
          {
            "Date": "2013-07-25",
            "Open": 96.949997,
            "High": 97.480003,
            "Low": 96,
            "Close": 96.019997,
            "Adj Close": 96.019997,
            "Volume": 1079418
          },
          {
            "Date": "2013-07-26",
            "Open": 96.019997,
            "High": 97,
            "Low": 93,
            "Close": 94.400002,
            "Adj Close": 94.400002,
            "Volume": 1430771
          },
          {
            "Date": "2013-07-27",
            "Open": 94.400002,
            "High": 100.580002,
            "Low": 94,
            "Close": 98.779999,
            "Adj Close": 98.779999,
            "Volume": 4160191
          },
          {
            "Date": "2013-07-28",
            "Open": 98.779999,
            "High": 102.849998,
            "Low": 98.449997,
            "Close": 101.480003,
            "Adj Close": 101.480003,
            "Volume": 2499727
          },
          {
            "Date": "2013-07-29",
            "Open": 101.480003,
            "High": 107.989998,
            "Low": 100.470001,
            "Close": 107.959999,
            "Adj Close": 107.959999,
            "Volume": 2893318
          },
          {
            "Date": "2013-07-30",
            "Open": 107.959999,
            "High": 111.650002,
            "Low": 103.550003,
            "Close": 106.209999,
            "Adj Close": 106.209999,
            "Volume": 4916334
          },
          {
            "Date": "2013-07-31",
            "Open": 106.209999,
            "High": 108,
            "Low": 103,
            "Close": 104,
            "Adj Close": 104,
            "Volume": 1580804
          },
          {
            "Date": "2013-08-01",
            "Open": 104,
            "High": 108,
            "Low": 101.209999,
            "Close": 104.5,
            "Adj Close": 104.5,
            "Volume": 2893759
          },
          {
            "Date": "2013-08-02",
            "Open": 104.5,
            "High": 105.889999,
            "Low": 102,
            "Close": 104.949997,
            "Adj Close": 104.949997,
            "Volume": 923169
          },
          {
            "Date": "2013-08-03",
            "Open": 104.949997,
            "High": 106,
            "Low": 103.5,
            "Close": 105.120003,
            "Adj Close": 105.120003,
            "Volume": 670427
          },
          {
            "Date": "2013-08-04",
            "Open": 105.120003,
            "High": 107.769997,
            "Low": 105,
            "Close": 106.720001,
            "Adj Close": 106.720001,
            "Volume": 1647464
          },
          {
            "Date": "2013-08-05",
            "Open": 106.720001,
            "High": 107.5,
            "Low": 105.110001,
            "Close": 106.559998,
            "Adj Close": 106.559998,
            "Volume": 1424757
          },
          {
            "Date": "2013-08-06",
            "Open": 106.559998,
            "High": 106.959999,
            "Low": 105.220001,
            "Close": 105.989998,
            "Adj Close": 105.989998,
            "Volume": 819975
          },
          {
            "Date": "2013-08-07",
            "Open": 105.989998,
            "High": 106.650002,
            "Low": 100.959999,
            "Close": 103.050003,
            "Adj Close": 103.050003,
            "Volume": 2481342
          },
          {
            "Date": "2013-08-08",
            "Open": 103.050003,
            "High": 105.790001,
            "Low": 101.940002,
            "Close": 102.800003,
            "Adj Close": 102.800003,
            "Volume": 1238426
          },
          {
            "Date": "2013-08-09",
            "Open": 102.800003,
            "High": 103.900002,
            "Low": 102.379997,
            "Close": 103,
            "Adj Close": 103,
            "Volume": 411941
          },
          {
            "Date": "2013-08-10",
            "Open": 103,
            "High": 105.190002,
            "Low": 102.699997,
            "Close": 105,
            "Adj Close": 105,
            "Volume": 853962
          },
          {
            "Date": "2013-08-11",
            "Open": 105,
            "High": 108.120003,
            "Low": 103.5,
            "Close": 106.809998,
            "Adj Close": 106.809998,
            "Volume": 2131117
          },
          {
            "Date": "2013-08-12",
            "Open": 106.809998,
            "High": 109.639999,
            "Low": 104.5,
            "Close": 109.599998,
            "Adj Close": 109.599998,
            "Volume": 2014623
          },
          {
            "Date": "2013-08-13",
            "Open": 109.599998,
            "High": 115,
            "Low": 108,
            "Close": 112.559998,
            "Adj Close": 112.559998,
            "Volume": 5689765
          },
          {
            "Date": "2013-08-14",
            "Open": 112.559998,
            "High": 113.32,
            "Low": 108.779999,
            "Close": 109.989998,
            "Adj Close": 109.989998,
            "Volume": 1759713
          },
          {
            "Date": "2013-08-15",
            "Open": 109.989998,
            "High": 112.300003,
            "Low": 108.209999,
            "Close": 108.989998,
            "Adj Close": 108.989998,
            "Volume": 1484874
          },
          {
            "Date": "2013-08-16",
            "Open": 108.989998,
            "High": 114,
            "Low": 108.230003,
            "Close": 112.75,
            "Adj Close": 112.75,
            "Volume": 1430522
          },
          {
            "Date": "2013-08-17",
            "Open": 112.75,
            "High": 114.690002,
            "Low": 112,
            "Close": 113.379997,
            "Adj Close": 113.379997,
            "Volume": 1093513
          },
          {
            "Date": "2013-08-18",
            "Open": 113.379997,
            "High": 123.75,
            "Low": 111.769997,
            "Close": 118.5,
            "Adj Close": 118.5,
            "Volume": 6273089
          },
          {
            "Date": "2013-08-19",
            "Open": 118.5,
            "High": 123.010002,
            "Low": 116.82,
            "Close": 121.199997,
            "Adj Close": 121.199997,
            "Volume": 2926824
          },
          {
            "Date": "2013-08-20",
            "Open": 121.199997,
            "High": 125,
            "Low": 119.68,
            "Close": 123.300003,
            "Adj Close": 123.300003,
            "Volume": 3760529
          },
          {
            "Date": "2013-08-21",
            "Open": 123.300003,
            "High": 124.489998,
            "Low": 120.540001,
            "Close": 122,
            "Adj Close": 122,
            "Volume": 1695452
          },
          {
            "Date": "2013-08-22",
            "Open": 122,
            "High": 122,
            "Low": 118.440002,
            "Close": 118.510002,
            "Adj Close": 118.510002,
            "Volume": 2324780
          },
          {
            "Date": "2013-08-23",
            "Open": 118.510002,
            "High": 121.389999,
            "Low": 118.019997,
            "Close": 119.599998,
            "Adj Close": 119.599998,
            "Volume": 1068849
          },
          {
            "Date": "2013-08-24",
            "Open": 119.599998,
            "High": 122.989998,
            "Low": 119.139999,
            "Close": 122.110001,
            "Adj Close": 122.110001,
            "Volume": 904128
          },
          {
            "Date": "2013-08-25",
            "Open": 122.110001,
            "High": 122.970001,
            "Low": 119.919998,
            "Close": 120.07,
            "Adj Close": 120.07,
            "Volume": 1386290
          },
          {
            "Date": "2013-08-26",
            "Open": 120.07,
            "High": 133,
            "Low": 120,
            "Close": 131.289993,
            "Adj Close": 131.289993,
            "Volume": 6882690
          },
          {
            "Date": "2013-08-27",
            "Open": 131.289993,
            "High": 131.720001,
            "Low": 128.020004,
            "Close": 128.759995,
            "Adj Close": 128.759995,
            "Volume": 1627390
          },
          {
            "Date": "2013-08-28",
            "Open": 128.759995,
            "High": 131.199997,
            "Low": 128.179993,
            "Close": 129.300003,
            "Adj Close": 129.300003,
            "Volume": 1059179
          },
          {
            "Date": "2013-08-29",
            "Open": 129.300003,
            "High": 142.759995,
            "Low": 128.559998,
            "Close": 138.029999,
            "Adj Close": 138.029999,
            "Volume": 6269713
          },
          {
            "Date": "2013-08-30",
            "Open": 138.029999,
            "High": 148.699997,
            "Low": 135.889999,
            "Close": 141,
            "Adj Close": 141,
            "Volume": 4452962
          },
          {
            "Date": "2013-08-31",
            "Open": 141,
            "High": 147.289993,
            "Low": 141,
            "Close": 146.009995,
            "Adj Close": 146.009995,
            "Volume": 2035993
          },
          {
            "Date": "2013-09-01",
            "Open": 146.009995,
            "High": 148.5,
            "Low": 142.110001,
            "Close": 144,
            "Adj Close": 144,
            "Volume": 1546327
          },
          {
            "Date": "2013-09-02",
            "Open": 144,
            "High": 148.910004,
            "Low": 142.199997,
            "Close": 144,
            "Adj Close": 144,
            "Volume": 2461257
          },
          {
            "Date": "2013-09-03",
            "Open": 144,
            "High": 145.800003,
            "Low": 130.089996,
            "Close": 132.509995,
            "Adj Close": 132.509995,
            "Volume": 3945752
          },
          {
            "Date": "2013-09-04",
            "Open": 132.509995,
            "High": 137.970001,
            "Low": 127.239998,
            "Close": 130.199997,
            "Adj Close": 130.199997,
            "Volume": 3561373
          },
          {
            "Date": "2013-09-05",
            "Open": 130.199997,
            "High": 134,
            "Low": 121.900002,
            "Close": 121.900002,
            "Adj Close": 121.900002,
            "Volume": 2435581
          },
          {
            "Date": "2013-09-06",
            "Open": 121.900002,
            "High": 131.020004,
            "Low": 121.25,
            "Close": 128.990005,
            "Adj Close": 128.990005,
            "Volume": 1796862
          },
          {
            "Date": "2013-09-07",
            "Open": 128.990005,
            "High": 129.869995,
            "Low": 124.059998,
            "Close": 126.32,
            "Adj Close": 126.32,
            "Volume": 926689
          },
          {
            "Date": "2013-09-08",
            "Open": 126.32,
            "High": 137.479996,
            "Low": 124,
            "Close": 133.100006,
            "Adj Close": 133.100006,
            "Volume": 3908439
          },
          {
            "Date": "2013-09-09",
            "Open": 133.100006,
            "High": 136.020004,
            "Low": 131.380005,
            "Close": 132.619995,
            "Adj Close": 132.619995,
            "Volume": 1184452
          },
          {
            "Date": "2013-09-10",
            "Open": 132.619995,
            "High": 145.899994,
            "Low": 127.5,
            "Close": 142.100006,
            "Adj Close": 142.100006,
            "Volume": 5706218
          },
          {
            "Date": "2013-09-11",
            "Open": 142.100006,
            "High": 145.520004,
            "Low": 137.509995,
            "Close": 139.350006,
            "Adj Close": 139.350006,
            "Volume": 2886300
          },
          {
            "Date": "2013-09-12",
            "Open": 139.350006,
            "High": 145.600006,
            "Low": 137.820007,
            "Close": 140.660004,
            "Adj Close": 140.660004,
            "Volume": 2869985
          },
          {
            "Date": "2013-09-13",
            "Open": 140.660004,
            "High": 142,
            "Low": 136.5,
            "Close": 136.710007,
            "Adj Close": 136.710007,
            "Volume": 1237692
          },
          {
            "Date": "2013-09-14",
            "Open": 136.710007,
            "High": 141,
            "Low": 135.039993,
            "Close": 138.300003,
            "Adj Close": 138.300003,
            "Volume": 886151
          },
          {
            "Date": "2013-09-15",
            "Open": 138.300003,
            "High": 142.229996,
            "Low": 137.899994,
            "Close": 139.419998,
            "Adj Close": 139.419998,
            "Volume": 1480693
          },
          {
            "Date": "2013-09-16",
            "Open": 139.419998,
            "High": 141.369995,
            "Low": 138,
            "Close": 139.149994,
            "Adj Close": 139.149994,
            "Volume": 1344189
          },
          {
            "Date": "2013-09-17",
            "Open": 139.149994,
            "High": 142,
            "Low": 139.009995,
            "Close": 140.410004,
            "Adj Close": 140.410004,
            "Volume": 1328386
          },
          {
            "Date": "2013-09-18",
            "Open": 140.410004,
            "High": 141.199997,
            "Low": 131.139999,
            "Close": 135.050003,
            "Adj Close": 135.050003,
            "Volume": 2862334
          },
          {
            "Date": "2013-09-19",
            "Open": 135.050003,
            "High": 137.279999,
            "Low": 131,
            "Close": 133.809998,
            "Adj Close": 133.809998,
            "Volume": 1484557
          },
          {
            "Date": "2013-09-20",
            "Open": 133.809998,
            "High": 135.990005,
            "Low": 132,
            "Close": 134.380005,
            "Adj Close": 134.380005,
            "Volume": 682674
          },
          {
            "Date": "2013-09-21",
            "Open": 134.380005,
            "High": 135,
            "Low": 131,
            "Close": 134,
            "Adj Close": 134,
            "Volume": 782376
          },
          {
            "Date": "2013-09-22",
            "Open": 134,
            "High": 135,
            "Low": 132,
            "Close": 133.399994,
            "Adj Close": 133.399994,
            "Volume": 799461
          },
          {
            "Date": "2013-09-23",
            "Open": 133.399994,
            "High": 136.589996,
            "Low": 132.5,
            "Close": 134.779999,
            "Adj Close": 134.779999,
            "Volume": 1148734
          },
          {
            "Date": "2013-09-24",
            "Open": 134.779999,
            "High": 138,
            "Low": 134.699997,
            "Close": 135,
            "Adj Close": 135,
            "Volume": 1293657
          },
          {
            "Date": "2013-09-25",
            "Open": 135,
            "High": 139,
            "Low": 134.710007,
            "Close": 137.100006,
            "Adj Close": 137.100006,
            "Volume": 886908
          },
          {
            "Date": "2013-09-26",
            "Open": 137.100006,
            "High": 142.660004,
            "Low": 134.830002,
            "Close": 138.929993,
            "Adj Close": 138.929993,
            "Volume": 3757634
          },
          {
            "Date": "2013-09-27",
            "Open": 138.929993,
            "High": 143,
            "Low": 138.020004,
            "Close": 142.5,
            "Adj Close": 142.5,
            "Volume": 1918884
          },
          {
            "Date": "2013-09-28",
            "Open": 142.5,
            "High": 145.809998,
            "Low": 141.360001,
            "Close": 143.880005,
            "Adj Close": 143.880005,
            "Volume": 2611317
          },
          {
            "Date": "2013-09-29",
            "Open": 143.880005,
            "High": 145.809998,
            "Low": 138.119995,
            "Close": 141.899994,
            "Adj Close": 141.899994,
            "Volume": 2067367
          },
          {
            "Date": "2013-09-30",
            "Open": 141.899994,
            "High": 144.440002,
            "Low": 139.410004,
            "Close": 140.300003,
            "Adj Close": 140.300003,
            "Volume": 1344565
          },
          {
            "Date": "2013-10-01",
            "Open": 140.300003,
            "High": 141.929993,
            "Low": 109.699997,
            "Close": 123,
            "Adj Close": 123,
            "Volume": 13888930
          },
          {
            "Date": "2013-10-02",
            "Open": 123,
            "High": 132,
            "Low": 120.099998,
            "Close": 130.990005,
            "Adj Close": 130.990005,
            "Volume": 4488527
          },
          {
            "Date": "2013-10-03",
            "Open": 130.990005,
            "High": 139.800003,
            "Low": 128.5,
            "Close": 136.820007,
            "Adj Close": 136.820007,
            "Volume": 2491501
          },
          {
            "Date": "2013-10-04",
            "Open": 136.820007,
            "High": 138,
            "Low": 135.300003,
            "Close": 136.699997,
            "Adj Close": 136.699997,
            "Volume": 679668
          },
          {
            "Date": "2013-10-05",
            "Open": 136.699997,
            "High": 138,
            "Low": 134.100006,
            "Close": 137.800003,
            "Adj Close": 137.800003,
            "Volume": 665512
          },
          {
            "Date": "2013-10-06",
            "Open": 137.800003,
            "High": 139,
            "Low": 135.119995,
            "Close": 135.800003,
            "Adj Close": 135.800003,
            "Volume": 1006277
          },
          {
            "Date": "2013-10-07",
            "Open": 135.800003,
            "High": 137.779999,
            "Low": 135.649994,
            "Close": 136.490005,
            "Adj Close": 136.490005,
            "Volume": 707471
          },
          {
            "Date": "2013-10-08",
            "Open": 136.490005,
            "High": 142.100006,
            "Low": 135.800003,
            "Close": 139.5,
            "Adj Close": 139.5,
            "Volume": 2431349
          },
          {
            "Date": "2013-10-09",
            "Open": 139.5,
            "High": 141.690002,
            "Low": 138.509995,
            "Close": 140.410004,
            "Adj Close": 140.410004,
            "Volume": 1551392
          },
          {
            "Date": "2013-10-10",
            "Open": 140.410004,
            "High": 141.850006,
            "Low": 138.869995,
            "Close": 140.100006,
            "Adj Close": 140.100006,
            "Volume": 1013106
          },
          {
            "Date": "2013-10-11",
            "Open": 140.100006,
            "High": 143.050003,
            "Low": 139.389999,
            "Close": 142.889999,
            "Adj Close": 142.889999,
            "Volume": 1559472
          },
          {
            "Date": "2013-10-12",
            "Open": 142.889999,
            "High": 147.649994,
            "Low": 141.5,
            "Close": 147.529999,
            "Adj Close": 147.529999,
            "Volume": 2342049
          },
          {
            "Date": "2013-10-13",
            "Open": 147.529999,
            "High": 153.690002,
            "Low": 146.029999,
            "Close": 151.369995,
            "Adj Close": 151.369995,
            "Volume": 4512823
          },
          {
            "Date": "2013-10-14",
            "Open": 151.369995,
            "High": 158.100006,
            "Low": 150.619995,
            "Close": 158.089996,
            "Adj Close": 158.089996,
            "Volume": 2416464
          },
          {
            "Date": "2013-10-15",
            "Open": 158.089996,
            "High": 162.990005,
            "Low": 144.199997,
            "Close": 152.820007,
            "Adj Close": 152.820007,
            "Volume": 6636228
          },
          {
            "Date": "2013-10-16",
            "Open": 152.820007,
            "High": 159.940002,
            "Low": 150.75,
            "Close": 157.589996,
            "Adj Close": 157.589996,
            "Volume": 2470394
          },
          {
            "Date": "2013-10-17",
            "Open": 157.589996,
            "High": 168.289993,
            "Low": 156.490005,
            "Close": 168.279999,
            "Adj Close": 168.279999,
            "Volume": 4225505
          },
          {
            "Date": "2013-10-18",
            "Open": 168.279999,
            "High": 195.800003,
            "Low": 167.080002,
            "Close": 183.149994,
            "Adj Close": 183.149994,
            "Volume": 10000685
          },
          {
            "Date": "2013-10-19",
            "Open": 183.149994,
            "High": 186.100006,
            "Low": 177.240005,
            "Close": 186.100006,
            "Adj Close": 186.100006,
            "Volume": 2087108
          },
          {
            "Date": "2013-10-20",
            "Open": 186.100006,
            "High": 197.369995,
            "Low": 183.179993,
            "Close": 192.779999,
            "Adj Close": 192.779999,
            "Volume": 4613540
          },
          {
            "Date": "2013-10-21",
            "Open": 192.779999,
            "High": 205.5,
            "Low": 192.789993,
            "Close": 202.990005,
            "Adj Close": 202.990005,
            "Volume": 6761835
          },
          {
            "Date": "2013-10-22",
            "Open": 202.990005,
            "High": 227.979996,
            "Low": 200.699997,
            "Close": 227.970001,
            "Adj Close": 227.970001,
            "Volume": 8526441
          },
          {
            "Date": "2013-10-23",
            "Open": 227.970001,
            "High": 233.380005,
            "Low": 175.300003,
            "Close": 206.979996,
            "Adj Close": 206.979996,
            "Volume": 19649229
          },
          {
            "Date": "2013-10-24",
            "Open": 206.979996,
            "High": 208.970001,
            "Low": 176.600006,
            "Close": 197.880005,
            "Adj Close": 197.880005,
            "Volume": 6934330
          },
          {
            "Date": "2013-10-25",
            "Open": 197.880005,
            "High": 198.410004,
            "Low": 186.990005,
            "Close": 188.559998,
            "Adj Close": 188.559998,
            "Volume": 2322934
          },
          {
            "Date": "2013-10-26",
            "Open": 188.559998,
            "High": 207.809998,
            "Low": 188.949997,
            "Close": 206.910004,
            "Adj Close": 206.910004,
            "Volume": 2633454
          },
          {
            "Date": "2013-10-28",
            "Open": 206.910004,
            "High": 209.789993,
            "Low": 200.419998,
            "Close": 206.899994,
            "Adj Close": 206.899994,
            "Volume": 2287257
          },
          {
            "Date": "2013-10-29",
            "Open": 206.899994,
            "High": 216.5,
            "Low": 204.199997,
            "Close": 216,
            "Adj Close": 216,
            "Volume": 2119311
          },
          {
            "Date": "2013-10-30",
            "Open": 216,
            "High": 216.490005,
            "Low": 203.990005,
            "Close": 208,
            "Adj Close": 208,
            "Volume": 2853902
          },
          {
            "Date": "2013-10-31",
            "Open": 208,
            "High": 214.990005,
            "Low": 205.429993,
            "Close": 211.169998,
            "Adj Close": 211.169998,
            "Volume": 1121246
          },
          {
            "Date": "2013-11-01",
            "Open": 211.169998,
            "High": 214.949997,
            "Low": 209.710007,
            "Close": 213.429993,
            "Adj Close": 213.429993,
            "Volume": 1251780
          },
          {
            "Date": "2013-11-02",
            "Open": 213.429993,
            "High": 214.860001,
            "Low": 211,
            "Close": 211.690002,
            "Adj Close": 211.690002,
            "Volume": 1041300
          },
          {
            "Date": "2013-11-03",
            "Open": 211.690002,
            "High": 226.949997,
            "Low": 212.100006,
            "Close": 224,
            "Adj Close": 224,
            "Volume": 2694954
          },
          {
            "Date": "2013-11-04",
            "Open": 224,
            "High": 238.979996,
            "Low": 221.949997,
            "Close": 238.160004,
            "Adj Close": 238.160004,
            "Volume": 4167915
          },
          {
            "Date": "2013-11-05",
            "Open": 238.160004,
            "High": 258.869995,
            "Low": 229,
            "Close": 251.300003,
            "Adj Close": 251.300003,
            "Volume": 11094612
          },
          {
            "Date": "2013-11-06",
            "Open": 251.300003,
            "High": 272.519989,
            "Low": 251.410004,
            "Close": 264.100006,
            "Adj Close": 264.100006,
            "Volume": 10223786
          },
          {
            "Date": "2013-11-07",
            "Open": 264.100006,
            "High": 324.209991,
            "Low": 263.600006,
            "Close": 309.649994,
            "Adj Close": 309.649994,
            "Volume": 25582885
          },
          {
            "Date": "2013-11-08",
            "Open": 309.649994,
            "High": 358,
            "Low": 308.01001,
            "Close": 355,
            "Adj Close": 355,
            "Volume": 15072022
          },
          {
            "Date": "2013-11-09",
            "Open": 355,
            "High": 394.98999,
            "Low": 339.98999,
            "Close": 367.790009,
            "Adj Close": 367.790009,
            "Volume": 18427776
          },
          {
            "Date": "2013-11-10",
            "Open": 367.790009,
            "High": 372.519989,
            "Low": 289.959991,
            "Close": 336.320007,
            "Adj Close": 336.320007,
            "Volume": 24225281
          },
          {
            "Date": "2013-11-11",
            "Open": 336.320007,
            "High": 375.98999,
            "Low": 321.410004,
            "Close": 362.980011,
            "Adj Close": 362.980011,
            "Volume": 6330618
          },
          {
            "Date": "2013-11-12",
            "Open": 362.980011,
            "High": 391.790009,
            "Low": 358.970001,
            "Close": 380.040009,
            "Adj Close": 380.040009,
            "Volume": 8309810
          },
          {
            "Date": "2013-11-13",
            "Open": 380.040009,
            "High": 444.970001,
            "Low": 372.170013,
            "Close": 434.850006,
            "Adj Close": 434.850006,
            "Volume": 14780190
          },
          {
            "Date": "2013-11-14",
            "Open": 434.850006,
            "High": 447.48999,
            "Low": 402.540009,
            "Close": 433.399994,
            "Adj Close": 433.399994,
            "Volume": 13453174
          },
          {
            "Date": "2013-11-15",
            "Open": 433.399994,
            "High": 457.920013,
            "Low": 412.970001,
            "Close": 433.920013,
            "Adj Close": 433.920013,
            "Volume": 12273745
          },
          {
            "Date": "2013-11-16",
            "Open": 433.920013,
            "High": 476.940002,
            "Low": 427.980011,
            "Close": 461.959991,
            "Adj Close": 461.959991,
            "Volume": 8737836
          },
          {
            "Date": "2013-11-17",
            "Open": 461.959991,
            "High": 536.75,
            "Low": 456.980011,
            "Close": 528.299988,
            "Adj Close": 528.299988,
            "Volume": 13340495
          },
          {
            "Date": "2013-11-18",
            "Open": 528.299988,
            "High": 787.929993,
            "Low": 521.97998,
            "Close": 785.429993,
            "Adj Close": 785.429993,
            "Volume": 45461600
          },
          {
            "Date": "2013-11-19",
            "Open": 785.429993,
            "High": 900.919983,
            "Low": 502.609985,
            "Close": 645.690002,
            "Adj Close": 645.690002,
            "Volume": 69095497
          },
          {
            "Date": "2013-11-20",
            "Open": 645.690002,
            "High": 649.98999,
            "Low": 453.290009,
            "Close": 637.969971,
            "Adj Close": 637.969971,
            "Volume": 50748177
          },
          {
            "Date": "2013-11-21",
            "Open": 637.969971,
            "High": 784.320007,
            "Low": 595.190002,
            "Close": 764.909973,
            "Adj Close": 764.909973,
            "Volume": 27128283
          },
          {
            "Date": "2013-11-22",
            "Open": 764.909973,
            "High": 821.98999,
            "Low": 682.280029,
            "Close": 802,
            "Adj Close": 802,
            "Volume": 22686962
          },
          {
            "Date": "2013-11-23",
            "Open": 802,
            "High": 890.030029,
            "Low": 799.539978,
            "Close": 832.5,
            "Adj Close": 832.5,
            "Volume": 17908081
          },
          {
            "Date": "2013-11-24",
            "Open": 832.5,
            "High": 854.98999,
            "Low": 745.210022,
            "Close": 795.01001,
            "Adj Close": 795.01001,
            "Volume": 20776035
          },
          {
            "Date": "2013-11-25",
            "Open": 795.01001,
            "High": 849.98999,
            "Low": 758.950012,
            "Close": 829.98999,
            "Adj Close": 829.98999,
            "Volume": 21438670
          },
          {
            "Date": "2013-11-26",
            "Open": 829.98999,
            "High": 974.960022,
            "Low": 825.080017,
            "Close": 969.960022,
            "Adj Close": 969.960022,
            "Volume": 28285852
          },
          {
            "Date": "2013-11-27",
            "Open": 969.960022,
            "High": 1094.780029,
            "Low": 914.27002,
            "Close": 1079.890015,
            "Adj Close": 1079.890015,
            "Volume": 37868643
          },
          {
            "Date": "2013-11-28",
            "Open": 1079.890015,
            "High": 1224.47998,
            "Low": 1032.060059,
            "Close": 1101.380005,
            "Adj Close": 1101.380005,
            "Volume": 42912383
          },
          {
            "Date": "2013-11-29",
            "Open": 1101.380005,
            "High": 1241.920044,
            "Low": 1049.959961,
            "Close": 1206.930054,
            "Adj Close": 1206.930054,
            "Volume": 45030632
          },
          {
            "Date": "2013-11-30",
            "Open": 1206.930054,
            "High": 1232.939941,
            "Low": 1150.160034,
            "Close": 1205.660034,
            "Adj Close": 1205.660034,
            "Volume": 18266602
          },
          {
            "Date": "2013-12-01",
            "Open": 1205.660034,
            "High": 1216.839966,
            "Low": 840.27002,
            "Close": 1004.390015,
            "Adj Close": 1004.390015,
            "Volume": 83244488
          },
          {
            "Date": "2013-12-02",
            "Open": 1004.390015,
            "High": 1117.72998,
            "Low": 974.969971,
            "Close": 1096.560059,
            "Adj Close": 1096.560059,
            "Volume": 39234863
          },
          {
            "Date": "2013-12-03",
            "Open": 1096.560059,
            "High": 1185.630005,
            "Low": 1064.910034,
            "Close": 1154.859985,
            "Adj Close": 1154.859985,
            "Volume": 21865760
          },
          {
            "Date": "2013-12-04",
            "Open": 1154.859985,
            "High": 1239.699951,
            "Low": 1131.349976,
            "Close": 1237.550049,
            "Adj Close": 1237.550049,
            "Volume": 19409766
          },
          {
            "Date": "2013-12-05",
            "Open": 1237.550049,
            "High": 1239.859985,
            "Low": 869.98999,
            "Close": 1106.349976,
            "Adj Close": 1106.349976,
            "Volume": 62292919
          },
          {
            "Date": "2013-12-06",
            "Open": 1106.349976,
            "High": 1118.930054,
            "Low": 800.070007,
            "Close": 845.02002,
            "Adj Close": 845.02002,
            "Volume": 50747162
          },
          {
            "Date": "2013-12-07",
            "Open": 845.02002,
            "High": 895.960022,
            "Low": 576.030029,
            "Close": 697.02002,
            "Adj Close": 697.02002,
            "Volume": 70727083
          },
          {
            "Date": "2013-12-08",
            "Open": 697.02002,
            "High": 828.960022,
            "Low": 653.030029,
            "Close": 803.960022,
            "Adj Close": 803.960022,
            "Volume": 23044397
          },
          {
            "Date": "2013-12-09",
            "Open": 803.960022,
            "High": 980.030029,
            "Low": 787.72998,
            "Close": 918.950012,
            "Adj Close": 918.950012,
            "Volume": 24553208
          },
          {
            "Date": "2013-12-10",
            "Open": 918.950012,
            "High": 1067.699951,
            "Low": 911.960022,
            "Close": 1033.719971,
            "Adj Close": 1033.719971,
            "Volume": 21734994
          },
          {
            "Date": "2013-12-11",
            "Open": 1033.719971,
            "High": 1056.76001,
            "Low": 856.059998,
            "Close": 919.929993,
            "Adj Close": 919.929993,
            "Volume": 23051224
          },
          {
            "Date": "2013-12-12",
            "Open": 919.929993,
            "High": 940.97998,
            "Low": 839.51001,
            "Close": 899.97998,
            "Adj Close": 899.97998,
            "Volume": 8798283
          },
          {
            "Date": "2013-12-13",
            "Open": 899.97998,
            "High": 989.890015,
            "Low": 882.109985,
            "Close": 936.77002,
            "Adj Close": 936.77002,
            "Volume": 16173632
          },
          {
            "Date": "2013-12-14",
            "Open": 936.77002,
            "High": 947.929993,
            "Low": 875.109985,
            "Close": 908.940002,
            "Adj Close": 908.940002,
            "Volume": 10532106
          },
          {
            "Date": "2013-12-15",
            "Open": 908.940002,
            "High": 927.900024,
            "Low": 837.97998,
            "Close": 919.880005,
            "Adj Close": 919.880005,
            "Volume": 13302074
          },
          {
            "Date": "2013-12-16",
            "Open": 919.880005,
            "High": 924.940002,
            "Low": 714.030029,
            "Close": 759.919983,
            "Adj Close": 759.919983,
            "Volume": 32899151
          },
          {
            "Date": "2013-12-17",
            "Open": 759.919983,
            "High": 779.960022,
            "Low": 678.880005,
            "Close": 714.969971,
            "Adj Close": 714.969971,
            "Volume": 22933905
          },
          {
            "Date": "2013-12-18",
            "Open": 714.969971,
            "High": 716.98999,
            "Low": 454.859985,
            "Close": 540.97998,
            "Adj Close": 540.97998,
            "Volume": 62529030
          },
          {
            "Date": "2013-12-19",
            "Open": 540.97998,
            "High": 745.960022,
            "Low": 522.440002,
            "Close": 731.950012,
            "Adj Close": 731.950012,
            "Volume": 29980041
          },
          {
            "Date": "2013-12-20",
            "Open": 731.950012,
            "High": 774.390015,
            "Low": 621.25,
            "Close": 649.960022,
            "Adj Close": 649.960022,
            "Volume": 24291048
          },
          {
            "Date": "2013-12-21",
            "Open": 649.960022,
            "High": 690,
            "Low": 610,
            "Close": 640.47998,
            "Adj Close": 640.47998,
            "Volume": 9550420
          },
          {
            "Date": "2013-12-22",
            "Open": 640.47998,
            "High": 699.909973,
            "Low": 614.950012,
            "Close": 639.48999,
            "Adj Close": 639.48999,
            "Volume": 7693603
          },
          {
            "Date": "2013-12-23",
            "Open": 639.48999,
            "High": 724.919983,
            "Low": 631.01001,
            "Close": 713.23999,
            "Adj Close": 713.23999,
            "Volume": 10210388
          },
          {
            "Date": "2013-12-24",
            "Open": 713.23999,
            "High": 729.940002,
            "Low": 665.97998,
            "Close": 702.75,
            "Adj Close": 702.75,
            "Volume": 7647250
          },
          {
            "Date": "2013-12-25",
            "Open": 702.75,
            "High": 709.950012,
            "Low": 673.929993,
            "Close": 707.25,
            "Adj Close": 707.25,
            "Volume": 3721814
          },
          {
            "Date": "2013-12-26",
            "Open": 707.25,
            "High": 829.630005,
            "Low": 707.210022,
            "Close": 801.97998,
            "Adj Close": 801.97998,
            "Volume": 18209291
          },
          {
            "Date": "2013-12-27",
            "Open": 801.97998,
            "High": 836.830017,
            "Low": 767.869995,
            "Close": 803.049988,
            "Adj Close": 803.049988,
            "Volume": 11073604
          },
          {
            "Date": "2013-12-28",
            "Open": 803.049988,
            "High": 805.969971,
            "Low": 715.599976,
            "Close": 761.98999,
            "Adj Close": 761.98999,
            "Volume": 10127883
          },
          {
            "Date": "2013-12-29",
            "Open": 761.98999,
            "High": 803.950012,
            "Low": 734.97998,
            "Close": 784.960022,
            "Adj Close": 784.960022,
            "Volume": 5448579
          },
          {
            "Date": "2013-12-30",
            "Open": 784.960022,
            "High": 818.830017,
            "Low": 780.960022,
            "Close": 804.830017,
            "Adj Close": 804.830017,
            "Volume": 8411786
          },
          {
            "Date": "2013-12-31",
            "Open": 804.830017,
            "High": 813.940002,
            "Low": 776.960022,
            "Close": 805.940002,
            "Adj Close": 805.940002,
            "Volume": 7294004
          },
          {
            "Date": "2014-01-01",
            "Open": 805.940002,
            "High": 829.929993,
            "Low": 770.969971,
            "Close": 815.940002,
            "Adj Close": 815.940002,
            "Volume": 8663855
          },
          {
            "Date": "2014-01-02",
            "Open": 815.940002,
            "High": 886.210022,
            "Low": 810.469971,
            "Close": 856.909973,
            "Adj Close": 856.909973,
            "Volume": 10826907
          },
          {
            "Date": "2014-01-03",
            "Open": 856.909973,
            "High": 888.22998,
            "Low": 839.440002,
            "Close": 884.26001,
            "Adj Close": 884.26001,
            "Volume": 8409629
          },
          {
            "Date": "2014-01-04",
            "Open": 884.26001,
            "High": 932.159973,
            "Low": 848.320007,
            "Close": 924.690002,
            "Adj Close": 924.690002,
            "Volume": 12784626
          },
          {
            "Date": "2014-01-05",
            "Open": 924.690002,
            "High": 1029.859985,
            "Low": 911.359985,
            "Close": 1014.73999,
            "Adj Close": 1014.73999,
            "Volume": 20789364
          },
          {
            "Date": "2014-01-06",
            "Open": 1014.73999,
            "High": 1093.439941,
            "Low": 964.73999,
            "Close": 1012.650024,
            "Adj Close": 1012.650024,
            "Volume": 23622237
          },
          {
            "Date": "2014-01-07",
            "Open": 1012.650024,
            "High": 1043.97998,
            "Low": 879.849976,
            "Close": 879.900024,
            "Adj Close": 879.900024,
            "Volume": 21753921
          },
          {
            "Date": "2014-01-08",
            "Open": 879.900024,
            "High": 966.900024,
            "Low": 858.900024,
            "Close": 938.840027,
            "Adj Close": 938.840027,
            "Volume": 12942254
          },
          {
            "Date": "2014-01-09",
            "Open": 938.840027,
            "High": 964.640015,
            "Low": 866.549988,
            "Close": 936.950012,
            "Adj Close": 936.950012,
            "Volume": 13202619
          },
          {
            "Date": "2014-01-10",
            "Open": 936.950012,
            "High": 964.840027,
            "Low": 905.880005,
            "Close": 957.76001,
            "Adj Close": 957.76001,
            "Volume": 5909107
          },
          {
            "Date": "2014-01-11",
            "Open": 957.76001,
            "High": 1010.840027,
            "Low": 935,
            "Close": 1005.320007,
            "Adj Close": 1005.320007,
            "Volume": 10948175
          },
          {
            "Date": "2014-01-12",
            "Open": 1005.320007,
            "High": 1022.669983,
            "Low": 922.070007,
            "Close": 939.789978,
            "Adj Close": 939.789978,
            "Volume": 9620090
          },
          {
            "Date": "2014-01-13",
            "Open": 939.789978,
            "High": 949.23999,
            "Low": 879.940002,
            "Close": 922.909973,
            "Adj Close": 922.909973,
            "Volume": 9220891
          },
          {
            "Date": "2014-01-14",
            "Open": 922.909973,
            "High": 942.469971,
            "Low": 904.190002,
            "Close": 919.280029,
            "Adj Close": 919.280029,
            "Volume": 3960633
          },
          {
            "Date": "2014-01-15",
            "Open": 919.280029,
            "High": 973.090027,
            "Low": 915.059998,
            "Close": 941.219971,
            "Adj Close": 941.219971,
            "Volume": 6448062
          },
          {
            "Date": "2014-01-16",
            "Open": 941.219971,
            "High": 955.530029,
            "Low": 910.5,
            "Close": 913.48999,
            "Adj Close": 913.48999,
            "Volume": 4720008
          },
          {
            "Date": "2014-01-17",
            "Open": 913.48999,
            "High": 929.75,
            "Low": 867.219971,
            "Close": 894.159973,
            "Adj Close": 894.159973,
            "Volume": 9203107
          },
          {
            "Date": "2014-01-18",
            "Open": 894.159973,
            "High": 924.73999,
            "Low": 884.73999,
            "Close": 905.719971,
            "Adj Close": 905.719971,
            "Volume": 5493742
          },
          {
            "Date": "2014-01-19",
            "Open": 905.719971,
            "High": 958.070007,
            "Low": 901.880005,
            "Close": 954.799988,
            "Adj Close": 954.799988,
            "Volume": 7071649
          },
          {
            "Date": "2014-01-20",
            "Open": 954.799988,
            "High": 980.539978,
            "Low": 925.960022,
            "Close": 955.950012,
            "Adj Close": 955.950012,
            "Volume": 9981282
          },
          {
            "Date": "2014-01-21",
            "Open": 955.950012,
            "High": 974.25,
            "Low": 943.179993,
            "Close": 962.210022,
            "Adj Close": 962.210022,
            "Volume": 6289022
          },
          {
            "Date": "2014-01-22",
            "Open": 962.210022,
            "High": 973.940002,
            "Low": 934.950012,
            "Close": 950.950012,
            "Adj Close": 950.950012,
            "Volume": 4503428
          },
          {
            "Date": "2014-01-23",
            "Open": 950.950012,
            "High": 958.059998,
            "Low": 936.27002,
            "Close": 944.159973,
            "Adj Close": 944.159973,
            "Volume": 1839615
          },
          {
            "Date": "2014-01-24",
            "Open": 944.159973,
            "High": 949.52002,
            "Low": 902.890015,
            "Close": 916.549988,
            "Adj Close": 916.549988,
            "Volume": 5684047
          },
          {
            "Date": "2014-01-25",
            "Open": 916.549988,
            "High": 978.409973,
            "Low": 915.859985,
            "Close": 961.049988,
            "Adj Close": 961.049988,
            "Volume": 7797108
          },
          {
            "Date": "2014-01-26",
            "Open": 961.049988,
            "High": 1038.060059,
            "Low": 950.659973,
            "Close": 1007,
            "Adj Close": 1007,
            "Volume": 13054605
          },
          {
            "Date": "2014-01-27",
            "Open": 1007,
            "High": 1021.450012,
            "Low": 937.22998,
            "Close": 943.539978,
            "Adj Close": 943.539978,
            "Volume": 8052715
          },
          {
            "Date": "2014-01-28",
            "Open": 943.539978,
            "High": 972.609985,
            "Low": 911.650024,
            "Close": 932.679993,
            "Adj Close": 932.679993,
            "Volume": 9757613
          },
          {
            "Date": "2014-01-29",
            "Open": 932.679993,
            "High": 950.559998,
            "Low": 918.859985,
            "Close": 925.669983,
            "Adj Close": 925.669983,
            "Volume": 5254878
          },
          {
            "Date": "2014-01-30",
            "Open": 925.669983,
            "High": 953.23999,
            "Low": 909.460022,
            "Close": 941.390015,
            "Adj Close": 941.390015,
            "Volume": 5026461
          },
          {
            "Date": "2014-01-31",
            "Open": 941.390015,
            "High": 954.710022,
            "Low": 924.590027,
            "Close": 938.849976,
            "Adj Close": 938.849976,
            "Volume": 4024749
          },
          {
            "Date": "2014-02-01",
            "Open": 938.849976,
            "High": 969.190002,
            "Low": 927.799988,
            "Close": 940.419983,
            "Adj Close": 940.419983,
            "Volume": 4118865
          },
          {
            "Date": "2014-02-02",
            "Open": 940.419983,
            "High": 959.380005,
            "Low": 934.409973,
            "Close": 953.309998,
            "Adj Close": 953.309998,
            "Volume": 1495327
          },
          {
            "Date": "2014-02-03",
            "Open": 953.309998,
            "High": 959.580017,
            "Low": 931.669983,
            "Close": 931.710022,
            "Adj Close": 931.710022,
            "Volume": 2601784
          },
          {
            "Date": "2014-02-04",
            "Open": 931.710022,
            "High": 949.099976,
            "Low": 900.76001,
            "Close": 926.640015,
            "Adj Close": 926.640015,
            "Volume": 4250751
          },
          {
            "Date": "2014-02-05",
            "Open": 926.640015,
            "High": 939.75,
            "Low": 890.049988,
            "Close": 904.52002,
            "Adj Close": 904.52002,
            "Volume": 6865987
          },
          {
            "Date": "2014-02-06",
            "Open": 904.52002,
            "High": 908.77002,
            "Low": 800.929993,
            "Close": 828.869995,
            "Adj Close": 828.869995,
            "Volume": 15719958
          },
          {
            "Date": "2014-02-07",
            "Open": 828.869995,
            "High": 833.070007,
            "Low": 651.72998,
            "Close": 695.650024,
            "Adj Close": 695.650024,
            "Volume": 36412212
          },
          {
            "Date": "2014-02-08",
            "Open": 695.650024,
            "High": 719.26001,
            "Low": 632.080017,
            "Close": 648.780029,
            "Adj Close": 648.780029,
            "Volume": 15503790
          },
          {
            "Date": "2014-02-09",
            "Open": 648.780029,
            "High": 694.119995,
            "Low": 622.530029,
            "Close": 659.570007,
            "Adj Close": 659.570007,
            "Volume": 13186251
          },
          {
            "Date": "2014-02-10",
            "Open": 659.570007,
            "High": 700.039978,
            "Low": 500.040009,
            "Close": 582.630005,
            "Adj Close": 582.630005,
            "Volume": 24334044
          },
          {
            "Date": "2014-02-11",
            "Open": 582.630005,
            "High": 609.710022,
            "Low": 550.219971,
            "Close": 578.960022,
            "Adj Close": 578.960022,
            "Volume": 9621820
          },
          {
            "Date": "2014-02-12",
            "Open": 578.960022,
            "High": 585.119995,
            "Low": 511.899994,
            "Close": 531.130005,
            "Adj Close": 531.130005,
            "Volume": 11628634
          },
          {
            "Date": "2014-02-13",
            "Open": 531.130005,
            "High": 549.200012,
            "Low": 451.329987,
            "Close": 451.440002,
            "Adj Close": 451.440002,
            "Volume": 14394464
          },
          {
            "Date": "2014-02-14",
            "Open": 451.440002,
            "High": 500.029999,
            "Low": 302.179993,
            "Close": 427.679993,
            "Adj Close": 427.679993,
            "Volume": 25084223
          },
          {
            "Date": "2014-02-15",
            "Open": 427.679993,
            "High": 447.940002,
            "Low": 310.079987,
            "Close": 371.070007,
            "Adj Close": 371.070007,
            "Volume": 18299075
          },
          {
            "Date": "2014-02-16",
            "Open": 371.070007,
            "High": 540.030029,
            "Low": 220.369995,
            "Close": 299.799988,
            "Adj Close": 299.799988,
            "Volume": 26267622
          },
          {
            "Date": "2014-02-17",
            "Open": 299.799988,
            "High": 411.209991,
            "Low": 263.359985,
            "Close": 272.279999,
            "Adj Close": 272.279999,
            "Volume": 16532226
          },
          {
            "Date": "2014-02-18",
            "Open": 272.279999,
            "High": 370.119995,
            "Low": 248.309998,
            "Close": 293.950012,
            "Adj Close": 293.950012,
            "Volume": 14130126
          },
          {
            "Date": "2014-02-19",
            "Open": 293.950012,
            "High": 308.630005,
            "Low": 257.23999,
            "Close": 261.529999,
            "Adj Close": 261.529999,
            "Volume": 8618299
          },
          {
            "Date": "2014-02-20",
            "Open": 261.529999,
            "High": 271.609985,
            "Low": 109.220001,
            "Close": 111.919998,
            "Adj Close": 111.919998,
            "Volume": 16608347
          },
          {
            "Date": "2014-02-21",
            "Open": 111.919998,
            "High": 160.149994,
            "Low": 91.660004,
            "Close": 111.559998,
            "Adj Close": 111.559998,
            "Volume": 10115923
          },
          {
            "Date": "2014-02-22",
            "Open": 111.559998,
            "High": 290.589996,
            "Low": 96.720001,
            "Close": 255.589996,
            "Adj Close": 255.589996,
            "Volume": 11838225
          },
          {
            "Date": "2014-02-23",
            "Open": 255.589996,
            "High": 349.149994,
            "Low": 220.309998,
            "Close": 310.170013,
            "Adj Close": 310.170013,
            "Volume": 11158706
          },
          {
            "Date": "2014-02-24",
            "Open": 310.170013,
            "High": 316.880005,
            "Low": 131.850006,
            "Close": 174,
            "Adj Close": 174,
            "Volume": 17929284
          },
          {
            "Date": "2014-02-25",
            "Open": 174,
            "High": 174.639999,
            "Low": 102.330002,
            "Close": 135.779999,
            "Adj Close": 135.779999,
            "Volume": 3993023
          },
          {
            "Date": "2014-02-26",
            "Open": 135.779999,
            "High": 650,
            "Low": 522.840027,
            "Close": 593.140015,
            "Adj Close": 593.140015,
            "Volume": 383571
          },
          {
            "Date": "2014-02-27",
            "Open": 593.140015,
            "High": 629.900024,
            "Low": 580.5,
            "Close": 596.48999,
            "Adj Close": 596.48999,
            "Volume": 322887
          },
          {
            "Date": "2014-02-28",
            "Open": 596.48999,
            "High": 599,
            "Low": 570,
            "Close": 573.940002,
            "Adj Close": 573.940002,
            "Volume": 321170
          },
          {
            "Date": "2014-03-01",
            "Open": 573.940002,
            "High": 564.070007,
            "Low": 262.769989,
            "Close": 557.390015,
            "Adj Close": 557.390015,
            "Volume": 250331
          },
          {
            "Date": "2014-03-02",
            "Open": 557.390015,
            "High": 562.929993,
            "Low": 541.539978,
            "Close": 544.559998,
            "Adj Close": 544.559998,
            "Volume": 469498
          },
          {
            "Date": "2014-03-03",
            "Open": 544.559998,
            "High": 695.440002,
            "Low": 545.419983,
            "Close": 662.179993,
            "Adj Close": 662.179993,
            "Volume": 794976
          },
          {
            "Date": "2014-03-04",
            "Open": 662.179993,
            "High": 686.219971,
            "Low": 645.159973,
            "Close": 661.849976,
            "Adj Close": 661.849976,
            "Volume": 947328
          },
          {
            "Date": "2014-03-05",
            "Open": 661.849976,
            "High": 665.969971,
            "Low": 636.77002,
            "Close": 658.299988,
            "Adj Close": 658.299988,
            "Volume": 855787
          },
          {
            "Date": "2014-03-06",
            "Open": 658.299988,
            "High": 661.830017,
            "Low": 636.219971,
            "Close": 648.26001,
            "Adj Close": 648.26001,
            "Volume": 1367401
          },
          {
            "Date": "2014-03-07",
            "Open": 648.26001,
            "High": 655.200012,
            "Low": 600.309998,
            "Close": 616.72998,
            "Adj Close": 616.72998,
            "Volume": 1498290
          },
          {
            "Date": "2014-03-08",
            "Open": 616.72998,
            "High": 625.679993,
            "Low": 588.580017,
            "Close": 609.210022,
            "Adj Close": 609.210022,
            "Volume": 1335982
          },
          {
            "Date": "2014-03-09",
            "Open": 609.210022,
            "High": 637.599976,
            "Low": 598.51001,
            "Close": 627.049988,
            "Adj Close": 627.049988,
            "Volume": 1209993
          },
          {
            "Date": "2014-03-10",
            "Open": 627.049988,
            "High": 633.679993,
            "Low": 594.700012,
            "Close": 612.969971,
            "Adj Close": 612.969971,
            "Volume": 1648979
          },
          {
            "Date": "2014-03-11",
            "Open": 612.969971,
            "High": 619.700012,
            "Low": 599.919983,
            "Close": 608.690002,
            "Adj Close": 608.690002,
            "Volume": 1520733
          },
          {
            "Date": "2014-03-12",
            "Open": 608.690002,
            "High": 640.789978,
            "Low": 608.200012,
            "Close": 619.429993,
            "Adj Close": 619.429993,
            "Volume": 2022394
          },
          {
            "Date": "2014-03-13",
            "Open": 619.429993,
            "High": 636.130005,
            "Low": 616.059998,
            "Close": 625.039978,
            "Adj Close": 625.039978,
            "Volume": 2168407
          },
          {
            "Date": "2014-03-14",
            "Open": 625.039978,
            "High": 631.22998,
            "Low": 610.609985,
            "Close": 614.030029,
            "Adj Close": 614.030029,
            "Volume": 2514218
          },
          {
            "Date": "2014-03-15",
            "Open": 614.030029,
            "High": 628.830017,
            "Low": 609.179993,
            "Close": 624.030029,
            "Adj Close": 624.030029,
            "Volume": 2168732
          },
          {
            "Date": "2014-03-16",
            "Open": 624.030029,
            "High": 627.280029,
            "Low": 613.169983,
            "Close": 619.140015,
            "Adj Close": 619.140015,
            "Volume": 2055390
          },
          {
            "Date": "2014-03-17",
            "Open": 619.140015,
            "High": 622.48999,
            "Low": 602.73999,
            "Close": 606.380005,
            "Adj Close": 606.380005,
            "Volume": 2227123
          },
          {
            "Date": "2014-03-18",
            "Open": 606.380005,
            "High": 611.719971,
            "Low": 585.659973,
            "Close": 598.929993,
            "Adj Close": 598.929993,
            "Volume": 2234320
          },
          {
            "Date": "2014-03-19",
            "Open": 598.929993,
            "High": 607.080017,
            "Low": 590.140015,
            "Close": 594.960022,
            "Adj Close": 594.960022,
            "Volume": 2164735
          },
          {
            "Date": "2014-03-20",
            "Open": 594.960022,
            "High": 598.409973,
            "Low": 560.349976,
            "Close": 565.98999,
            "Adj Close": 565.98999,
            "Volume": 2471474
          },
          {
            "Date": "2014-03-21",
            "Open": 565.98999,
            "High": 587.419983,
            "Low": 540.219971,
            "Close": 549.599976,
            "Adj Close": 549.599976,
            "Volume": 2173864
          },
          {
            "Date": "2014-03-22",
            "Open": 549.599976,
            "High": 569.960022,
            "Low": 537.159973,
            "Close": 564.340027,
            "Adj Close": 564.340027,
            "Volume": 2078360
          },
          {
            "Date": "2014-03-23",
            "Open": 564.340027,
            "High": 564.320007,
            "Low": 538.630005,
            "Close": 551.159973,
            "Adj Close": 551.159973,
            "Volume": 2286135
          },
          {
            "Date": "2014-03-24",
            "Open": 551.159973,
            "High": 572.52002,
            "Low": 531.27002,
            "Close": 567.559998,
            "Adj Close": 567.559998,
            "Volume": 2024402
          },
          {
            "Date": "2014-03-25",
            "Open": 567.559998,
            "High": 569.659973,
            "Low": 550.429993,
            "Close": 562.890015,
            "Adj Close": 562.890015,
            "Volume": 2172190
          },
          {
            "Date": "2014-03-26",
            "Open": 562.890015,
            "High": 575.419983,
            "Low": 546.26001,
            "Close": 562.450012,
            "Adj Close": 562.450012,
            "Volume": 2087611
          },
          {
            "Date": "2014-03-27",
            "Open": 562.450012,
            "High": 567.75,
            "Low": 460.450012,
            "Close": 460.450012,
            "Adj Close": 460.450012,
            "Volume": 2010894
          },
          {
            "Date": "2014-03-28",
            "Open": 460.450012,
            "High": 514.950012,
            "Low": 453.75,
            "Close": 482.609985,
            "Adj Close": 482.609985,
            "Volume": 2022261
          },
          {
            "Date": "2014-03-29",
            "Open": 482.609985,
            "High": 494.279999,
            "Low": 473.779999,
            "Close": 477.109985,
            "Adj Close": 477.109985,
            "Volume": 2087784
          },
          {
            "Date": "2014-03-30",
            "Open": 477.109985,
            "High": 479.040009,
            "Low": 424.029999,
            "Close": 446.920013,
            "Adj Close": 446.920013,
            "Volume": 1769770
          },
          {
            "Date": "2014-03-30",
            "Open": 446.920013,
            "High": 473.429993,
            "Low": 422.48999,
            "Close": 444.660004,
            "Adj Close": 444.660004,
            "Volume": 1850592
          },
          {
            "Date": "2014-03-31",
            "Open": 444.660004,
            "High": 487.350006,
            "Low": 438.029999,
            "Close": 463.450012,
            "Adj Close": 463.450012,
            "Volume": 1845836
          },
          {
            "Date": "2014-04-01",
            "Open": 463.450012,
            "High": 480.269989,
            "Low": 409.25,
            "Close": 424.369995,
            "Adj Close": 424.369995,
            "Volume": 2004152
          },
          {
            "Date": "2014-04-02",
            "Open": 424.369995,
            "High": 448.73999,
            "Low": 386.670013,
            "Close": 436.309998,
            "Adj Close": 436.309998,
            "Volume": 1708540
          },
          {
            "Date": "2014-04-03",
            "Open": 436.309998,
            "High": 456.459991,
            "Low": 415.51001,
            "Close": 444.359985,
            "Adj Close": 444.359985,
            "Volume": 1127311
          },
          {
            "Date": "2014-04-04",
            "Open": 444.359985,
            "High": 461.170013,
            "Low": 439.369995,
            "Close": 456.630005,
            "Adj Close": 456.630005,
            "Volume": 529964
          },
          {
            "Date": "2014-04-05",
            "Open": 456.630005,
            "High": 472.380005,
            "Low": 446.299988,
            "Close": 455.690002,
            "Adj Close": 455.690002,
            "Volume": 1644846
          },
          {
            "Date": "2014-04-06",
            "Open": 455.690002,
            "High": 485.059998,
            "Low": 447.980011,
            "Close": 462.380005,
            "Adj Close": 462.380005,
            "Volume": 1847982
          },
          {
            "Date": "2014-04-07",
            "Open": 462.380005,
            "High": 480.690002,
            "Low": 457.570007,
            "Close": 466.559998,
            "Adj Close": 466.559998,
            "Volume": 1839605
          },
          {
            "Date": "2014-04-08",
            "Open": 466.559998,
            "High": 479.660004,
            "Low": 451.070007,
            "Close": 457.339996,
            "Adj Close": 457.339996,
            "Volume": 1809262
          },
          {
            "Date": "2014-04-09",
            "Open": 457.339996,
            "High": 463.450012,
            "Low": 384.630005,
            "Close": 384.630005,
            "Adj Close": 384.630005,
            "Volume": 1547153
          },
          {
            "Date": "2014-04-10",
            "Open": 384.630005,
            "High": 450.399994,
            "Low": 355.709991,
            "Close": 435.140015,
            "Adj Close": 435.140015,
            "Volume": 2175242
          },
          {
            "Date": "2014-04-11",
            "Open": 435.140015,
            "High": 469.829987,
            "Low": 428.019989,
            "Close": 437.649994,
            "Adj Close": 437.649994,
            "Volume": 2293511
          },
          {
            "Date": "2014-04-12",
            "Open": 437.649994,
            "High": 454.149994,
            "Low": 409.850006,
            "Close": 427.600006,
            "Adj Close": 427.600006,
            "Volume": 2143146
          },
          {
            "Date": "2014-04-13",
            "Open": 427.600006,
            "High": 497.829987,
            "Low": 420.079987,
            "Close": 478.380005,
            "Adj Close": 478.380005,
            "Volume": 3546258
          },
          {
            "Date": "2014-04-14",
            "Open": 478.380005,
            "High": 526.630005,
            "Low": 466.429993,
            "Close": 526.429993,
            "Adj Close": 526.429993,
            "Volume": 3945871
          },
          {
            "Date": "2014-04-15",
            "Open": 526.429993,
            "High": 549.049988,
            "Low": 496.079987,
            "Close": 536.950012,
            "Adj Close": 536.950012,
            "Volume": 4192651
          },
          {
            "Date": "2014-04-16",
            "Open": 536.950012,
            "High": 537.030029,
            "Low": 486.890015,
            "Close": 502,
            "Adj Close": 502,
            "Volume": 4097576
          },
          {
            "Date": "2014-04-17",
            "Open": 502,
            "High": 512.150024,
            "Low": 472,
            "Close": 485.519989,
            "Adj Close": 485.519989,
            "Volume": 4112826
          },
          {
            "Date": "2014-04-18",
            "Open": 485.519989,
            "High": 516.890015,
            "Low": 473.160004,
            "Close": 506.019989,
            "Adj Close": 506.019989,
            "Volume": 4154929
          },
          {
            "Date": "2014-04-19",
            "Open": 506.019989,
            "High": 522.219971,
            "Low": 488.690002,
            "Close": 498.51001,
            "Adj Close": 498.51001,
            "Volume": 3879198
          },
          {
            "Date": "2014-04-20",
            "Open": 498.51001,
            "High": 524.669983,
            "Low": 490.660004,
            "Close": 495.160004,
            "Adj Close": 495.160004,
            "Volume": 3688692
          },
          {
            "Date": "2014-04-21",
            "Open": 495.160004,
            "High": 520.51001,
            "Low": 483.390015,
            "Close": 487.910004,
            "Adj Close": 487.910004,
            "Volume": 2824567
          },
          {
            "Date": "2014-04-22",
            "Open": 487.910004,
            "High": 509.959991,
            "Low": 482.25,
            "Close": 487.299988,
            "Adj Close": 487.299988,
            "Volume": 2340457
          },
          {
            "Date": "2014-04-23",
            "Open": 487.299988,
            "High": 507.329987,
            "Low": 477.220001,
            "Close": 500.290009,
            "Adj Close": 500.290009,
            "Volume": 2075376
          },
          {
            "Date": "2014-04-24",
            "Open": 500.290009,
            "High": 502.48999,
            "Low": 438.329987,
            "Close": 464.48999,
            "Adj Close": 464.48999,
            "Volume": 3000226
          },
          {
            "Date": "2014-04-25",
            "Open": 464.48999,
            "High": 468.679993,
            "Low": 448.570007,
            "Close": 457.869995,
            "Adj Close": 457.869995,
            "Volume": 3157540
          },
          {
            "Date": "2014-04-26",
            "Open": 457.869995,
            "High": 461.399994,
            "Low": 437.390015,
            "Close": 443.179993,
            "Adj Close": 443.179993,
            "Volume": 3154922
          },
          {
            "Date": "2014-04-27",
            "Open": 443.179993,
            "High": 451.119995,
            "Low": 420.779999,
            "Close": 441.920013,
            "Adj Close": 441.920013,
            "Volume": 2004954
          },
          {
            "Date": "2014-04-28",
            "Open": 441.920013,
            "High": 453.779999,
            "Low": 430.709991,
            "Close": 446.119995,
            "Adj Close": 446.119995,
            "Volume": 1670352
          },
          {
            "Date": "2014-04-29",
            "Open": 446.119995,
            "High": 452.640015,
            "Low": 430.890015,
            "Close": 445.630005,
            "Adj Close": 445.630005,
            "Volume": 1831533
          },
          {
            "Date": "2014-04-30",
            "Open": 445.630005,
            "High": 464.48999,
            "Low": 444.51001,
            "Close": 460.130005,
            "Adj Close": 460.130005,
            "Volume": 1915772
          },
          {
            "Date": "2014-05-01",
            "Open": 460.130005,
            "High": 463.380005,
            "Low": 442,
            "Close": 453.670013,
            "Adj Close": 453.670013,
            "Volume": 1532239
          },
          {
            "Date": "2014-05-02",
            "Open": 453.670013,
            "High": 454.200012,
            "Low": 429.089996,
            "Close": 438.649994,
            "Adj Close": 438.649994,
            "Volume": 1143291
          },
          {
            "Date": "2014-05-03",
            "Open": 438.649994,
            "High": 446.609985,
            "Low": 428.790009,
            "Close": 436.049988,
            "Adj Close": 436.049988,
            "Volume": 1470650
          },
          {
            "Date": "2014-05-04",
            "Open": 436.049988,
            "High": 443.859985,
            "Low": 426.369995,
            "Close": 430.869995,
            "Adj Close": 430.869995,
            "Volume": 1328247
          },
          {
            "Date": "2014-05-05",
            "Open": 430.869995,
            "High": 434.950012,
            "Low": 420.230011,
            "Close": 432.190002,
            "Adj Close": 432.190002,
            "Volume": 1809731
          },
          {
            "Date": "2014-05-06",
            "Open": 432.190002,
            "High": 458.779999,
            "Low": 423.549988,
            "Close": 446.549988,
            "Adj Close": 446.549988,
            "Volume": 2209759
          },
          {
            "Date": "2014-05-07",
            "Open": 446.549988,
            "High": 455.5,
            "Low": 439.5,
            "Close": 441.109985,
            "Adj Close": 441.109985,
            "Volume": 1134338
          },
          {
            "Date": "2014-05-08",
            "Open": 441.109985,
            "High": 455.779999,
            "Low": 438.5,
            "Close": 445.450012,
            "Adj Close": 445.450012,
            "Volume": 1013830
          },
          {
            "Date": "2014-05-09",
            "Open": 445.450012,
            "High": 459.459991,
            "Low": 441.429993,
            "Close": 451.899994,
            "Adj Close": 451.899994,
            "Volume": 210112
          },
          {
            "Date": "2014-05-10",
            "Open": 451.899994,
            "High": 455.399994,
            "Low": 429.019989,
            "Close": 433.230011,
            "Adj Close": 433.230011,
            "Volume": 845213
          },
          {
            "Date": "2014-05-11",
            "Open": 433.230011,
            "High": 441.070007,
            "Low": 430.190002,
            "Close": 438.209991,
            "Adj Close": 438.209991,
            "Volume": 610287
          },
          {
            "Date": "2014-05-12",
            "Open": 438.209991,
            "High": 442.269989,
            "Low": 432.73999,
            "Close": 433.920013,
            "Adj Close": 433.920013,
            "Volume": 1164049
          },
          {
            "Date": "2014-05-13",
            "Open": 433.920013,
            "High": 444.279999,
            "Low": 433.880005,
            "Close": 442.630005,
            "Adj Close": 442.630005,
            "Volume": 978031
          },
          {
            "Date": "2014-05-14",
            "Open": 442.630005,
            "High": 450.029999,
            "Low": 441.470001,
            "Close": 448.100006,
            "Adj Close": 448.100006,
            "Volume": 989003
          },
          {
            "Date": "2014-05-15",
            "Open": 448.100006,
            "High": 455.149994,
            "Low": 441.859985,
            "Close": 453.630005,
            "Adj Close": 453.630005,
            "Volume": 799913
          },
          {
            "Date": "2014-05-16",
            "Open": 453.630005,
            "High": 455.940002,
            "Low": 452.230011,
            "Close": 452.790009,
            "Adj Close": 452.790009,
            "Volume": 776390
          },
          {
            "Date": "2014-05-17",
            "Open": 452.790009,
            "High": 454,
            "Low": 449.040009,
            "Close": 450.140015,
            "Adj Close": 450.140015,
            "Volume": 653912
          },
          {
            "Date": "2014-05-18",
            "Open": 450.140015,
            "High": 451.690002,
            "Low": 441.200012,
            "Close": 443.899994,
            "Adj Close": 443.899994,
            "Volume": 602742
          },
          {
            "Date": "2014-05-19",
            "Open": 443.899994,
            "High": 486.230011,
            "Low": 437.25,
            "Close": 484.570007,
            "Adj Close": 484.570007,
            "Volume": 883359
          },
          {
            "Date": "2014-05-20",
            "Open": 484.570007,
            "High": 495.209991,
            "Low": 481.730011,
            "Close": 488.839996,
            "Adj Close": 488.839996,
            "Volume": 689104
          },
          {
            "Date": "2014-05-21",
            "Open": 488.839996,
            "High": 519.25,
            "Low": 485.549988,
            "Close": 515.359985,
            "Adj Close": 515.359985,
            "Volume": 1589075
          },
          {
            "Date": "2014-05-22",
            "Open": 515.359985,
            "High": 540.880005,
            "Low": 515.179993,
            "Close": 518.090027,
            "Adj Close": 518.090027,
            "Volume": 1457339
          },
          {
            "Date": "2014-05-23",
            "Open": 518.090027,
            "High": 526.650024,
            "Low": 510.420013,
            "Close": 520.460022,
            "Adj Close": 520.460022,
            "Volume": 1492790
          },
          {
            "Date": "2014-05-24",
            "Open": 520.460022,
            "High": 575.190002,
            "Low": 520.530029,
            "Close": 570.440002,
            "Adj Close": 570.440002,
            "Volume": 1037758
          },
          {
            "Date": "2014-05-25",
            "Open": 570.440002,
            "High": 586.409973,
            "Low": 564.650024,
            "Close": 582.01001,
            "Adj Close": 582.01001,
            "Volume": 1712997
          },
          {
            "Date": "2014-05-26",
            "Open": 582.01001,
            "High": 586.219971,
            "Low": 555.280029,
            "Close": 570.099976,
            "Adj Close": 570.099976,
            "Volume": 1947436
          },
          {
            "Date": "2014-05-27",
            "Open": 570.099976,
            "High": 581.809998,
            "Low": 562.559998,
            "Close": 570.840027,
            "Adj Close": 570.840027,
            "Volume": 2054559
          },
          {
            "Date": "2014-05-28",
            "Open": 570.840027,
            "High": 573.830017,
            "Low": 557.700012,
            "Close": 564.419983,
            "Adj Close": 564.419983,
            "Volume": 2121556
          },
          {
            "Date": "2014-05-29",
            "Open": 564.419983,
            "High": 613.26001,
            "Low": 564.02002,
            "Close": 612.349976,
            "Adj Close": 612.349976,
            "Volume": 3688564
          },
          {
            "Date": "2014-05-30",
            "Open": 612.349976,
            "High": 629.039978,
            "Low": 604.72998,
            "Close": 627.909973,
            "Adj Close": 627.909973,
            "Volume": 2738340
          },
          {
            "Date": "2014-05-31",
            "Open": 627.909973,
            "High": 674.97998,
            "Low": 621.950012,
            "Close": 649.789978,
            "Adj Close": 649.789978,
            "Volume": 2322782
          },
          {
            "Date": "2014-06-01",
            "Open": 649.789978,
            "High": 662.630005,
            "Low": 625.460022,
            "Close": 655.48999,
            "Adj Close": 655.48999,
            "Volume": 2650871
          },
          {
            "Date": "2014-06-02",
            "Open": 655.48999,
            "High": 676.469971,
            "Low": 631.419983,
            "Close": 669.429993,
            "Adj Close": 669.429993,
            "Volume": 2883100
          },
          {
            "Date": "2014-06-03",
            "Open": 669.429993,
            "High": 669.780029,
            "Low": 602.099976,
            "Close": 638.929993,
            "Adj Close": 638.929993,
            "Volume": 3601867
          },
          {
            "Date": "2014-06-04",
            "Open": 638.929993,
            "High": 665.390015,
            "Low": 635.590027,
            "Close": 660.179993,
            "Adj Close": 660.179993,
            "Volume": 1825395
          },
          {
            "Date": "2014-06-05",
            "Open": 660.179993,
            "High": 663.840027,
            "Low": 647.119995,
            "Close": 650.409973,
            "Adj Close": 650.409973,
            "Volume": 3978265
          },
          {
            "Date": "2014-06-06",
            "Open": 650.409973,
            "High": 659.77002,
            "Low": 641.02002,
            "Close": 651.669983,
            "Adj Close": 651.669983,
            "Volume": 1298892
          },
          {
            "Date": "2014-06-07",
            "Open": 651.669983,
            "High": 658.880005,
            "Low": 648.669983,
            "Close": 651.049988,
            "Adj Close": 651.049988,
            "Volume": 2167689
          },
          {
            "Date": "2014-06-08",
            "Open": 651.049988,
            "High": 652.119995,
            "Low": 639.080017,
            "Close": 644.349976,
            "Adj Close": 644.349976,
            "Volume": 2126014
          },
          {
            "Date": "2014-06-09",
            "Open": 644.349976,
            "High": 661.440002,
            "Low": 641.679993,
            "Close": 655.619995,
            "Adj Close": 655.619995,
            "Volume": 2340867
          },
          {
            "Date": "2014-06-10",
            "Open": 655.619995,
            "High": 663.039978,
            "Low": 642.280029,
            "Close": 642.950012,
            "Adj Close": 642.950012,
            "Volume": 2491455
          },
          {
            "Date": "2014-06-11",
            "Open": 642.950012,
            "High": 643.799988,
            "Low": 591.119995,
            "Close": 597.130005,
            "Adj Close": 597.130005,
            "Volume": 2928622
          },
          {
            "Date": "2014-06-12",
            "Open": 597.130005,
            "High": 619.140015,
            "Low": 594.869995,
            "Close": 610.349976,
            "Adj Close": 610.349976,
            "Volume": 4612164
          },
          {
            "Date": "2014-06-13",
            "Open": 610.349976,
            "High": 613.77002,
            "Low": 563.679993,
            "Close": 583.419983,
            "Adj Close": 583.419983,
            "Volume": 2985483
          },
          {
            "Date": "2014-06-14",
            "Open": 583.419983,
            "High": 587.830017,
            "Low": 560.849976,
            "Close": 582.289978,
            "Adj Close": 582.289978,
            "Volume": 2272289
          },
          {
            "Date": "2014-06-15",
            "Open": 582.289978,
            "High": 606.140015,
            "Low": 580.450012,
            "Close": 599.080017,
            "Adj Close": 599.080017,
            "Volume": 2403694
          },
          {
            "Date": "2014-06-16",
            "Open": 599.080017,
            "High": 608.429993,
            "Low": 594.859985,
            "Close": 605.090027,
            "Adj Close": 605.090027,
            "Volume": 1820590
          },
          {
            "Date": "2014-06-17",
            "Open": 605.090027,
            "High": 614.400024,
            "Low": 603.609985,
            "Close": 606.210022,
            "Adj Close": 606.210022,
            "Volume": 2037434
          },
          {
            "Date": "2014-06-18",
            "Open": 606.210022,
            "High": 612.580017,
            "Low": 598.669983,
            "Close": 600.169983,
            "Adj Close": 600.169983,
            "Volume": 3433287
          },
          {
            "Date": "2014-06-19",
            "Open": 600.169983,
            "High": 602.049988,
            "Low": 587.099976,
            "Close": 590.75,
            "Adj Close": 590.75,
            "Volume": 1312852
          },
          {
            "Date": "2014-06-20",
            "Open": 590.75,
            "High": 599.210022,
            "Low": 584.820007,
            "Close": 597.039978,
            "Adj Close": 597.039978,
            "Volume": 1373722
          },
          {
            "Date": "2014-06-21",
            "Open": 597.039978,
            "High": 610.080017,
            "Low": 591.98999,
            "Close": 603.619995,
            "Adj Close": 603.619995,
            "Volume": 1240859
          },
          {
            "Date": "2014-06-22",
            "Open": 603.619995,
            "High": 604.650024,
            "Low": 582.859985,
            "Close": 591.169983,
            "Adj Close": 591.169983,
            "Volume": 1594834
          },
          {
            "Date": "2014-06-23",
            "Open": 591.169983,
            "High": 595.650024,
            "Low": 585.409973,
            "Close": 588.77002,
            "Adj Close": 588.77002,
            "Volume": 1840620
          },
          {
            "Date": "2014-06-24",
            "Open": 588.77002,
            "High": 589.559998,
            "Low": 566.880005,
            "Close": 568.450012,
            "Adj Close": 568.450012,
            "Volume": 1797681
          },
          {
            "Date": "2014-06-25",
            "Open": 568.450012,
            "High": 582.710022,
            "Low": 565.849976,
            "Close": 582.700012,
            "Adj Close": 582.700012,
            "Volume": 2401035
          },
          {
            "Date": "2014-06-26",
            "Open": 582.700012,
            "High": 603.940002,
            "Low": 580.140015,
            "Close": 602.22998,
            "Adj Close": 602.22998,
            "Volume": 2015064
          },
          {
            "Date": "2014-06-27",
            "Open": 602.22998,
            "High": 608.76001,
            "Low": 593.969971,
            "Close": 597.559998,
            "Adj Close": 597.559998,
            "Volume": 1778752
          },
          {
            "Date": "2014-06-28",
            "Open": 597.559998,
            "High": 604.280029,
            "Low": 593.190002,
            "Close": 601.059998,
            "Adj Close": 601.059998,
            "Volume": 1736172
          },
          {
            "Date": "2014-06-29",
            "Open": 601.059998,
            "High": 637.280029,
            "Low": 596.549988,
            "Close": 635.140015,
            "Adj Close": 635.140015,
            "Volume": 2394861
          },
          {
            "Date": "2014-06-30",
            "Open": 635.140015,
            "High": 652.539978,
            "Low": 634.090027,
            "Close": 643.190002,
            "Adj Close": 643.190002,
            "Volume": 2675353
          },
          {
            "Date": "2014-07-01",
            "Open": 643.190002,
            "High": 652.099976,
            "Low": 604.580017,
            "Close": 645.719971,
            "Adj Close": 645.719971,
            "Volume": 3099761
          },
          {
            "Date": "2014-07-02",
            "Open": 645.719971,
            "High": 646.400024,
            "Low": 633.580017,
            "Close": 638.030029,
            "Adj Close": 638.030029,
            "Volume": 2580980
          },
          {
            "Date": "2014-07-03",
            "Open": 638.030029,
            "High": 642.219971,
            "Low": 623.039978,
            "Close": 623.960022,
            "Adj Close": 623.960022,
            "Volume": 2291612
          },
          {
            "Date": "2014-07-04",
            "Open": 623.960022,
            "High": 627.799988,
            "Low": 619.690002,
            "Close": 622.960022,
            "Adj Close": 622.960022,
            "Volume": 2034965
          },
          {
            "Date": "2014-07-05",
            "Open": 622.960022,
            "High": 629.440002,
            "Low": 622.650024,
            "Close": 626.650024,
            "Adj Close": 626.650024,
            "Volume": 1698242
          },
          {
            "Date": "2014-07-06",
            "Open": 626.650024,
            "High": 627.929993,
            "Low": 607.320007,
            "Close": 613.599976,
            "Adj Close": 613.599976,
            "Volume": 1590944
          },
          {
            "Date": "2014-07-07",
            "Open": 613.599976,
            "High": 619.650024,
            "Low": 609.349976,
            "Close": 615.320007,
            "Adj Close": 615.320007,
            "Volume": 2004899
          },
          {
            "Date": "2014-07-08",
            "Open": 615.320007,
            "High": 623.820007,
            "Low": 610.530029,
            "Close": 623,
            "Adj Close": 623,
            "Volume": 1920482
          },
          {
            "Date": "2014-07-09",
            "Open": 623,
            "High": 624.950012,
            "Low": 611.659973,
            "Close": 618.390015,
            "Adj Close": 618.390015,
            "Volume": 2253171
          },
          {
            "Date": "2014-07-10",
            "Open": 618.390015,
            "High": 633.619995,
            "Low": 616.109985,
            "Close": 632.900024,
            "Adj Close": 632.900024,
            "Volume": 1969199
          },
          {
            "Date": "2014-07-11",
            "Open": 632.900024,
            "High": 638.590027,
            "Low": 625.900024,
            "Close": 635.900024,
            "Adj Close": 635.900024,
            "Volume": 2179286
          },
          {
            "Date": "2014-07-12",
            "Open": 635.900024,
            "High": 638.640015,
            "Low": 627.539978,
            "Close": 628.030029,
            "Adj Close": 628.030029,
            "Volume": 1082830
          },
          {
            "Date": "2014-07-13",
            "Open": 628.030029,
            "High": 628.98999,
            "Low": 616.059998,
            "Close": 618.320007,
            "Adj Close": 618.320007,
            "Volume": 1601572
          },
          {
            "Date": "2014-07-14",
            "Open": 618.320007,
            "High": 624.419983,
            "Low": 617.299988,
            "Close": 619.599976,
            "Adj Close": 619.599976,
            "Volume": 2310446
          },
          {
            "Date": "2014-07-15",
            "Open": 619.599976,
            "High": 622.359985,
            "Low": 614.150024,
            "Close": 614.799988,
            "Adj Close": 614.799988,
            "Volume": 1873008
          },
          {
            "Date": "2014-07-16",
            "Open": 614.799988,
            "High": 632.549988,
            "Low": 610.01001,
            "Close": 626.580017,
            "Adj Close": 626.580017,
            "Volume": 1833775
          },
          {
            "Date": "2014-07-17",
            "Open": 626.580017,
            "High": 630.150024,
            "Low": 617.919983,
            "Close": 627.469971,
            "Adj Close": 627.469971,
            "Volume": 2109225
          },
          {
            "Date": "2014-07-18",
            "Open": 627.469971,
            "High": 634.140015,
            "Low": 625.140015,
            "Close": 627.039978,
            "Adj Close": 627.039978,
            "Volume": 2505181
          },
          {
            "Date": "2014-07-19",
            "Open": 627.039978,
            "High": 627.929993,
            "Low": 619.960022,
            "Close": 620.97998,
            "Adj Close": 620.97998,
            "Volume": 1442853
          },
          {
            "Date": "2014-07-20",
            "Open": 620.97998,
            "High": 625.929993,
            "Low": 615.02002,
            "Close": 625.130005,
            "Adj Close": 625.130005,
            "Volume": 1596614
          },
          {
            "Date": "2014-07-21",
            "Open": 625.130005,
            "High": 628.809998,
            "Low": 620,
            "Close": 622.530029,
            "Adj Close": 622.530029,
            "Volume": 2068876
          },
          {
            "Date": "2014-07-22",
            "Open": 622.530029,
            "High": 624.98999,
            "Low": 621,
            "Close": 621.690002,
            "Adj Close": 621.690002,
            "Volume": 1372935
          },
          {
            "Date": "2014-07-23",
            "Open": 621.690002,
            "High": 621.960022,
            "Low": 599.380005,
            "Close": 601.869995,
            "Adj Close": 601.869995,
            "Volume": 2896094
          },
          {
            "Date": "2014-07-24",
            "Open": 601.869995,
            "High": 609.059998,
            "Low": 597.400024,
            "Close": 600.5,
            "Adj Close": 600.5,
            "Volume": 3592179
          },
          {
            "Date": "2014-07-25",
            "Open": 600.5,
            "High": 602.97998,
            "Low": 593.25,
            "Close": 596,
            "Adj Close": 596,
            "Volume": 2095634
          },
          {
            "Date": "2014-07-26",
            "Open": 596,
            "High": 601.48999,
            "Low": 593.690002,
            "Close": 595.030029,
            "Adj Close": 595.030029,
            "Volume": 2118021
          },
          {
            "Date": "2014-07-27",
            "Open": 595.030029,
            "High": 597.48999,
            "Low": 578.140015,
            "Close": 587.929993,
            "Adj Close": 587.929993,
            "Volume": 1391966
          },
          {
            "Date": "2014-07-28",
            "Open": 587.929993,
            "High": 591.280029,
            "Low": 579.530029,
            "Close": 585.77002,
            "Adj Close": 585.77002,
            "Volume": 3962906
          },
          {
            "Date": "2014-07-29",
            "Open": 585.77002,
            "High": 586.130005,
            "Low": 564.179993,
            "Close": 564.640015,
            "Adj Close": 564.640015,
            "Volume": 2397473
          },
          {
            "Date": "2014-07-30",
            "Open": 564.640015,
            "High": 593.72998,
            "Low": 564.01001,
            "Close": 589.52002,
            "Adj Close": 589.52002,
            "Volume": 2057947
          },
          {
            "Date": "2014-07-31",
            "Open": 589.52002,
            "High": 603.98999,
            "Low": 586.429993,
            "Close": 598.780029,
            "Adj Close": 598.780029,
            "Volume": 5356663
          },
          {
            "Date": "2014-08-01",
            "Open": 598.780029,
            "High": 598.909973,
            "Low": 587.419983,
            "Close": 591.719971,
            "Adj Close": 591.719971,
            "Volume": 1278807
          },
          {
            "Date": "2014-08-02",
            "Open": 591.719971,
            "High": 592.059998,
            "Low": 580.619995,
            "Close": 588.940002,
            "Adj Close": 588.940002,
            "Volume": 752201
          },
          {
            "Date": "2014-08-03",
            "Open": 588.940002,
            "High": 595.090027,
            "Low": 586.48999,
            "Close": 592.77002,
            "Adj Close": 592.77002,
            "Volume": 2047890
          },
          {
            "Date": "2014-08-04",
            "Open": 592.77002,
            "High": 594.25,
            "Low": 585.440002,
            "Close": 588.76001,
            "Adj Close": 588.76001,
            "Volume": 2429310
          },
          {
            "Date": "2014-08-05",
            "Open": 588.76001,
            "High": 593.789978,
            "Low": 587.200012,
            "Close": 589.77002,
            "Adj Close": 589.77002,
            "Volume": 1785940
          },
          {
            "Date": "2014-08-06",
            "Open": 589.77002,
            "High": 595.080017,
            "Low": 587.919983,
            "Close": 592.799988,
            "Adj Close": 592.799988,
            "Volume": 1485017
          },
          {
            "Date": "2014-08-07",
            "Open": 592.799988,
            "High": 608.200012,
            "Low": 592.080017,
            "Close": 595.849976,
            "Adj Close": 595.849976,
            "Volume": 1873039
          },
          {
            "Date": "2014-08-08",
            "Open": 595.849976,
            "High": 595.559998,
            "Low": 587.409973,
            "Close": 589.52002,
            "Adj Close": 589.52002,
            "Volume": 843722
          },
          {
            "Date": "2014-08-09",
            "Open": 589.52002,
            "High": 596.640015,
            "Low": 588.059998,
            "Close": 592.059998,
            "Adj Close": 592.059998,
            "Volume": 796584
          },
          {
            "Date": "2014-08-10",
            "Open": 592.059998,
            "High": 593.619995,
            "Low": 571.719971,
            "Close": 575.890015,
            "Adj Close": 575.890015,
            "Volume": 1512262
          },
          {
            "Date": "2014-08-11",
            "Open": 575.890015,
            "High": 578.289978,
            "Low": 561.97998,
            "Close": 567.659973,
            "Adj Close": 567.659973,
            "Volume": 1894843
          },
          {
            "Date": "2014-08-12",
            "Open": 567.659973,
            "High": 573.51001,
            "Low": 523.150024,
            "Close": 542.099976,
            "Adj Close": 542.099976,
            "Volume": 2659458
          },
          {
            "Date": "2014-08-13",
            "Open": 542.099976,
            "High": 544.940002,
            "Low": 495.940002,
            "Close": 504.799988,
            "Adj Close": 504.799988,
            "Volume": 5608470
          },
          {
            "Date": "2014-08-14",
            "Open": 504.799988,
            "High": 515.23999,
            "Low": 483.209991,
            "Close": 496.450012,
            "Adj Close": 496.450012,
            "Volume": 2407799
          },
          {
            "Date": "2014-08-15",
            "Open": 496.450012,
            "High": 524.25,
            "Low": 483.23999,
            "Close": 522.01001,
            "Adj Close": 522.01001,
            "Volume": 1956441
          },
          {
            "Date": "2014-08-16",
            "Open": 522.01001,
            "High": 524.710022,
            "Low": 478.220001,
            "Close": 485.5,
            "Adj Close": 485.5,
            "Volume": 1584568
          },
          {
            "Date": "2014-08-17",
            "Open": 485.5,
            "High": 493.26001,
            "Low": 449.950012,
            "Close": 462.179993,
            "Adj Close": 462.179993,
            "Volume": 2991012
          },
          {
            "Date": "2014-08-18",
            "Open": 462.179993,
            "High": 487.049988,
            "Low": 455.799988,
            "Close": 485.119995,
            "Adj Close": 485.119995,
            "Volume": 2458098
          },
          {
            "Date": "2014-08-19",
            "Open": 485.119995,
            "High": 521.840027,
            "Low": 468.51001,
            "Close": 516.780029,
            "Adj Close": 516.780029,
            "Volume": 2965577
          },
          {
            "Date": "2014-08-20",
            "Open": 516.780029,
            "High": 537.169983,
            "Low": 511.359985,
            "Close": 517.940002,
            "Adj Close": 517.940002,
            "Volume": 2974478
          },
          {
            "Date": "2014-08-21",
            "Open": 517.940002,
            "High": 524.440002,
            "Low": 500.570007,
            "Close": 516.099976,
            "Adj Close": 516.099976,
            "Volume": 3116862
          },
          {
            "Date": "2014-08-22",
            "Open": 516.099976,
            "High": 516.820007,
            "Low": 493.980011,
            "Close": 497.679993,
            "Adj Close": 497.679993,
            "Volume": 1596652
          },
          {
            "Date": "2014-08-23",
            "Open": 497.679993,
            "High": 514.820007,
            "Low": 496.809998,
            "Close": 509.709991,
            "Adj Close": 509.709991,
            "Volume": 1294320
          },
          {
            "Date": "2014-08-24",
            "Open": 509.709991,
            "High": 511.329987,
            "Low": 499.709991,
            "Close": 502.929993,
            "Adj Close": 502.929993,
            "Volume": 1409621
          },
          {
            "Date": "2014-08-25",
            "Open": 502.929993,
            "High": 516.039978,
            "Low": 501.809998,
            "Close": 512.559998,
            "Adj Close": 512.559998,
            "Volume": 1831000
          },
          {
            "Date": "2014-08-26",
            "Open": 512.559998,
            "High": 527.369995,
            "Low": 512.659973,
            "Close": 515.22998,
            "Adj Close": 515.22998,
            "Volume": 1982424
          },
          {
            "Date": "2014-08-27",
            "Open": 515.22998,
            "High": 521.590027,
            "Low": 503.339996,
            "Close": 510.75,
            "Adj Close": 510.75,
            "Volume": 2307082
          },
          {
            "Date": "2014-08-28",
            "Open": 510.75,
            "High": 515.179993,
            "Low": 506.690002,
            "Close": 512.559998,
            "Adj Close": 512.559998,
            "Volume": 1876846
          },
          {
            "Date": "2014-08-29",
            "Open": 512.559998,
            "High": 512.909973,
            "Low": 503.119995,
            "Close": 505.959991,
            "Adj Close": 505.959991,
            "Volume": 1337420
          },
          {
            "Date": "2014-08-30",
            "Open": 505.959991,
            "High": 508.339996,
            "Low": 478.309998,
            "Close": 481.779999,
            "Adj Close": 481.779999,
            "Volume": 2982601
          },
          {
            "Date": "2014-08-31",
            "Open": 481.779999,
            "High": 487.470001,
            "Low": 471.779999,
            "Close": 477.190002,
            "Adj Close": 477.190002,
            "Volume": 3261178
          },
          {
            "Date": "2014-09-01",
            "Open": 477.190002,
            "High": 486.98999,
            "Low": 470.540009,
            "Close": 478.940002,
            "Adj Close": 478.940002,
            "Volume": 3291738
          },
          {
            "Date": "2014-09-02",
            "Open": 478.940002,
            "High": 487.290009,
            "Low": 476.820007,
            "Close": 480.040009,
            "Adj Close": 480.040009,
            "Volume": 3018772
          },
          {
            "Date": "2014-09-03",
            "Open": 480.040009,
            "High": 498.470001,
            "Low": 476.26001,
            "Close": 490.98999,
            "Adj Close": 490.98999,
            "Volume": 4345165
          },
          {
            "Date": "2014-09-04",
            "Open": 490.98999,
            "High": 495.019989,
            "Low": 483.070007,
            "Close": 483.649994,
            "Adj Close": 483.649994,
            "Volume": 3013185
          },
          {
            "Date": "2014-09-05",
            "Open": 483.649994,
            "High": 491.380005,
            "Low": 480.790009,
            "Close": 484.470001,
            "Adj Close": 484.470001,
            "Volume": 1883095
          },
          {
            "Date": "2014-09-06",
            "Open": 484.470001,
            "High": 490.720001,
            "Low": 478.48999,
            "Close": 485.75,
            "Adj Close": 485.75,
            "Volume": 1755360
          },
          {
            "Date": "2014-09-07",
            "Open": 485.75,
            "High": 487.019989,
            "Low": 469.5,
            "Close": 475.690002,
            "Adj Close": 475.690002,
            "Volume": 3948928
          },
          {
            "Date": "2014-09-08",
            "Open": 475.690002,
            "High": 478.600006,
            "Low": 467.519989,
            "Close": 474.899994,
            "Adj Close": 474.899994,
            "Volume": 3529051
          },
          {
            "Date": "2014-09-09",
            "Open": 474.899994,
            "High": 491.040009,
            "Low": 471.570007,
            "Close": 479.700012,
            "Adj Close": 479.700012,
            "Volume": 4058785
          },
          {
            "Date": "2014-09-10",
            "Open": 479.700012,
            "High": 488.920013,
            "Low": 474.570007,
            "Close": 478.48999,
            "Adj Close": 478.48999,
            "Volume": 3086920
          },
          {
            "Date": "2014-09-11",
            "Open": 478.48999,
            "High": 479.709991,
            "Low": 471.140015,
            "Close": 477.730011,
            "Adj Close": 477.730011,
            "Volume": 2514548
          },
          {
            "Date": "2014-09-12",
            "Open": 477.730011,
            "High": 480.640015,
            "Low": 474.640015,
            "Close": 478.170013,
            "Adj Close": 478.170013,
            "Volume": 2569793
          },
          {
            "Date": "2014-09-13",
            "Open": 478.170013,
            "High": 480.329987,
            "Low": 471.959991,
            "Close": 477.73999,
            "Adj Close": 477.73999,
            "Volume": 2031789
          },
          {
            "Date": "2014-09-14",
            "Open": 477.73999,
            "High": 479.279999,
            "Low": 473.700012,
            "Close": 477.709991,
            "Adj Close": 477.709991,
            "Volume": 2753462
          },
          {
            "Date": "2014-09-15",
            "Open": 477.709991,
            "High": 478.809998,
            "Low": 463.950012,
            "Close": 466.75,
            "Adj Close": 466.75,
            "Volume": 3139554
          },
          {
            "Date": "2014-09-16",
            "Open": 466.75,
            "High": 469.390015,
            "Low": 458.269989,
            "Close": 461.089996,
            "Adj Close": 461.089996,
            "Volume": 3522262
          },
          {
            "Date": "2014-09-17",
            "Open": 461.089996,
            "High": 462.26001,
            "Low": 408.769989,
            "Close": 424.26001,
            "Adj Close": 424.26001,
            "Volume": 3946908
          },
          {
            "Date": "2014-09-18",
            "Open": 424.26001,
            "High": 429.170013,
            "Low": 386.100006,
            "Close": 397.670013,
            "Adj Close": 397.670013,
            "Volume": 6062707
          },
          {
            "Date": "2014-09-19",
            "Open": 397.670013,
            "High": 427.690002,
            "Low": 387.5,
            "Close": 411.529999,
            "Adj Close": 411.529999,
            "Volume": 5919676
          },
          {
            "Date": "2014-09-20",
            "Open": 411.529999,
            "High": 415.070007,
            "Low": 394.519989,
            "Close": 401.619995,
            "Adj Close": 401.619995,
            "Volume": 4229727
          },
          {
            "Date": "2014-09-21",
            "Open": 401.619995,
            "High": 410.75,
            "Low": 398.600006,
            "Close": 404.089996,
            "Adj Close": 404.089996,
            "Volume": 5531782
          },
          {
            "Date": "2014-09-22",
            "Open": 404.089996,
            "High": 445.51001,
            "Low": 394.75,
            "Close": 436.859985,
            "Adj Close": 436.859985,
            "Volume": 7490861
          },
          {
            "Date": "2014-09-23",
            "Open": 436.859985,
            "High": 439.190002,
            "Low": 422.100006,
            "Close": 423.769989,
            "Adj Close": 423.769989,
            "Volume": 9217984
          },
          {
            "Date": "2014-09-24",
            "Open": 423.769989,
            "High": 427.549988,
            "Low": 409.559998,
            "Close": 412.290009,
            "Adj Close": 412.290009,
            "Volume": 6143388
          },
          {
            "Date": "2014-09-25",
            "Open": 412.290009,
            "High": 416.420013,
            "Low": 399.700012,
            "Close": 404.459991,
            "Adj Close": 404.459991,
            "Volume": 4966479
          },
          {
            "Date": "2014-09-26",
            "Open": 404.459991,
            "High": 407.070007,
            "Low": 394.690002,
            "Close": 399.019989,
            "Adj Close": 399.019989,
            "Volume": 3950428
          },
          {
            "Date": "2014-09-27",
            "Open": 399.019989,
            "High": 402.269989,
            "Low": 374.119995,
            "Close": 379.079987,
            "Adj Close": 379.079987,
            "Volume": 5453338
          },
          {
            "Date": "2014-09-28",
            "Open": 379.079987,
            "High": 389.26001,
            "Low": 372.630005,
            "Close": 376.769989,
            "Adj Close": 376.769989,
            "Volume": 7924759
          },
          {
            "Date": "2014-09-29",
            "Open": 376.769989,
            "High": 395.179993,
            "Low": 374.730011,
            "Close": 388.170013,
            "Adj Close": 388.170013,
            "Volume": 6520432
          },
          {
            "Date": "2014-09-30",
            "Open": 388.170013,
            "High": 395.130005,
            "Low": 381.109985,
            "Close": 382.839996,
            "Adj Close": 382.839996,
            "Volume": 6892843
          },
          {
            "Date": "2014-10-01",
            "Open": 382.839996,
            "High": 385.589996,
            "Low": 371.200012,
            "Close": 375.140015,
            "Adj Close": 375.140015,
            "Volume": 5471103
          },
          {
            "Date": "2014-10-02",
            "Open": 375.140015,
            "High": 378.220001,
            "Low": 362.809998,
            "Close": 363.450012,
            "Adj Close": 363.450012,
            "Volume": 6278574
          },
          {
            "Date": "2014-10-03",
            "Open": 363.450012,
            "High": 369.880005,
            "Low": 327.100006,
            "Close": 335.320007,
            "Adj Close": 335.320007,
            "Volume": 8050734
          },
          {
            "Date": "2014-10-04",
            "Open": 335.320007,
            "High": 344.25,
            "Low": 294.920013,
            "Close": 322.859985,
            "Adj Close": 322.859985,
            "Volume": 9512572
          },
          {
            "Date": "2014-10-05",
            "Open": 322.859985,
            "High": 347.940002,
            "Low": 303.049988,
            "Close": 331.549988,
            "Adj Close": 331.549988,
            "Volume": 13642089
          },
          {
            "Date": "2014-10-06",
            "Open": 331.549988,
            "High": 345.51001,
            "Low": 321.73999,
            "Close": 331.649994,
            "Adj Close": 331.649994,
            "Volume": 10076018
          },
          {
            "Date": "2014-10-07",
            "Open": 331.649994,
            "High": 351.640015,
            "Low": 325.429993,
            "Close": 350.869995,
            "Adj Close": 350.869995,
            "Volume": 7413499
          },
          {
            "Date": "2014-10-08",
            "Open": 350.869995,
            "High": 384.609985,
            "Low": 347.570007,
            "Close": 360.910004,
            "Adj Close": 360.910004,
            "Volume": 13020038
          },
          {
            "Date": "2014-10-09",
            "Open": 360.910004,
            "High": 378.130005,
            "Low": 353.320007,
            "Close": 361.709991,
            "Adj Close": 361.709991,
            "Volume": 10394856
          },
          {
            "Date": "2014-10-10",
            "Open": 361.709991,
            "High": 370.149994,
            "Low": 350.48999,
            "Close": 361.220001,
            "Adj Close": 361.220001,
            "Volume": 5049013
          },
          {
            "Date": "2014-10-11",
            "Open": 361.220001,
            "High": 374.570007,
            "Low": 352.25,
            "Close": 373.170013,
            "Adj Close": 373.170013,
            "Volume": 4077867
          },
          {
            "Date": "2014-10-12",
            "Open": 373.170013,
            "High": 391.220001,
            "Low": 366.040009,
            "Close": 387.320007,
            "Adj Close": 387.320007,
            "Volume": 8935310
          },
          {
            "Date": "2014-10-13",
            "Open": 387.320007,
            "High": 407.73999,
            "Low": 385.720001,
            "Close": 397.100006,
            "Adj Close": 397.100006,
            "Volume": 11549913
          },
          {
            "Date": "2014-10-14",
            "Open": 397.100006,
            "High": 397.869995,
            "Low": 388.230011,
            "Close": 393.170013,
            "Adj Close": 393.170013,
            "Volume": 8867207
          },
          {
            "Date": "2014-10-15",
            "Open": 393.170013,
            "High": 398.839996,
            "Low": 371.559998,
            "Close": 379.769989,
            "Adj Close": 379.769989,
            "Volume": 7999668
          },
          {
            "Date": "2014-10-16",
            "Open": 379.769989,
            "High": 384.76001,
            "Low": 372.420013,
            "Close": 380.480011,
            "Adj Close": 380.480011,
            "Volume": 6324477
          },
          {
            "Date": "2014-10-17",
            "Open": 380.480011,
            "High": 395.709991,
            "Low": 373.579987,
            "Close": 390.880005,
            "Adj Close": 390.880005,
            "Volume": 3657801
          },
          {
            "Date": "2014-10-18",
            "Open": 390.880005,
            "High": 394.48999,
            "Low": 383.920013,
            "Close": 387.279999,
            "Adj Close": 387.279999,
            "Volume": 2088508
          },
          {
            "Date": "2014-10-19",
            "Open": 387.279999,
            "High": 387.769989,
            "Low": 378.420013,
            "Close": 380.390015,
            "Adj Close": 380.390015,
            "Volume": 4075710
          },
          {
            "Date": "2014-10-20",
            "Open": 380.390015,
            "High": 388.23999,
            "Low": 377.420013,
            "Close": 382.350006,
            "Adj Close": 382.350006,
            "Volume": 3745779
          },
          {
            "Date": "2014-10-21",
            "Open": 382.350006,
            "High": 383.690002,
            "Low": 376.970001,
            "Close": 378.929993,
            "Adj Close": 378.929993,
            "Volume": 4064736
          },
          {
            "Date": "2014-10-22",
            "Open": 378.929993,
            "High": 381.079987,
            "Low": 353.480011,
            "Close": 355.779999,
            "Adj Close": 355.779999,
            "Volume": 6999640
          },
          {
            "Date": "2014-10-23",
            "Open": 355.779999,
            "High": 360.869995,
            "Low": 351.410004,
            "Close": 355.100006,
            "Adj Close": 355.100006,
            "Volume": 7185001
          },
          {
            "Date": "2014-10-24",
            "Open": 355.100006,
            "High": 356.570007,
            "Low": 341.529999,
            "Close": 346.720001,
            "Adj Close": 346.720001,
            "Volume": 4929757
          },
          {
            "Date": "2014-10-25",
            "Open": 346.720001,
            "High": 356.799988,
            "Low": 344.190002,
            "Close": 348.670013,
            "Adj Close": 348.670013,
            "Volume": 4076756
          },
          {
            "Date": "2014-10-27",
            "Open": 348.670013,
            "High": 356.350006,
            "Low": 344.929993,
            "Close": 350.089996,
            "Adj Close": 350.089996,
            "Volume": 3777108
          },
          {
            "Date": "2014-10-28",
            "Open": 350.089996,
            "High": 355.720001,
            "Low": 348.269989,
            "Close": 351.059998,
            "Adj Close": 351.059998,
            "Volume": 3372185
          },
          {
            "Date": "2014-10-29",
            "Open": 351.059998,
            "High": 352.829987,
            "Low": 334.720001,
            "Close": 335.119995,
            "Adj Close": 335.119995,
            "Volume": 4259966
          },
          {
            "Date": "2014-10-30",
            "Open": 335.119995,
            "High": 350.380005,
            "Low": 333.440002,
            "Close": 344.859985,
            "Adj Close": 344.859985,
            "Volume": 5522262
          },
          {
            "Date": "2014-10-31",
            "Open": 344.859985,
            "High": 347.970001,
            "Low": 336.079987,
            "Close": 337.869995,
            "Adj Close": 337.869995,
            "Volume": 4814121
          },
          {
            "Date": "2014-11-01",
            "Open": 337.869995,
            "High": 339,
            "Low": 320.73999,
            "Close": 325.429993,
            "Adj Close": 325.429993,
            "Volume": 4540440
          },
          {
            "Date": "2014-11-02",
            "Open": 325.429993,
            "High": 329.76001,
            "Low": 319.809998,
            "Close": 322.549988,
            "Adj Close": 322.549988,
            "Volume": 3878749
          },
          {
            "Date": "2014-11-03",
            "Open": 322.549988,
            "High": 332.850006,
            "Low": 321.670013,
            "Close": 324.23999,
            "Adj Close": 324.23999,
            "Volume": 4435458
          },
          {
            "Date": "2014-11-04",
            "Open": 324.23999,
            "High": 328.75,
            "Low": 320.109985,
            "Close": 327.959991,
            "Adj Close": 327.959991,
            "Volume": 4955240
          },
          {
            "Date": "2014-11-05",
            "Open": 327.959991,
            "High": 341.980011,
            "Low": 326.519989,
            "Close": 338.01001,
            "Adj Close": 338.01001,
            "Volume": 5342189
          },
          {
            "Date": "2014-11-06",
            "Open": 338.01001,
            "High": 351.140015,
            "Low": 335.73999,
            "Close": 347.670013,
            "Adj Close": 347.670013,
            "Volume": 5388972
          },
          {
            "Date": "2014-11-07",
            "Open": 347.670013,
            "High": 351.609985,
            "Low": 340.179993,
            "Close": 341.869995,
            "Adj Close": 341.869995,
            "Volume": 5215262
          },
          {
            "Date": "2014-11-08",
            "Open": 341.869995,
            "High": 346.290009,
            "Low": 339.799988,
            "Close": 343.540009,
            "Adj Close": 343.540009,
            "Volume": 2834855
          },
          {
            "Date": "2014-11-09",
            "Open": 343.540009,
            "High": 362.209991,
            "Low": 341.779999,
            "Close": 362.040009,
            "Adj Close": 362.040009,
            "Volume": 4466556
          },
          {
            "Date": "2014-11-10",
            "Open": 362.040009,
            "High": 374.670013,
            "Low": 356.600006,
            "Close": 367.149994,
            "Adj Close": 367.149994,
            "Volume": 8387025
          },
          {
            "Date": "2014-11-11",
            "Open": 367.149994,
            "High": 370.98999,
            "Low": 361.869995,
            "Close": 365.420013,
            "Adj Close": 365.420013,
            "Volume": 5817809
          },
          {
            "Date": "2014-11-12",
            "Open": 365.420013,
            "High": 442.730011,
            "Low": 365.809998,
            "Close": 432.029999,
            "Adj Close": 432.029999,
            "Volume": 15737081
          },
          {
            "Date": "2014-11-13",
            "Open": 432.029999,
            "High": 480.450012,
            "Low": 390.880005,
            "Close": 428.720001,
            "Adj Close": 428.720001,
            "Volume": 25304725
          },
          {
            "Date": "2014-11-14",
            "Open": 428.720001,
            "High": 430.179993,
            "Low": 381.98999,
            "Close": 396.529999,
            "Adj Close": 396.529999,
            "Volume": 14250930
          },
          {
            "Date": "2014-11-15",
            "Open": 396.529999,
            "High": 407.320007,
            "Low": 367.970001,
            "Close": 374.859985,
            "Adj Close": 374.859985,
            "Volume": 5185270
          },
          {
            "Date": "2014-11-16",
            "Open": 374.859985,
            "High": 390.359985,
            "Low": 370.540009,
            "Close": 385.609985,
            "Adj Close": 385.609985,
            "Volume": 5497204
          },
          {
            "Date": "2014-11-17",
            "Open": 385.609985,
            "High": 412.329987,
            "Low": 378.320007,
            "Close": 384.690002,
            "Adj Close": 384.690002,
            "Volume": 10942934
          },
          {
            "Date": "2014-11-18",
            "Open": 384.690002,
            "High": 394.940002,
            "Low": 371.950012,
            "Close": 379.160004,
            "Adj Close": 379.160004,
            "Volume": 10404772
          },
          {
            "Date": "2014-11-19",
            "Open": 379.160004,
            "High": 389.290009,
            "Low": 374.26001,
            "Close": 381.429993,
            "Adj Close": 381.429993,
            "Volume": 7592152
          },
          {
            "Date": "2014-11-20",
            "Open": 381.429993,
            "High": 383.029999,
            "Low": 355.109985,
            "Close": 357.299988,
            "Adj Close": 357.299988,
            "Volume": 8084810
          },
          {
            "Date": "2014-11-21",
            "Open": 357.299988,
            "High": 358.730011,
            "Low": 343.799988,
            "Close": 351.769989,
            "Adj Close": 351.769989,
            "Volume": 8291129
          },
          {
            "Date": "2014-11-22",
            "Open": 351.769989,
            "High": 364.209991,
            "Low": 350.51001,
            "Close": 352.01001,
            "Adj Close": 352.01001,
            "Volume": 4632290
          },
          {
            "Date": "2014-11-23",
            "Open": 352.01001,
            "High": 370.589996,
            "Low": 352.640015,
            "Close": 365.850006,
            "Adj Close": 365.850006,
            "Volume": 4504560
          },
          {
            "Date": "2014-11-24",
            "Open": 365.850006,
            "High": 388.720001,
            "Low": 361.920013,
            "Close": 378.850006,
            "Adj Close": 378.850006,
            "Volume": 9244691
          },
          {
            "Date": "2014-11-25",
            "Open": 378.850006,
            "High": 395.730011,
            "Low": 370.640015,
            "Close": 376.429993,
            "Adj Close": 376.429993,
            "Volume": 17405251
          },
          {
            "Date": "2014-11-26",
            "Open": 376.429993,
            "High": 378.269989,
            "Low": 363.98999,
            "Close": 365.350006,
            "Adj Close": 365.350006,
            "Volume": 8916241
          },
          {
            "Date": "2014-11-27",
            "Open": 365.350006,
            "High": 374.429993,
            "Low": 364.809998,
            "Close": 368.829987,
            "Adj Close": 368.829987,
            "Volume": 5144146
          },
          {
            "Date": "2014-11-28",
            "Open": 368.829987,
            "High": 383.25,
            "Low": 358.369995,
            "Close": 377.589996,
            "Adj Close": 377.589996,
            "Volume": 16118258
          },
          {
            "Date": "2014-11-29",
            "Open": 377.589996,
            "High": 389.299988,
            "Low": 372.209991,
            "Close": 376.279999,
            "Adj Close": 376.279999,
            "Volume": 31983637
          },
          {
            "Date": "2014-11-30",
            "Open": 376.279999,
            "High": 381.059998,
            "Low": 372.570007,
            "Close": 374.929993,
            "Adj Close": 374.929993,
            "Volume": 4269105
          },
          {
            "Date": "2014-12-01",
            "Open": 374.929993,
            "High": 383.579987,
            "Low": 373.019989,
            "Close": 378.609985,
            "Adj Close": 378.609985,
            "Volume": 7481865
          },
          {
            "Date": "2014-12-02",
            "Open": 378.609985,
            "High": 384.869995,
            "Low": 375.369995,
            "Close": 380.640015,
            "Adj Close": 380.640015,
            "Volume": 9664274
          },
          {
            "Date": "2014-12-03",
            "Open": 380.640015,
            "High": 384.670013,
            "Low": 373.640015,
            "Close": 376.959991,
            "Adj Close": 376.959991,
            "Volume": 8950322
          },
          {
            "Date": "2014-12-04",
            "Open": 376.959991,
            "High": 380.429993,
            "Low": 366.23999,
            "Close": 369.839996,
            "Adj Close": 369.839996,
            "Volume": 9521316
          },
          {
            "Date": "2014-12-05",
            "Open": 369.839996,
            "High": 379.700012,
            "Low": 366.390015,
            "Close": 377.630005,
            "Adj Close": 377.630005,
            "Volume": 11251853
          },
          {
            "Date": "2014-12-06",
            "Open": 377.630005,
            "High": 380.329987,
            "Low": 372.040009,
            "Close": 376.26001,
            "Adj Close": 376.26001,
            "Volume": 4181319
          },
          {
            "Date": "2014-12-07",
            "Open": 376.26001,
            "High": 377.880005,
            "Low": 372.459991,
            "Close": 376.470001,
            "Adj Close": 376.470001,
            "Volume": 3334332
          },
          {
            "Date": "2014-12-08",
            "Open": 376.470001,
            "High": 377.359985,
            "Low": 364.600006,
            "Close": 364.950012,
            "Adj Close": 364.950012,
            "Volume": 8506201
          },
          {
            "Date": "2014-12-09",
            "Open": 364.950012,
            "High": 365.350006,
            "Low": 343.820007,
            "Close": 352.190002,
            "Adj Close": 352.190002,
            "Volume": 15529628
          },
          {
            "Date": "2014-12-10",
            "Open": 352.190002,
            "High": 354.070007,
            "Low": 345.089996,
            "Close": 347.940002,
            "Adj Close": 347.940002,
            "Volume": 9535221
          },
          {
            "Date": "2014-12-11",
            "Open": 347.940002,
            "High": 367.130005,
            "Low": 337.799988,
            "Close": 347.679993,
            "Adj Close": 347.679993,
            "Volume": 18063629
          },
          {
            "Date": "2014-12-12",
            "Open": 347.679993,
            "High": 356.429993,
            "Low": 346,
            "Close": 353.399994,
            "Adj Close": 353.399994,
            "Volume": 9490205
          },
          {
            "Date": "2014-12-13",
            "Open": 353.399994,
            "High": 353.100006,
            "Low": 343.809998,
            "Close": 348.23999,
            "Adj Close": 348.23999,
            "Volume": 6837218
          },
          {
            "Date": "2014-12-14",
            "Open": 348.23999,
            "High": 351.589996,
            "Low": 344.609985,
            "Close": 349.350006,
            "Adj Close": 349.350006,
            "Volume": 4328238
          },
          {
            "Date": "2014-12-15",
            "Open": 349.350006,
            "High": 351.220001,
            "Low": 343.559998,
            "Close": 345.369995,
            "Adj Close": 345.369995,
            "Volume": 7746836
          },
          {
            "Date": "2014-12-16",
            "Open": 345.369995,
            "High": 346.450012,
            "Low": 328.880005,
            "Close": 330.220001,
            "Adj Close": 330.220001,
            "Volume": 13001054
          },
          {
            "Date": "2014-12-17",
            "Open": 330.220001,
            "High": 335.670013,
            "Low": 314.309998,
            "Close": 320.019989,
            "Adj Close": 320.019989,
            "Volume": 19834674
          },
          {
            "Date": "2014-12-18",
            "Open": 320.019989,
            "High": 325.619995,
            "Low": 303.399994,
            "Close": 310.339996,
            "Adj Close": 310.339996,
            "Volume": 18932813
          },
          {
            "Date": "2014-12-19",
            "Open": 310.339996,
            "High": 320.23999,
            "Low": 306.359985,
            "Close": 317.779999,
            "Adj Close": 317.779999,
            "Volume": 13119110
          },
          {
            "Date": "2014-12-20",
            "Open": 317.779999,
            "High": 332.619995,
            "Low": 316.049988,
            "Close": 330.350006,
            "Adj Close": 330.350006,
            "Volume": 9768954
          },
          {
            "Date": "2014-12-21",
            "Open": 330.350006,
            "High": 332.029999,
            "Low": 320.130005,
            "Close": 322.630005,
            "Adj Close": 322.630005,
            "Volume": 6746131
          },
          {
            "Date": "2014-12-22",
            "Open": 322.630005,
            "High": 335.26001,
            "Low": 319.890015,
            "Close": 330.839996,
            "Adj Close": 330.839996,
            "Volume": 11694687
          },
          {
            "Date": "2014-12-23",
            "Open": 330.839996,
            "High": 339.320007,
            "Low": 328,
            "Close": 335.25,
            "Adj Close": 335.25,
            "Volume": 8057502
          },
          {
            "Date": "2014-12-24",
            "Open": 335.25,
            "High": 336.279999,
            "Low": 320.649994,
            "Close": 322.399994,
            "Adj Close": 322.399994,
            "Volume": 7112691
          },
          {
            "Date": "2014-12-25",
            "Open": 322.399994,
            "High": 323.380005,
            "Low": 316.299988,
            "Close": 318.98999,
            "Adj Close": 318.98999,
            "Volume": 4926116
          },
          {
            "Date": "2014-12-26",
            "Open": 318.98999,
            "High": 332.880005,
            "Low": 316.359985,
            "Close": 329.980011,
            "Adj Close": 329.980011,
            "Volume": 7518851
          },
          {
            "Date": "2014-12-27",
            "Open": 329.980011,
            "High": 330.700012,
            "Low": 311.980011,
            "Close": 315.339996,
            "Adj Close": 315.339996,
            "Volume": 6940336
          },
          {
            "Date": "2014-12-28",
            "Open": 315.339996,
            "High": 322.839996,
            "Low": 310.5,
            "Close": 316.529999,
            "Adj Close": 316.529999,
            "Volume": 6482718
          },
          {
            "Date": "2014-12-29",
            "Open": 316.529999,
            "High": 321.609985,
            "Low": 308.279999,
            "Close": 314.119995,
            "Adj Close": 314.119995,
            "Volume": 6457547
          },
          {
            "Date": "2014-12-30",
            "Open": 314.119995,
            "High": 316.179993,
            "Low": 309.25,
            "Close": 311.269989,
            "Adj Close": 311.269989,
            "Volume": 7163083
          },
          {
            "Date": "2014-12-31",
            "Open": 311.269989,
            "High": 319.089996,
            "Low": 308.890015,
            "Close": 318.23999,
            "Adj Close": 318.23999,
            "Volume": 6472822
          },
          {
            "Date": "2015-01-01",
            "Open": 318.23999,
            "High": 321.359985,
            "Low": 313.540009,
            "Close": 314.890015,
            "Adj Close": 314.890015,
            "Volume": 4073067
          },
          {
            "Date": "2015-01-02",
            "Open": 314.890015,
            "High": 316.399994,
            "Low": 313.079987,
            "Close": 315.209991,
            "Adj Close": 315.209991,
            "Volume": 4673971
          },
          {
            "Date": "2015-01-03",
            "Open": 315.209991,
            "High": 315.829987,
            "Low": 284.890015,
            "Close": 287.130005,
            "Adj Close": 287.130005,
            "Volume": 14209564
          },
          {
            "Date": "2015-01-04",
            "Open": 287.130005,
            "High": 289.940002,
            "Low": 255.869995,
            "Close": 264.720001,
            "Adj Close": 264.720001,
            "Volume": 24255392
          },
          {
            "Date": "2015-01-05",
            "Open": 264.720001,
            "High": 278.320007,
            "Low": 262.890015,
            "Close": 274.839996,
            "Adj Close": 274.839996,
            "Volume": 14995382
          },
          {
            "Date": "2015-01-06",
            "Open": 274.839996,
            "High": 285.109985,
            "Low": 271.519989,
            "Close": 282.269989,
            "Adj Close": 282.269989,
            "Volume": 6097640
          },
          {
            "Date": "2015-01-07",
            "Open": 282.269989,
            "High": 296.059998,
            "Low": 280.73999,
            "Close": 291.339996,
            "Adj Close": 291.339996,
            "Volume": 8827164
          },
          {
            "Date": "2015-01-08",
            "Open": 291.339996,
            "High": 292.709991,
            "Low": 278.98999,
            "Close": 282.690002,
            "Adj Close": 282.690002,
            "Volume": 5796312
          },
          {
            "Date": "2015-01-09",
            "Open": 282.690002,
            "High": 290.589996,
            "Low": 277.279999,
            "Close": 287.970001,
            "Adj Close": 287.970001,
            "Volume": 5963203
          },
          {
            "Date": "2015-01-10",
            "Open": 287.970001,
            "High": 289.25,
            "Low": 271.980011,
            "Close": 273.350006,
            "Adj Close": 273.350006,
            "Volume": 4147357
          },
          {
            "Date": "2015-01-11",
            "Open": 273.350006,
            "High": 278.01001,
            "Low": 263.76001,
            "Close": 264.769989,
            "Adj Close": 264.769989,
            "Volume": 4122751
          },
          {
            "Date": "2015-01-12",
            "Open": 264.769989,
            "High": 273.079987,
            "Low": 263.299988,
            "Close": 269.329987,
            "Adj Close": 269.329987,
            "Volume": 6899315
          },
          {
            "Date": "2015-01-13",
            "Open": 269.329987,
            "High": 269.100006,
            "Low": 217.100006,
            "Close": 221.289993,
            "Adj Close": 221.289993,
            "Volume": 22745960
          },
          {
            "Date": "2015-01-14",
            "Open": 221.289993,
            "High": 230.860001,
            "Low": 157.289993,
            "Close": 164.919998,
            "Adj Close": 164.919998,
            "Volume": 32911586
          },
          {
            "Date": "2015-01-15",
            "Open": 164.919998,
            "High": 231.259995,
            "Low": 164.550003,
            "Close": 209.779999,
            "Adj Close": 209.779999,
            "Volume": 25672423
          },
          {
            "Date": "2015-01-16",
            "Open": 209.779999,
            "High": 222.630005,
            "Low": 198.720001,
            "Close": 206.919998,
            "Adj Close": 206.919998,
            "Volume": 13208882
          },
          {
            "Date": "2015-01-17",
            "Open": 206.919998,
            "High": 212.589996,
            "Low": 191.710007,
            "Close": 199.649994,
            "Adj Close": 199.649994,
            "Volume": 8685194
          },
          {
            "Date": "2015-01-18",
            "Open": 199.649994,
            "High": 220.729996,
            "Low": 192.509995,
            "Close": 210.619995,
            "Adj Close": 210.619995,
            "Volume": 8429486
          },
          {
            "Date": "2015-01-19",
            "Open": 210.619995,
            "High": 219.479996,
            "Low": 205.470001,
            "Close": 215.869995,
            "Adj Close": 215.869995,
            "Volume": 6744459
          },
          {
            "Date": "2015-01-20",
            "Open": 215.869995,
            "High": 216.570007,
            "Low": 203.419998,
            "Close": 210.550003,
            "Adj Close": 210.550003,
            "Volume": 7926400
          },
          {
            "Date": "2015-01-21",
            "Open": 210.550003,
            "High": 229.320007,
            "Low": 207.110001,
            "Close": 228.169998,
            "Adj Close": 228.169998,
            "Volume": 9390361
          },
          {
            "Date": "2015-01-22",
            "Open": 228.169998,
            "High": 238.779999,
            "Low": 225.570007,
            "Close": 232.699997,
            "Adj Close": 232.699997,
            "Volume": 12508308
          },
          {
            "Date": "2015-01-23",
            "Open": 232.699997,
            "High": 236.970001,
            "Low": 224.839996,
            "Close": 232.169998,
            "Adj Close": 232.169998,
            "Volume": 8855407
          },
          {
            "Date": "2015-01-24",
            "Open": 232.169998,
            "High": 248.880005,
            "Low": 229.580002,
            "Close": 248.160004,
            "Adj Close": 248.160004,
            "Volume": 8011743
          },
          {
            "Date": "2015-01-25",
            "Open": 248.160004,
            "High": 256.429993,
            "Low": 241.360001,
            "Close": 252.089996,
            "Adj Close": 252.089996,
            "Volume": 12509649
          },
          {
            "Date": "2015-01-26",
            "Open": 252.089996,
            "High": 310.910004,
            "Low": 251.5,
            "Close": 269.179993,
            "Adj Close": 269.179993,
            "Volume": 29806496
          },
          {
            "Date": "2015-01-27",
            "Open": 269.179993,
            "High": 276.899994,
            "Low": 247.259995,
            "Close": 263.269989,
            "Adj Close": 263.269989,
            "Volume": 13130803
          },
          {
            "Date": "2015-01-28",
            "Open": 263.269989,
            "High": 267.660004,
            "Low": 228.059998,
            "Close": 236.169998,
            "Adj Close": 236.169998,
            "Volume": 15880595
          },
          {
            "Date": "2015-01-29",
            "Open": 236.169998,
            "High": 241.509995,
            "Low": 220.360001,
            "Close": 233.990005,
            "Adj Close": 233.990005,
            "Volume": 12723448
          },
          {
            "Date": "2015-01-30",
            "Open": 233.990005,
            "High": 244.830002,
            "Low": 227.190002,
            "Close": 231.839996,
            "Adj Close": 231.839996,
            "Volume": 11316575
          },
          {
            "Date": "2015-01-31",
            "Open": 231.839996,
            "High": 235.360001,
            "Low": 216.460007,
            "Close": 218.509995,
            "Adj Close": 218.509995,
            "Volume": 9645307
          },
          {
            "Date": "2015-02-01",
            "Open": 218.509995,
            "High": 231.440002,
            "Low": 209.710007,
            "Close": 225.289993,
            "Adj Close": 225.289993,
            "Volume": 9058010
          },
          {
            "Date": "2015-02-02",
            "Open": 225.289993,
            "High": 242.509995,
            "Low": 220.529999,
            "Close": 238.860001,
            "Adj Close": 238.860001,
            "Volume": 8965813
          },
          {
            "Date": "2015-02-03",
            "Open": 238.860001,
            "High": 247.479996,
            "Low": 223.910004,
            "Close": 227.410004,
            "Adj Close": 227.410004,
            "Volume": 15000263
          },
          {
            "Date": "2015-02-04",
            "Open": 227.410004,
            "High": 230.710007,
            "Low": 220.229996,
            "Close": 226.580002,
            "Adj Close": 226.580002,
            "Volume": 12495299
          },
          {
            "Date": "2015-02-05",
            "Open": 226.580002,
            "High": 229.850006,
            "Low": 214.350006,
            "Close": 216.520004,
            "Adj Close": 216.520004,
            "Volume": 9055713
          },
          {
            "Date": "2015-02-06",
            "Open": 216.520004,
            "High": 226.160004,
            "Low": 215.649994,
            "Close": 222.960007,
            "Adj Close": 222.960007,
            "Volume": 11628519
          },
          {
            "Date": "2015-02-07",
            "Open": 222.960007,
            "High": 231,
            "Low": 222.380005,
            "Close": 227.679993,
            "Adj Close": 227.679993,
            "Volume": 9046632
          },
          {
            "Date": "2015-02-08",
            "Open": 227.679993,
            "High": 230.229996,
            "Low": 219.5,
            "Close": 223.669998,
            "Adj Close": 223.669998,
            "Volume": 6564922
          },
          {
            "Date": "2015-02-09",
            "Open": 223.669998,
            "High": 225,
            "Low": 215.660004,
            "Close": 220.339996,
            "Adj Close": 220.339996,
            "Volume": 20192733
          },
          {
            "Date": "2015-02-10",
            "Open": 220.339996,
            "High": 222.190002,
            "Low": 214.440002,
            "Close": 219.669998,
            "Adj Close": 219.669998,
            "Volume": 18877297
          },
          {
            "Date": "2015-02-11",
            "Open": 219.669998,
            "High": 223.529999,
            "Low": 217.279999,
            "Close": 218.830002,
            "Adj Close": 218.830002,
            "Volume": 15909377
          },
          {
            "Date": "2015-02-12",
            "Open": 218.830002,
            "High": 223,
            "Low": 217.300003,
            "Close": 221.789993,
            "Adj Close": 221.789993,
            "Volume": 11084499
          },
          {
            "Date": "2015-02-13",
            "Open": 221.789993,
            "High": 241.580002,
            "Low": 220.619995,
            "Close": 236.169998,
            "Adj Close": 236.169998,
            "Volume": 26243104
          },
          {
            "Date": "2015-02-14",
            "Open": 236.169998,
            "High": 261.25,
            "Low": 235.380005,
            "Close": 258.640015,
            "Adj Close": 258.640015,
            "Volume": 33313626
          },
          {
            "Date": "2015-02-15",
            "Open": 258.640015,
            "High": 264.570007,
            "Low": 226.559998,
            "Close": 233.270004,
            "Adj Close": 233.270004,
            "Volume": 43921119
          },
          {
            "Date": "2015-02-16",
            "Open": 233.270004,
            "High": 240.029999,
            "Low": 228.009995,
            "Close": 235.830002,
            "Adj Close": 235.830002,
            "Volume": 27187677
          },
          {
            "Date": "2015-02-17",
            "Open": 235.830002,
            "High": 247.169998,
            "Low": 232.029999,
            "Close": 243.199997,
            "Adj Close": 243.199997,
            "Volume": 27926884
          },
          {
            "Date": "2015-02-18",
            "Open": 243.199997,
            "High": 245.509995,
            "Low": 231.699997,
            "Close": 235.199997,
            "Adj Close": 235.199997,
            "Volume": 23813015
          },
          {
            "Date": "2015-02-19",
            "Open": 235.199997,
            "High": 244.110001,
            "Low": 234.869995,
            "Close": 241.919998,
            "Adj Close": 241.919998,
            "Volume": 15852470
          },
          {
            "Date": "2015-02-20",
            "Open": 241.919998,
            "High": 247.759995,
            "Low": 238.830002,
            "Close": 244.520004,
            "Adj Close": 244.520004,
            "Volume": 20434846
          },
          {
            "Date": "2015-02-21",
            "Open": 244.520004,
            "High": 247.320007,
            "Low": 242.649994,
            "Close": 244.410004,
            "Adj Close": 244.410004,
            "Volume": 10570761
          },
          {
            "Date": "2015-02-22",
            "Open": 244.410004,
            "High": 246.539993,
            "Low": 232.720001,
            "Close": 235.729996,
            "Adj Close": 235.729996,
            "Volume": 18107359
          },
          {
            "Date": "2015-02-23",
            "Open": 235.729996,
            "High": 240.059998,
            "Low": 231.330002,
            "Close": 238.820007,
            "Adj Close": 238.820007,
            "Volume": 14856549
          },
          {
            "Date": "2015-02-24",
            "Open": 238.820007,
            "High": 240.25,
            "Low": 235.5,
            "Close": 238.889999,
            "Adj Close": 238.889999,
            "Volume": 10787951
          },
          {
            "Date": "2015-02-25",
            "Open": 238.889999,
            "High": 239.639999,
            "Low": 234.589996,
            "Close": 237.330002,
            "Adj Close": 237.330002,
            "Volume": 9092357
          },
          {
            "Date": "2015-02-26",
            "Open": 237.330002,
            "High": 238.169998,
            "Low": 233.5,
            "Close": 236.529999,
            "Adj Close": 236.529999,
            "Volume": 12064967
          },
          {
            "Date": "2015-02-27",
            "Open": 236.529999,
            "High": 258.720001,
            "Low": 235.699997,
            "Close": 253.470001,
            "Adj Close": 253.470001,
            "Volume": 42282820
          },
          {
            "Date": "2015-02-28",
            "Open": 253.470001,
            "High": 255.399994,
            "Low": 248.729996,
            "Close": 254.059998,
            "Adj Close": 254.059998,
            "Volume": 9999594
          },
          {
            "Date": "2015-03-01",
            "Open": 254.059998,
            "High": 260.649994,
            "Low": 244.770004,
            "Close": 257.940002,
            "Adj Close": 257.940002,
            "Volume": 12964061
          },
          {
            "Date": "2015-03-02",
            "Open": 257.940002,
            "High": 274.799988,
            "Low": 256.149994,
            "Close": 273.75,
            "Adj Close": 273.75,
            "Volume": 21562624
          },
          {
            "Date": "2015-03-03",
            "Open": 273.75,
            "High": 287.059998,
            "Low": 266.119995,
            "Close": 280.649994,
            "Adj Close": 280.649994,
            "Volume": 45650597
          },
          {
            "Date": "2015-03-04",
            "Open": 280.649994,
            "High": 284.470001,
            "Low": 265.910004,
            "Close": 271.920013,
            "Adj Close": 271.920013,
            "Volume": 38656923
          },
          {
            "Date": "2015-03-05",
            "Open": 271.920013,
            "High": 280.839996,
            "Low": 262.809998,
            "Close": 275.230011,
            "Adj Close": 275.230011,
            "Volume": 33599454
          },
          {
            "Date": "2015-03-06",
            "Open": 275.230011,
            "High": 277.98999,
            "Low": 269.019989,
            "Close": 272.559998,
            "Adj Close": 272.559998,
            "Volume": 27014943
          },
          {
            "Date": "2015-03-07",
            "Open": 272.559998,
            "High": 278.25,
            "Low": 269.410004,
            "Close": 274.910004,
            "Adj Close": 274.910004,
            "Volume": 16708000
          },
          {
            "Date": "2015-03-08",
            "Open": 274.910004,
            "High": 278.779999,
            "Low": 271.309998,
            "Close": 274.48999,
            "Adj Close": 274.48999,
            "Volume": 13902830
          },
          {
            "Date": "2015-03-09",
            "Open": 274.48999,
            "High": 293.26001,
            "Low": 273.790009,
            "Close": 290.019989,
            "Adj Close": 290.019989,
            "Volume": 43259194
          },
          {
            "Date": "2015-03-10",
            "Open": 290.019989,
            "High": 300.959991,
            "Low": 288.119995,
            "Close": 291.369995,
            "Adj Close": 291.369995,
            "Volume": 46657647
          },
          {
            "Date": "2015-03-11",
            "Open": 291.369995,
            "High": 297.660004,
            "Low": 288.880005,
            "Close": 295.600006,
            "Adj Close": 295.600006,
            "Volume": 23542829
          },
          {
            "Date": "2015-03-12",
            "Open": 295.600006,
            "High": 296.980011,
            "Low": 290.829987,
            "Close": 293.850006,
            "Adj Close": 293.850006,
            "Volume": 31607747
          },
          {
            "Date": "2015-03-13",
            "Open": 293.850006,
            "High": 294.920013,
            "Low": 286.079987,
            "Close": 287.209991,
            "Adj Close": 287.209991,
            "Volume": 28288614
          },
          {
            "Date": "2015-03-14",
            "Open": 287.209991,
            "High": 288.399994,
            "Low": 279.299988,
            "Close": 281.600006,
            "Adj Close": 281.600006,
            "Volume": 21495879
          },
          {
            "Date": "2015-03-15",
            "Open": 281.600006,
            "High": 286.390015,
            "Low": 280.369995,
            "Close": 284.880005,
            "Adj Close": 284.880005,
            "Volume": 11238833
          },
          {
            "Date": "2015-03-16",
            "Open": 284.880005,
            "High": 294.01001,
            "Low": 284.769989,
            "Close": 290.410004,
            "Adj Close": 290.410004,
            "Volume": 19355605
          },
          {
            "Date": "2015-03-17",
            "Open": 290.410004,
            "High": 292.459991,
            "Low": 283.25,
            "Close": 285.380005,
            "Adj Close": 285.380005,
            "Volume": 18775700
          },
          {
            "Date": "2015-03-18",
            "Open": 285.380005,
            "High": 285.649994,
            "Low": 248.190002,
            "Close": 255.919998,
            "Adj Close": 255.919998,
            "Volume": 55391241
          },
          {
            "Date": "2015-03-19",
            "Open": 255.919998,
            "High": 264.799988,
            "Low": 247,
            "Close": 260.929993,
            "Adj Close": 260.929993,
            "Volume": 46525086
          },
          {
            "Date": "2015-03-20",
            "Open": 260.929993,
            "High": 264.709991,
            "Low": 257.850006,
            "Close": 261.779999,
            "Adj Close": 261.779999,
            "Volume": 13853175
          },
          {
            "Date": "2015-03-21",
            "Open": 261.779999,
            "High": 263.26001,
            "Low": 254.020004,
            "Close": 259.709991,
            "Adj Close": 259.709991,
            "Volume": 13413360
          },
          {
            "Date": "2015-03-22",
            "Open": 259.709991,
            "High": 270.420013,
            "Low": 259,
            "Close": 268.570007,
            "Adj Close": 268.570007,
            "Volume": 14980752
          },
          {
            "Date": "2015-03-23",
            "Open": 268.570007,
            "High": 271.01001,
            "Low": 259.380005,
            "Close": 265.459991,
            "Adj Close": 265.459991,
            "Volume": 21749937
          },
          {
            "Date": "2015-03-24",
            "Open": 265.459991,
            "High": 267.019989,
            "Low": 242.669998,
            "Close": 246.720001,
            "Adj Close": 246.720001,
            "Volume": 38033136
          },
          {
            "Date": "2015-03-25",
            "Open": 246.720001,
            "High": 249.210007,
            "Low": 234.839996,
            "Close": 246.369995,
            "Adj Close": 246.369995,
            "Volume": 32092197
          },
          {
            "Date": "2015-03-26",
            "Open": 246.369995,
            "High": 254.690002,
            "Low": 243.520004,
            "Close": 248.020004,
            "Adj Close": 248.020004,
            "Volume": 22412560
          },
          {
            "Date": "2015-03-27",
            "Open": 248.020004,
            "High": 250.050003,
            "Low": 244.470001,
            "Close": 247.210007,
            "Adj Close": 247.210007,
            "Volume": 15543779
          },
          {
            "Date": "2015-03-28",
            "Open": 247.210007,
            "High": 254.25,
            "Low": 246.279999,
            "Close": 252.020004,
            "Adj Close": 252.020004,
            "Volume": 13890988
          },
          {
            "Date": "2015-03-29",
            "Open": 252.020004,
            "High": 252.809998,
            "Low": 238.929993,
            "Close": 242.080002,
            "Adj Close": 242.080002,
            "Volume": 18971340
          },
          {
            "Date": "2015-03-29",
            "Open": 242.080002,
            "High": 248.830002,
            "Low": 236.550003,
            "Close": 246.789993,
            "Adj Close": 246.789993,
            "Volume": 20963830
          },
          {
            "Date": "2015-03-30",
            "Open": 246.789993,
            "High": 248.699997,
            "Low": 241.179993,
            "Close": 244.149994,
            "Adj Close": 244.149994,
            "Volume": 18515676
          },
          {
            "Date": "2015-03-31",
            "Open": 244.149994,
            "High": 247.669998,
            "Low": 239.570007,
            "Close": 246.240005,
            "Adj Close": 246.240005,
            "Volume": 16412525
          },
          {
            "Date": "2015-04-01",
            "Open": 246.240005,
            "High": 254.850006,
            "Low": 244.25,
            "Close": 252.600006,
            "Adj Close": 252.600006,
            "Volume": 20354036
          },
          {
            "Date": "2015-04-02",
            "Open": 252.600006,
            "High": 256.529999,
            "Low": 251.259995,
            "Close": 254.479996,
            "Adj Close": 254.479996,
            "Volume": 18264452
          },
          {
            "Date": "2015-04-03",
            "Open": 254.479996,
            "High": 255.240005,
            "Low": 250.309998,
            "Close": 252.889999,
            "Adj Close": 252.889999,
            "Volume": 7805160
          },
          {
            "Date": "2015-04-04",
            "Open": 252.889999,
            "High": 260.26001,
            "Low": 250.600006,
            "Close": 259.640015,
            "Adj Close": 259.640015,
            "Volume": 11277271
          },
          {
            "Date": "2015-04-05",
            "Open": 259.640015,
            "High": 261.450012,
            "Low": 252.320007,
            "Close": 254.970001,
            "Adj Close": 254.970001,
            "Volume": 11857398
          },
          {
            "Date": "2015-04-06",
            "Open": 254.970001,
            "High": 255.600006,
            "Low": 250.149994,
            "Close": 252.970001,
            "Adj Close": 252.970001,
            "Volume": 11401051
          },
          {
            "Date": "2015-04-07",
            "Open": 252.970001,
            "High": 254.259995,
            "Low": 242.570007,
            "Close": 244.570007,
            "Adj Close": 244.570007,
            "Volume": 25401433
          },
          {
            "Date": "2015-04-08",
            "Open": 244.570007,
            "High": 246.220001,
            "Low": 237.619995,
            "Close": 243.320007,
            "Adj Close": 243.320007,
            "Volume": 16846896
          },
          {
            "Date": "2015-04-09",
            "Open": 243.320007,
            "High": 244.110001,
            "Low": 231.300003,
            "Close": 234.729996,
            "Adj Close": 234.729996,
            "Volume": 23728422
          },
          {
            "Date": "2015-04-10",
            "Open": 234.729996,
            "High": 240,
            "Low": 233.119995,
            "Close": 236.479996,
            "Adj Close": 236.479996,
            "Volume": 12319489
          },
          {
            "Date": "2015-04-11",
            "Open": 236.479996,
            "High": 237.520004,
            "Low": 232.270004,
            "Close": 235.850006,
            "Adj Close": 235.850006,
            "Volume": 7814533
          },
          {
            "Date": "2015-04-12",
            "Open": 235.850006,
            "High": 236.75,
            "Low": 220.360001,
            "Close": 223.589996,
            "Adj Close": 223.589996,
            "Volume": 23982950
          },
          {
            "Date": "2015-04-13",
            "Open": 223.589996,
            "High": 224.720001,
            "Low": 214.270004,
            "Close": 217.990005,
            "Adj Close": 217.990005,
            "Volume": 25315606
          },
          {
            "Date": "2015-04-14",
            "Open": 217.990005,
            "High": 223.559998,
            "Low": 217.149994,
            "Close": 222.970001,
            "Adj Close": 222.970001,
            "Volume": 17099352
          },
          {
            "Date": "2015-04-15",
            "Open": 222.970001,
            "High": 229.529999,
            "Low": 222.869995,
            "Close": 227.979996,
            "Adj Close": 227.979996,
            "Volume": 19315044
          },
          {
            "Date": "2015-04-16",
            "Open": 227.979996,
            "High": 229.279999,
            "Low": 220.559998,
            "Close": 222.589996,
            "Adj Close": 222.589996,
            "Volume": 15015559
          },
          {
            "Date": "2015-04-17",
            "Open": 222.589996,
            "High": 224.470001,
            "Low": 220.570007,
            "Close": 223.350006,
            "Adj Close": 223.350006,
            "Volume": 8152434
          },
          {
            "Date": "2015-04-18",
            "Open": 223.350006,
            "High": 226.940002,
            "Low": 221.960007,
            "Close": 223.020004,
            "Adj Close": 223.020004,
            "Volume": 7984589
          },
          {
            "Date": "2015-04-19",
            "Open": 223.020004,
            "High": 226.720001,
            "Low": 221.580002,
            "Close": 224.240005,
            "Adj Close": 224.240005,
            "Volume": 10082693
          },
          {
            "Date": "2015-04-20",
            "Open": 224.240005,
            "High": 235.270004,
            "Low": 223.289993,
            "Close": 233.729996,
            "Adj Close": 233.729996,
            "Volume": 15658818
          },
          {
            "Date": "2015-04-21",
            "Open": 233.729996,
            "High": 238.399994,
            "Low": 231.800003,
            "Close": 233.779999,
            "Adj Close": 233.779999,
            "Volume": 18280060
          },
          {
            "Date": "2015-04-22",
            "Open": 233.779999,
            "High": 236.119995,
            "Low": 232.580002,
            "Close": 235.399994,
            "Adj Close": 235.399994,
            "Volume": 9982620
          },
          {
            "Date": "2015-04-23",
            "Open": 235.399994,
            "High": 236.550003,
            "Low": 229.059998,
            "Close": 231.089996,
            "Adj Close": 231.089996,
            "Volume": 16221169
          },
          {
            "Date": "2015-04-24",
            "Open": 231.089996,
            "High": 232.289993,
            "Low": 223.050003,
            "Close": 226.139999,
            "Adj Close": 226.139999,
            "Volume": 10015666
          },
          {
            "Date": "2015-04-25",
            "Open": 226.139999,
            "High": 226.720001,
            "Low": 214.139999,
            "Close": 218.699997,
            "Adj Close": 218.699997,
            "Volume": 22088733
          },
          {
            "Date": "2015-04-26",
            "Open": 218.699997,
            "High": 242.649994,
            "Low": 216.600006,
            "Close": 228.960007,
            "Adj Close": 228.960007,
            "Volume": 27696437
          },
          {
            "Date": "2015-04-27",
            "Open": 228.960007,
            "High": 229.869995,
            "Low": 222.029999,
            "Close": 225.809998,
            "Adj Close": 225.809998,
            "Volume": 14896418
          },
          {
            "Date": "2015-04-28",
            "Open": 225.809998,
            "High": 227.240005,
            "Low": 222.25,
            "Close": 225.419998,
            "Adj Close": 225.419998,
            "Volume": 13743340
          },
          {
            "Date": "2015-04-29",
            "Open": 225.419998,
            "High": 240.009995,
            "Low": 224.679993,
            "Close": 235.770004,
            "Adj Close": 235.770004,
            "Volume": 26242196
          },
          {
            "Date": "2015-04-30",
            "Open": 235.770004,
            "High": 239.419998,
            "Low": 232.380005,
            "Close": 233.210007,
            "Adj Close": 233.210007,
            "Volume": 14178420
          },
          {
            "Date": "2015-05-01",
            "Open": 233.210007,
            "High": 236.380005,
            "Low": 231.729996,
            "Close": 235.339996,
            "Adj Close": 235.339996,
            "Volume": 8703582
          },
          {
            "Date": "2015-05-02",
            "Open": 235.339996,
            "High": 243.580002,
            "Low": 233.800003,
            "Close": 239.990005,
            "Adj Close": 239.990005,
            "Volume": 13389153
          },
          {
            "Date": "2015-05-03",
            "Open": 239.990005,
            "High": 243.199997,
            "Low": 237.449997,
            "Close": 238.970001,
            "Adj Close": 238.970001,
            "Volume": 16599243
          },
          {
            "Date": "2015-05-04",
            "Open": 238.970001,
            "High": 239.610001,
            "Low": 231.779999,
            "Close": 235.820007,
            "Adj Close": 235.820007,
            "Volume": 18333196
          },
          {
            "Date": "2015-05-05",
            "Open": 235.820007,
            "High": 237.149994,
            "Low": 228.240005,
            "Close": 230.029999,
            "Adj Close": 230.029999,
            "Volume": 24127653
          },
          {
            "Date": "2015-05-06",
            "Open": 230.029999,
            "High": 240.25,
            "Low": 228.330002,
            "Close": 237.729996,
            "Adj Close": 237.729996,
            "Volume": 21315971
          },
          {
            "Date": "2015-05-07",
            "Open": 237.729996,
            "High": 247.009995,
            "Low": 235.770004,
            "Close": 243.740005,
            "Adj Close": 243.740005,
            "Volume": 21226000
          },
          {
            "Date": "2015-05-08",
            "Open": 243.740005,
            "High": 247.869995,
            "Low": 238.520004,
            "Close": 241.399994,
            "Adj Close": 241.399994,
            "Volume": 15281109
          },
          {
            "Date": "2015-05-09",
            "Open": 241.399994,
            "High": 244.820007,
            "Low": 238.229996,
            "Close": 239.960007,
            "Adj Close": 239.960007,
            "Volume": 10634289
          },
          {
            "Date": "2015-05-10",
            "Open": 239.960007,
            "High": 243.949997,
            "Low": 238.860001,
            "Close": 241.809998,
            "Adj Close": 241.809998,
            "Volume": 13819530
          },
          {
            "Date": "2015-05-11",
            "Open": 241.809998,
            "High": 243,
            "Low": 239.179993,
            "Close": 241.580002,
            "Adj Close": 241.580002,
            "Volume": 9712214
          },
          {
            "Date": "2015-05-12",
            "Open": 241.580002,
            "High": 243.910004,
            "Low": 234.070007,
            "Close": 236.380005,
            "Adj Close": 236.380005,
            "Volume": 20329395
          },
          {
            "Date": "2015-05-13",
            "Open": 236.380005,
            "High": 239.169998,
            "Low": 232.360001,
            "Close": 236.899994,
            "Adj Close": 236.899994,
            "Volume": 16833656
          },
          {
            "Date": "2015-05-14",
            "Open": 236.899994,
            "High": 238.830002,
            "Low": 235.529999,
            "Close": 237.199997,
            "Adj Close": 237.199997,
            "Volume": 10932777
          },
          {
            "Date": "2015-05-15",
            "Open": 237.199997,
            "High": 237.779999,
            "Low": 234.570007,
            "Close": 236.229996,
            "Adj Close": 236.229996,
            "Volume": 6415070
          },
          {
            "Date": "2015-05-16",
            "Open": 236.229996,
            "High": 237.770004,
            "Low": 235.350006,
            "Close": 236.300003,
            "Adj Close": 236.300003,
            "Volume": 6738302
          },
          {
            "Date": "2015-05-17",
            "Open": 236.300003,
            "High": 237.100006,
            "Low": 231.460007,
            "Close": 232.639999,
            "Adj Close": 232.639999,
            "Volume": 12516261
          },
          {
            "Date": "2015-05-18",
            "Open": 232.639999,
            "High": 234.5,
            "Low": 231.270004,
            "Close": 232.020004,
            "Adj Close": 232.020004,
            "Volume": 9550029
          },
          {
            "Date": "2015-05-19",
            "Open": 232.020004,
            "High": 235.169998,
            "Low": 231.470001,
            "Close": 233.960007,
            "Adj Close": 233.960007,
            "Volume": 11626735
          },
          {
            "Date": "2015-05-20",
            "Open": 233.960007,
            "High": 236.649994,
            "Low": 233.610001,
            "Close": 235.380005,
            "Adj Close": 235.380005,
            "Volume": 10114419
          },
          {
            "Date": "2015-05-21",
            "Open": 235.380005,
            "High": 242,
            "Low": 234.559998,
            "Close": 240.369995,
            "Adj Close": 240.369995,
            "Volume": 17630641
          },
          {
            "Date": "2015-05-22",
            "Open": 240.369995,
            "High": 241.729996,
            "Low": 238.050003,
            "Close": 238.940002,
            "Adj Close": 238.940002,
            "Volume": 8659651
          },
          {
            "Date": "2015-05-23",
            "Open": 238.940002,
            "High": 242.389999,
            "Low": 237.479996,
            "Close": 240.979996,
            "Adj Close": 240.979996,
            "Volume": 7278251
          },
          {
            "Date": "2015-05-24",
            "Open": 240.979996,
            "High": 241.789993,
            "Low": 235.809998,
            "Close": 237.410004,
            "Adj Close": 237.410004,
            "Volume": 6301300
          },
          {
            "Date": "2015-05-25",
            "Open": 237.410004,
            "High": 238.990005,
            "Low": 235.580002,
            "Close": 237.839996,
            "Adj Close": 237.839996,
            "Volume": 8842430
          },
          {
            "Date": "2015-05-26",
            "Open": 237.839996,
            "High": 238.949997,
            "Low": 235.889999,
            "Close": 237.289993,
            "Adj Close": 237.289993,
            "Volume": 11445501
          },
          {
            "Date": "2015-05-27",
            "Open": 237.289993,
            "High": 238.410004,
            "Low": 236.229996,
            "Close": 237.320007,
            "Adj Close": 237.320007,
            "Volume": 8508673
          },
          {
            "Date": "2015-05-28",
            "Open": 237.320007,
            "High": 237.889999,
            "Low": 235.130005,
            "Close": 237.029999,
            "Adj Close": 237.029999,
            "Volume": 9241377
          },
          {
            "Date": "2015-05-29",
            "Open": 237.029999,
            "High": 237.059998,
            "Low": 231.589996,
            "Close": 233.220001,
            "Adj Close": 233.220001,
            "Volume": 9738568
          },
          {
            "Date": "2015-05-30",
            "Open": 233.220001,
            "High": 233.990005,
            "Low": 229.130005,
            "Close": 229.839996,
            "Adj Close": 229.839996,
            "Volume": 9036624
          },
          {
            "Date": "2015-05-31",
            "Open": 229.839996,
            "High": 231.759995,
            "Low": 220.970001,
            "Close": 223.139999,
            "Adj Close": 223.139999,
            "Volume": 19658919
          },
          {
            "Date": "2015-06-01",
            "Open": 223.139999,
            "High": 227.440002,
            "Low": 222.25,
            "Close": 225.740005,
            "Adj Close": 225.740005,
            "Volume": 13666049
          },
          {
            "Date": "2015-06-02",
            "Open": 225.740005,
            "High": 227.860001,
            "Low": 223.690002,
            "Close": 225.589996,
            "Adj Close": 225.589996,
            "Volume": 12279838
          },
          {
            "Date": "2015-06-03",
            "Open": 225.589996,
            "High": 226.710007,
            "Low": 223.490005,
            "Close": 224.220001,
            "Adj Close": 224.220001,
            "Volume": 9934190
          },
          {
            "Date": "2015-06-04",
            "Open": 224.220001,
            "High": 226.360001,
            "Low": 222.149994,
            "Close": 225.289993,
            "Adj Close": 225.289993,
            "Volume": 12703848
          },
          {
            "Date": "2015-06-05",
            "Open": 225.289993,
            "High": 225.759995,
            "Low": 223.529999,
            "Close": 224.740005,
            "Adj Close": 224.740005,
            "Volume": 5074897
          },
          {
            "Date": "2015-06-06",
            "Open": 224.740005,
            "High": 226.360001,
            "Low": 222.210007,
            "Close": 223.470001,
            "Adj Close": 223.470001,
            "Volume": 9097310
          },
          {
            "Date": "2015-06-07",
            "Open": 223.470001,
            "High": 229.910004,
            "Low": 222.990005,
            "Close": 228.570007,
            "Adj Close": 228.570007,
            "Volume": 16824026
          },
          {
            "Date": "2015-06-08",
            "Open": 228.570007,
            "High": 231.360001,
            "Low": 227.509995,
            "Close": 229.559998,
            "Adj Close": 229.559998,
            "Volume": 12617632
          },
          {
            "Date": "2015-06-09",
            "Open": 229.559998,
            "High": 230.440002,
            "Low": 227.839996,
            "Close": 228.789993,
            "Adj Close": 228.789993,
            "Volume": 9556657
          },
          {
            "Date": "2015-06-10",
            "Open": 228.789993,
            "High": 230.639999,
            "Low": 228.539993,
            "Close": 229.880005,
            "Adj Close": 229.880005,
            "Volume": 8745318
          },
          {
            "Date": "2015-06-11",
            "Open": 229.880005,
            "High": 231.580002,
            "Low": 229.289993,
            "Close": 230.460007,
            "Adj Close": 230.460007,
            "Volume": 9406856
          },
          {
            "Date": "2015-06-12",
            "Open": 230.460007,
            "High": 233.139999,
            "Low": 229.009995,
            "Close": 232.479996,
            "Adj Close": 232.479996,
            "Volume": 8803491
          },
          {
            "Date": "2015-06-13",
            "Open": 232.479996,
            "High": 235.509995,
            "Low": 232.089996,
            "Close": 233.75,
            "Adj Close": 233.75,
            "Volume": 7700053
          },
          {
            "Date": "2015-06-14",
            "Open": 233.75,
            "High": 238.550003,
            "Low": 233.289993,
            "Close": 237,
            "Adj Close": 237,
            "Volume": 15006949
          },
          {
            "Date": "2015-06-15",
            "Open": 237,
            "High": 254.149994,
            "Low": 235.699997,
            "Close": 249.820007,
            "Adj Close": 249.820007,
            "Volume": 29956654
          },
          {
            "Date": "2015-06-16",
            "Open": 249.820007,
            "High": 258.480011,
            "Low": 245.089996,
            "Close": 247.380005,
            "Adj Close": 247.380005,
            "Volume": 30652977
          },
          {
            "Date": "2015-06-17",
            "Open": 247.380005,
            "High": 251.949997,
            "Low": 242.460007,
            "Close": 248.440002,
            "Adj Close": 248.440002,
            "Volume": 19421567
          },
          {
            "Date": "2015-06-18",
            "Open": 248.440002,
            "High": 250.809998,
            "Low": 243.649994,
            "Close": 244.130005,
            "Adj Close": 244.130005,
            "Volume": 20914718
          },
          {
            "Date": "2015-06-19",
            "Open": 244.130005,
            "High": 246.630005,
            "Low": 238.699997,
            "Close": 244.979996,
            "Adj Close": 244.979996,
            "Volume": 12470598
          },
          {
            "Date": "2015-06-20",
            "Open": 244.979996,
            "High": 246.029999,
            "Low": 240.940002,
            "Close": 244.100006,
            "Adj Close": 244.100006,
            "Volume": 6140997
          },
          {
            "Date": "2015-06-21",
            "Open": 244.100006,
            "High": 248.600006,
            "Low": 243.160004,
            "Close": 247.460007,
            "Adj Close": 247.460007,
            "Volume": 11713076
          },
          {
            "Date": "2015-06-22",
            "Open": 247.460007,
            "High": 247.669998,
            "Low": 242.320007,
            "Close": 243.759995,
            "Adj Close": 243.759995,
            "Volume": 9432470
          },
          {
            "Date": "2015-06-23",
            "Open": 243.759995,
            "High": 244.509995,
            "Low": 239.050003,
            "Close": 240.559998,
            "Adj Close": 240.559998,
            "Volume": 11415709
          },
          {
            "Date": "2015-06-24",
            "Open": 240.559998,
            "High": 243.649994,
            "Low": 239.320007,
            "Close": 242.559998,
            "Adj Close": 242.559998,
            "Volume": 9791297
          },
          {
            "Date": "2015-06-25",
            "Open": 242.559998,
            "High": 243.490005,
            "Low": 240.139999,
            "Close": 242.949997,
            "Adj Close": 242.949997,
            "Volume": 9112156
          },
          {
            "Date": "2015-06-26",
            "Open": 242.949997,
            "High": 251.570007,
            "Low": 241.830002,
            "Close": 250.729996,
            "Adj Close": 250.729996,
            "Volume": 13525813
          },
          {
            "Date": "2015-06-27",
            "Open": 250.729996,
            "High": 251.589996,
            "Low": 246.619995,
            "Close": 248.880005,
            "Adj Close": 248.880005,
            "Volume": 9955671
          },
          {
            "Date": "2015-06-28",
            "Open": 248.880005,
            "High": 257.540009,
            "Low": 247.960007,
            "Close": 256.970001,
            "Adj Close": 256.970001,
            "Volume": 23504772
          },
          {
            "Date": "2015-06-29",
            "Open": 256.970001,
            "High": 268.730011,
            "Low": 255.369995,
            "Close": 264.119995,
            "Adj Close": 264.119995,
            "Volume": 30621602
          },
          {
            "Date": "2015-06-30",
            "Open": 264.119995,
            "High": 265,
            "Low": 254.410004,
            "Close": 257.619995,
            "Adj Close": 257.619995,
            "Volume": 17316801
          },
          {
            "Date": "2015-07-01",
            "Open": 257.619995,
            "High": 261.290009,
            "Low": 253.089996,
            "Close": 254.880005,
            "Adj Close": 254.880005,
            "Volume": 11560214
          },
          {
            "Date": "2015-07-02",
            "Open": 254.880005,
            "High": 256.709991,
            "Low": 252.440002,
            "Close": 255.399994,
            "Adj Close": 255.399994,
            "Volume": 9335969
          },
          {
            "Date": "2015-07-03",
            "Open": 255.399994,
            "High": 261.079987,
            "Low": 253.369995,
            "Close": 260.549988,
            "Adj Close": 260.549988,
            "Volume": 8502000
          },
          {
            "Date": "2015-07-04",
            "Open": 260.549988,
            "High": 274.140015,
            "Low": 257.609985,
            "Close": 270.140015,
            "Adj Close": 270.140015,
            "Volume": 12906220
          },
          {
            "Date": "2015-07-05",
            "Open": 270.140015,
            "High": 277.480011,
            "Low": 266.459991,
            "Close": 269.079987,
            "Adj Close": 269.079987,
            "Volume": 14242625
          },
          {
            "Date": "2015-07-06",
            "Open": 269.079987,
            "High": 271.339996,
            "Low": 263.209991,
            "Close": 266.209991,
            "Adj Close": 266.209991,
            "Volume": 11104556
          },
          {
            "Date": "2015-07-07",
            "Open": 266.209991,
            "High": 273.570007,
            "Low": 263.179993,
            "Close": 268.640015,
            "Adj Close": 268.640015,
            "Volume": 12157995
          },
          {
            "Date": "2015-07-08",
            "Open": 268.640015,
            "High": 272.309998,
            "Low": 265.130005,
            "Close": 269.140015,
            "Adj Close": 269.140015,
            "Volume": 13058350
          },
          {
            "Date": "2015-07-09",
            "Open": 269.140015,
            "High": 297.850006,
            "Low": 266.910004,
            "Close": 283.619995,
            "Adj Close": 283.619995,
            "Volume": 33254590
          },
          {
            "Date": "2015-07-10",
            "Open": 283.619995,
            "High": 298.76001,
            "Low": 282.279999,
            "Close": 291.970001,
            "Adj Close": 291.970001,
            "Volume": 13584989
          },
          {
            "Date": "2015-07-11",
            "Open": 291.970001,
            "High": 315.880005,
            "Low": 291.26001,
            "Close": 310.440002,
            "Adj Close": 310.440002,
            "Volume": 36866127
          },
          {
            "Date": "2015-07-12",
            "Open": 310.440002,
            "High": 310.880005,
            "Low": 276.850006,
            "Close": 290.350006,
            "Adj Close": 290.350006,
            "Volume": 42741263
          },
          {
            "Date": "2015-07-13",
            "Open": 290.350006,
            "High": 296.959991,
            "Low": 285.170013,
            "Close": 286.959991,
            "Adj Close": 286.959991,
            "Volume": 17635928
          },
          {
            "Date": "2015-07-14",
            "Open": 286.959991,
            "High": 292.920013,
            "Low": 283.170013,
            "Close": 283.420013,
            "Adj Close": 283.420013,
            "Volume": 17274148
          },
          {
            "Date": "2015-07-15",
            "Open": 283.420013,
            "High": 290.839996,
            "Low": 273.279999,
            "Close": 276.589996,
            "Adj Close": 276.589996,
            "Volume": 34155564
          },
          {
            "Date": "2015-07-16",
            "Open": 276.589996,
            "High": 280.76001,
            "Low": 271.170013,
            "Close": 279.619995,
            "Adj Close": 279.619995,
            "Volume": 17217352
          },
          {
            "Date": "2015-07-17",
            "Open": 279.619995,
            "High": 282.529999,
            "Low": 243.240005,
            "Close": 274.049988,
            "Adj Close": 274.049988,
            "Volume": 15358107
          },
          {
            "Date": "2015-07-18",
            "Open": 274.049988,
            "High": 277.070007,
            "Low": 271.850006,
            "Close": 273.179993,
            "Adj Close": 273.179993,
            "Volume": 8322466
          },
          {
            "Date": "2015-07-19",
            "Open": 273.179993,
            "High": 278.850006,
            "Low": 271.820007,
            "Close": 277.679993,
            "Adj Close": 277.679993,
            "Volume": 12900609
          },
          {
            "Date": "2015-07-20",
            "Open": 277.679993,
            "High": 281.049988,
            "Low": 274.190002,
            "Close": 275.089996,
            "Adj Close": 275.089996,
            "Volume": 13667891
          },
          {
            "Date": "2015-07-21",
            "Open": 275.089996,
            "High": 277.390015,
            "Low": 273.119995,
            "Close": 276.459991,
            "Adj Close": 276.459991,
            "Volume": 11596311
          },
          {
            "Date": "2015-07-22",
            "Open": 276.459991,
            "High": 277.850006,
            "Low": 274.470001,
            "Close": 275.519989,
            "Adj Close": 275.519989,
            "Volume": 9870635
          },
          {
            "Date": "2015-07-23",
            "Open": 275.519989,
            "High": 289.809998,
            "Low": 274.26001,
            "Close": 288.369995,
            "Adj Close": 288.369995,
            "Volume": 21095041
          },
          {
            "Date": "2015-07-24",
            "Open": 288.369995,
            "High": 291.23999,
            "Low": 284.670013,
            "Close": 288.73999,
            "Adj Close": 288.73999,
            "Volume": 12024889
          },
          {
            "Date": "2015-07-25",
            "Open": 288.73999,
            "High": 293.279999,
            "Low": 286.769989,
            "Close": 291.769989,
            "Adj Close": 291.769989,
            "Volume": 9038050
          },
          {
            "Date": "2015-07-26",
            "Open": 291.769989,
            "High": 295.790009,
            "Low": 285.399994,
            "Close": 293.01001,
            "Adj Close": 293.01001,
            "Volume": 20358325
          },
          {
            "Date": "2015-07-27",
            "Open": 293.01001,
            "High": 296.679993,
            "Low": 291.670013,
            "Close": 293.700012,
            "Adj Close": 293.700012,
            "Volume": 14466428
          },
          {
            "Date": "2015-07-28",
            "Open": 293.700012,
            "High": 294.720001,
            "Low": 286.890015,
            "Close": 288.369995,
            "Adj Close": 288.369995,
            "Volume": 14738216
          },
          {
            "Date": "2015-07-29",
            "Open": 288.369995,
            "High": 289.890015,
            "Low": 284.910004,
            "Close": 287.019989,
            "Adj Close": 287.019989,
            "Volume": 12888680
          },
          {
            "Date": "2015-07-30",
            "Open": 287.019989,
            "High": 288.690002,
            "Low": 280.769989,
            "Close": 283.730011,
            "Adj Close": 283.730011,
            "Volume": 14019071
          },
          {
            "Date": "2015-07-31",
            "Open": 283.730011,
            "High": 284.529999,
            "Low": 276.299988,
            "Close": 280.470001,
            "Adj Close": 280.470001,
            "Volume": 11068826
          },
          {
            "Date": "2015-08-01",
            "Open": 280.470001,
            "High": 282.5,
            "Low": 275.929993,
            "Close": 281.359985,
            "Adj Close": 281.359985,
            "Volume": 9978638
          },
          {
            "Date": "2015-08-02",
            "Open": 281.359985,
            "High": 285,
            "Low": 278.940002,
            "Close": 281.579987,
            "Adj Close": 281.579987,
            "Volume": 13006246
          },
          {
            "Date": "2015-08-03",
            "Open": 281.579987,
            "High": 285.660004,
            "Low": 279.579987,
            "Close": 284.299988,
            "Adj Close": 284.299988,
            "Volume": 12732203
          },
          {
            "Date": "2015-08-04",
            "Open": 284.299988,
            "High": 285.450012,
            "Low": 280.529999,
            "Close": 281.720001,
            "Adj Close": 281.720001,
            "Volume": 10854754
          },
          {
            "Date": "2015-08-05",
            "Open": 281.720001,
            "High": 281.980011,
            "Low": 276.459991,
            "Close": 278,
            "Adj Close": 278,
            "Volume": 9319083
          },
          {
            "Date": "2015-08-06",
            "Open": 278,
            "High": 279.600006,
            "Low": 274.279999,
            "Close": 277.890015,
            "Adj Close": 277.890015,
            "Volume": 11919665
          },
          {
            "Date": "2015-08-07",
            "Open": 277.890015,
            "High": 278.920013,
            "Low": 257.420013,
            "Close": 258.600006,
            "Adj Close": 258.600006,
            "Volume": 22308123
          },
          {
            "Date": "2015-08-08",
            "Open": 258.600006,
            "High": 266.75,
            "Low": 258.559998,
            "Close": 263.869995,
            "Adj Close": 263.869995,
            "Volume": 15154749
          },
          {
            "Date": "2015-08-09",
            "Open": 263.869995,
            "High": 266.630005,
            "Low": 260.519989,
            "Close": 263.299988,
            "Adj Close": 263.299988,
            "Volume": 12873441
          },
          {
            "Date": "2015-08-10",
            "Open": 263.299988,
            "High": 269.899994,
            "Low": 261.440002,
            "Close": 269.029999,
            "Adj Close": 269.029999,
            "Volume": 13681939
          },
          {
            "Date": "2015-08-11",
            "Open": 269.029999,
            "High": 271.5,
            "Low": 263.660004,
            "Close": 267.660004,
            "Adj Close": 267.660004,
            "Volume": 15232934
          },
          {
            "Date": "2015-08-12",
            "Open": 267.660004,
            "High": 268.390015,
            "Low": 261.279999,
            "Close": 263.440002,
            "Adj Close": 263.440002,
            "Volume": 14962211
          },
          {
            "Date": "2015-08-13",
            "Open": 263.440002,
            "High": 267.220001,
            "Low": 260.209991,
            "Close": 265.029999,
            "Adj Close": 265.029999,
            "Volume": 13899139
          },
          {
            "Date": "2015-08-14",
            "Open": 265.029999,
            "High": 266.549988,
            "Low": 259.380005,
            "Close": 260.519989,
            "Adj Close": 260.519989,
            "Volume": 10303301
          },
          {
            "Date": "2015-08-15",
            "Open": 260.519989,
            "High": 261.920013,
            "Low": 254.570007,
            "Close": 257.119995,
            "Adj Close": 257.119995,
            "Volume": 17880398
          },
          {
            "Date": "2015-08-16",
            "Open": 257.119995,
            "High": 259.929993,
            "Low": 252.869995,
            "Close": 257.130005,
            "Adj Close": 257.130005,
            "Volume": 12378054
          },
          {
            "Date": "2015-08-17",
            "Open": 257.130005,
            "High": 257.529999,
            "Low": 245.740005,
            "Close": 246.720001,
            "Adj Close": 246.720001,
            "Volume": 23896056
          },
          {
            "Date": "2015-08-18",
            "Open": 246.720001,
            "High": 247.949997,
            "Low": 214.289993,
            "Close": 226,
            "Adj Close": 226,
            "Volume": 55514712
          },
          {
            "Date": "2015-08-19",
            "Open": 226,
            "High": 238.029999,
            "Low": 225.539993,
            "Close": 234.660004,
            "Adj Close": 234.660004,
            "Volume": 21225055
          },
          {
            "Date": "2015-08-20",
            "Open": 234.660004,
            "High": 236.300003,
            "Low": 230.479996,
            "Close": 232.399994,
            "Adj Close": 232.399994,
            "Volume": 13485729
          },
          {
            "Date": "2015-08-21",
            "Open": 232.399994,
            "High": 235.070007,
            "Low": 221.039993,
            "Close": 229.539993,
            "Adj Close": 229.539993,
            "Volume": 16976922
          },
          {
            "Date": "2015-08-22",
            "Open": 229.539993,
            "High": 232.699997,
            "Low": 224.270004,
            "Close": 226.75,
            "Adj Close": 226.75,
            "Volume": 11204081
          },
          {
            "Date": "2015-08-23",
            "Open": 226.75,
            "High": 228.429993,
            "Low": 207.820007,
            "Close": 211.429993,
            "Adj Close": 211.429993,
            "Volume": 43008579
          },
          {
            "Date": "2015-08-24",
            "Open": 211.429993,
            "High": 226.550003,
            "Low": 196.259995,
            "Close": 220.509995,
            "Adj Close": 220.509995,
            "Volume": 40651749
          },
          {
            "Date": "2015-08-25",
            "Open": 220.509995,
            "High": 230.690002,
            "Low": 218.789993,
            "Close": 224.970001,
            "Adj Close": 224.970001,
            "Volume": 20986286
          },
          {
            "Date": "2015-08-26",
            "Open": 224.970001,
            "High": 228.440002,
            "Low": 222,
            "Close": 222.729996,
            "Adj Close": 222.729996,
            "Volume": 13631111
          },
          {
            "Date": "2015-08-27",
            "Open": 222.729996,
            "High": 234.809998,
            "Low": 219.600006,
            "Close": 231.639999,
            "Adj Close": 231.639999,
            "Volume": 20751420
          },
          {
            "Date": "2015-08-28",
            "Open": 231.639999,
            "High": 233.089996,
            "Low": 226.350006,
            "Close": 228.5,
            "Adj Close": 228.5,
            "Volume": 10072201
          },
          {
            "Date": "2015-08-29",
            "Open": 228.5,
            "High": 232.320007,
            "Low": 225.440002,
            "Close": 228.399994,
            "Adj Close": 228.399994,
            "Volume": 9118089
          },
          {
            "Date": "2015-08-30",
            "Open": 228.399994,
            "High": 231.789993,
            "Low": 224.199997,
            "Close": 229.470001,
            "Adj Close": 229.470001,
            "Volume": 12521966
          },
          {
            "Date": "2015-08-31",
            "Open": 229.470001,
            "High": 231.449997,
            "Low": 225.759995,
            "Close": 227.179993,
            "Adj Close": 227.179993,
            "Volume": 15206241
          },
          {
            "Date": "2015-09-01",
            "Open": 227.179993,
            "High": 230.589996,
            "Low": 225.570007,
            "Close": 228.630005,
            "Adj Close": 228.630005,
            "Volume": 13443780
          },
          {
            "Date": "2015-09-02",
            "Open": 228.630005,
            "High": 229.619995,
            "Low": 225.360001,
            "Close": 226.199997,
            "Adj Close": 226.199997,
            "Volume": 12337406
          },
          {
            "Date": "2015-09-03",
            "Open": 226.199997,
            "High": 231.059998,
            "Low": 225.75,
            "Close": 230.25,
            "Adj Close": 230.25,
            "Volume": 14174313
          },
          {
            "Date": "2015-09-04",
            "Open": 230.25,
            "High": 235.610001,
            "Low": 228.289993,
            "Close": 233.669998,
            "Adj Close": 233.669998,
            "Volume": 11253257
          },
          {
            "Date": "2015-09-05",
            "Open": 233.669998,
            "High": 243.639999,
            "Low": 234.740005,
            "Close": 239.860001,
            "Adj Close": 239.860001,
            "Volume": 15939620
          },
          {
            "Date": "2015-09-06",
            "Open": 239.860001,
            "High": 242.660004,
            "Low": 237.490005,
            "Close": 239.580002,
            "Adj Close": 239.580002,
            "Volume": 13744695
          },
          {
            "Date": "2015-09-07",
            "Open": 239.580002,
            "High": 246.380005,
            "Low": 239.229996,
            "Close": 243.240005,
            "Adj Close": 243.240005,
            "Volume": 18605471
          },
          {
            "Date": "2015-09-08",
            "Open": 243.240005,
            "High": 244.339996,
            "Low": 236.490005,
            "Close": 237.410004,
            "Adj Close": 237.410004,
            "Volume": 16636258
          },
          {
            "Date": "2015-09-09",
            "Open": 237.410004,
            "High": 240.630005,
            "Low": 234.309998,
            "Close": 238.080002,
            "Adj Close": 238.080002,
            "Volume": 14447606
          },
          {
            "Date": "2015-09-10",
            "Open": 238.080002,
            "High": 241.020004,
            "Low": 237.380005,
            "Close": 239.899994,
            "Adj Close": 239.899994,
            "Volume": 10992443
          },
          {
            "Date": "2015-09-11",
            "Open": 239.899994,
            "High": 240.320007,
            "Low": 233.320007,
            "Close": 235.600006,
            "Adj Close": 235.600006,
            "Volume": 10407178
          },
          {
            "Date": "2015-09-12",
            "Open": 235.600006,
            "High": 236.160004,
            "Low": 228.279999,
            "Close": 230.190002,
            "Adj Close": 230.190002,
            "Volume": 11983360
          },
          {
            "Date": "2015-09-13",
            "Open": 230.190002,
            "High": 232.639999,
            "Low": 225.960007,
            "Close": 229.910004,
            "Adj Close": 229.910004,
            "Volume": 14070910
          },
          {
            "Date": "2015-09-14",
            "Open": 229.910004,
            "High": 242.830002,
            "Low": 228.029999,
            "Close": 229.529999,
            "Adj Close": 229.529999,
            "Volume": 11425472
          },
          {
            "Date": "2015-09-15",
            "Open": 229.529999,
            "High": 230.889999,
            "Low": 225.050003,
            "Close": 228.600006,
            "Adj Close": 228.600006,
            "Volume": 11866728
          },
          {
            "Date": "2015-09-16",
            "Open": 228.600006,
            "High": 235.169998,
            "Low": 227.949997,
            "Close": 232.720001,
            "Adj Close": 232.720001,
            "Volume": 12975914
          },
          {
            "Date": "2015-09-17",
            "Open": 232.720001,
            "High": 234.690002,
            "Low": 230.580002,
            "Close": 232.210007,
            "Adj Close": 232.210007,
            "Volume": 12397851
          },
          {
            "Date": "2015-09-18",
            "Open": 232.210007,
            "High": 233.350006,
            "Low": 230.210007,
            "Close": 231.110001,
            "Adj Close": 231.110001,
            "Volume": 8004103
          },
          {
            "Date": "2015-09-19",
            "Open": 231.110001,
            "High": 232.669998,
            "Low": 229.929993,
            "Close": 231.089996,
            "Adj Close": 231.089996,
            "Volume": 7676869
          },
          {
            "Date": "2015-09-20",
            "Open": 231.089996,
            "High": 231.630005,
            "Low": 225,
            "Close": 226.330002,
            "Adj Close": 226.330002,
            "Volume": 12180039
          },
          {
            "Date": "2015-09-21",
            "Open": 226.330002,
            "High": 233.240005,
            "Low": 224.070007,
            "Close": 230.009995,
            "Adj Close": 230.009995,
            "Volume": 16390021
          },
          {
            "Date": "2015-09-22",
            "Open": 230.009995,
            "High": 232.199997,
            "Low": 228.5,
            "Close": 229.889999,
            "Adj Close": 229.889999,
            "Volume": 10064288
          },
          {
            "Date": "2015-09-23",
            "Open": 229.889999,
            "High": 235.839996,
            "Low": 229.570007,
            "Close": 233.759995,
            "Adj Close": 233.759995,
            "Volume": 16797644
          },
          {
            "Date": "2015-09-24",
            "Open": 233.759995,
            "High": 237.580002,
            "Low": 232.699997,
            "Close": 235.029999,
            "Adj Close": 235.029999,
            "Volume": 14510987
          },
          {
            "Date": "2015-09-25",
            "Open": 235.029999,
            "High": 235.710007,
            "Low": 232.740005,
            "Close": 234.300003,
            "Adj Close": 234.300003,
            "Volume": 9449846
          },
          {
            "Date": "2015-09-26",
            "Open": 234.300003,
            "High": 234.75,
            "Low": 231.839996,
            "Close": 232.5,
            "Adj Close": 232.5,
            "Volume": 8429802
          },
          {
            "Date": "2015-09-27",
            "Open": 232.5,
            "High": 240.389999,
            "Low": 232.369995,
            "Close": 238.869995,
            "Adj Close": 238.869995,
            "Volume": 15282768
          },
          {
            "Date": "2015-09-28",
            "Open": 238.869995,
            "High": 240.389999,
            "Low": 234.800003,
            "Close": 236.710007,
            "Adj Close": 236.710007,
            "Volume": 13637645
          },
          {
            "Date": "2015-09-29",
            "Open": 236.710007,
            "High": 237.830002,
            "Low": 234.389999,
            "Close": 235.929993,
            "Adj Close": 235.929993,
            "Volume": 11946864
          },
          {
            "Date": "2015-09-30",
            "Open": 235.929993,
            "High": 238.660004,
            "Low": 234.699997,
            "Close": 237.050003,
            "Adj Close": 237.050003,
            "Volume": 12534482
          },
          {
            "Date": "2015-10-01",
            "Open": 237.050003,
            "High": 238.449997,
            "Low": 235.139999,
            "Close": 236.710007,
            "Adj Close": 236.710007,
            "Volume": 11378441
          },
          {
            "Date": "2015-10-02",
            "Open": 236.710007,
            "High": 239.520004,
            "Low": 236.070007,
            "Close": 238.580002,
            "Adj Close": 238.580002,
            "Volume": 10338780
          },
          {
            "Date": "2015-10-03",
            "Open": 238.580002,
            "High": 277.579987,
            "Low": 237.509995,
            "Close": 238.330002,
            "Adj Close": 238.330002,
            "Volume": 7618430
          },
          {
            "Date": "2015-10-04",
            "Open": 238.330002,
            "High": 240.529999,
            "Low": 236.410004,
            "Close": 240.149994,
            "Adj Close": 240.149994,
            "Volume": 14631928
          },
          {
            "Date": "2015-10-05",
            "Open": 240.149994,
            "High": 247.610001,
            "Low": 239.360001,
            "Close": 246.139999,
            "Adj Close": 246.139999,
            "Volume": 19242190
          },
          {
            "Date": "2015-10-06",
            "Open": 246.139999,
            "High": 247.279999,
            "Low": 241.649994,
            "Close": 242.979996,
            "Adj Close": 242.979996,
            "Volume": 15363142
          },
          {
            "Date": "2015-10-07",
            "Open": 242.979996,
            "High": 244.789993,
            "Low": 241.570007,
            "Close": 242.580002,
            "Adj Close": 242.580002,
            "Volume": 10762328
          },
          {
            "Date": "2015-10-08",
            "Open": 242.580002,
            "High": 244.559998,
            "Low": 241.339996,
            "Close": 244.039993,
            "Adj Close": 244.039993,
            "Volume": 9897714
          },
          {
            "Date": "2015-10-09",
            "Open": 244.039993,
            "High": 245.929993,
            "Low": 242.889999,
            "Close": 245.350006,
            "Adj Close": 245.350006,
            "Volume": 9547124
          },
          {
            "Date": "2015-10-10",
            "Open": 245.350006,
            "High": 248.259995,
            "Low": 244.470001,
            "Close": 247.649994,
            "Adj Close": 247.649994,
            "Volume": 10232454
          },
          {
            "Date": "2015-10-11",
            "Open": 247.649994,
            "High": 248.020004,
            "Low": 244.649994,
            "Close": 245.350006,
            "Adj Close": 245.350006,
            "Volume": 9961674
          },
          {
            "Date": "2015-10-12",
            "Open": 245.350006,
            "High": 251.190002,
            "Low": 243.110001,
            "Close": 248.779999,
            "Adj Close": 248.779999,
            "Volume": 18553307
          },
          {
            "Date": "2015-10-13",
            "Open": 248.779999,
            "High": 255.059998,
            "Low": 248.279999,
            "Close": 252.330002,
            "Adj Close": 252.330002,
            "Volume": 17511356
          },
          {
            "Date": "2015-10-14",
            "Open": 252.330002,
            "High": 256.76001,
            "Low": 251.169998,
            "Close": 254.440002,
            "Adj Close": 254.440002,
            "Volume": 15465023
          },
          {
            "Date": "2015-10-15",
            "Open": 254.440002,
            "High": 267.269989,
            "Low": 253.929993,
            "Close": 262.869995,
            "Adj Close": 262.869995,
            "Volume": 24886162
          },
          {
            "Date": "2015-10-16",
            "Open": 262.869995,
            "High": 275.410004,
            "Low": 261.73999,
            "Close": 269.579987,
            "Adj Close": 269.579987,
            "Volume": 30715446
          },
          {
            "Date": "2015-10-17",
            "Open": 269.579987,
            "High": 272.440002,
            "Low": 259.529999,
            "Close": 261.670013,
            "Adj Close": 261.670013,
            "Volume": 13921233
          },
          {
            "Date": "2015-10-18",
            "Open": 261.670013,
            "High": 265.950012,
            "Low": 259.890015,
            "Close": 263.820007,
            "Adj Close": 263.820007,
            "Volume": 15352671
          },
          {
            "Date": "2015-10-19",
            "Open": 263.820007,
            "High": 272.119995,
            "Low": 262.700012,
            "Close": 269.75,
            "Adj Close": 269.75,
            "Volume": 20200355
          },
          {
            "Date": "2015-10-20",
            "Open": 269.75,
            "High": 272.170013,
            "Low": 263.540009,
            "Close": 267.109985,
            "Adj Close": 267.109985,
            "Volume": 16006977
          },
          {
            "Date": "2015-10-21",
            "Open": 267.109985,
            "High": 278.73999,
            "Low": 266.799988,
            "Close": 274.420013,
            "Adj Close": 274.420013,
            "Volume": 25481882
          },
          {
            "Date": "2015-10-22",
            "Open": 274.420013,
            "High": 279.769989,
            "Low": 273.170013,
            "Close": 276.920013,
            "Adj Close": 276.920013,
            "Volume": 19221822
          },
          {
            "Date": "2015-10-23",
            "Open": 276.920013,
            "High": 283.049988,
            "Low": 277.01001,
            "Close": 282.559998,
            "Adj Close": 282.559998,
            "Volume": 16875626
          },
          {
            "Date": "2015-10-24",
            "Open": 282.559998,
            "High": 295.559998,
            "Low": 281.75,
            "Close": 287.859985,
            "Adj Close": 287.859985,
            "Volume": 32946170
          },
          {
            "Date": "2015-10-26",
            "Open": 287.859985,
            "High": 287.619995,
            "Low": 279.619995,
            "Close": 285.149994,
            "Adj Close": 285.149994,
            "Volume": 20794049
          },
          {
            "Date": "2015-10-27",
            "Open": 285.149994,
            "High": 298.429993,
            "Low": 285.089996,
            "Close": 294.660004,
            "Adj Close": 294.660004,
            "Volume": 31003938
          },
          {
            "Date": "2015-10-28",
            "Open": 294.660004,
            "High": 307.459991,
            "Low": 294.019989,
            "Close": 303.540009,
            "Adj Close": 303.540009,
            "Volume": 35117112
          },
          {
            "Date": "2015-10-29",
            "Open": 303.540009,
            "High": 318.480011,
            "Low": 300.160004,
            "Close": 313.630005,
            "Adj Close": 313.630005,
            "Volume": 43194878
          },
          {
            "Date": "2015-10-30",
            "Open": 313.630005,
            "High": 334.920013,
            "Low": 310.820007,
            "Close": 327.119995,
            "Adj Close": 327.119995,
            "Volume": 50796456
          },
          {
            "Date": "2015-10-31",
            "Open": 327.119995,
            "High": 333.25,
            "Low": 304.600006,
            "Close": 311.23999,
            "Adj Close": 311.23999,
            "Volume": 33762428
          },
          {
            "Date": "2015-11-01",
            "Open": 311.23999,
            "High": 324.339996,
            "Low": 304.720001,
            "Close": 322.950012,
            "Adj Close": 322.950012,
            "Volume": 23427549
          },
          {
            "Date": "2015-11-02",
            "Open": 322.950012,
            "High": 365.75,
            "Low": 319.75,
            "Close": 359.279999,
            "Adj Close": 359.279999,
            "Volume": 76864059
          },
          {
            "Date": "2015-11-03",
            "Open": 359.279999,
            "High": 416.779999,
            "Low": 354.579987,
            "Close": 396.48999,
            "Adj Close": 396.48999,
            "Volume": 163481625
          },
          {
            "Date": "2015-11-04",
            "Open": 396.48999,
            "High": 492.799988,
            "Low": 368.619995,
            "Close": 400.890015,
            "Adj Close": 400.890015,
            "Volume": 229673024
          },
          {
            "Date": "2015-11-05",
            "Open": 400.890015,
            "High": 447.23999,
            "Low": 366.079987,
            "Close": 382.700012,
            "Adj Close": 382.700012,
            "Volume": 121763708
          },
          {
            "Date": "2015-11-06",
            "Open": 382.700012,
            "High": 396.350006,
            "Low": 348.839996,
            "Close": 369.809998,
            "Adj Close": 369.809998,
            "Volume": 94921694
          },
          {
            "Date": "2015-11-07",
            "Open": 369.809998,
            "High": 391.75,
            "Low": 368.980011,
            "Close": 385.089996,
            "Adj Close": 385.089996,
            "Volume": 39495095
          },
          {
            "Date": "2015-11-08",
            "Open": 385.089996,
            "High": 389.779999,
            "Low": 365.48999,
            "Close": 371.559998,
            "Adj Close": 371.559998,
            "Volume": 35907981
          },
          {
            "Date": "2015-11-09",
            "Open": 371.559998,
            "High": 385.109985,
            "Low": 360.170013,
            "Close": 380.220001,
            "Adj Close": 380.220001,
            "Volume": 47074440
          },
          {
            "Date": "2015-11-10",
            "Open": 380.220001,
            "High": 381.380005,
            "Low": 323.209991,
            "Close": 336.690002,
            "Adj Close": 336.690002,
            "Volume": 74896052
          },
          {
            "Date": "2015-11-11",
            "Open": 336.690002,
            "High": 341.76001,
            "Low": 292.380005,
            "Close": 304.709991,
            "Adj Close": 304.709991,
            "Volume": 83078426
          },
          {
            "Date": "2015-11-12",
            "Open": 304.709991,
            "High": 346.130005,
            "Low": 306.070007,
            "Close": 333.850006,
            "Adj Close": 333.850006,
            "Volume": 54120828
          },
          {
            "Date": "2015-11-13",
            "Open": 333.850006,
            "High": 341.790009,
            "Low": 323.910004,
            "Close": 333.769989,
            "Adj Close": 333.769989,
            "Volume": 32480298
          },
          {
            "Date": "2015-11-14",
            "Open": 333.769989,
            "High": 369.799988,
            "Low": 326.350006,
            "Close": 331.769989,
            "Adj Close": 331.769989,
            "Volume": 23836097
          },
          {
            "Date": "2015-11-15",
            "Open": 331.769989,
            "High": 334.779999,
            "Low": 314.160004,
            "Close": 317.450012,
            "Adj Close": 317.450012,
            "Volume": 28640663
          },
          {
            "Date": "2015-11-16",
            "Open": 317.450012,
            "High": 332.01001,
            "Low": 314.059998,
            "Close": 330.209991,
            "Adj Close": 330.209991,
            "Volume": 28260517
          },
          {
            "Date": "2015-11-17",
            "Open": 330.209991,
            "High": 342.910004,
            "Low": 328.149994,
            "Close": 333.910004,
            "Adj Close": 333.910004,
            "Volume": 32944787
          },
          {
            "Date": "2015-11-18",
            "Open": 333.910004,
            "High": 337.390015,
            "Low": 329.420013,
            "Close": 335.920013,
            "Adj Close": 335.920013,
            "Volume": 26194853
          },
          {
            "Date": "2015-11-19",
            "Open": 335.920013,
            "High": 335.640015,
            "Low": 323.359985,
            "Close": 324.980011,
            "Adj Close": 324.980011,
            "Volume": 28543062
          },
          {
            "Date": "2015-11-20",
            "Open": 324.980011,
            "High": 327.059998,
            "Low": 309.480011,
            "Close": 321.119995,
            "Adj Close": 321.119995,
            "Volume": 35090324
          },
          {
            "Date": "2015-11-21",
            "Open": 321.119995,
            "High": 328.420013,
            "Low": 318.369995,
            "Close": 324.700012,
            "Adj Close": 324.700012,
            "Volume": 14652996
          },
          {
            "Date": "2015-11-22",
            "Open": 324.700012,
            "High": 326.940002,
            "Low": 319.350006,
            "Close": 322.779999,
            "Adj Close": 322.779999,
            "Volume": 11915632
          },
          {
            "Date": "2015-11-23",
            "Open": 322.779999,
            "High": 325,
            "Low": 319.890015,
            "Close": 322.119995,
            "Adj Close": 322.119995,
            "Volume": 13839023
          },
          {
            "Date": "2015-11-24",
            "Open": 322.119995,
            "High": 323.26001,
            "Low": 315.540009,
            "Close": 318.350006,
            "Adj Close": 318.350006,
            "Volume": 16282941
          },
          {
            "Date": "2015-11-25",
            "Open": 318.350006,
            "High": 330.040009,
            "Low": 315.690002,
            "Close": 327.519989,
            "Adj Close": 327.519989,
            "Volume": 25200934
          },
          {
            "Date": "2015-11-26",
            "Open": 327.519989,
            "High": 368.920013,
            "Low": 327.399994,
            "Close": 353.73999,
            "Adj Close": 353.73999,
            "Volume": 73395832
          },
          {
            "Date": "2015-11-27",
            "Open": 353.73999,
            "High": 363.899994,
            "Low": 345.149994,
            "Close": 359.519989,
            "Adj Close": 359.519989,
            "Volume": 36955394
          },
          {
            "Date": "2015-11-28",
            "Open": 359.519989,
            "High": 360.079987,
            "Low": 350.48999,
            "Close": 355.829987,
            "Adj Close": 355.829987,
            "Volume": 19988111
          },
          {
            "Date": "2015-11-29",
            "Open": 355.829987,
            "High": 372.839996,
            "Low": 354.549988,
            "Close": 370.839996,
            "Adj Close": 370.839996,
            "Volume": 24546100
          },
          {
            "Date": "2015-11-30",
            "Open": 370.839996,
            "High": 382.559998,
            "Low": 367.869995,
            "Close": 377.970001,
            "Adj Close": 377.970001,
            "Volume": 48913368
          },
          {
            "Date": "2015-12-01",
            "Open": 377.970001,
            "High": 379.019989,
            "Low": 353.660004,
            "Close": 361.799988,
            "Adj Close": 361.799988,
            "Volume": 40821470
          },
          {
            "Date": "2015-12-02",
            "Open": 361.799988,
            "High": 363.429993,
            "Low": 347.160004,
            "Close": 359.980011,
            "Adj Close": 359.980011,
            "Volume": 32881089
          },
          {
            "Date": "2015-12-03",
            "Open": 359.980011,
            "High": 371.369995,
            "Low": 355.470001,
            "Close": 360.309998,
            "Adj Close": 360.309998,
            "Volume": 31673283
          },
          {
            "Date": "2015-12-04",
            "Open": 360.309998,
            "High": 363.950012,
            "Low": 354.309998,
            "Close": 361.670013,
            "Adj Close": 361.670013,
            "Volume": 21820610
          },
          {
            "Date": "2015-12-05",
            "Open": 361.670013,
            "High": 390.279999,
            "Low": 361.5,
            "Close": 386.690002,
            "Adj Close": 386.690002,
            "Volume": 43438102
          },
          {
            "Date": "2015-12-06",
            "Open": 386.690002,
            "High": 402.190002,
            "Low": 382.619995,
            "Close": 393.380005,
            "Adj Close": 393.380005,
            "Volume": 52068577
          },
          {
            "Date": "2015-12-07",
            "Open": 393.380005,
            "High": 398.73999,
            "Low": 381.690002,
            "Close": 394.279999,
            "Adj Close": 394.279999,
            "Volume": 38102878
          },
          {
            "Date": "2015-12-08",
            "Open": 394.279999,
            "High": 411.070007,
            "Low": 388.029999,
            "Close": 410.670013,
            "Adj Close": 410.670013,
            "Volume": 29543120
          },
          {
            "Date": "2015-12-09",
            "Open": 410.670013,
            "High": 424.579987,
            "Low": 403.26001,
            "Close": 416,
            "Adj Close": 416,
            "Volume": 61289838
          },
          {
            "Date": "2015-12-10",
            "Open": 416,
            "High": 420.359985,
            "Low": 409.529999,
            "Close": 415.48999,
            "Adj Close": 415.48999,
            "Volume": 29794270
          },
          {
            "Date": "2015-12-11",
            "Open": 415.48999,
            "High": 453.369995,
            "Low": 413.720001,
            "Close": 449.829987,
            "Adj Close": 449.829987,
            "Volume": 76433917
          },
          {
            "Date": "2015-12-12",
            "Open": 449.829987,
            "High": 467.709991,
            "Low": 403.690002,
            "Close": 432.290009,
            "Adj Close": 432.290009,
            "Volume": 91838640
          },
          {
            "Date": "2015-12-13",
            "Open": 432.290009,
            "High": 440.970001,
            "Low": 420.76001,
            "Close": 434.690002,
            "Adj Close": 434.690002,
            "Volume": 27898250
          },
          {
            "Date": "2015-12-14",
            "Open": 434.690002,
            "High": 449.450012,
            "Low": 428.839996,
            "Close": 442,
            "Adj Close": 442,
            "Volume": 97068568
          },
          {
            "Date": "2015-12-15",
            "Open": 442,
            "High": 464.230011,
            "Low": 440.720001,
            "Close": 462.649994,
            "Adj Close": 462.649994,
            "Volume": 48912227
          },
          {
            "Date": "2015-12-16",
            "Open": 462.649994,
            "High": 465.160004,
            "Low": 437.369995,
            "Close": 453.980011,
            "Adj Close": 453.980011,
            "Volume": 84336145
          },
          {
            "Date": "2015-12-17",
            "Open": 453.980011,
            "High": 458.440002,
            "Low": 447.290009,
            "Close": 455.529999,
            "Adj Close": 455.529999,
            "Volume": 29344348
          },
          {
            "Date": "2015-12-18",
            "Open": 455.529999,
            "High": 466.119995,
            "Low": 453.459991,
            "Close": 463.179993,
            "Adj Close": 463.179993,
            "Volume": 38425211
          },
          {
            "Date": "2015-12-19",
            "Open": 463.179993,
            "High": 465.98999,
            "Low": 452.329987,
            "Close": 461.200012,
            "Adj Close": 461.200012,
            "Volume": 28327900
          },
          {
            "Date": "2015-12-20",
            "Open": 461.200012,
            "High": 462.76001,
            "Low": 431.100006,
            "Close": 441.779999,
            "Adj Close": 441.779999,
            "Volume": 54316484
          },
          {
            "Date": "2015-12-21",
            "Open": 441.779999,
            "High": 445.540009,
            "Low": 423.98999,
            "Close": 437.589996,
            "Adj Close": 437.589996,
            "Volume": 53270215
          },
          {
            "Date": "2015-12-22",
            "Open": 437.589996,
            "High": 443.220001,
            "Low": 433.25,
            "Close": 437.029999,
            "Adj Close": 437.029999,
            "Volume": 28845536
          },
          {
            "Date": "2015-12-23",
            "Open": 437.029999,
            "High": 444.779999,
            "Low": 434.279999,
            "Close": 442.429993,
            "Adj Close": 442.429993,
            "Volume": 27877349
          },
          {
            "Date": "2015-12-24",
            "Open": 442.429993,
            "High": 460.619995,
            "Low": 441.76001,
            "Close": 452.980011,
            "Adj Close": 452.980011,
            "Volume": 36096662
          },
          {
            "Date": "2015-12-25",
            "Open": 452.980011,
            "High": 457.440002,
            "Low": 449.519989,
            "Close": 454.049988,
            "Adj Close": 454.049988,
            "Volume": 19251958
          },
          {
            "Date": "2015-12-26",
            "Open": 454.049988,
            "High": 456.480011,
            "Low": 400.450012,
            "Close": 415.369995,
            "Adj Close": 415.369995,
            "Volume": 88564770
          },
          {
            "Date": "2015-12-27",
            "Open": 415.369995,
            "High": 425.51001,
            "Low": 406.089996,
            "Close": 422.390015,
            "Adj Close": 422.390015,
            "Volume": 28259303
          },
          {
            "Date": "2015-12-28",
            "Open": 422.390015,
            "High": 429.850006,
            "Low": 417.140015,
            "Close": 421.76001,
            "Adj Close": 421.76001,
            "Volume": 28978639
          },
          {
            "Date": "2015-12-29",
            "Open": 421.76001,
            "High": 433.559998,
            "Low": 419.299988,
            "Close": 431.920013,
            "Adj Close": 431.920013,
            "Volume": 30163445
          },
          {
            "Date": "2015-12-30",
            "Open": 431.920013,
            "High": 435.040009,
            "Low": 420.769989,
            "Close": 427.149994,
            "Adj Close": 427.149994,
            "Volume": 29289416
          },
          {
            "Date": "2015-12-31",
            "Open": 427.149994,
            "High": 433.119995,
            "Low": 417.140015,
            "Close": 429.950012,
            "Adj Close": 429.950012,
            "Volume": 27758278
          },
          {
            "Date": "2016-01-01",
            "Open": 429.950012,
            "High": 437.950012,
            "Low": 425.859985,
            "Close": 433.98999,
            "Adj Close": 433.98999,
            "Volume": 20334286
          },
          {
            "Date": "2016-01-02",
            "Open": 433.98999,
            "High": 437.429993,
            "Low": 430.730011,
            "Close": 433.720001,
            "Adj Close": 433.720001,
            "Volume": 14566820
          },
          {
            "Date": "2016-01-03",
            "Open": 433.720001,
            "High": 434.140015,
            "Low": 423.089996,
            "Close": 430.700012,
            "Adj Close": 430.700012,
            "Volume": 23490162
          },
          {
            "Date": "2016-01-04",
            "Open": 430.700012,
            "High": 435.26001,
            "Low": 428.600006,
            "Close": 433.320007,
            "Adj Close": 433.320007,
            "Volume": 22943968
          },
          {
            "Date": "2016-01-05",
            "Open": 433.320007,
            "High": 435.25,
            "Low": 428.869995,
            "Close": 431.200012,
            "Adj Close": 431.200012,
            "Volume": 19499588
          },
          {
            "Date": "2016-01-06",
            "Open": 431.200012,
            "High": 432.109985,
            "Low": 425,
            "Close": 430.820007,
            "Adj Close": 430.820007,
            "Volume": 18702334
          },
          {
            "Date": "2016-01-07",
            "Open": 430.820007,
            "High": 457.540009,
            "Low": 428.519989,
            "Close": 457.049988,
            "Adj Close": 457.049988,
            "Volume": 58253615
          },
          {
            "Date": "2016-01-08",
            "Open": 457.049988,
            "High": 462.920013,
            "Low": 446.51001,
            "Close": 452.869995,
            "Adj Close": 452.869995,
            "Volume": 41594025
          },
          {
            "Date": "2016-01-09",
            "Open": 452.869995,
            "High": 454.549988,
            "Low": 444.899994,
            "Close": 448.309998,
            "Adj Close": 448.309998,
            "Volume": 17967113
          },
          {
            "Date": "2016-01-10",
            "Open": 448.309998,
            "High": 448.880005,
            "Low": 438.619995,
            "Close": 446.190002,
            "Adj Close": 446.190002,
            "Volume": 19778456
          },
          {
            "Date": "2016-01-11",
            "Open": 446.190002,
            "High": 451.079987,
            "Low": 441.769989,
            "Close": 447.720001,
            "Adj Close": 447.720001,
            "Volume": 25358480
          },
          {
            "Date": "2016-01-12",
            "Open": 447.720001,
            "High": 448.410004,
            "Low": 443.140015,
            "Close": 445.040009,
            "Adj Close": 445.040009,
            "Volume": 19913400
          },
          {
            "Date": "2016-01-13",
            "Open": 445.040009,
            "High": 443.720001,
            "Low": 420.390015,
            "Close": 432.179993,
            "Adj Close": 432.179993,
            "Volume": 39525195
          },
          {
            "Date": "2016-01-14",
            "Open": 432.179993,
            "High": 433.73999,
            "Low": 427.01001,
            "Close": 429.130005,
            "Adj Close": 429.130005,
            "Volume": 19948730
          },
          {
            "Date": "2016-01-15",
            "Open": 429.130005,
            "High": 430.149994,
            "Low": 364.709991,
            "Close": 372.26001,
            "Adj Close": 372.26001,
            "Volume": 107060613
          },
          {
            "Date": "2016-01-16",
            "Open": 372.26001,
            "High": 386.720001,
            "Low": 350.390015,
            "Close": 385.040009,
            "Adj Close": 385.040009,
            "Volume": 68297105
          },
          {
            "Date": "2016-01-17",
            "Open": 385.040009,
            "High": 390.720001,
            "Low": 377.709991,
            "Close": 382.470001,
            "Adj Close": 382.470001,
            "Volume": 25464382
          },
          {
            "Date": "2016-01-18",
            "Open": 382.470001,
            "High": 387.290009,
            "Low": 373.209991,
            "Close": 384.399994,
            "Adj Close": 384.399994,
            "Volume": 26546465
          },
          {
            "Date": "2016-01-19",
            "Open": 384.399994,
            "High": 386.690002,
            "Low": 375.890015,
            "Close": 379.459991,
            "Adj Close": 379.459991,
            "Volume": 25417876
          },
          {
            "Date": "2016-01-20",
            "Open": 379.459991,
            "High": 425.720001,
            "Low": 374.049988,
            "Close": 414.579987,
            "Adj Close": 414.579987,
            "Volume": 76873917
          },
          {
            "Date": "2016-01-21",
            "Open": 414.579987,
            "High": 423.420013,
            "Low": 403.859985,
            "Close": 410.23999,
            "Adj Close": 410.23999,
            "Volume": 37264942
          },
          {
            "Date": "2016-01-22",
            "Open": 410.23999,
            "High": 411.48999,
            "Low": 374.899994,
            "Close": 382.649994,
            "Adj Close": 382.649994,
            "Volume": 56548790
          },
          {
            "Date": "2016-01-23",
            "Open": 382.649994,
            "High": 395.429993,
            "Low": 380.269989,
            "Close": 388.609985,
            "Adj Close": 388.609985,
            "Volume": 23908533
          },
          {
            "Date": "2016-01-24",
            "Open": 388.609985,
            "High": 405.399994,
            "Low": 385.529999,
            "Close": 402.130005,
            "Adj Close": 402.130005,
            "Volume": 25770175
          },
          {
            "Date": "2016-01-25",
            "Open": 402.130005,
            "High": 403.779999,
            "Low": 386.850006,
            "Close": 392.76001,
            "Adj Close": 392.76001,
            "Volume": 26793044
          },
          {
            "Date": "2016-01-26",
            "Open": 392.76001,
            "High": 397.73999,
            "Low": 387.899994,
            "Close": 389.779999,
            "Adj Close": 389.779999,
            "Volume": 22384754
          },
          {
            "Date": "2016-01-27",
            "Open": 389.779999,
            "High": 397.369995,
            "Low": 389.350006,
            "Close": 395.019989,
            "Adj Close": 395.019989,
            "Volume": 17297117
          },
          {
            "Date": "2016-01-28",
            "Open": 395.019989,
            "High": 395.420013,
            "Low": 376.709991,
            "Close": 379.690002,
            "Adj Close": 379.690002,
            "Volume": 29717813
          },
          {
            "Date": "2016-01-29",
            "Open": 379.690002,
            "High": 385.75,
            "Low": 363.48999,
            "Close": 380.290009,
            "Adj Close": 380.290009,
            "Volume": 51927041
          },
          {
            "Date": "2016-01-30",
            "Open": 380.290009,
            "High": 381.75,
            "Low": 375.040009,
            "Close": 377.76001,
            "Adj Close": 377.76001,
            "Volume": 13720656
          },
          {
            "Date": "2016-01-31",
            "Open": 377.76001,
            "High": 380.540009,
            "Low": 366.880005,
            "Close": 369.839996,
            "Adj Close": 369.839996,
            "Volume": 14718855
          },
          {
            "Date": "2016-02-01",
            "Open": 369.839996,
            "High": 379.779999,
            "Low": 365.269989,
            "Close": 372.179993,
            "Adj Close": 372.179993,
            "Volume": 27728088
          },
          {
            "Date": "2016-02-02",
            "Open": 372.179993,
            "High": 376.630005,
            "Low": 371.399994,
            "Close": 373.920013,
            "Adj Close": 373.920013,
            "Volume": 19123252
          },
          {
            "Date": "2016-02-03",
            "Open": 373.920013,
            "High": 375.890015,
            "Low": 366.200012,
            "Close": 368.019989,
            "Adj Close": 368.019989,
            "Volume": 22266682
          },
          {
            "Date": "2016-02-04",
            "Open": 368.019989,
            "High": 391.829987,
            "Low": 368.049988,
            "Close": 390.649994,
            "Adj Close": 390.649994,
            "Volume": 38961905
          },
          {
            "Date": "2016-02-05",
            "Open": 390.649994,
            "High": 391.149994,
            "Low": 384.480011,
            "Close": 386.459991,
            "Adj Close": 386.459991,
            "Volume": 23688228
          },
          {
            "Date": "2016-02-06",
            "Open": 386.459991,
            "High": 386.350006,
            "Low": 372.869995,
            "Close": 376.679993,
            "Adj Close": 376.679993,
            "Volume": 29801286
          },
          {
            "Date": "2016-02-07",
            "Open": 376.679993,
            "High": 382.609985,
            "Low": 375.279999,
            "Close": 377.940002,
            "Adj Close": 377.940002,
            "Volume": 15395728
          },
          {
            "Date": "2016-02-08",
            "Open": 377.940002,
            "High": 380.920013,
            "Low": 372.100006,
            "Close": 372.630005,
            "Adj Close": 372.630005,
            "Volume": 23424062
          },
          {
            "Date": "2016-02-09",
            "Open": 372.630005,
            "High": 377.589996,
            "Low": 371.420013,
            "Close": 375.320007,
            "Adj Close": 375.320007,
            "Volume": 20801701
          },
          {
            "Date": "2016-02-10",
            "Open": 375.320007,
            "High": 385.380005,
            "Low": 374.089996,
            "Close": 381.880005,
            "Adj Close": 381.880005,
            "Volume": 37137791
          },
          {
            "Date": "2016-02-11",
            "Open": 381.880005,
            "High": 383.230011,
            "Low": 372.75,
            "Close": 379.450012,
            "Adj Close": 379.450012,
            "Volume": 23858467
          },
          {
            "Date": "2016-02-12",
            "Open": 379.450012,
            "High": 386.399994,
            "Low": 379.320007,
            "Close": 384.040009,
            "Adj Close": 384.040009,
            "Volume": 20685663
          },
          {
            "Date": "2016-02-13",
            "Open": 384.040009,
            "High": 392.570007,
            "Low": 383.309998,
            "Close": 390.100006,
            "Adj Close": 390.100006,
            "Volume": 18757146
          },
          {
            "Date": "2016-02-14",
            "Open": 390.100006,
            "High": 405.929993,
            "Low": 390.059998,
            "Close": 405.5,
            "Adj Close": 405.5,
            "Volume": 29442484
          },
          {
            "Date": "2016-02-15",
            "Open": 405.5,
            "High": 410.850006,
            "Low": 396.559998,
            "Close": 401.070007,
            "Adj Close": 401.070007,
            "Volume": 34862753
          },
          {
            "Date": "2016-02-16",
            "Open": 401.070007,
            "High": 409.75,
            "Low": 398,
            "Close": 406.420013,
            "Adj Close": 406.420013,
            "Volume": 27726590
          },
          {
            "Date": "2016-02-17",
            "Open": 406.420013,
            "High": 421.450012,
            "Low": 405.049988,
            "Close": 417.140015,
            "Adj Close": 417.140015,
            "Volume": 37559686
          },
          {
            "Date": "2016-02-18",
            "Open": 417.140015,
            "High": 425.51001,
            "Low": 414.779999,
            "Close": 421.399994,
            "Adj Close": 421.399994,
            "Volume": 32541108
          },
          {
            "Date": "2016-02-19",
            "Open": 421.399994,
            "High": 424.26001,
            "Low": 416.359985,
            "Close": 419.980011,
            "Adj Close": 419.980011,
            "Volume": 21991480
          },
          {
            "Date": "2016-02-20",
            "Open": 419.980011,
            "High": 442.660004,
            "Low": 419.48999,
            "Close": 440.059998,
            "Adj Close": 440.059998,
            "Volume": 48500793
          },
          {
            "Date": "2016-02-21",
            "Open": 440.059998,
            "High": 447.609985,
            "Low": 425.470001,
            "Close": 437.869995,
            "Adj Close": 437.869995,
            "Volume": 44120520
          },
          {
            "Date": "2016-02-22",
            "Open": 437.869995,
            "High": 440.179993,
            "Low": 431.299988,
            "Close": 437.790009,
            "Adj Close": 437.790009,
            "Volume": 24563748
          },
          {
            "Date": "2016-02-23",
            "Open": 437.790009,
            "High": 440.76001,
            "Low": 414.359985,
            "Close": 419.899994,
            "Adj Close": 419.899994,
            "Volume": 39915706
          },
          {
            "Date": "2016-02-24",
            "Open": 419.899994,
            "High": 425.170013,
            "Low": 410.359985,
            "Close": 422.720001,
            "Adj Close": 422.720001,
            "Volume": 28041199
          },
          {
            "Date": "2016-02-25",
            "Open": 422.720001,
            "High": 427.179993,
            "Low": 417.51001,
            "Close": 423.480011,
            "Adj Close": 423.480011,
            "Volume": 22692099
          },
          {
            "Date": "2016-02-26",
            "Open": 423.480011,
            "High": 427.579987,
            "Low": 419.109985,
            "Close": 427.320007,
            "Adj Close": 427.320007,
            "Volume": 22642013
          },
          {
            "Date": "2016-02-27",
            "Open": 427.320007,
            "High": 434.140015,
            "Low": 427.299988,
            "Close": 431.299988,
            "Adj Close": 431.299988,
            "Volume": 18543436
          },
          {
            "Date": "2016-02-28",
            "Open": 431.299988,
            "High": 435.619995,
            "Low": 421.220001,
            "Close": 432.470001,
            "Adj Close": 432.470001,
            "Volume": 21876091
          },
          {
            "Date": "2016-02-29",
            "Open": 432.470001,
            "High": 441.320007,
            "Low": 429.829987,
            "Close": 436.209991,
            "Adj Close": 436.209991,
            "Volume": 30077319
          },
          {
            "Date": "2016-03-01",
            "Open": 436.209991,
            "High": 439.019989,
            "Low": 428.48999,
            "Close": 434.040009,
            "Adj Close": 434.040009,
            "Volume": 29312670
          },
          {
            "Date": "2016-03-02",
            "Open": 434.040009,
            "High": 435.910004,
            "Low": 423.850006,
            "Close": 425.359985,
            "Adj Close": 425.359985,
            "Volume": 24894311
          },
          {
            "Date": "2016-03-03",
            "Open": 425.359985,
            "High": 425.829987,
            "Low": 414.940002,
            "Close": 419.559998,
            "Adj Close": 419.559998,
            "Volume": 33188751
          },
          {
            "Date": "2016-03-04",
            "Open": 419.559998,
            "High": 423.390015,
            "Low": 407.200012,
            "Close": 409.480011,
            "Adj Close": 409.480011,
            "Volume": 31416610
          },
          {
            "Date": "2016-03-05",
            "Open": 409.480011,
            "High": 410.059998,
            "Low": 386.929993,
            "Close": 399,
            "Adj Close": 399,
            "Volume": 51725937
          },
          {
            "Date": "2016-03-06",
            "Open": 399,
            "High": 412.019989,
            "Low": 393.089996,
            "Close": 405.959991,
            "Adj Close": 405.959991,
            "Volume": 25324456
          },
          {
            "Date": "2016-03-07",
            "Open": 405.959991,
            "High": 416.579987,
            "Low": 401.980011,
            "Close": 414.869995,
            "Adj Close": 414.869995,
            "Volume": 25349627
          },
          {
            "Date": "2016-03-08",
            "Open": 414.869995,
            "High": 416.720001,
            "Low": 408.420013,
            "Close": 411.899994,
            "Adj Close": 411.899994,
            "Volume": 22204517
          },
          {
            "Date": "2016-03-09",
            "Open": 411.899994,
            "High": 414.880005,
            "Low": 408.940002,
            "Close": 412.76001,
            "Adj Close": 412.76001,
            "Volume": 21035428
          },
          {
            "Date": "2016-03-10",
            "Open": 412.76001,
            "High": 417.480011,
            "Low": 410.269989,
            "Close": 415.829987,
            "Adj Close": 415.829987,
            "Volume": 23114636
          },
          {
            "Date": "2016-03-11",
            "Open": 415.829987,
            "High": 422.399994,
            "Low": 415.109985,
            "Close": 419.109985,
            "Adj Close": 419.109985,
            "Volume": 25469781
          },
          {
            "Date": "2016-03-12",
            "Open": 419.109985,
            "High": 420.670013,
            "Low": 407.029999,
            "Close": 410.359985,
            "Adj Close": 410.359985,
            "Volume": 24660321
          },
          {
            "Date": "2016-03-13",
            "Open": 410.359985,
            "High": 415.929993,
            "Low": 409.570007,
            "Close": 412.410004,
            "Adj Close": 412.410004,
            "Volume": 14457108
          },
          {
            "Date": "2016-03-14",
            "Open": 412.410004,
            "High": 416.079987,
            "Low": 411.190002,
            "Close": 414.309998,
            "Adj Close": 414.309998,
            "Volume": 20471909
          },
          {
            "Date": "2016-03-15",
            "Open": 414.309998,
            "High": 417.369995,
            "Low": 412.309998,
            "Close": 415.130005,
            "Adj Close": 415.130005,
            "Volume": 20227610
          },
          {
            "Date": "2016-03-16",
            "Open": 415.130005,
            "High": 416.950012,
            "Low": 413.320007,
            "Close": 415.910004,
            "Adj Close": 415.910004,
            "Volume": 18509954
          },
          {
            "Date": "2016-03-17",
            "Open": 415.910004,
            "High": 419.559998,
            "Low": 415.329987,
            "Close": 418.160004,
            "Adj Close": 418.160004,
            "Volume": 18409340
          },
          {
            "Date": "2016-03-18",
            "Open": 418.160004,
            "High": 418.579987,
            "Low": 402.480011,
            "Close": 408.160004,
            "Adj Close": 408.160004,
            "Volume": 27178165
          },
          {
            "Date": "2016-03-19",
            "Open": 408.160004,
            "High": 410.48999,
            "Low": 402.130005,
            "Close": 408.690002,
            "Adj Close": 408.690002,
            "Volume": 15084656
          },
          {
            "Date": "2016-03-20",
            "Open": 408.690002,
            "High": 413.450012,
            "Low": 407.23999,
            "Close": 411.529999,
            "Adj Close": 411.529999,
            "Volume": 12577521
          },
          {
            "Date": "2016-03-21",
            "Open": 411.529999,
            "High": 413.089996,
            "Low": 407.25,
            "Close": 411.109985,
            "Adj Close": 411.109985,
            "Volume": 17735457
          },
          {
            "Date": "2016-03-22",
            "Open": 411.109985,
            "High": 417.940002,
            "Low": 410.779999,
            "Close": 416.209991,
            "Adj Close": 416.209991,
            "Volume": 20425092
          },
          {
            "Date": "2016-03-23",
            "Open": 416.209991,
            "High": 419.579987,
            "Low": 414.179993,
            "Close": 416.980011,
            "Adj Close": 416.980011,
            "Volume": 16946522
          },
          {
            "Date": "2016-03-24",
            "Open": 416.980011,
            "High": 417.679993,
            "Low": 412.880005,
            "Close": 414.73999,
            "Adj Close": 414.73999,
            "Volume": 16210672
          },
          {
            "Date": "2016-03-25",
            "Open": 414.73999,
            "High": 417.299988,
            "Low": 412.410004,
            "Close": 415.709991,
            "Adj Close": 415.709991,
            "Volume": 14431200
          },
          {
            "Date": "2016-03-26",
            "Open": 415.709991,
            "High": 417.709991,
            "Low": 413.929993,
            "Close": 416.51001,
            "Adj Close": 416.51001,
            "Volume": 11696306
          },
          {
            "Date": "2016-03-27",
            "Open": 416.51001,
            "High": 427.359985,
            "Low": 415.5,
            "Close": 424.570007,
            "Adj Close": 424.570007,
            "Volume": 26137150
          },
          {
            "Date": "2016-03-27",
            "Open": 424.570007,
            "High": 425.359985,
            "Low": 419.700012,
            "Close": 422.209991,
            "Adj Close": 422.209991,
            "Volume": 18410749
          },
          {
            "Date": "2016-03-28",
            "Open": 422.209991,
            "High": 424.529999,
            "Low": 406.359985,
            "Close": 415,
            "Adj Close": 415,
            "Volume": 28765857
          },
          {
            "Date": "2016-03-29",
            "Open": 415,
            "High": 416.220001,
            "Low": 408.399994,
            "Close": 412.440002,
            "Adj Close": 412.440002,
            "Volume": 17890792
          },
          {
            "Date": "2016-03-30",
            "Open": 412.440002,
            "High": 417.160004,
            "Low": 411.450012,
            "Close": 415.660004,
            "Adj Close": 415.660004,
            "Volume": 17407273
          },
          {
            "Date": "2016-03-31",
            "Open": 415.660004,
            "High": 416.859985,
            "Low": 412.790009,
            "Close": 415.640015,
            "Adj Close": 415.640015,
            "Volume": 15852511
          },
          {
            "Date": "2016-04-01",
            "Open": 415.640015,
            "High": 420.089996,
            "Low": 415.089996,
            "Close": 418.51001,
            "Adj Close": 418.51001,
            "Volume": 13137339
          },
          {
            "Date": "2016-04-02",
            "Open": 418.51001,
            "High": 420.179993,
            "Low": 416.950012,
            "Close": 419.059998,
            "Adj Close": 419.059998,
            "Volume": 9591214
          },
          {
            "Date": "2016-04-03",
            "Open": 419.059998,
            "High": 420.390015,
            "Low": 416.209991,
            "Close": 419.329987,
            "Adj Close": 419.329987,
            "Volume": 14031939
          },
          {
            "Date": "2016-04-04",
            "Open": 419.329987,
            "High": 423.670013,
            "Low": 417.950012,
            "Close": 422.070007,
            "Adj Close": 422.070007,
            "Volume": 17260368
          },
          {
            "Date": "2016-04-05",
            "Open": 422.070007,
            "High": 422.809998,
            "Low": 419.540009,
            "Close": 421.26001,
            "Adj Close": 421.26001,
            "Volume": 13836754
          },
          {
            "Date": "2016-04-06",
            "Open": 421.26001,
            "High": 422.029999,
            "Low": 417.940002,
            "Close": 420.140015,
            "Adj Close": 420.140015,
            "Volume": 15200495
          },
          {
            "Date": "2016-04-07",
            "Open": 420.140015,
            "High": 423.51001,
            "Low": 415.5,
            "Close": 417.690002,
            "Adj Close": 417.690002,
            "Volume": 19810838
          },
          {
            "Date": "2016-04-08",
            "Open": 417.690002,
            "High": 418.850006,
            "Low": 412.390015,
            "Close": 418.049988,
            "Adj Close": 418.049988,
            "Volume": 12291880
          },
          {
            "Date": "2016-04-09",
            "Open": 418.049988,
            "High": 421.630005,
            "Low": 416.690002,
            "Close": 420.25,
            "Adj Close": 420.25,
            "Volume": 9806327
          },
          {
            "Date": "2016-04-10",
            "Open": 420.25,
            "High": 422.350006,
            "Low": 418.109985,
            "Close": 421.429993,
            "Adj Close": 421.429993,
            "Volume": 15374195
          },
          {
            "Date": "2016-04-11",
            "Open": 421.429993,
            "High": 426.690002,
            "Low": 420.700012,
            "Close": 424.73999,
            "Adj Close": 424.73999,
            "Volume": 24580503
          },
          {
            "Date": "2016-04-12",
            "Open": 424.73999,
            "High": 426.579987,
            "Low": 421.410004,
            "Close": 423.470001,
            "Adj Close": 423.470001,
            "Volume": 16183793
          },
          {
            "Date": "2016-04-13",
            "Open": 423.470001,
            "High": 425.440002,
            "Low": 421.839996,
            "Close": 424.019989,
            "Adj Close": 424.019989,
            "Volume": 13038970
          },
          {
            "Date": "2016-04-14",
            "Open": 424.019989,
            "High": 429.48999,
            "Low": 423.25,
            "Close": 428.670013,
            "Adj Close": 428.670013,
            "Volume": 23214560
          },
          {
            "Date": "2016-04-15",
            "Open": 428.670013,
            "High": 432,
            "Low": 426.839996,
            "Close": 430.049988,
            "Adj Close": 430.049988,
            "Volume": 12517265
          },
          {
            "Date": "2016-04-16",
            "Open": 430.049988,
            "High": 430.619995,
            "Low": 423.790009,
            "Close": 426.26001,
            "Adj Close": 426.26001,
            "Volume": 10980868
          },
          {
            "Date": "2016-04-17",
            "Open": 426.26001,
            "High": 429.070007,
            "Low": 424.350006,
            "Close": 427.690002,
            "Adj Close": 427.690002,
            "Volume": 13951524
          },
          {
            "Date": "2016-04-18",
            "Open": 427.690002,
            "High": 436.070007,
            "Low": 426.839996,
            "Close": 434.920013,
            "Adj Close": 434.920013,
            "Volume": 19713466
          },
          {
            "Date": "2016-04-19",
            "Open": 434.920013,
            "High": 442.859985,
            "Low": 432.51001,
            "Close": 441.160004,
            "Adj Close": 441.160004,
            "Volume": 32655415
          },
          {
            "Date": "2016-04-20",
            "Open": 441.160004,
            "High": 450.799988,
            "Low": 439.529999,
            "Close": 449.339996,
            "Adj Close": 449.339996,
            "Volume": 28168774
          },
          {
            "Date": "2016-04-21",
            "Open": 449.339996,
            "High": 450.190002,
            "Low": 441.899994,
            "Close": 445.279999,
            "Adj Close": 445.279999,
            "Volume": 22225157
          },
          {
            "Date": "2016-04-22",
            "Open": 445.279999,
            "High": 451.480011,
            "Low": 443.070007,
            "Close": 450.079987,
            "Adj Close": 450.079987,
            "Volume": 18998211
          },
          {
            "Date": "2016-04-23",
            "Open": 450.079987,
            "High": 461.779999,
            "Low": 447.890015,
            "Close": 457.559998,
            "Adj Close": 457.559998,
            "Volume": 33984269
          },
          {
            "Date": "2016-04-24",
            "Open": 457.559998,
            "High": 466.230011,
            "Low": 451.790009,
            "Close": 461.730011,
            "Adj Close": 461.730011,
            "Volume": 37614684
          },
          {
            "Date": "2016-04-25",
            "Open": 461.730011,
            "High": 468.859985,
            "Low": 459.230011,
            "Close": 466,
            "Adj Close": 466,
            "Volume": 31451239
          },
          {
            "Date": "2016-04-26",
            "Open": 466,
            "High": 467.869995,
            "Low": 444.619995,
            "Close": 447.01001,
            "Adj Close": 447.01001,
            "Volume": 41539684
          },
          {
            "Date": "2016-04-27",
            "Open": 447.01001,
            "High": 450.100006,
            "Low": 433.899994,
            "Close": 448.480011,
            "Adj Close": 448.480011,
            "Volume": 36369788
          },
          {
            "Date": "2016-04-28",
            "Open": 448.480011,
            "High": 456.309998,
            "Low": 445.220001,
            "Close": 454.980011,
            "Adj Close": 454.980011,
            "Volume": 20264761
          },
          {
            "Date": "2016-04-29",
            "Open": 454.980011,
            "High": 456.859985,
            "Low": 446.649994,
            "Close": 448.529999,
            "Adj Close": 448.529999,
            "Volume": 15994805
          },
          {
            "Date": "2016-04-30",
            "Open": 448.529999,
            "High": 454.209991,
            "Low": 447.519989,
            "Close": 452.23999,
            "Adj Close": 452.23999,
            "Volume": 9838490
          },
          {
            "Date": "2016-05-01",
            "Open": 452.23999,
            "High": 453.869995,
            "Low": 440.209991,
            "Close": 444.179993,
            "Adj Close": 444.179993,
            "Volume": 32863011
          },
          {
            "Date": "2016-05-02",
            "Open": 444.179993,
            "High": 451.540009,
            "Low": 441.549988,
            "Close": 450.269989,
            "Adj Close": 450.269989,
            "Volume": 22292253
          },
          {
            "Date": "2016-05-03",
            "Open": 450.269989,
            "High": 450.869995,
            "Low": 444.220001,
            "Close": 445.799988,
            "Adj Close": 445.799988,
            "Volume": 17676609
          },
          {
            "Date": "2016-05-04",
            "Open": 445.799988,
            "High": 449.190002,
            "Low": 444.350006,
            "Close": 448.079987,
            "Adj Close": 448.079987,
            "Volume": 18765369
          },
          {
            "Date": "2016-05-05",
            "Open": 448.079987,
            "High": 461.480011,
            "Low": 445.720001,
            "Close": 459.559998,
            "Adj Close": 459.559998,
            "Volume": 31122708
          },
          {
            "Date": "2016-05-06",
            "Open": 459.559998,
            "High": 460.609985,
            "Low": 454.600006,
            "Close": 458.459991,
            "Adj Close": 458.459991,
            "Volume": 14247601
          },
          {
            "Date": "2016-05-07",
            "Open": 458.459991,
            "High": 460.179993,
            "Low": 454.940002,
            "Close": 457.869995,
            "Adj Close": 457.869995,
            "Volume": 12689581
          },
          {
            "Date": "2016-05-08",
            "Open": 457.869995,
            "High": 464.179993,
            "Low": 455.380005,
            "Close": 460.440002,
            "Adj Close": 460.440002,
            "Volume": 22322043
          },
          {
            "Date": "2016-05-09",
            "Open": 460.440002,
            "High": 462.140015,
            "Low": 446.809998,
            "Close": 449.359985,
            "Adj Close": 449.359985,
            "Volume": 27247925
          },
          {
            "Date": "2016-05-10",
            "Open": 449.359985,
            "High": 456.149994,
            "Low": 449.589996,
            "Close": 452.5,
            "Adj Close": 452.5,
            "Volume": 18137209
          },
          {
            "Date": "2016-05-11",
            "Open": 452.5,
            "High": 455.339996,
            "Low": 448.399994,
            "Close": 454.429993,
            "Adj Close": 454.429993,
            "Volume": 22252919
          },
          {
            "Date": "2016-05-12",
            "Open": 454.429993,
            "High": 457.220001,
            "Low": 451.48999,
            "Close": 455.410004,
            "Adj Close": 455.410004,
            "Volume": 14768796
          },
          {
            "Date": "2016-05-13",
            "Open": 455.410004,
            "High": 457.73999,
            "Low": 453.579987,
            "Close": 456.440002,
            "Adj Close": 456.440002,
            "Volume": 9319128
          },
          {
            "Date": "2016-05-14",
            "Open": 456.440002,
            "High": 460.279999,
            "Low": 455,
            "Close": 458.109985,
            "Adj Close": 458.109985,
            "Volume": 9745309
          },
          {
            "Date": "2016-05-15",
            "Open": 458.109985,
            "High": 459.570007,
            "Low": 450.730011,
            "Close": 454.869995,
            "Adj Close": 454.869995,
            "Volume": 16731954
          },
          {
            "Date": "2016-05-16",
            "Open": 454.869995,
            "High": 456.299988,
            "Low": 451.709991,
            "Close": 453.25,
            "Adj Close": 453.25,
            "Volume": 15741822
          },
          {
            "Date": "2016-05-17",
            "Open": 453.25,
            "High": 456.649994,
            "Low": 452.350006,
            "Close": 454.220001,
            "Adj Close": 454.220001,
            "Volume": 14884550
          },
          {
            "Date": "2016-05-18",
            "Open": 454.220001,
            "High": 455.190002,
            "Low": 441.119995,
            "Close": 442.660004,
            "Adj Close": 442.660004,
            "Volume": 26626097
          },
          {
            "Date": "2016-05-19",
            "Open": 442.660004,
            "High": 447.76001,
            "Low": 435.420013,
            "Close": 442.109985,
            "Adj Close": 442.109985,
            "Volume": 21415312
          },
          {
            "Date": "2016-05-20",
            "Open": 442.109985,
            "High": 445.23999,
            "Low": 439.730011,
            "Close": 443.640015,
            "Adj Close": 443.640015,
            "Volume": 10213550
          },
          {
            "Date": "2016-05-21",
            "Open": 443.640015,
            "High": 444.23999,
            "Low": 436.940002,
            "Close": 439.619995,
            "Adj Close": 439.619995,
            "Volume": 12691382
          },
          {
            "Date": "2016-05-22",
            "Open": 439.619995,
            "High": 444.98999,
            "Low": 438.23999,
            "Close": 443.690002,
            "Adj Close": 443.690002,
            "Volume": 15885933
          },
          {
            "Date": "2016-05-23",
            "Open": 443.690002,
            "High": 447.899994,
            "Low": 442.019989,
            "Close": 446.109985,
            "Adj Close": 446.109985,
            "Volume": 14837671
          },
          {
            "Date": "2016-05-24",
            "Open": 446.109985,
            "High": 451.209991,
            "Low": 445.350006,
            "Close": 449.779999,
            "Adj Close": 449.779999,
            "Volume": 16954105
          },
          {
            "Date": "2016-05-25",
            "Open": 449.779999,
            "High": 454.25,
            "Low": 447.670013,
            "Close": 453.299988,
            "Adj Close": 453.299988,
            "Volume": 17093327
          },
          {
            "Date": "2016-05-26",
            "Open": 453.299988,
            "High": 479.220001,
            "Low": 452.709991,
            "Close": 474.049988,
            "Adj Close": 474.049988,
            "Volume": 63894987
          },
          {
            "Date": "2016-05-27",
            "Open": 474.049988,
            "High": 531.76001,
            "Low": 467.049988,
            "Close": 524.219971,
            "Adj Close": 524.219971,
            "Volume": 75400711
          },
          {
            "Date": "2016-05-28",
            "Open": 524.219971,
            "High": 548.039978,
            "Low": 493.220001,
            "Close": 516.049988,
            "Adj Close": 516.049988,
            "Volume": 80753301
          },
          {
            "Date": "2016-05-29",
            "Open": 516.049988,
            "High": 544.179993,
            "Low": 512.809998,
            "Close": 532.26001,
            "Adj Close": 532.26001,
            "Volume": 41433165
          },
          {
            "Date": "2016-05-30",
            "Open": 532.26001,
            "High": 546.919983,
            "Low": 513.150024,
            "Close": 528.919983,
            "Adj Close": 528.919983,
            "Volume": 60896411
          },
          {
            "Date": "2016-05-31",
            "Open": 528.919983,
            "High": 542.26001,
            "Low": 521.299988,
            "Close": 537.400024,
            "Adj Close": 537.400024,
            "Volume": 38742660
          },
          {
            "Date": "2016-06-01",
            "Open": 537.400024,
            "High": 541.549988,
            "Low": 530.469971,
            "Close": 537.099976,
            "Adj Close": 537.099976,
            "Volume": 28380698
          },
          {
            "Date": "2016-06-02",
            "Open": 537.099976,
            "High": 573.719971,
            "Low": 534.340027,
            "Close": 567.030029,
            "Adj Close": 567.030029,
            "Volume": 59464310
          },
          {
            "Date": "2016-06-03",
            "Open": 567.030029,
            "High": 592.679993,
            "Low": 560.869995,
            "Close": 571.950012,
            "Adj Close": 571.950012,
            "Volume": 50353517
          },
          {
            "Date": "2016-06-04",
            "Open": 571.950012,
            "High": 583.640015,
            "Low": 567.77002,
            "Close": 574.909973,
            "Adj Close": 574.909973,
            "Volume": 37233994
          },
          {
            "Date": "2016-06-05",
            "Open": 574.909973,
            "High": 586.72998,
            "Low": 571.669983,
            "Close": 583.580017,
            "Adj Close": 583.580017,
            "Volume": 37131086
          },
          {
            "Date": "2016-06-06",
            "Open": 583.580017,
            "High": 591.320007,
            "Low": 543.630005,
            "Close": 575.580017,
            "Adj Close": 575.580017,
            "Volume": 49082472
          },
          {
            "Date": "2016-06-07",
            "Open": 575.580017,
            "High": 582.440002,
            "Low": 567.780029,
            "Close": 580.51001,
            "Adj Close": 580.51001,
            "Volume": 28706216
          },
          {
            "Date": "2016-06-08",
            "Open": 580.51001,
            "High": 580.710022,
            "Low": 569.26001,
            "Close": 574.690002,
            "Adj Close": 574.690002,
            "Volume": 28010575
          },
          {
            "Date": "2016-06-09",
            "Open": 574.690002,
            "High": 579.26001,
            "Low": 571.140015,
            "Close": 577.890015,
            "Adj Close": 577.890015,
            "Volume": 26290866
          },
          {
            "Date": "2016-06-10",
            "Open": 577.890015,
            "High": 592.609985,
            "Low": 576.289978,
            "Close": 591.599976,
            "Adj Close": 591.599976,
            "Volume": 24790441
          },
          {
            "Date": "2016-06-11",
            "Open": 591.599976,
            "High": 683.849976,
            "Low": 592.789978,
            "Close": 666.549988,
            "Adj Close": 666.549988,
            "Volume": 139684630
          },
          {
            "Date": "2016-06-12",
            "Open": 666.549988,
            "High": 718.23999,
            "Low": 652.780029,
            "Close": 700.070007,
            "Adj Close": 700.070007,
            "Volume": 149442548
          },
          {
            "Date": "2016-06-13",
            "Open": 700.070007,
            "High": 702.52002,
            "Low": 654.690002,
            "Close": 685.140015,
            "Adj Close": 685.140015,
            "Volume": 92458349
          },
          {
            "Date": "2016-06-14",
            "Open": 685.140015,
            "High": 695.070007,
            "Low": 670.450012,
            "Close": 690.77002,
            "Adj Close": 690.77002,
            "Volume": 53863568
          },
          {
            "Date": "2016-06-15",
            "Open": 690.77002,
            "High": 769.72998,
            "Low": 687.429993,
            "Close": 761.210022,
            "Adj Close": 761.210022,
            "Volume": 169704647
          },
          {
            "Date": "2016-06-16",
            "Open": 761.210022,
            "High": 771.890015,
            "Low": 704.210022,
            "Close": 743.900024,
            "Adj Close": 743.900024,
            "Volume": 160302360
          },
          {
            "Date": "2016-06-17",
            "Open": 743.900024,
            "High": 776.039978,
            "Low": 727.130005,
            "Close": 753.77002,
            "Adj Close": 753.77002,
            "Volume": 91056993
          },
          {
            "Date": "2016-06-18",
            "Open": 753.77002,
            "High": 765.099976,
            "Low": 740.380005,
            "Close": 761.039978,
            "Adj Close": 761.039978,
            "Volume": 45805980
          },
          {
            "Date": "2016-06-19",
            "Open": 761.039978,
            "High": 764.599976,
            "Low": 717.409973,
            "Close": 733.969971,
            "Adj Close": 733.969971,
            "Volume": 83637617
          },
          {
            "Date": "2016-06-20",
            "Open": 733.969971,
            "High": 732.22998,
            "Low": 626.049988,
            "Close": 667.380005,
            "Adj Close": 667.380005,
            "Volume": 166828425
          },
          {
            "Date": "2016-06-21",
            "Open": 667.380005,
            "High": 677.799988,
            "Low": 586.599976,
            "Close": 590.559998,
            "Adj Close": 590.559998,
            "Volume": 129550795
          },
          {
            "Date": "2016-06-22",
            "Open": 590.559998,
            "High": 629.549988,
            "Low": 539.280029,
            "Close": 620.840027,
            "Adj Close": 620.840027,
            "Volume": 154289129
          },
          {
            "Date": "2016-06-23",
            "Open": 620.840027,
            "High": 687.390015,
            "Low": 616.409973,
            "Close": 656.890015,
            "Adj Close": 656.890015,
            "Volume": 128990817
          },
          {
            "Date": "2016-06-24",
            "Open": 656.890015,
            "High": 688.099976,
            "Low": 640.789978,
            "Close": 663.52002,
            "Adj Close": 663.52002,
            "Volume": 67442141
          },
          {
            "Date": "2016-06-25",
            "Open": 663.52002,
            "High": 665.190002,
            "Low": 609.900024,
            "Close": 625.409973,
            "Adj Close": 625.409973,
            "Volume": 56403088
          },
          {
            "Date": "2016-06-26",
            "Open": 625.409973,
            "High": 650.340027,
            "Low": 615.219971,
            "Close": 644.659973,
            "Adj Close": 644.659973,
            "Volume": 63747137
          },
          {
            "Date": "2016-06-27",
            "Open": 644.659973,
            "High": 659.27002,
            "Low": 634.26001,
            "Close": 644.890015,
            "Adj Close": 644.890015,
            "Volume": 49673830
          },
          {
            "Date": "2016-06-28",
            "Open": 644.890015,
            "High": 645.909973,
            "Low": 621.76001,
            "Close": 636.539978,
            "Adj Close": 636.539978,
            "Volume": 50898093
          },
          {
            "Date": "2016-06-29",
            "Open": 636.539978,
            "High": 673.039978,
            "Low": 631.23999,
            "Close": 670.02002,
            "Adj Close": 670.02002,
            "Volume": 58215062
          },
          {
            "Date": "2016-06-30",
            "Open": 670.02002,
            "High": 685.109985,
            "Low": 661.090027,
            "Close": 674.570007,
            "Adj Close": 674.570007,
            "Volume": 62394480
          },
          {
            "Date": "2016-07-01",
            "Open": 674.570007,
            "High": 700.460022,
            "Low": 671.460022,
            "Close": 698.059998,
            "Adj Close": 698.059998,
            "Volume": 46555796
          },
          {
            "Date": "2016-07-02",
            "Open": 698.059998,
            "High": 701.48999,
            "Low": 644.609985,
            "Close": 661.640015,
            "Adj Close": 661.640015,
            "Volume": 66591456
          },
          {
            "Date": "2016-07-03",
            "Open": 661.640015,
            "High": 679.030029,
            "Low": 644.039978,
            "Close": 675.159973,
            "Adj Close": 675.159973,
            "Volume": 42756935
          },
          {
            "Date": "2016-07-04",
            "Open": 675.159973,
            "High": 679.190002,
            "Low": 657.309998,
            "Close": 663.669983,
            "Adj Close": 663.669983,
            "Volume": 36687264
          },
          {
            "Date": "2016-07-05",
            "Open": 663.669983,
            "High": 678.390015,
            "Low": 662.23999,
            "Close": 672.700012,
            "Adj Close": 672.700012,
            "Volume": 31708100
          },
          {
            "Date": "2016-07-06",
            "Open": 672.700012,
            "High": 676.190002,
            "Low": 604.950012,
            "Close": 635.25,
            "Adj Close": 635.25,
            "Volume": 97639342
          },
          {
            "Date": "2016-07-07",
            "Open": 635.25,
            "High": 663.429993,
            "Low": 630.169983,
            "Close": 662.780029,
            "Adj Close": 662.780029,
            "Volume": 49243011
          },
          {
            "Date": "2016-07-08",
            "Open": 662.780029,
            "High": 663.48999,
            "Low": 620.679993,
            "Close": 651.830017,
            "Adj Close": 651.830017,
            "Volume": 62061207
          },
          {
            "Date": "2016-07-09",
            "Open": 651.830017,
            "High": 651.97998,
            "Low": 636.799988,
            "Close": 647.109985,
            "Adj Close": 647.109985,
            "Volume": 18955766
          },
          {
            "Date": "2016-07-10",
            "Open": 647.109985,
            "High": 657.469971,
            "Low": 639.969971,
            "Close": 646.710022,
            "Adj Close": 646.710022,
            "Volume": 29925667
          },
          {
            "Date": "2016-07-11",
            "Open": 646.710022,
            "High": 673.190002,
            "Low": 644.559998,
            "Close": 670.559998,
            "Adj Close": 670.559998,
            "Volume": 44047499
          },
          {
            "Date": "2016-07-12",
            "Open": 670.559998,
            "High": 672.02002,
            "Low": 656.039978,
            "Close": 661.150024,
            "Adj Close": 661.150024,
            "Volume": 41791464
          },
          {
            "Date": "2016-07-13",
            "Open": 661.150024,
            "High": 661.880005,
            "Low": 646.309998,
            "Close": 657.25,
            "Adj Close": 657.25,
            "Volume": 31748496
          },
          {
            "Date": "2016-07-14",
            "Open": 657.25,
            "High": 667.460022,
            "Low": 656.5,
            "Close": 664.200012,
            "Adj Close": 664.200012,
            "Volume": 23817856
          },
          {
            "Date": "2016-07-15",
            "Open": 664.200012,
            "High": 665.409973,
            "Low": 655.719971,
            "Close": 660.690002,
            "Adj Close": 660.690002,
            "Volume": 13557557
          },
          {
            "Date": "2016-07-16",
            "Open": 660.690002,
            "High": 680.940002,
            "Low": 660.130005,
            "Close": 676.330017,
            "Adj Close": 676.330017,
            "Volume": 31614610
          },
          {
            "Date": "2016-07-17",
            "Open": 676.330017,
            "High": 680.419983,
            "Low": 664.609985,
            "Close": 670.380005,
            "Adj Close": 670.380005,
            "Volume": 28810844
          },
          {
            "Date": "2016-07-18",
            "Open": 670.380005,
            "High": 673.23999,
            "Low": 663.630005,
            "Close": 671.099976,
            "Adj Close": 671.099976,
            "Volume": 20401885
          },
          {
            "Date": "2016-07-19",
            "Open": 671.099976,
            "High": 672.289978,
            "Low": 659.51001,
            "Close": 664.400024,
            "Adj Close": 664.400024,
            "Volume": 25075066
          },
          {
            "Date": "2016-07-20",
            "Open": 664.400024,
            "High": 666.51001,
            "Low": 657.820007,
            "Close": 664.619995,
            "Adj Close": 664.619995,
            "Volume": 21351309
          },
          {
            "Date": "2016-07-21",
            "Open": 664.619995,
            "High": 669.440002,
            "Low": 645.690002,
            "Close": 651.109985,
            "Adj Close": 651.109985,
            "Volume": 43283429
          },
          {
            "Date": "2016-07-22",
            "Open": 651.109985,
            "High": 658.169983,
            "Low": 647.97998,
            "Close": 655.159973,
            "Adj Close": 655.159973,
            "Volume": 19544654
          },
          {
            "Date": "2016-07-23",
            "Open": 655.159973,
            "High": 664.210022,
            "Low": 651.030029,
            "Close": 659.289978,
            "Adj Close": 659.289978,
            "Volume": 19642346
          },
          {
            "Date": "2016-07-24",
            "Open": 659.289978,
            "High": 662.51001,
            "Low": 651.080017,
            "Close": 654,
            "Adj Close": 654,
            "Volume": 22564554
          },
          {
            "Date": "2016-07-25",
            "Open": 654,
            "High": 657.76001,
            "Low": 643.48999,
            "Close": 654.380005,
            "Adj Close": 654.380005,
            "Volume": 32177578
          },
          {
            "Date": "2016-07-26",
            "Open": 654.380005,
            "High": 659.080017,
            "Low": 646.039978,
            "Close": 654.539978,
            "Adj Close": 654.539978,
            "Volume": 19568531
          },
          {
            "Date": "2016-07-27",
            "Open": 654.539978,
            "High": 657.960022,
            "Low": 650.809998,
            "Close": 654.130005,
            "Adj Close": 654.130005,
            "Volume": 18452583
          },
          {
            "Date": "2016-07-28",
            "Open": 654.130005,
            "High": 657.400024,
            "Low": 650.98999,
            "Close": 655.429993,
            "Adj Close": 655.429993,
            "Volume": 17757920
          },
          {
            "Date": "2016-07-29",
            "Open": 655.429993,
            "High": 657.549988,
            "Low": 652.059998,
            "Close": 654.73999,
            "Adj Close": 654.73999,
            "Volume": 12721755
          },
          {
            "Date": "2016-07-30",
            "Open": 654.73999,
            "High": 654.919983,
            "Low": 621.419983,
            "Close": 621.869995,
            "Adj Close": 621.869995,
            "Volume": 39918066
          },
          {
            "Date": "2016-07-31",
            "Open": 621.869995,
            "High": 627.890015,
            "Low": 603.549988,
            "Close": 607,
            "Adj Close": 607,
            "Volume": 41229298
          },
          {
            "Date": "2016-08-01",
            "Open": 607,
            "High": 613.75,
            "Low": 471.359985,
            "Close": 513.429993,
            "Adj Close": 513.429993,
            "Volume": 75338595
          },
          {
            "Date": "2016-08-02",
            "Open": 513.429993,
            "High": 573.059998,
            "Low": 514.090027,
            "Close": 566.440002,
            "Adj Close": 566.440002,
            "Volume": 47170751
          },
          {
            "Date": "2016-08-03",
            "Open": 566.440002,
            "High": 584.890015,
            "Low": 559.5,
            "Close": 576.219971,
            "Adj Close": 576.219971,
            "Volume": 25725471
          },
          {
            "Date": "2016-08-04",
            "Open": 576.219971,
            "High": 579.969971,
            "Low": 565.809998,
            "Close": 574.659973,
            "Adj Close": 574.659973,
            "Volume": 15992890
          },
          {
            "Date": "2016-08-05",
            "Open": 574.659973,
            "High": 596.679993,
            "Low": 565.330017,
            "Close": 586.450012,
            "Adj Close": 586.450012,
            "Volume": 14676841
          },
          {
            "Date": "2016-08-06",
            "Open": 586.450012,
            "High": 596.01001,
            "Low": 580.869995,
            "Close": 590.849976,
            "Adj Close": 590.849976,
            "Volume": 15491523
          },
          {
            "Date": "2016-08-07",
            "Open": 590.849976,
            "High": 594.23999,
            "Low": 585.409973,
            "Close": 589.23999,
            "Adj Close": 589.23999,
            "Volume": 14726811
          },
          {
            "Date": "2016-08-08",
            "Open": 589.23999,
            "High": 591.200012,
            "Low": 581.099976,
            "Close": 585.25,
            "Adj Close": 585.25,
            "Volume": 15304277
          },
          {
            "Date": "2016-08-09",
            "Open": 585.25,
            "High": 600.52002,
            "Low": 580.869995,
            "Close": 590.940002,
            "Adj Close": 590.940002,
            "Volume": 29376783
          },
          {
            "Date": "2016-08-10",
            "Open": 590.940002,
            "High": 599.150024,
            "Low": 585.390015,
            "Close": 587.840027,
            "Adj Close": 587.840027,
            "Volume": 23640952
          },
          {
            "Date": "2016-08-11",
            "Open": 587.840027,
            "High": 591.140015,
            "Low": 582.200012,
            "Close": 587.140015,
            "Adj Close": 587.140015,
            "Volume": 15009452
          },
          {
            "Date": "2016-08-12",
            "Open": 587.140015,
            "High": 590.070007,
            "Low": 582.809998,
            "Close": 584.590027,
            "Adj Close": 584.590027,
            "Volume": 11357750
          },
          {
            "Date": "2016-08-13",
            "Open": 584.590027,
            "High": 585.799988,
            "Low": 559.929993,
            "Close": 569.059998,
            "Adj Close": 569.059998,
            "Volume": 18970094
          },
          {
            "Date": "2016-08-14",
            "Open": 569.059998,
            "High": 574.969971,
            "Low": 559.280029,
            "Close": 566.950012,
            "Adj Close": 566.950012,
            "Volume": 19218972
          },
          {
            "Date": "2016-08-15",
            "Open": 566.950012,
            "High": 583.380005,
            "Low": 563.380005,
            "Close": 580.190002,
            "Adj Close": 580.190002,
            "Volume": 21634083
          },
          {
            "Date": "2016-08-16",
            "Open": 580.190002,
            "High": 581.099976,
            "Low": 568.659973,
            "Close": 572.340027,
            "Adj Close": 572.340027,
            "Volume": 18886741
          },
          {
            "Date": "2016-08-17",
            "Open": 572.340027,
            "High": 579.530029,
            "Low": 570.830017,
            "Close": 573.390015,
            "Adj Close": 573.390015,
            "Volume": 17509679
          },
          {
            "Date": "2016-08-18",
            "Open": 573.390015,
            "High": 577.859985,
            "Low": 566.25,
            "Close": 574.559998,
            "Adj Close": 574.559998,
            "Volume": 14701426
          },
          {
            "Date": "2016-08-19",
            "Open": 574.559998,
            "High": 583.5,
            "Low": 572.280029,
            "Close": 582.609985,
            "Adj Close": 582.609985,
            "Volume": 13416843
          },
          {
            "Date": "2016-08-20",
            "Open": 582.609985,
            "High": 585.320007,
            "Low": 577.840027,
            "Close": 580.659973,
            "Adj Close": 580.659973,
            "Volume": 8294321
          },
          {
            "Date": "2016-08-21",
            "Open": 580.659973,
            "High": 591.900024,
            "Low": 577.130005,
            "Close": 587.469971,
            "Adj Close": 587.469971,
            "Volume": 19658058
          },
          {
            "Date": "2016-08-22",
            "Open": 587.469971,
            "High": 589.869995,
            "Low": 578.609985,
            "Close": 583.559998,
            "Adj Close": 583.559998,
            "Volume": 18772369
          },
          {
            "Date": "2016-08-23",
            "Open": 583.559998,
            "High": 584.469971,
            "Low": 576.820007,
            "Close": 579.659973,
            "Adj Close": 579.659973,
            "Volume": 16337141
          },
          {
            "Date": "2016-08-24",
            "Open": 579.659973,
            "High": 580.710022,
            "Low": 570.809998,
            "Close": 577.960022,
            "Adj Close": 577.960022,
            "Volume": 18885349
          },
          {
            "Date": "2016-08-25",
            "Open": 577.960022,
            "High": 582.72998,
            "Low": 575.830017,
            "Close": 579.369995,
            "Adj Close": 579.369995,
            "Volume": 12329289
          },
          {
            "Date": "2016-08-26",
            "Open": 579.369995,
            "High": 580.409973,
            "Low": 567.25,
            "Close": 570.349976,
            "Adj Close": 570.349976,
            "Volume": 10747219
          },
          {
            "Date": "2016-08-27",
            "Open": 570.349976,
            "High": 576.320007,
            "Low": 569.210022,
            "Close": 574.97998,
            "Adj Close": 574.97998,
            "Volume": 7377921
          },
          {
            "Date": "2016-08-28",
            "Open": 574.97998,
            "High": 578.609985,
            "Low": 571.380005,
            "Close": 574.22998,
            "Adj Close": 574.22998,
            "Volume": 13760854
          },
          {
            "Date": "2016-08-29",
            "Open": 574.22998,
            "High": 579.940002,
            "Low": 572.51001,
            "Close": 577.320007,
            "Adj Close": 577.320007,
            "Volume": 15895354
          },
          {
            "Date": "2016-08-30",
            "Open": 577.320007,
            "High": 578.25,
            "Low": 571.690002,
            "Close": 573.880005,
            "Adj Close": 573.880005,
            "Volume": 14338795
          },
          {
            "Date": "2016-08-31",
            "Open": 573.880005,
            "High": 704.969971,
            "Low": 569.369995,
            "Close": 571.98999,
            "Adj Close": 571.98999,
            "Volume": 14860164
          },
          {
            "Date": "2016-09-01",
            "Open": 571.98999,
            "High": 577.599976,
            "Low": 569.299988,
            "Close": 575.289978,
            "Adj Close": 575.289978,
            "Volume": 15315755
          },
          {
            "Date": "2016-09-02",
            "Open": 575.289978,
            "High": 604.969971,
            "Low": 572.640015,
            "Close": 598.840027,
            "Adj Close": 598.840027,
            "Volume": 21055514
          },
          {
            "Date": "2016-09-03",
            "Open": 598.840027,
            "High": 615.200012,
            "Low": 590.780029,
            "Close": 609.549988,
            "Adj Close": 609.549988,
            "Volume": 18646011
          },
          {
            "Date": "2016-09-04",
            "Open": 609.549988,
            "High": 610.609985,
            "Low": 598.77002,
            "Close": 605.76001,
            "Adj Close": 605.76001,
            "Volume": 15369832
          },
          {
            "Date": "2016-09-05",
            "Open": 605.76001,
            "High": 611.950012,
            "Low": 603.549988,
            "Close": 610.440002,
            "Adj Close": 610.440002,
            "Volume": 14864563
          },
          {
            "Date": "2016-09-06",
            "Open": 610.440002,
            "High": 616.47998,
            "Low": 606.23999,
            "Close": 613.210022,
            "Adj Close": 613.210022,
            "Volume": 18429525
          },
          {
            "Date": "2016-09-07",
            "Open": 613.210022,
            "High": 629.299988,
            "Low": 611.25,
            "Close": 625.570007,
            "Adj Close": 625.570007,
            "Volume": 22710390
          },
          {
            "Date": "2016-09-08",
            "Open": 625.570007,
            "High": 627.580017,
            "Low": 617.320007,
            "Close": 623.159973,
            "Adj Close": 623.159973,
            "Volume": 17710151
          },
          {
            "Date": "2016-09-09",
            "Open": 623.159973,
            "High": 627.450012,
            "Low": 621.070007,
            "Close": 624.52002,
            "Adj Close": 624.52002,
            "Volume": 9600113
          },
          {
            "Date": "2016-09-10",
            "Open": 624.52002,
            "High": 630.77002,
            "Low": 592.789978,
            "Close": 605.609985,
            "Adj Close": 605.609985,
            "Volume": 22467346
          },
          {
            "Date": "2016-09-11",
            "Open": 605.609985,
            "High": 610.619995,
            "Low": 603.030029,
            "Close": 607.97998,
            "Adj Close": 607.97998,
            "Volume": 17058938
          },
          {
            "Date": "2016-09-12",
            "Open": 607.97998,
            "High": 612.030029,
            "Low": 604.869995,
            "Close": 608.609985,
            "Adj Close": 608.609985,
            "Volume": 16850869
          },
          {
            "Date": "2016-09-13",
            "Open": 608.609985,
            "High": 612.159973,
            "Low": 606.390015,
            "Close": 609.539978,
            "Adj Close": 609.539978,
            "Volume": 14878860
          },
          {
            "Date": "2016-09-14",
            "Open": 609.539978,
            "High": 610.72998,
            "Low": 605.099976,
            "Close": 608.109985,
            "Adj Close": 608.109985,
            "Volume": 13892193
          },
          {
            "Date": "2016-09-15",
            "Open": 608.109985,
            "High": 610.359985,
            "Low": 605.150024,
            "Close": 607.780029,
            "Adj Close": 607.780029,
            "Volume": 13353736
          },
          {
            "Date": "2016-09-16",
            "Open": 607.780029,
            "High": 609.609985,
            "Low": 604.52002,
            "Close": 607.080017,
            "Adj Close": 607.080017,
            "Volume": 9724490
          },
          {
            "Date": "2016-09-17",
            "Open": 607.080017,
            "High": 612.380005,
            "Low": 605.219971,
            "Close": 610.700012,
            "Adj Close": 610.700012,
            "Volume": 10004923
          },
          {
            "Date": "2016-09-18",
            "Open": 610.700012,
            "High": 612.409973,
            "Low": 606.98999,
            "Close": 609.849976,
            "Adj Close": 609.849976,
            "Volume": 12981851
          },
          {
            "Date": "2016-09-19",
            "Open": 609.849976,
            "High": 611.27002,
            "Low": 605.929993,
            "Close": 609.23999,
            "Adj Close": 609.23999,
            "Volume": 13809380
          },
          {
            "Date": "2016-09-20",
            "Open": 609.23999,
            "High": 608.820007,
            "Low": 591.690002,
            "Close": 597.159973,
            "Adj Close": 597.159973,
            "Volume": 22059386
          },
          {
            "Date": "2016-09-21",
            "Open": 597.159973,
            "High": 599.780029,
            "Low": 592.830017,
            "Close": 595.630005,
            "Adj Close": 595.630005,
            "Volume": 13463966
          },
          {
            "Date": "2016-09-22",
            "Open": 595.630005,
            "High": 603.700012,
            "Low": 594.109985,
            "Close": 602.919983,
            "Adj Close": 602.919983,
            "Volume": 15567036
          },
          {
            "Date": "2016-09-23",
            "Open": 602.919983,
            "High": 605.919983,
            "Low": 600.5,
            "Close": 602.590027,
            "Adj Close": 602.590027,
            "Volume": 8196210
          },
          {
            "Date": "2016-09-24",
            "Open": 602.590027,
            "High": 604.869995,
            "Low": 598.349976,
            "Close": 601.48999,
            "Adj Close": 601.48999,
            "Volume": 8038079
          },
          {
            "Date": "2016-09-25",
            "Open": 601.48999,
            "High": 608.460022,
            "Low": 598.169983,
            "Close": 606.539978,
            "Adj Close": 606.539978,
            "Volume": 16700407
          },
          {
            "Date": "2016-09-26",
            "Open": 606.539978,
            "High": 608.969971,
            "Low": 601.72998,
            "Close": 605.469971,
            "Adj Close": 605.469971,
            "Volume": 15534315
          },
          {
            "Date": "2016-09-27",
            "Open": 605.469971,
            "High": 606.900024,
            "Low": 602.619995,
            "Close": 604.669983,
            "Adj Close": 604.669983,
            "Volume": 11485005
          },
          {
            "Date": "2016-09-28",
            "Open": 604.669983,
            "High": 607.22998,
            "Low": 602.01001,
            "Close": 604.700012,
            "Adj Close": 604.700012,
            "Volume": 15403975
          },
          {
            "Date": "2016-09-29",
            "Open": 604.700012,
            "High": 608.780029,
            "Low": 602.25,
            "Close": 608.140015,
            "Adj Close": 608.140015,
            "Volume": 14534745
          },
          {
            "Date": "2016-09-30",
            "Open": 608.140015,
            "High": 615,
            "Low": 607.070007,
            "Close": 613.409973,
            "Adj Close": 613.409973,
            "Volume": 10415543
          },
          {
            "Date": "2016-10-01",
            "Open": 613.409973,
            "High": 614.210022,
            "Low": 607.669983,
            "Close": 610.690002,
            "Adj Close": 610.690002,
            "Volume": 10096653
          },
          {
            "Date": "2016-10-02",
            "Open": 610.690002,
            "High": 613.200012,
            "Low": 608.469971,
            "Close": 611.599976,
            "Adj Close": 611.599976,
            "Volume": 13462741
          },
          {
            "Date": "2016-10-03",
            "Open": 611.599976,
            "High": 612.679993,
            "Low": 606.5,
            "Close": 608.960022,
            "Adj Close": 608.960022,
            "Volume": 15300692
          },
          {
            "Date": "2016-10-04",
            "Open": 608.960022,
            "High": 613.650024,
            "Low": 607.97998,
            "Close": 611.820007,
            "Adj Close": 611.820007,
            "Volume": 14360536
          },
          {
            "Date": "2016-10-05",
            "Open": 611.820007,
            "High": 612.679993,
            "Low": 608.539978,
            "Close": 610.969971,
            "Adj Close": 610.969971,
            "Volume": 13276337
          },
          {
            "Date": "2016-10-06",
            "Open": 610.969971,
            "High": 619.429993,
            "Low": 609.119995,
            "Close": 616.030029,
            "Adj Close": 616.030029,
            "Volume": 20167399
          },
          {
            "Date": "2016-10-07",
            "Open": 616.030029,
            "High": 619.559998,
            "Low": 614.880005,
            "Close": 617.650024,
            "Adj Close": 617.650024,
            "Volume": 8467434
          },
          {
            "Date": "2016-10-08",
            "Open": 617.650024,
            "High": 618.349976,
            "Low": 613.01001,
            "Close": 615.77002,
            "Adj Close": 615.77002,
            "Volume": 8320759
          },
          {
            "Date": "2016-10-09",
            "Open": 615.77002,
            "High": 618.809998,
            "Low": 612.76001,
            "Close": 617.289978,
            "Adj Close": 617.289978,
            "Volume": 15597892
          },
          {
            "Date": "2016-10-10",
            "Open": 617.289978,
            "High": 642.349976,
            "Low": 615.599976,
            "Close": 640.450012,
            "Adj Close": 640.450012,
            "Volume": 35367127
          },
          {
            "Date": "2016-10-11",
            "Open": 640.450012,
            "High": 642.51001,
            "Low": 632.190002,
            "Close": 635.98999,
            "Adj Close": 635.98999,
            "Volume": 17240000
          },
          {
            "Date": "2016-10-12",
            "Open": 635.98999,
            "High": 639.52002,
            "Low": 632.25,
            "Close": 635.599976,
            "Adj Close": 635.599976,
            "Volume": 16387361
          },
          {
            "Date": "2016-10-13",
            "Open": 635.599976,
            "High": 640.460022,
            "Low": 630.659973,
            "Close": 637.919983,
            "Adj Close": 637.919983,
            "Volume": 20114873
          },
          {
            "Date": "2016-10-14",
            "Open": 637.919983,
            "High": 641.400024,
            "Low": 635.059998,
            "Close": 637.030029,
            "Adj Close": 637.030029,
            "Volume": 7970927
          },
          {
            "Date": "2016-10-15",
            "Open": 637.030029,
            "High": 642.179993,
            "Low": 636.390015,
            "Close": 640.119995,
            "Adj Close": 640.119995,
            "Volume": 8306925
          },
          {
            "Date": "2016-10-16",
            "Open": 640.119995,
            "High": 641.289978,
            "Low": 634.890015,
            "Close": 637.369995,
            "Adj Close": 637.369995,
            "Volume": 17742610
          },
          {
            "Date": "2016-10-17",
            "Open": 637.369995,
            "High": 639.340027,
            "Low": 632.22998,
            "Close": 635.340027,
            "Adj Close": 635.340027,
            "Volume": 15725013
          },
          {
            "Date": "2016-10-18",
            "Open": 635.340027,
            "High": 637.27002,
            "Low": 624.090027,
            "Close": 629.059998,
            "Adj Close": 629.059998,
            "Volume": 22379197
          },
          {
            "Date": "2016-10-19",
            "Open": 629.059998,
            "High": 630.830017,
            "Low": 625.47998,
            "Close": 628.340027,
            "Adj Close": 628.340027,
            "Volume": 13252110
          },
          {
            "Date": "2016-10-20",
            "Open": 628.340027,
            "High": 633.26001,
            "Low": 627.580017,
            "Close": 630.450012,
            "Adj Close": 630.450012,
            "Volume": 17836383
          },
          {
            "Date": "2016-10-21",
            "Open": 630.450012,
            "High": 659.890015,
            "Low": 629.719971,
            "Close": 655.47998,
            "Adj Close": 655.47998,
            "Volume": 24154228
          },
          {
            "Date": "2016-10-22",
            "Open": 655.47998,
            "High": 661.200012,
            "Low": 648.780029,
            "Close": 653.030029,
            "Adj Close": 653.030029,
            "Volume": 14418212
          },
          {
            "Date": "2016-10-23",
            "Open": 653.030029,
            "High": 654.320007,
            "Low": 645.679993,
            "Close": 650.48999,
            "Adj Close": 650.48999,
            "Volume": 21726106
          },
          {
            "Date": "2016-10-24",
            "Open": 650.48999,
            "High": 662.539978,
            "Low": 647.650024,
            "Close": 651,
            "Adj Close": 651,
            "Volume": 24179462
          },
          {
            "Date": "2016-10-25",
            "Open": 651,
            "High": 678.390015,
            "Low": 651.390015,
            "Close": 674.669983,
            "Adj Close": 674.669983,
            "Volume": 31949607
          },
          {
            "Date": "2016-10-26",
            "Open": 674.669983,
            "High": 687.880005,
            "Low": 672.26001,
            "Close": 682.299988,
            "Adj Close": 682.299988,
            "Volume": 31862181
          },
          {
            "Date": "2016-10-27",
            "Open": 682.299988,
            "High": 688.429993,
            "Low": 678.630005,
            "Close": 686.23999,
            "Adj Close": 686.23999,
            "Volume": 26829414
          },
          {
            "Date": "2016-10-28",
            "Open": 686.23999,
            "High": 720.190002,
            "Low": 685.219971,
            "Close": 714.950012,
            "Adj Close": 714.950012,
            "Volume": 38351348
          },
          {
            "Date": "2016-10-29",
            "Open": 714.950012,
            "High": 714.909973,
            "Low": 689.51001,
            "Close": 697.27002,
            "Adj Close": 697.27002,
            "Volume": 27793236
          },
          {
            "Date": "2016-10-31",
            "Open": 697.27002,
            "High": 707.210022,
            "Low": 682.169983,
            "Close": 698.669983,
            "Adj Close": 698.669983,
            "Volume": 26687188
          },
          {
            "Date": "2016-11-01",
            "Open": 698.669983,
            "High": 734.359985,
            "Low": 695.200012,
            "Close": 726.76001,
            "Adj Close": 726.76001,
            "Volume": 49453950
          },
          {
            "Date": "2016-11-02",
            "Open": 726.76001,
            "High": 735.780029,
            "Low": 718.140015,
            "Close": 733.51001,
            "Adj Close": 733.51001,
            "Volume": 28452232
          },
          {
            "Date": "2016-11-03",
            "Open": 733.51001,
            "High": 744.429993,
            "Low": 670.400024,
            "Close": 684.869995,
            "Adj Close": 684.869995,
            "Volume": 69067917
          },
          {
            "Date": "2016-11-04",
            "Open": 684.869995,
            "High": 706.640015,
            "Low": 681.27002,
            "Close": 702.080017,
            "Adj Close": 702.080017,
            "Volume": 33762721
          },
          {
            "Date": "2016-11-05",
            "Open": 702.080017,
            "High": 706.380005,
            "Low": 694.030029,
            "Close": 702.109985,
            "Adj Close": 702.109985,
            "Volume": 15554565
          },
          {
            "Date": "2016-11-06",
            "Open": 702.109985,
            "High": 714.130005,
            "Low": 697.630005,
            "Close": 709.909973,
            "Adj Close": 709.909973,
            "Volume": 18363567
          },
          {
            "Date": "2016-11-07",
            "Open": 709.909973,
            "High": 711.659973,
            "Low": 698.349976,
            "Close": 705.400024,
            "Adj Close": 705.400024,
            "Volume": 21797370
          },
          {
            "Date": "2016-11-08",
            "Open": 705.400024,
            "High": 714.630005,
            "Low": 700.960022,
            "Close": 710.900024,
            "Adj Close": 710.900024,
            "Volume": 28262235
          },
          {
            "Date": "2016-11-09",
            "Open": 710.900024,
            "High": 741.22998,
            "Low": 707.130005,
            "Close": 721.419983,
            "Adj Close": 721.419983,
            "Volume": 51548567
          },
          {
            "Date": "2016-11-10",
            "Open": 721.419983,
            "High": 723.02002,
            "Low": 707.309998,
            "Close": 714.570007,
            "Adj Close": 714.570007,
            "Volume": 23931322
          },
          {
            "Date": "2016-11-11",
            "Open": 714.570007,
            "High": 719.789978,
            "Low": 711.669983,
            "Close": 714.969971,
            "Adj Close": 714.969971,
            "Volume": 18386841
          },
          {
            "Date": "2016-11-12",
            "Open": 714.969971,
            "High": 717.369995,
            "Low": 701.080017,
            "Close": 704.27002,
            "Adj Close": 704.27002,
            "Volume": 19677656
          },
          {
            "Date": "2016-11-13",
            "Open": 704.27002,
            "High": 705.609985,
            "Low": 685.01001,
            "Close": 701.969971,
            "Adj Close": 701.969971,
            "Volume": 25249834
          },
          {
            "Date": "2016-11-14",
            "Open": 701.969971,
            "High": 708.030029,
            "Low": 696.109985,
            "Close": 704.559998,
            "Adj Close": 704.559998,
            "Volume": 26613445
          },
          {
            "Date": "2016-11-15",
            "Open": 704.559998,
            "High": 716.929993,
            "Low": 697.909973,
            "Close": 711.099976,
            "Adj Close": 711.099976,
            "Volume": 29562740
          },
          {
            "Date": "2016-11-16",
            "Open": 711.099976,
            "High": 745.97998,
            "Low": 708.140015,
            "Close": 740.280029,
            "Adj Close": 740.280029,
            "Volume": 58304902
          },
          {
            "Date": "2016-11-17",
            "Open": 740.280029,
            "High": 751.909973,
            "Low": 730.080017,
            "Close": 737.530029,
            "Adj Close": 737.530029,
            "Volume": 46942756
          },
          {
            "Date": "2016-11-18",
            "Open": 737.530029,
            "High": 751.429993,
            "Low": 730.950012,
            "Close": 746.960022,
            "Adj Close": 746.960022,
            "Volume": 29666065
          },
          {
            "Date": "2016-11-19",
            "Open": 746.960022,
            "High": 755.340027,
            "Low": 737.440002,
            "Close": 747.890015,
            "Adj Close": 747.890015,
            "Volume": 19276573
          },
          {
            "Date": "2016-11-20",
            "Open": 747.890015,
            "High": 752.26001,
            "Low": 712.77002,
            "Close": 728.51001,
            "Adj Close": 728.51001,
            "Volume": 34876785
          },
          {
            "Date": "2016-11-21",
            "Open": 728.51001,
            "High": 744.330017,
            "Low": 726.549988,
            "Close": 736.190002,
            "Adj Close": 736.190002,
            "Volume": 24010681
          },
          {
            "Date": "2016-11-22",
            "Open": 736.190002,
            "High": 754.01001,
            "Low": 730.619995,
            "Close": 749.340027,
            "Adj Close": 749.340027,
            "Volume": 33225195
          },
          {
            "Date": "2016-11-23",
            "Open": 749.340027,
            "High": 750.929993,
            "Low": 731.340027,
            "Close": 741.070007,
            "Adj Close": 741.070007,
            "Volume": 28258203
          },
          {
            "Date": "2016-11-24",
            "Open": 741.070007,
            "High": 744.23999,
            "Low": 726.190002,
            "Close": 735.309998,
            "Adj Close": 735.309998,
            "Volume": 27531777
          },
          {
            "Date": "2016-11-25",
            "Open": 735.309998,
            "High": 741.25,
            "Low": 728.969971,
            "Close": 740.390015,
            "Adj Close": 740.390015,
            "Volume": 21299510
          },
          {
            "Date": "2016-11-26",
            "Open": 740.390015,
            "High": 740.960022,
            "Low": 725.619995,
            "Close": 734.140015,
            "Adj Close": 734.140015,
            "Volume": 16682481
          },
          {
            "Date": "2016-11-27",
            "Open": 734.140015,
            "High": 738.289978,
            "Low": 727.109985,
            "Close": 729.419983,
            "Adj Close": 729.419983,
            "Volume": 15735824
          },
          {
            "Date": "2016-11-28",
            "Open": 729.419983,
            "High": 738.099976,
            "Low": 727.73999,
            "Close": 733.299988,
            "Adj Close": 733.299988,
            "Volume": 25153838
          },
          {
            "Date": "2016-11-29",
            "Open": 733.299988,
            "High": 737.039978,
            "Low": 727.780029,
            "Close": 732.559998,
            "Adj Close": 732.559998,
            "Volume": 24030304
          },
          {
            "Date": "2016-11-30",
            "Open": 732.559998,
            "High": 745.390015,
            "Low": 730.570007,
            "Close": 742.48999,
            "Adj Close": 742.48999,
            "Volume": 29210351
          },
          {
            "Date": "2016-12-01",
            "Open": 742.48999,
            "High": 755.47998,
            "Low": 741.080017,
            "Close": 752.630005,
            "Adj Close": 752.630005,
            "Volume": 40690942
          },
          {
            "Date": "2016-12-02",
            "Open": 752.630005,
            "High": 779.02002,
            "Low": 752.25,
            "Close": 770.940002,
            "Adj Close": 770.940002,
            "Volume": 48893613
          },
          {
            "Date": "2016-12-03",
            "Open": 770.940002,
            "High": 772.320007,
            "Low": 755.809998,
            "Close": 764.23999,
            "Adj Close": 764.23999,
            "Volume": 30234128
          },
          {
            "Date": "2016-12-04",
            "Open": 764.23999,
            "High": 769.22998,
            "Low": 758.799988,
            "Close": 766.390015,
            "Adj Close": 766.390015,
            "Volume": 14755120
          },
          {
            "Date": "2016-12-05",
            "Open": 766.390015,
            "High": 769.179993,
            "Low": 746.01001,
            "Close": 754.340027,
            "Adj Close": 754.340027,
            "Volume": 39082688
          },
          {
            "Date": "2016-12-06",
            "Open": 754.340027,
            "High": 762.47998,
            "Low": 750.909973,
            "Close": 758.210022,
            "Adj Close": 758.210022,
            "Volume": 25497771
          },
          {
            "Date": "2016-12-07",
            "Open": 758.210022,
            "High": 769.02002,
            "Low": 754.27002,
            "Close": 765.559998,
            "Adj Close": 765.559998,
            "Volume": 26755412
          },
          {
            "Date": "2016-12-08",
            "Open": 765.559998,
            "High": 773.409973,
            "Low": 761.169983,
            "Close": 768.48999,
            "Adj Close": 768.48999,
            "Volume": 22208497
          },
          {
            "Date": "2016-12-09",
            "Open": 768.48999,
            "High": 773.47998,
            "Low": 765.030029,
            "Close": 770.47998,
            "Adj Close": 770.47998,
            "Volume": 18722048
          },
          {
            "Date": "2016-12-10",
            "Open": 770.47998,
            "High": 776.960022,
            "Low": 769.190002,
            "Close": 774,
            "Adj Close": 774,
            "Volume": 14049110
          },
          {
            "Date": "2016-12-11",
            "Open": 774,
            "High": 774.159973,
            "Low": 763,
            "Close": 767.909973,
            "Adj Close": 767.909973,
            "Volume": 13269086
          },
          {
            "Date": "2016-12-12",
            "Open": 767.909973,
            "High": 781.26001,
            "Low": 767.859985,
            "Close": 778.469971,
            "Adj Close": 778.469971,
            "Volume": 22442991
          },
          {
            "Date": "2016-12-13",
            "Open": 778.469971,
            "High": 790.330017,
            "Low": 767.77002,
            "Close": 778.73999,
            "Adj Close": 778.73999,
            "Volume": 25894856
          },
          {
            "Date": "2016-12-14",
            "Open": 778.73999,
            "High": 780.77002,
            "Low": 771.01001,
            "Close": 776.5,
            "Adj Close": 776.5,
            "Volume": 19326375
          },
          {
            "Date": "2016-12-15",
            "Open": 776.5,
            "High": 780.27002,
            "Low": 773.119995,
            "Close": 775.210022,
            "Adj Close": 775.210022,
            "Volume": 20452116
          },
          {
            "Date": "2016-12-16",
            "Open": 775.210022,
            "High": 783.940002,
            "Low": 773.309998,
            "Close": 782.049988,
            "Adj Close": 782.049988,
            "Volume": 21650384
          },
          {
            "Date": "2016-12-17",
            "Open": 782.049988,
            "High": 791.570007,
            "Low": 779.359985,
            "Close": 787.169983,
            "Adj Close": 787.169983,
            "Volume": 18648778
          },
          {
            "Date": "2016-12-18",
            "Open": 787.169983,
            "High": 791.26001,
            "Low": 783.799988,
            "Close": 789.01001,
            "Adj Close": 789.01001,
            "Volume": 11525747
          },
          {
            "Date": "2016-12-19",
            "Open": 789.01001,
            "High": 793.72998,
            "Low": 786.309998,
            "Close": 789.789978,
            "Adj Close": 789.789978,
            "Volume": 20238681
          },
          {
            "Date": "2016-12-20",
            "Open": 789.789978,
            "High": 800.02002,
            "Low": 787.119995,
            "Close": 799.099976,
            "Adj Close": 799.099976,
            "Volume": 27406319
          },
          {
            "Date": "2016-12-21",
            "Open": 799.099976,
            "High": 833.130005,
            "Low": 795.97998,
            "Close": 829.210022,
            "Adj Close": 829.210022,
            "Volume": 53411082
          },
          {
            "Date": "2016-12-22",
            "Open": 829.210022,
            "High": 874.679993,
            "Low": 828.869995,
            "Close": 860.150024,
            "Adj Close": 860.150024,
            "Volume": 60511618
          },
          {
            "Date": "2016-12-23",
            "Open": 860.150024,
            "High": 920.26001,
            "Low": 858.039978,
            "Close": 917.169983,
            "Adj Close": 917.169983,
            "Volume": 91802931
          },
          {
            "Date": "2016-12-24",
            "Open": 917.169983,
            "High": 920.48999,
            "Low": 880.789978,
            "Close": 891.070007,
            "Adj Close": 891.070007,
            "Volume": 41576781
          },
          {
            "Date": "2016-12-25",
            "Open": 891.070007,
            "High": 895.23999,
            "Low": 851.419983,
            "Close": 891.070007,
            "Adj Close": 891.070007,
            "Volume": 37173377
          },
          {
            "Date": "2016-12-26",
            "Open": 891.070007,
            "High": 909.320007,
            "Low": 885.880005,
            "Close": 898.380005,
            "Adj Close": 898.380005,
            "Volume": 35002753
          },
          {
            "Date": "2016-12-27",
            "Open": 898.380005,
            "High": 937.909973,
            "Low": 893.380005,
            "Close": 925.780029,
            "Adj Close": 925.780029,
            "Volume": 45966615
          },
          {
            "Date": "2016-12-28",
            "Open": 925.780029,
            "High": 974.51001,
            "Low": 925.48999,
            "Close": 972.169983,
            "Adj Close": 972.169983,
            "Volume": 73811803
          },
          {
            "Date": "2016-12-29",
            "Open": 972.169983,
            "High": 982.570007,
            "Low": 949.22998,
            "Close": 971.080017,
            "Adj Close": 971.080017,
            "Volume": 59226667
          },
          {
            "Date": "2016-12-30",
            "Open": 971.080017,
            "High": 971.590027,
            "Low": 927.400024,
            "Close": 959.039978,
            "Adj Close": 959.039978,
            "Volume": 67449149
          },
          {
            "Date": "2016-12-31",
            "Open": 959.039978,
            "High": 965.469971,
            "Low": 942.400024,
            "Close": 963.380005,
            "Adj Close": 963.380005,
            "Volume": 26379401
          },
          {
            "Date": "2017-01-01",
            "Open": 963.380005,
            "High": 1001.609985,
            "Low": 956.099976,
            "Close": 995.440002,
            "Adj Close": 995.440002,
            "Volume": 40570922
          },
          {
            "Date": "2017-01-02",
            "Open": 995.440002,
            "High": 1031.680054,
            "Low": 990.200012,
            "Close": 1017.049988,
            "Adj Close": 1017.049988,
            "Volume": 66038073
          },
          {
            "Date": "2017-01-03",
            "Open": 1017.049988,
            "High": 1035.469971,
            "Low": 1006.530029,
            "Close": 1033.300049,
            "Adj Close": 1033.300049,
            "Volume": 56085870
          },
          {
            "Date": "2017-01-04",
            "Open": 1033.300049,
            "High": 1148.540039,
            "Low": 1022.320007,
            "Close": 1135.410034,
            "Adj Close": 1135.410034,
            "Volume": 170584623
          },
          {
            "Date": "2017-01-05",
            "Open": 1135.410034,
            "High": 1150.630005,
            "Low": 874.530029,
            "Close": 989.349976,
            "Adj Close": 989.349976,
            "Volume": 244839289
          },
          {
            "Date": "2017-01-06",
            "Open": 989.349976,
            "High": 1027.420044,
            "Low": 852.549988,
            "Close": 886.159973,
            "Adj Close": 886.159973,
            "Volume": 179160668
          },
          {
            "Date": "2017-01-07",
            "Open": 886.159973,
            "High": 900.859985,
            "Low": 806.659973,
            "Close": 888.869995,
            "Adj Close": 888.869995,
            "Volume": 113037531
          },
          {
            "Date": "2017-01-08",
            "Open": 888.869995,
            "High": 936.130005,
            "Low": 875.849976,
            "Close": 900.859985,
            "Adj Close": 900.859985,
            "Volume": 70298340
          },
          {
            "Date": "2017-01-09",
            "Open": 900.859985,
            "High": 910.469971,
            "Low": 870.909973,
            "Close": 899.780029,
            "Adj Close": 899.780029,
            "Volume": 55963281
          },
          {
            "Date": "2017-01-10",
            "Open": 899.780029,
            "High": 911.320007,
            "Low": 890.119995,
            "Close": 904.369995,
            "Adj Close": 904.369995,
            "Volume": 48644106
          },
          {
            "Date": "2017-01-11",
            "Open": 904.369995,
            "High": 917.650024,
            "Low": 751.630005,
            "Close": 785.429993,
            "Adj Close": 785.429993,
            "Volume": 160194109
          },
          {
            "Date": "2017-01-12",
            "Open": 785.429993,
            "High": 828.210022,
            "Low": 739.549988,
            "Close": 810.109985,
            "Adj Close": 810.109985,
            "Volume": 93986701
          },
          {
            "Date": "2017-01-13",
            "Open": 810.109985,
            "High": 835.049988,
            "Low": 771,
            "Close": 824.830017,
            "Adj Close": 824.830017,
            "Volume": 72555875
          },
          {
            "Date": "2017-01-14",
            "Open": 824.830017,
            "High": 838.900024,
            "Low": 808.27002,
            "Close": 819.630005,
            "Adj Close": 819.630005,
            "Volume": 36594482
          },
          {
            "Date": "2017-01-15",
            "Open": 819.630005,
            "High": 826.429993,
            "Low": 808.630005,
            "Close": 821.169983,
            "Adj Close": 821.169983,
            "Volume": 20004735
          },
          {
            "Date": "2017-01-16",
            "Open": 821.169983,
            "High": 836.659973,
            "Low": 817.700012,
            "Close": 827.340027,
            "Adj Close": 827.340027,
            "Volume": 27592899
          },
          {
            "Date": "2017-01-17",
            "Open": 827.340027,
            "High": 906.380005,
            "Low": 825.039978,
            "Close": 899.659973,
            "Adj Close": 899.659973,
            "Volume": 72272727
          },
          {
            "Date": "2017-01-18",
            "Open": 899.659973,
            "High": 913.669983,
            "Low": 845.869995,
            "Close": 872.030029,
            "Adj Close": 872.030029,
            "Volume": 61042392
          },
          {
            "Date": "2017-01-19",
            "Open": 872.030029,
            "High": 905.280029,
            "Low": 870.710022,
            "Close": 895.210022,
            "Adj Close": 895.210022,
            "Volume": 52300814
          },
          {
            "Date": "2017-01-20",
            "Open": 895.210022,
            "High": 901.48999,
            "Low": 878.900024,
            "Close": 892.909973,
            "Adj Close": 892.909973,
            "Volume": 34847130
          },
          {
            "Date": "2017-01-21",
            "Open": 892.909973,
            "High": 928.929993,
            "Low": 889.460022,
            "Close": 919.840027,
            "Adj Close": 919.840027,
            "Volume": 37129176
          },
          {
            "Date": "2017-01-22",
            "Open": 919.840027,
            "High": 938.380005,
            "Low": 888.619995,
            "Close": 918.840027,
            "Adj Close": 918.840027,
            "Volume": 44074299
          },
          {
            "Date": "2017-01-23",
            "Open": 918.840027,
            "High": 927.97998,
            "Low": 910.849976,
            "Close": 921.460022,
            "Adj Close": 921.460022,
            "Volume": 30261054
          },
          {
            "Date": "2017-01-24",
            "Open": 921.460022,
            "High": 925.609985,
            "Low": 889.150024,
            "Close": 893.75,
            "Adj Close": 893.75,
            "Volume": 53468911
          },
          {
            "Date": "2017-01-25",
            "Open": 893.75,
            "High": 905.700012,
            "Low": 883.630005,
            "Close": 894.409973,
            "Adj Close": 894.409973,
            "Volume": 34014866
          },
          {
            "Date": "2017-01-26",
            "Open": 894.409973,
            "High": 919.320007,
            "Low": 893.48999,
            "Close": 915.559998,
            "Adj Close": 915.559998,
            "Volume": 30795685
          },
          {
            "Date": "2017-01-27",
            "Open": 915.559998,
            "High": 922.559998,
            "Low": 907.919983,
            "Close": 918.01001,
            "Adj Close": 918.01001,
            "Volume": 28503144
          },
          {
            "Date": "2017-01-28",
            "Open": 918.01001,
            "High": 921.890015,
            "Low": 912.840027,
            "Close": 918.51001,
            "Adj Close": 918.51001,
            "Volume": 13251844
          },
          {
            "Date": "2017-01-29",
            "Open": 918.51001,
            "High": 922.400024,
            "Low": 912.679993,
            "Close": 914.549988,
            "Adj Close": 914.549988,
            "Volume": 10214368
          },
          {
            "Date": "2017-01-30",
            "Open": 914.549988,
            "High": 922.349976,
            "Low": 911.51001,
            "Close": 920.72998,
            "Adj Close": 920.72998,
            "Volume": 17604172
          },
          {
            "Date": "2017-01-31",
            "Open": 920.72998,
            "High": 967.450012,
            "Low": 917.380005,
            "Close": 965.48999,
            "Adj Close": 965.48999,
            "Volume": 51869216
          },
          {
            "Date": "2017-02-01",
            "Open": 965.48999,
            "High": 986.570007,
            "Low": 959.820007,
            "Close": 982.429993,
            "Adj Close": 982.429993,
            "Volume": 44035816
          },
          {
            "Date": "2017-02-02",
            "Open": 982.429993,
            "High": 1009.130005,
            "Low": 973.5,
            "Close": 1003.969971,
            "Adj Close": 1003.969971,
            "Volume": 50633910
          },
          {
            "Date": "2017-02-03",
            "Open": 1003.969971,
            "High": 1023.719971,
            "Low": 989.210022,
            "Close": 1013.02002,
            "Adj Close": 1013.02002,
            "Volume": 62431017
          },
          {
            "Date": "2017-02-04",
            "Open": 1013.02002,
            "High": 1041.040039,
            "Low": 1000.409973,
            "Close": 1031.849976,
            "Adj Close": 1031.849976,
            "Volume": 40406542
          },
          {
            "Date": "2017-02-05",
            "Open": 1031.849976,
            "High": 1033.660034,
            "Low": 1004.049988,
            "Close": 1016.109985,
            "Adj Close": 1016.109985,
            "Volume": 31669956
          },
          {
            "Date": "2017-02-06",
            "Open": 1016.109985,
            "High": 1030.599976,
            "Low": 1010.830017,
            "Close": 1024.670044,
            "Adj Close": 1024.670044,
            "Volume": 32828350
          },
          {
            "Date": "2017-02-07",
            "Open": 1024.670044,
            "High": 1054.099976,
            "Low": 1019.869995,
            "Close": 1049.560059,
            "Adj Close": 1049.560059,
            "Volume": 41318349
          },
          {
            "Date": "2017-02-08",
            "Open": 1049.560059,
            "High": 1069.22998,
            "Low": 1020.330017,
            "Close": 1055.48999,
            "Adj Close": 1055.48999,
            "Volume": 68336320
          },
          {
            "Date": "2017-02-09",
            "Open": 1055.48999,
            "High": 1073.030029,
            "Low": 924.650024,
            "Close": 978.960022,
            "Adj Close": 978.960022,
            "Volume": 145839317
          },
          {
            "Date": "2017-02-10",
            "Open": 978.960022,
            "High": 1005.599976,
            "Low": 947.02002,
            "Close": 997.609985,
            "Adj Close": 997.609985,
            "Volume": 60639111
          },
          {
            "Date": "2017-02-11",
            "Open": 997.609985,
            "High": 1014.320007,
            "Low": 983.929993,
            "Close": 1008.320007,
            "Adj Close": 1008.320007,
            "Volume": 28504495
          },
          {
            "Date": "2017-02-12",
            "Open": 1008.320007,
            "High": 1007.820007,
            "Low": 992.450012,
            "Close": 996.52002,
            "Adj Close": 996.52002,
            "Volume": 14825023
          },
          {
            "Date": "2017-02-13",
            "Open": 996.52002,
            "High": 1007.609985,
            "Low": 975.099976,
            "Close": 995.359985,
            "Adj Close": 995.359985,
            "Volume": 32785064
          },
          {
            "Date": "2017-02-14",
            "Open": 995.359985,
            "High": 1013.799988,
            "Low": 986.460022,
            "Close": 1008.340027,
            "Adj Close": 1008.340027,
            "Volume": 39810076
          },
          {
            "Date": "2017-02-15",
            "Open": 1008.340027,
            "High": 1010.929993,
            "Low": 999.72998,
            "Close": 1008.190002,
            "Adj Close": 1008.190002,
            "Volume": 23569549
          },
          {
            "Date": "2017-02-16",
            "Open": 1008.190002,
            "High": 1040.280029,
            "Low": 1007.390015,
            "Close": 1031.930054,
            "Adj Close": 1031.930054,
            "Volume": 39114743
          },
          {
            "Date": "2017-02-17",
            "Open": 1031.930054,
            "High": 1057.390015,
            "Low": 1025.869995,
            "Close": 1049.410034,
            "Adj Close": 1049.410034,
            "Volume": 47815360
          },
          {
            "Date": "2017-02-18",
            "Open": 1049.410034,
            "High": 1063.209961,
            "Low": 1044.680054,
            "Close": 1052.280029,
            "Adj Close": 1052.280029,
            "Volume": 26856521
          },
          {
            "Date": "2017-02-19",
            "Open": 1052.280029,
            "High": 1056.47998,
            "Low": 1037.670044,
            "Close": 1048.890015,
            "Adj Close": 1048.890015,
            "Volume": 18876881
          },
          {
            "Date": "2017-02-20",
            "Open": 1048.890015,
            "High": 1081.780029,
            "Low": 1040.98999,
            "Close": 1077.560059,
            "Adj Close": 1077.560059,
            "Volume": 32959720
          },
          {
            "Date": "2017-02-21",
            "Open": 1077.560059,
            "High": 1123.030029,
            "Low": 1073.540039,
            "Close": 1119.030029,
            "Adj Close": 1119.030029,
            "Volume": 62908569
          },
          {
            "Date": "2017-02-22",
            "Open": 1119.030029,
            "High": 1132.25,
            "Low": 1094.829956,
            "Close": 1120.459961,
            "Adj Close": 1120.459961,
            "Volume": 53647453
          },
          {
            "Date": "2017-02-23",
            "Open": 1120.459961,
            "High": 1181.599976,
            "Low": 1113.540039,
            "Close": 1171.910034,
            "Adj Close": 1171.910034,
            "Volume": 75663167
          },
          {
            "Date": "2017-02-24",
            "Open": 1171.910034,
            "High": 1211.73999,
            "Low": 1092.410034,
            "Close": 1176.48999,
            "Adj Close": 1176.48999,
            "Volume": 126978010
          },
          {
            "Date": "2017-02-25",
            "Open": 1176.48999,
            "High": 1180.01001,
            "Low": 1116.209961,
            "Close": 1149.050049,
            "Adj Close": 1149.050049,
            "Volume": 53003830
          },
          {
            "Date": "2017-02-26",
            "Open": 1149.050049,
            "High": 1177.469971,
            "Low": 1130.609985,
            "Close": 1171.579956,
            "Adj Close": 1171.579956,
            "Volume": 35750258
          },
          {
            "Date": "2017-02-27",
            "Open": 1171.579956,
            "High": 1195.819946,
            "Low": 1164.27002,
            "Close": 1188.829956,
            "Adj Close": 1188.829956,
            "Volume": 42035366
          },
          {
            "Date": "2017-02-28",
            "Open": 1188.829956,
            "High": 1208.219971,
            "Low": 1175.75,
            "Close": 1189.27002,
            "Adj Close": 1189.27002,
            "Volume": 60371869
          },
          {
            "Date": "2017-03-01",
            "Open": 1189.27002,
            "High": 1225.040039,
            "Low": 1154.550049,
            "Close": 1222.660034,
            "Adj Close": 1222.660034,
            "Volume": 61964760
          },
          {
            "Date": "2017-03-02",
            "Open": 1222.660034,
            "High": 1286.97998,
            "Low": 1211.959961,
            "Close": 1255.469971,
            "Adj Close": 1255.469971,
            "Volume": 98040639
          },
          {
            "Date": "2017-03-03",
            "Open": 1255.469971,
            "High": 1291.349976,
            "Low": 1250.800049,
            "Close": 1283.300049,
            "Adj Close": 1283.300049,
            "Volume": 85876262
          },
          {
            "Date": "2017-03-04",
            "Open": 1283.300049,
            "High": 1285.780029,
            "Low": 1228.72998,
            "Close": 1264.319946,
            "Adj Close": 1264.319946,
            "Volume": 48597934
          },
          {
            "Date": "2017-03-05",
            "Open": 1264.319946,
            "High": 1273.280029,
            "Low": 1242.099976,
            "Close": 1271.219971,
            "Adj Close": 1271.219971,
            "Volume": 32104972
          },
          {
            "Date": "2017-03-06",
            "Open": 1271.219971,
            "High": 1280.609985,
            "Low": 1261,
            "Close": 1277.01001,
            "Adj Close": 1277.01001,
            "Volume": 39591110
          },
          {
            "Date": "2017-03-07",
            "Open": 1277.01001,
            "High": 1280.890015,
            "Low": 1148.660034,
            "Close": 1232.689941,
            "Adj Close": 1232.689941,
            "Volume": 108673876
          },
          {
            "Date": "2017-03-08",
            "Open": 1232.689941,
            "High": 1242.040039,
            "Low": 1136.880005,
            "Close": 1146.969971,
            "Adj Close": 1146.969971,
            "Volume": 116342973
          },
          {
            "Date": "2017-03-09",
            "Open": 1146.969971,
            "High": 1206.969971,
            "Low": 1129.349976,
            "Close": 1191.329956,
            "Adj Close": 1191.329956,
            "Volume": 70427061
          },
          {
            "Date": "2017-03-10",
            "Open": 1191.329956,
            "High": 1330.420044,
            "Low": 988.690002,
            "Close": 1112.390015,
            "Adj Close": 1112.390015,
            "Volume": 223836041
          },
          {
            "Date": "2017-03-11",
            "Open": 1112.390015,
            "High": 1202.689941,
            "Low": 1104.780029,
            "Close": 1179.219971,
            "Adj Close": 1179.219971,
            "Volume": 82387198
          },
          {
            "Date": "2017-03-12",
            "Open": 1179.219971,
            "High": 1235.459961,
            "Low": 1160.900024,
            "Close": 1225.109985,
            "Adj Close": 1225.109985,
            "Volume": 53441762
          },
          {
            "Date": "2017-03-13",
            "Open": 1225.109985,
            "High": 1245.630005,
            "Low": 1205.609985,
            "Close": 1238.189941,
            "Adj Close": 1238.189941,
            "Volume": 74376298
          },
          {
            "Date": "2017-03-14",
            "Open": 1238.189941,
            "High": 1255.52002,
            "Low": 1218.380005,
            "Close": 1243.140015,
            "Adj Close": 1243.140015,
            "Volume": 56058617
          },
          {
            "Date": "2017-03-15",
            "Open": 1243.140015,
            "High": 1256.949951,
            "Low": 1236.430054,
            "Close": 1253.430054,
            "Adj Close": 1253.430054,
            "Volume": 54486699
          },
          {
            "Date": "2017-03-16",
            "Open": 1253.430054,
            "High": 1260.23999,
            "Low": 1118.959961,
            "Close": 1172.880005,
            "Adj Close": 1172.880005,
            "Volume": 159409024
          },
          {
            "Date": "2017-03-17",
            "Open": 1172.880005,
            "High": 1174.900024,
            "Low": 1063.47998,
            "Close": 1071.709961,
            "Adj Close": 1071.709961,
            "Volume": 183879768
          },
          {
            "Date": "2017-03-18",
            "Open": 1071.709961,
            "High": 1103.609985,
            "Low": 940.179993,
            "Close": 971.380005,
            "Adj Close": 971.380005,
            "Volume": 212772055
          },
          {
            "Date": "2017-03-19",
            "Open": 971.380005,
            "High": 1063.670044,
            "Low": 967.309998,
            "Close": 1022.599976,
            "Adj Close": 1022.599976,
            "Volume": 108128237
          },
          {
            "Date": "2017-03-20",
            "Open": 1022.599976,
            "High": 1057.5,
            "Low": 1005.049988,
            "Close": 1047.51001,
            "Adj Close": 1047.51001,
            "Volume": 63833143
          },
          {
            "Date": "2017-03-21",
            "Open": 1047.51001,
            "High": 1125.530029,
            "Low": 1043.869995,
            "Close": 1121.290039,
            "Adj Close": 1121.290039,
            "Volume": 101051998
          },
          {
            "Date": "2017-03-22",
            "Open": 1121.290039,
            "High": 1121.880005,
            "Low": 997.780029,
            "Close": 1044.719971,
            "Adj Close": 1044.719971,
            "Volume": 120730492
          },
          {
            "Date": "2017-03-23",
            "Open": 1044.719971,
            "High": 1062.790039,
            "Low": 1022.02002,
            "Close": 1035.030029,
            "Adj Close": 1035.030029,
            "Volume": 58898141
          },
          {
            "Date": "2017-03-24",
            "Open": 1035.030029,
            "High": 1038.380005,
            "Low": 927.349976,
            "Close": 939.700012,
            "Adj Close": 939.700012,
            "Volume": 130042865
          },
          {
            "Date": "2017-03-25",
            "Open": 939.700012,
            "High": 995.960022,
            "Low": 890.429993,
            "Close": 966.299988,
            "Adj Close": 966.299988,
            "Volume": 118395054
          },
          {
            "Date": "2017-03-26",
            "Open": 966.299988,
            "High": 1004.320007,
            "Low": 946.650024,
            "Close": 969.440002,
            "Adj Close": 969.440002,
            "Volume": 83255983
          },
          {
            "Date": "2017-03-26",
            "Open": 969.440002,
            "High": 1048.849976,
            "Low": 961.799988,
            "Close": 1045.140015,
            "Adj Close": 1045.140015,
            "Volume": 92332221
          },
          {
            "Date": "2017-03-27",
            "Open": 1045.140015,
            "High": 1068.410034,
            "Low": 1015.450012,
            "Close": 1044.420044,
            "Adj Close": 1044.420044,
            "Volume": 83567551
          },
          {
            "Date": "2017-03-28",
            "Open": 1044.420044,
            "High": 1058.660034,
            "Low": 1008.340027,
            "Close": 1041.900024,
            "Adj Close": 1041.900024,
            "Volume": 71261535
          },
          {
            "Date": "2017-03-29",
            "Open": 1041.900024,
            "High": 1052.660034,
            "Low": 1020.929993,
            "Close": 1037.910034,
            "Adj Close": 1037.910034,
            "Volume": 77633883
          },
          {
            "Date": "2017-03-30",
            "Open": 1037.910034,
            "High": 1088.199951,
            "Low": 1035.180054,
            "Close": 1079.109985,
            "Adj Close": 1079.109985,
            "Volume": 96543920
          },
          {
            "Date": "2017-03-31",
            "Open": 1079.109985,
            "High": 1103.73999,
            "Low": 1067.469971,
            "Close": 1086.119995,
            "Adj Close": 1086.119995,
            "Volume": 55020078
          },
          {
            "Date": "2017-04-01",
            "Open": 1086.119995,
            "High": 1109.47998,
            "Low": 1074.209961,
            "Close": 1097.400024,
            "Adj Close": 1097.400024,
            "Volume": 77853933
          },
          {
            "Date": "2017-04-02",
            "Open": 1097.400024,
            "High": 1157.869995,
            "Low": 1095.550049,
            "Close": 1147.560059,
            "Adj Close": 1147.560059,
            "Volume": 111870807
          },
          {
            "Date": "2017-04-03",
            "Open": 1147.560059,
            "High": 1161.189941,
            "Low": 1122.150024,
            "Close": 1141.77002,
            "Adj Close": 1141.77002,
            "Volume": 81164094
          },
          {
            "Date": "2017-04-04",
            "Open": 1141.77002,
            "High": 1143.839966,
            "Low": 1110.060059,
            "Close": 1129.869995,
            "Adj Close": 1129.869995,
            "Volume": 78335573
          },
          {
            "Date": "2017-04-05",
            "Open": 1129.869995,
            "High": 1201.550049,
            "Low": 1130.51001,
            "Close": 1188.699951,
            "Adj Close": 1188.699951,
            "Volume": 108182158
          },
          {
            "Date": "2017-04-06",
            "Open": 1188.699951,
            "High": 1201.22998,
            "Low": 1173.180054,
            "Close": 1190.48999,
            "Adj Close": 1190.48999,
            "Volume": 71184485
          },
          {
            "Date": "2017-04-07",
            "Open": 1190.48999,
            "High": 1198.219971,
            "Low": 1166.650024,
            "Close": 1180.780029,
            "Adj Close": 1180.780029,
            "Volume": 39393003
          },
          {
            "Date": "2017-04-08",
            "Open": 1180.780029,
            "High": 1215.099976,
            "Low": 1173.98999,
            "Close": 1204.339966,
            "Adj Close": 1204.339966,
            "Volume": 54498333
          },
          {
            "Date": "2017-04-09",
            "Open": 1204.339966,
            "High": 1214.869995,
            "Low": 1194.810059,
            "Close": 1206.709961,
            "Adj Close": 1206.709961,
            "Volume": 48473680
          },
          {
            "Date": "2017-04-10",
            "Open": 1206.709961,
            "High": 1229.569946,
            "Low": 1195.76001,
            "Close": 1220.73999,
            "Adj Close": 1220.73999,
            "Volume": 45563707
          },
          {
            "Date": "2017-04-11",
            "Open": 1220.73999,
            "High": 1225.459961,
            "Low": 1207.359985,
            "Close": 1212.530029,
            "Adj Close": 1212.530029,
            "Volume": 54699396
          },
          {
            "Date": "2017-04-12",
            "Open": 1212.530029,
            "High": 1218.660034,
            "Low": 1150.290039,
            "Close": 1176.199951,
            "Adj Close": 1176.199951,
            "Volume": 78456422
          },
          {
            "Date": "2017-04-13",
            "Open": 1176.199951,
            "High": 1195.400024,
            "Low": 1162.160034,
            "Close": 1177.329956,
            "Adj Close": 1177.329956,
            "Volume": 56129576
          },
          {
            "Date": "2017-04-14",
            "Open": 1177.329956,
            "High": 1194.849976,
            "Low": 841.530029,
            "Close": 1176.98999,
            "Adj Close": 1176.98999,
            "Volume": 33877537
          },
          {
            "Date": "2017-04-15",
            "Open": 1176.98999,
            "High": 1187.969971,
            "Low": 1166.73999,
            "Close": 1176.800049,
            "Adj Close": 1176.800049,
            "Volume": 22538918
          },
          {
            "Date": "2017-04-16",
            "Open": 1176.800049,
            "High": 1202.969971,
            "Low": 1172.810059,
            "Close": 1194.01001,
            "Adj Close": 1194.01001,
            "Volume": 56095607
          },
          {
            "Date": "2017-04-17",
            "Open": 1194.01001,
            "High": 1213.880005,
            "Low": 1191.140015,
            "Close": 1206.089966,
            "Adj Close": 1206.089966,
            "Volume": 64900219
          },
          {
            "Date": "2017-04-18",
            "Open": 1206.089966,
            "High": 1218.209961,
            "Low": 1194.079956,
            "Close": 1215.199951,
            "Adj Close": 1215.199951,
            "Volume": 53034357
          },
          {
            "Date": "2017-04-19",
            "Open": 1215.199951,
            "High": 1246.640015,
            "Low": 1210.670044,
            "Close": 1238.089966,
            "Adj Close": 1238.089966,
            "Volume": 69223360
          },
          {
            "Date": "2017-04-20",
            "Open": 1238.089966,
            "High": 1256.969971,
            "Low": 1235.560059,
            "Close": 1249.640015,
            "Adj Close": 1249.640015,
            "Volume": 52498296
          },
          {
            "Date": "2017-04-21",
            "Open": 1249.640015,
            "High": 1256.969971,
            "Low": 1215.780029,
            "Close": 1240.890015,
            "Adj Close": 1240.890015,
            "Volume": 55776932
          },
          {
            "Date": "2017-04-22",
            "Open": 1240.890015,
            "High": 1256.22998,
            "Low": 1223.060059,
            "Close": 1249.140015,
            "Adj Close": 1249.140015,
            "Volume": 54224355
          },
          {
            "Date": "2017-04-23",
            "Open": 1249.140015,
            "High": 1256.359985,
            "Low": 1234.859985,
            "Close": 1248.180054,
            "Adj Close": 1248.180054,
            "Volume": 49281629
          },
          {
            "Date": "2017-04-24",
            "Open": 1248.180054,
            "High": 1272.619995,
            "Low": 1244.209961,
            "Close": 1264.310059,
            "Adj Close": 1264.310059,
            "Volume": 56659016
          },
          {
            "Date": "2017-04-25",
            "Open": 1264.310059,
            "High": 1309.199951,
            "Low": 1263,
            "Close": 1286.630005,
            "Adj Close": 1286.630005,
            "Volume": 77649710
          },
          {
            "Date": "2017-04-26",
            "Open": 1286.630005,
            "High": 1346.790039,
            "Low": 1285.300049,
            "Close": 1332.910034,
            "Adj Close": 1332.910034,
            "Volume": 83319636
          },
          {
            "Date": "2017-04-27",
            "Open": 1332.910034,
            "High": 1356.150024,
            "Low": 1287.619995,
            "Close": 1329.619995,
            "Adj Close": 1329.619995,
            "Volume": 104536476
          },
          {
            "Date": "2017-04-28",
            "Open": 1329.619995,
            "High": 1343.689941,
            "Low": 1314.150024,
            "Close": 1336.280029,
            "Adj Close": 1336.280029,
            "Volume": 55982468
          },
          {
            "Date": "2017-04-29",
            "Open": 1336.280029,
            "High": 1358.939941,
            "Low": 1309.660034,
            "Close": 1351.910034,
            "Adj Close": 1351.910034,
            "Volume": 55470285
          },
          {
            "Date": "2017-04-30",
            "Open": 1351.910034,
            "High": 1448.680054,
            "Low": 1342.780029,
            "Close": 1415.810059,
            "Adj Close": 1415.810059,
            "Volume": 144414038
          },
          {
            "Date": "2017-05-01",
            "Open": 1415.810059,
            "High": 1471.140015,
            "Low": 1394.829956,
            "Close": 1445.930054,
            "Adj Close": 1445.930054,
            "Volume": 103342244
          },
          {
            "Date": "2017-05-02",
            "Open": 1445.930054,
            "High": 1496.390015,
            "Low": 1424.050049,
            "Close": 1485.550049,
            "Adj Close": 1485.550049,
            "Volume": 122551707
          },
          {
            "Date": "2017-05-03",
            "Open": 1485.550049,
            "High": 1609.839966,
            "Low": 1437.109985,
            "Close": 1516.76001,
            "Adj Close": 1516.76001,
            "Volume": 213084949
          },
          {
            "Date": "2017-05-04",
            "Open": 1516.76001,
            "High": 1588.109985,
            "Low": 1485.01001,
            "Close": 1507.77002,
            "Adj Close": 1507.77002,
            "Volume": 188015771
          },
          {
            "Date": "2017-05-05",
            "Open": 1507.77002,
            "High": 1560.420044,
            "Low": 1503.930054,
            "Close": 1545.290039,
            "Adj Close": 1545.290039,
            "Volume": 92747185
          },
          {
            "Date": "2017-05-06",
            "Open": 1545.290039,
            "High": 1572.890015,
            "Low": 1495.180054,
            "Close": 1554.449951,
            "Adj Close": 1554.449951,
            "Volume": 111708072
          },
          {
            "Date": "2017-05-07",
            "Open": 1554.449951,
            "High": 1667.670044,
            "Low": 1552.859985,
            "Close": 1664.469971,
            "Adj Close": 1664.469971,
            "Volume": 174687869
          },
          {
            "Date": "2017-05-08",
            "Open": 1664.469971,
            "High": 1757.390015,
            "Low": 1619.969971,
            "Close": 1697.5,
            "Adj Close": 1697.5,
            "Volume": 219169486
          },
          {
            "Date": "2017-05-09",
            "Open": 1697.5,
            "High": 1766.180054,
            "Low": 1664.98999,
            "Close": 1752.310059,
            "Adj Close": 1752.310059,
            "Volume": 156203600
          },
          {
            "Date": "2017-05-10",
            "Open": 1752.310059,
            "High": 1864.76001,
            "Low": 1741.540039,
            "Close": 1819.290039,
            "Adj Close": 1819.290039,
            "Volume": 198829123
          },
          {
            "Date": "2017-05-11",
            "Open": 1819.290039,
            "High": 1822.51001,
            "Low": 1641.180054,
            "Close": 1686.390015,
            "Adj Close": 1686.390015,
            "Volume": 192159873
          },
          {
            "Date": "2017-05-12",
            "Open": 1686.390015,
            "High": 1770.5,
            "Low": 1594.589966,
            "Close": 1763.73999,
            "Adj Close": 1763.73999,
            "Volume": 128390095
          },
          {
            "Date": "2017-05-13",
            "Open": 1763.73999,
            "High": 1802.75,
            "Low": 1736.130005,
            "Close": 1772.550049,
            "Adj Close": 1772.550049,
            "Volume": 72874378
          },
          {
            "Date": "2017-05-14",
            "Open": 1772.550049,
            "High": 1776.650024,
            "Low": 1656.810059,
            "Close": 1708.920044,
            "Adj Close": 1708.920044,
            "Volume": 138499150
          },
          {
            "Date": "2017-05-15",
            "Open": 1708.920044,
            "High": 1752.550049,
            "Low": 1653.719971,
            "Close": 1729.339966,
            "Adj Close": 1729.339966,
            "Volume": 130379207
          },
          {
            "Date": "2017-05-16",
            "Open": 1729.339966,
            "High": 1842.829956,
            "Low": 1703.969971,
            "Close": 1801.300049,
            "Adj Close": 1801.300049,
            "Volume": 170954154
          },
          {
            "Date": "2017-05-17",
            "Open": 1801.300049,
            "High": 1980.48999,
            "Low": 1791.119995,
            "Close": 1880.98999,
            "Adj Close": 1880.98999,
            "Volume": 135901905
          },
          {
            "Date": "2017-05-18",
            "Open": 1880.98999,
            "High": 1969.699951,
            "Low": 1875.280029,
            "Close": 1962,
            "Adj Close": 1962,
            "Volume": 191523926
          },
          {
            "Date": "2017-05-19",
            "Open": 1962,
            "High": 2048.449951,
            "Low": 1944.400024,
            "Close": 2040.180054,
            "Adj Close": 2040.180054,
            "Volume": 179346919
          },
          {
            "Date": "2017-05-20",
            "Open": 2040.180054,
            "High": 2094.939941,
            "Low": 1980.069946,
            "Close": 2044.189941,
            "Adj Close": 2044.189941,
            "Volume": 161036810
          },
          {
            "Date": "2017-05-21",
            "Open": 2044.189941,
            "High": 2264.76001,
            "Low": 1998.609985,
            "Close": 2124.409912,
            "Adj Close": 2124.409912,
            "Volume": 373482496
          },
          {
            "Date": "2017-05-22",
            "Open": 2124.409912,
            "High": 2286.300049,
            "Low": 2110.780029,
            "Close": 2272.580078,
            "Adj Close": 2272.580078,
            "Volume": 251969081
          },
          {
            "Date": "2017-05-23",
            "Open": 2272.580078,
            "High": 2496.97998,
            "Low": 2263.290039,
            "Close": 2445.280029,
            "Adj Close": 2445.280029,
            "Volume": 353734030
          },
          {
            "Date": "2017-05-24",
            "Open": 2445.280029,
            "High": 2781.76001,
            "Low": 2210.47998,
            "Close": 2307.219971,
            "Adj Close": 2307.219971,
            "Volume": 622139030
          },
          {
            "Date": "2017-05-25",
            "Open": 2306.959961,
            "High": 2616.52002,
            "Low": 2051.449951,
            "Close": 2244.889893,
            "Adj Close": 2244.889893,
            "Volume": 441342711
          },
          {
            "Date": "2017-05-26",
            "Open": 2244.889893,
            "High": 2322.370117,
            "Low": 1868.560059,
            "Close": 2052.429932,
            "Adj Close": 2052.429932,
            "Volume": 446034004
          },
          {
            "Date": "2017-05-27",
            "Open": 2052.429932,
            "High": 2300.52002,
            "Low": 2051.070068,
            "Close": 2189.02002,
            "Adj Close": 2189.02002,
            "Volume": 266766116
          },
          {
            "Date": "2017-05-28",
            "Open": 2189.02002,
            "High": 2337.350098,
            "Low": 2117.340088,
            "Close": 2278.209961,
            "Adj Close": 2278.209961,
            "Volume": 204101576
          },
          {
            "Date": "2017-05-29",
            "Open": 2278.209961,
            "High": 2329.26001,
            "Low": 2147.100098,
            "Close": 2192.550049,
            "Adj Close": 2192.550049,
            "Volume": 270069146
          },
          {
            "Date": "2017-05-30",
            "Open": 2192.550049,
            "High": 2330.620117,
            "Low": 2168.370117,
            "Close": 2303.340088,
            "Adj Close": 2303.340088,
            "Volume": 261223035
          },
          {
            "Date": "2017-05-31",
            "Open": 2303.340088,
            "High": 2460.840088,
            "Low": 2303.340088,
            "Close": 2412.649902,
            "Adj Close": 2412.649902,
            "Volume": 290070431
          },
          {
            "Date": "2017-06-01",
            "Open": 2412.649902,
            "High": 2493.969971,
            "Low": 2385.590088,
            "Close": 2492.600098,
            "Adj Close": 2492.600098,
            "Volume": 199765372
          },
          {
            "Date": "2017-06-02",
            "Open": 2492.600098,
            "High": 2582.77002,
            "Low": 2449.949951,
            "Close": 2545.429932,
            "Adj Close": 2545.429932,
            "Volume": 177168595
          },
          {
            "Date": "2017-06-03",
            "Open": 2545.429932,
            "High": 2559.790039,
            "Low": 2478.179932,
            "Close": 2524.060059,
            "Adj Close": 2524.060059,
            "Volume": 149060810
          },
          {
            "Date": "2017-06-04",
            "Open": 2524.060059,
            "High": 2705.379883,
            "Low": 2523.919922,
            "Close": 2704.959961,
            "Adj Close": 2704.959961,
            "Volume": 225611887
          },
          {
            "Date": "2017-06-05",
            "Open": 2704.959961,
            "High": 2931.23999,
            "Low": 2699.679932,
            "Close": 2870.5,
            "Adj Close": 2870.5,
            "Volume": 538772473
          },
          {
            "Date": "2017-06-06",
            "Open": 2870.5,
            "High": 2880.949951,
            "Low": 2626.560059,
            "Close": 2691.51001,
            "Adj Close": 2691.51001,
            "Volume": 340329903
          },
          {
            "Date": "2017-06-07",
            "Open": 2691.51001,
            "High": 2808.409912,
            "Low": 2623.610107,
            "Close": 2798.780029,
            "Adj Close": 2798.780029,
            "Volume": 260898606
          },
          {
            "Date": "2017-06-08",
            "Open": 2798.780029,
            "High": 2852.070068,
            "Low": 2786.070068,
            "Close": 2811.429932,
            "Adj Close": 2811.429932,
            "Volume": 189237110
          },
          {
            "Date": "2017-06-09",
            "Open": 2811.429932,
            "High": 2914.189941,
            "Low": 2807.360107,
            "Close": 2900.25,
            "Adj Close": 2900.25,
            "Volume": 246869682
          },
          {
            "Date": "2017-06-10",
            "Open": 2900.25,
            "High": 2977.860107,
            "Low": 2867.25,
            "Close": 2973.449951,
            "Adj Close": 2973.449951,
            "Volume": 241516660
          },
          {
            "Date": "2017-06-11",
            "Open": 2973.449951,
            "High": 2985.060059,
            "Low": 2483.629883,
            "Close": 2656.77002,
            "Adj Close": 2656.77002,
            "Volume": 585158909
          },
          {
            "Date": "2017-06-12",
            "Open": 2656.77002,
            "High": 2784.77002,
            "Low": 2647.439941,
            "Close": 2712.98999,
            "Adj Close": 2712.98999,
            "Volume": 314476276
          },
          {
            "Date": "2017-06-13",
            "Open": 2712.98999,
            "High": 2803.719971,
            "Low": 2348.98999,
            "Close": 2467.27002,
            "Adj Close": 2467.27002,
            "Volume": 448294279
          },
          {
            "Date": "2017-06-14",
            "Open": 2467.27002,
            "High": 2521.600098,
            "Low": 2125.560059,
            "Close": 2442.459961,
            "Adj Close": 2442.459961,
            "Volume": 606264366
          },
          {
            "Date": "2017-06-15",
            "Open": 2442.459961,
            "High": 2536.419922,
            "Low": 2335.280029,
            "Close": 2508.580078,
            "Adj Close": 2508.580078,
            "Volume": 286630757
          },
          {
            "Date": "2017-06-16",
            "Open": 2508.580078,
            "High": 2690.709961,
            "Low": 2454.810059,
            "Close": 2655.100098,
            "Adj Close": 2655.100098,
            "Volume": 246698591
          },
          {
            "Date": "2017-06-17",
            "Open": 2655.100098,
            "High": 2676.040039,
            "Low": 2488.590088,
            "Close": 2539.560059,
            "Adj Close": 2539.560059,
            "Volume": 235239296
          },
          {
            "Date": "2017-06-18",
            "Open": 2539.560059,
            "High": 2617.75,
            "Low": 2518.780029,
            "Close": 2616.820068,
            "Adj Close": 2616.820068,
            "Volume": 210372750
          },
          {
            "Date": "2017-06-19",
            "Open": 2616.820068,
            "High": 2800.47998,
            "Low": 2613.97998,
            "Close": 2754.379883,
            "Adj Close": 2754.379883,
            "Volume": 300034010
          },
          {
            "Date": "2017-06-20",
            "Open": 2754.379883,
            "High": 2804.409912,
            "Low": 2624.350098,
            "Close": 2677.620117,
            "Adj Close": 2677.620117,
            "Volume": 313234721
          },
          {
            "Date": "2017-06-21",
            "Open": 2677.620117,
            "High": 2757.320068,
            "Low": 2623.169922,
            "Close": 2722.840088,
            "Adj Close": 2722.840088,
            "Volume": 210318780
          },
          {
            "Date": "2017-06-22",
            "Open": 2722.840088,
            "High": 2759.659912,
            "Low": 2699.47998,
            "Close": 2710.370117,
            "Adj Close": 2710.370117,
            "Volume": 155303414
          },
          {
            "Date": "2017-06-23",
            "Open": 2710.370117,
            "High": 2741.560059,
            "Low": 2540.350098,
            "Close": 2590.050049,
            "Adj Close": 2590.050049,
            "Volume": 228007287
          },
          {
            "Date": "2017-06-24",
            "Open": 2590.050049,
            "High": 2660.659912,
            "Low": 2472.370117,
            "Close": 2541.620117,
            "Adj Close": 2541.620117,
            "Volume": 220679135
          },
          {
            "Date": "2017-06-25",
            "Open": 2541.620117,
            "High": 2584.75,
            "Low": 2327.26001,
            "Close": 2446.050049,
            "Adj Close": 2446.050049,
            "Volume": 401912134
          },
          {
            "Date": "2017-06-26",
            "Open": 2446.050049,
            "High": 2585.060059,
            "Low": 2309.629883,
            "Close": 2583.75,
            "Adj Close": 2583.75,
            "Volume": 381517099
          },
          {
            "Date": "2017-06-27",
            "Open": 2583.75,
            "High": 2616.949951,
            "Low": 2490.110107,
            "Close": 2577.73999,
            "Adj Close": 2577.73999,
            "Volume": 279792448
          },
          {
            "Date": "2017-06-28",
            "Open": 2577.73999,
            "High": 2605.860107,
            "Low": 2526.51001,
            "Close": 2558.370117,
            "Adj Close": 2558.370117,
            "Volume": 191733499
          },
          {
            "Date": "2017-06-29",
            "Open": 2558.370117,
            "High": 2576.280029,
            "Low": 2469.540039,
            "Close": 2480.610107,
            "Adj Close": 2480.610107,
            "Volume": 183878856
          },
          {
            "Date": "2017-06-30",
            "Open": 2480.610107,
            "High": 2529.620117,
            "Low": 2387.469971,
            "Close": 2424.610107,
            "Adj Close": 2424.610107,
            "Volume": 160661673
          },
          {
            "Date": "2017-07-01",
            "Open": 2424.610107,
            "High": 2555.340088,
            "Low": 2375.860107,
            "Close": 2536.459961,
            "Adj Close": 2536.459961,
            "Volume": 165839565
          },
          {
            "Date": "2017-07-02",
            "Open": 2536.459961,
            "High": 2617.47998,
            "Low": 2506.300049,
            "Close": 2572.469971,
            "Adj Close": 2572.469971,
            "Volume": 212244951
          },
          {
            "Date": "2017-07-03",
            "Open": 2572.469971,
            "High": 2658.72998,
            "Low": 2569.98999,
            "Close": 2617.320068,
            "Adj Close": 2617.320068,
            "Volume": 210433639
          },
          {
            "Date": "2017-07-04",
            "Open": 2617.320068,
            "High": 2642.73999,
            "Low": 2562.040039,
            "Close": 2627.860107,
            "Adj Close": 2627.860107,
            "Volume": 232257106
          },
          {
            "Date": "2017-07-05",
            "Open": 2627.860107,
            "High": 2634.840088,
            "Low": 2581.800049,
            "Close": 2614.23999,
            "Adj Close": 2614.23999,
            "Volume": 156558009
          },
          {
            "Date": "2017-07-06",
            "Open": 2614.23999,
            "High": 2617.47998,
            "Low": 2484.72998,
            "Close": 2513.879883,
            "Adj Close": 2513.879883,
            "Volume": 229168229
          },
          {
            "Date": "2017-07-07",
            "Open": 2513.879883,
            "High": 2568.72998,
            "Low": 2480.620117,
            "Close": 2564.860107,
            "Adj Close": 2564.860107,
            "Volume": 136973389
          },
          {
            "Date": "2017-07-08",
            "Open": 2564.860107,
            "High": 2576.72998,
            "Low": 2509.649902,
            "Close": 2511.429932,
            "Adj Close": 2511.429932,
            "Volume": 99506518
          },
          {
            "Date": "2017-07-09",
            "Open": 2511.429932,
            "High": 2530.340088,
            "Low": 2271.790039,
            "Close": 2344.02002,
            "Adj Close": 2344.02002,
            "Volume": 297270301
          },
          {
            "Date": "2017-07-10",
            "Open": 2344.02002,
            "High": 2412.75,
            "Low": 2265.47998,
            "Close": 2324.290039,
            "Adj Close": 2324.290039,
            "Volume": 341998621
          },
          {
            "Date": "2017-07-11",
            "Open": 2324.290039,
            "High": 2424.820068,
            "Low": 2262.080078,
            "Close": 2403.090088,
            "Adj Close": 2403.090088,
            "Volume": 257095280
          },
          {
            "Date": "2017-07-12",
            "Open": 2403.090088,
            "High": 2436.659912,
            "Low": 2334.959961,
            "Close": 2362.439941,
            "Adj Close": 2362.439941,
            "Volume": 208630220
          },
          {
            "Date": "2017-07-13",
            "Open": 2362.439941,
            "High": 2370.530029,
            "Low": 2165.360107,
            "Close": 2234.169922,
            "Adj Close": 2234.169922,
            "Volume": 257704533
          },
          {
            "Date": "2017-07-14",
            "Open": 2234.169922,
            "High": 2237.129883,
            "Low": 1974.030029,
            "Close": 1975.079956,
            "Adj Close": 1975.079956,
            "Volume": 320719096
          },
          {
            "Date": "2017-07-15",
            "Open": 1975.079956,
            "High": 2044.410034,
            "Low": 1808.98999,
            "Close": 1914.089966,
            "Adj Close": 1914.089966,
            "Volume": 364287861
          },
          {
            "Date": "2017-07-16",
            "Open": 1914.089966,
            "High": 2233.830078,
            "Low": 1913.790039,
            "Close": 2233.389893,
            "Adj Close": 2233.389893,
            "Volume": 368366495
          },
          {
            "Date": "2017-07-17",
            "Open": 2233.389893,
            "High": 2400.73999,
            "Low": 2164.590088,
            "Close": 2320.22998,
            "Adj Close": 2320.22998,
            "Volume": 465220151
          },
          {
            "Date": "2017-07-18",
            "Open": 2320.22998,
            "High": 2412.379883,
            "Low": 2243.129883,
            "Close": 2282.580078,
            "Adj Close": 2282.580078,
            "Volume": 357639189
          },
          {
            "Date": "2017-07-19",
            "Open": 2282.580078,
            "High": 2932.810059,
            "Low": 2282.110107,
            "Close": 2866.02002,
            "Adj Close": 2866.02002,
            "Volume": 807416890
          },
          {
            "Date": "2017-07-20",
            "Open": 2866.02002,
            "High": 2873.959961,
            "Low": 2622.540039,
            "Close": 2675.080078,
            "Adj Close": 2675.080078,
            "Volume": 529154789
          },
          {
            "Date": "2017-07-21",
            "Open": 2675.080078,
            "High": 2876.709961,
            "Low": 2658.590088,
            "Close": 2836.530029,
            "Adj Close": 2836.530029,
            "Volume": 341992860
          },
          {
            "Date": "2017-07-22",
            "Open": 2836.530029,
            "High": 2856.669922,
            "Low": 2675.649902,
            "Close": 2756.610107,
            "Adj Close": 2756.610107,
            "Volume": 299869260
          },
          {
            "Date": "2017-07-23",
            "Open": 2756.610107,
            "High": 2798.889893,
            "Low": 2715.689941,
            "Close": 2763.419922,
            "Adj Close": 2763.419922,
            "Volume": 229047365
          },
          {
            "Date": "2017-07-24",
            "Open": 2763.419922,
            "High": 2779.080078,
            "Low": 2472.620117,
            "Close": 2582.580078,
            "Adj Close": 2582.580078,
            "Volume": 534765380
          },
          {
            "Date": "2017-07-25",
            "Open": 2582.580078,
            "High": 2631.72998,
            "Low": 2441.540039,
            "Close": 2559.209961,
            "Adj Close": 2559.209961,
            "Volume": 340465234
          },
          {
            "Date": "2017-07-26",
            "Open": 2559.209961,
            "High": 2712.919922,
            "Low": 2547.73999,
            "Close": 2691.879883,
            "Adj Close": 2691.879883,
            "Volume": 269880857
          },
          {
            "Date": "2017-07-27",
            "Open": 2691.879883,
            "High": 2843.780029,
            "Low": 2683.590088,
            "Close": 2806.75,
            "Adj Close": 2806.75,
            "Volume": 383479795
          },
          {
            "Date": "2017-07-28",
            "Open": 2806.75,
            "High": 2812.129883,
            "Low": 2699.419922,
            "Close": 2733.5,
            "Adj Close": 2733.5,
            "Volume": 230818894
          },
          {
            "Date": "2017-07-29",
            "Open": 2733.5,
            "High": 2773.060059,
            "Low": 2621.679932,
            "Close": 2766.48999,
            "Adj Close": 2766.48999,
            "Volume": 222933516
          },
          {
            "Date": "2017-07-30",
            "Open": 2766.48999,
            "High": 2916.300049,
            "Low": 2723.050049,
            "Close": 2883.27002,
            "Adj Close": 2883.27002,
            "Volume": 254836601
          },
          {
            "Date": "2017-07-31",
            "Open": 2883.27002,
            "High": 2946.02002,
            "Low": 2659.620117,
            "Close": 2746.98999,
            "Adj Close": 2746.98999,
            "Volume": 341216428
          },
          {
            "Date": "2017-08-01",
            "Open": 2746.98999,
            "High": 2773.800049,
            "Low": 2668.870117,
            "Close": 2720.530029,
            "Adj Close": 2720.530029,
            "Volume": 222534344
          },
          {
            "Date": "2017-08-02",
            "Open": 2720.530029,
            "High": 2822.879883,
            "Low": 2717.620117,
            "Close": 2809.98999,
            "Adj Close": 2809.98999,
            "Volume": 188517085
          },
          {
            "Date": "2017-08-03",
            "Open": 2809.98999,
            "High": 2892.669922,
            "Low": 2779.51001,
            "Close": 2878.48999,
            "Adj Close": 2878.48999,
            "Volume": 195800289
          },
          {
            "Date": "2017-08-04",
            "Open": 2878.48999,
            "High": 3344.01001,
            "Low": 2875.909912,
            "Close": 3262.800049,
            "Adj Close": 3262.800049,
            "Volume": 503737620
          },
          {
            "Date": "2017-08-05",
            "Open": 3262.800049,
            "High": 3295.070068,
            "Low": 3166.52002,
            "Close": 3232.030029,
            "Adj Close": 3232.030029,
            "Volume": 196484496
          },
          {
            "Date": "2017-08-06",
            "Open": 3232.030029,
            "High": 3425.129883,
            "Low": 3198.51001,
            "Close": 3401.909912,
            "Adj Close": 3401.909912,
            "Volume": 294021645
          },
          {
            "Date": "2017-08-07",
            "Open": 3401.909912,
            "High": 3494.870117,
            "Low": 3357.149902,
            "Close": 3429.379883,
            "Adj Close": 3429.379883,
            "Volume": 366169429
          },
          {
            "Date": "2017-08-08",
            "Open": 3429.379883,
            "High": 3437.149902,
            "Low": 3251.030029,
            "Close": 3348.790039,
            "Adj Close": 3348.790039,
            "Volume": 324058681
          },
          {
            "Date": "2017-08-09",
            "Open": 3348.790039,
            "High": 3453.840088,
            "Low": 3322.919922,
            "Close": 3425.669922,
            "Adj Close": 3425.669922,
            "Volume": 242024460
          },
          {
            "Date": "2017-08-10",
            "Open": 3425.669922,
            "High": 3706.47998,
            "Low": 3409.790039,
            "Close": 3654.370117,
            "Adj Close": 3654.370117,
            "Volume": 345135492
          },
          {
            "Date": "2017-08-11",
            "Open": 3654.370117,
            "High": 3967.26001,
            "Low": 3611.360107,
            "Close": 3871.620117,
            "Adj Close": 3871.620117,
            "Volume": 469532325
          },
          {
            "Date": "2017-08-12",
            "Open": 3871.620117,
            "High": 4189.419922,
            "Low": 3847.310059,
            "Close": 4062.600098,
            "Adj Close": 4062.600098,
            "Volume": 638917500
          },
          {
            "Date": "2017-08-13",
            "Open": 4062.600098,
            "High": 4336.709961,
            "Low": 3978.949951,
            "Close": 4327.939941,
            "Adj Close": 4327.939941,
            "Volume": 540927757
          },
          {
            "Date": "2017-08-14",
            "Open": 4327.939941,
            "High": 4436.47998,
            "Low": 3837.129883,
            "Close": 4161.660156,
            "Adj Close": 4161.660156,
            "Volume": 872840682
          },
          {
            "Date": "2017-08-15",
            "Open": 4161.660156,
            "High": 4398.060059,
            "Low": 3938.620117,
            "Close": 4387.399902,
            "Adj Close": 4387.399902,
            "Volume": 472960334
          },
          {
            "Date": "2017-08-16",
            "Open": 4387.399902,
            "High": 4487.5,
            "Low": 4194.100098,
            "Close": 4278.919922,
            "Adj Close": 4278.919922,
            "Volume": 554232802
          },
          {
            "Date": "2017-08-17",
            "Open": 4278.919922,
            "High": 4362.72998,
            "Low": 3978.280029,
            "Close": 4105.370117,
            "Adj Close": 4105.370117,
            "Volume": 603898315
          },
          {
            "Date": "2017-08-18",
            "Open": 4105.370117,
            "High": 4189.680176,
            "Low": 3957.459961,
            "Close": 4150.450195,
            "Adj Close": 4150.450195,
            "Volume": 462723151
          },
          {
            "Date": "2017-08-19",
            "Open": 4150.450195,
            "High": 4182.290039,
            "Low": 4034.399902,
            "Close": 4066.600098,
            "Adj Close": 4066.600098,
            "Volume": 288193446
          },
          {
            "Date": "2017-08-20",
            "Open": 4066.600098,
            "High": 4097.25,
            "Low": 3966.929932,
            "Close": 4005.100098,
            "Adj Close": 4005.100098,
            "Volume": 365174045
          },
          {
            "Date": "2017-08-21",
            "Open": 4005.100098,
            "High": 4142.680176,
            "Low": 3612.209961,
            "Close": 4089.699951,
            "Adj Close": 4089.699951,
            "Volume": 659657838
          },
          {
            "Date": "2017-08-22",
            "Open": 4089.699951,
            "High": 4255.620117,
            "Low": 4070.48999,
            "Close": 4141.089844,
            "Adj Close": 4141.089844,
            "Volume": 402340258
          },
          {
            "Date": "2017-08-23",
            "Open": 4141.089844,
            "High": 4364.109863,
            "Low": 4111.709961,
            "Close": 4318.350098,
            "Adj Close": 4318.350098,
            "Volume": 305373477
          },
          {
            "Date": "2017-08-24",
            "Open": 4318.350098,
            "High": 4461.709961,
            "Low": 4292.629883,
            "Close": 4364.410156,
            "Adj Close": 4364.410156,
            "Volume": 362283252
          },
          {
            "Date": "2017-08-25",
            "Open": 4364.410156,
            "High": 4379.279785,
            "Low": 4263.279785,
            "Close": 4352.299805,
            "Adj Close": 4352.299805,
            "Volume": 199403922
          },
          {
            "Date": "2017-08-26",
            "Open": 4352.299805,
            "High": 4408.180176,
            "Low": 4321.120117,
            "Close": 4345.75,
            "Adj Close": 4345.75,
            "Volume": 185180843
          },
          {
            "Date": "2017-08-27",
            "Open": 4345.75,
            "High": 4403.129883,
            "Low": 4195.22998,
            "Close": 4390.310059,
            "Adj Close": 4390.310059,
            "Volume": 325285703
          },
          {
            "Date": "2017-08-28",
            "Open": 4390.310059,
            "High": 4647.830078,
            "Low": 4350.220215,
            "Close": 4597.310059,
            "Adj Close": 4597.310059,
            "Volume": 455467850
          },
          {
            "Date": "2017-08-29",
            "Open": 4597.310059,
            "High": 4644.060059,
            "Low": 4491.790039,
            "Close": 4583.02002,
            "Adj Close": 4583.02002,
            "Volume": 313466398
          },
          {
            "Date": "2017-08-30",
            "Open": 4583.02002,
            "High": 4765.069824,
            "Low": 4580.129883,
            "Close": 4735.109863,
            "Adj Close": 4735.109863,
            "Volume": 338981145
          },
          {
            "Date": "2017-08-31",
            "Open": 4735.109863,
            "High": 4925.22998,
            "Low": 4690.169922,
            "Close": 4921.850098,
            "Adj Close": 4921.850098,
            "Volume": 491140364
          },
          {
            "Date": "2017-09-01",
            "Open": 4921.850098,
            "High": 4976.52002,
            "Low": 4448.640137,
            "Close": 4573.799805,
            "Adj Close": 4573.799805,
            "Volume": 747713818
          },
          {
            "Date": "2017-09-02",
            "Open": 4573.799805,
            "High": 4719.779785,
            "Low": 4397.740234,
            "Close": 4612.919922,
            "Adj Close": 4612.919922,
            "Volume": 470135795
          },
          {
            "Date": "2017-09-03",
            "Open": 4612.919922,
            "High": 4621.009766,
            "Low": 4098.580078,
            "Close": 4267.450195,
            "Adj Close": 4267.450195,
            "Volume": 737216060
          },
          {
            "Date": "2017-09-04",
            "Open": 4267.450195,
            "High": 4496.669922,
            "Low": 4004.620117,
            "Close": 4409.080078,
            "Adj Close": 4409.080078,
            "Volume": 673846827
          },
          {
            "Date": "2017-09-05",
            "Open": 4409.080078,
            "High": 4660.040039,
            "Low": 4401.529785,
            "Close": 4618.709961,
            "Adj Close": 4618.709961,
            "Volume": 504717245
          },
          {
            "Date": "2017-09-06",
            "Open": 4618.709961,
            "High": 4690.549805,
            "Low": 4493.200195,
            "Close": 4635.600098,
            "Adj Close": 4635.600098,
            "Volume": 324939872
          },
          {
            "Date": "2017-09-07",
            "Open": 4635.600098,
            "High": 4699.589844,
            "Low": 4130.879883,
            "Close": 4326.450195,
            "Adj Close": 4326.450195,
            "Volume": 786819863
          },
          {
            "Date": "2017-09-08",
            "Open": 4326.450195,
            "High": 4402.149902,
            "Low": 4185.330078,
            "Close": 4335.129883,
            "Adj Close": 4335.129883,
            "Volume": 332195251
          },
          {
            "Date": "2017-09-09",
            "Open": 4335.129883,
            "High": 4338.080078,
            "Low": 4032.149902,
            "Close": 4245.890137,
            "Adj Close": 4245.890137,
            "Volume": 451244396
          },
          {
            "Date": "2017-09-10",
            "Open": 4245.890137,
            "High": 4364.419922,
            "Low": 4134.620117,
            "Close": 4217.899902,
            "Adj Close": 4217.899902,
            "Volume": 375254125
          },
          {
            "Date": "2017-09-11",
            "Open": 4217.899902,
            "High": 4387.759766,
            "Low": 4074.969971,
            "Close": 4158.919922,
            "Adj Close": 4158.919922,
            "Volume": 453402207
          },
          {
            "Date": "2017-09-12",
            "Open": 4158.919922,
            "High": 4174.580078,
            "Low": 3752.01001,
            "Close": 3870.290039,
            "Adj Close": 3870.290039,
            "Volume": 728385231
          },
          {
            "Date": "2017-09-13",
            "Open": 3870.290039,
            "High": 3930.689941,
            "Low": 3218.97998,
            "Close": 3243.080078,
            "Adj Close": 3243.080078,
            "Volume": 1118258889
          },
          {
            "Date": "2017-09-14",
            "Open": 3243.080078,
            "High": 3824.429932,
            "Low": 2979.879883,
            "Close": 3713.76001,
            "Adj Close": 3713.76001,
            "Volume": 1519153953
          },
          {
            "Date": "2017-09-15",
            "Open": 3713.76001,
            "High": 3893.669922,
            "Low": 3551.830078,
            "Close": 3698.919922,
            "Adj Close": 3698.919922,
            "Volume": 627559216
          },
          {
            "Date": "2017-09-16",
            "Open": 3698.919922,
            "High": 3796.560059,
            "Low": 3485.830078,
            "Close": 3689.610107,
            "Adj Close": 3689.610107,
            "Volume": 351250484
          },
          {
            "Date": "2017-09-17",
            "Open": 3689.610107,
            "High": 4122.75,
            "Low": 3689,
            "Close": 4100.279785,
            "Adj Close": 4100.279785,
            "Volume": 586938661
          },
          {
            "Date": "2017-09-18",
            "Open": 4100.279785,
            "High": 4120.709961,
            "Low": 3852.219971,
            "Close": 3907.959961,
            "Adj Close": 3907.959961,
            "Volume": 488897829
          },
          {
            "Date": "2017-09-19",
            "Open": 3907.959961,
            "High": 4053.040039,
            "Low": 3846.76001,
            "Close": 3882.159912,
            "Adj Close": 3882.159912,
            "Volume": 342438072
          },
          {
            "Date": "2017-09-20",
            "Open": 3882.159912,
            "High": 3912.790039,
            "Low": 3576.540039,
            "Close": 3617.27002,
            "Adj Close": 3617.27002,
            "Volume": 543570164
          },
          {
            "Date": "2017-09-21",
            "Open": 3617.27002,
            "High": 3753.51001,
            "Low": 3505.810059,
            "Close": 3600.830078,
            "Adj Close": 3600.830078,
            "Volume": 414612501
          },
          {
            "Date": "2017-09-22",
            "Open": 3600.830078,
            "High": 3813.389893,
            "Low": 3563.179932,
            "Close": 3788.02002,
            "Adj Close": 3788.02002,
            "Volume": 253370774
          },
          {
            "Date": "2017-09-23",
            "Open": 3788.02002,
            "High": 3790.889893,
            "Low": 3633.879883,
            "Close": 3667.52002,
            "Adj Close": 3667.52002,
            "Volume": 183852135
          },
          {
            "Date": "2017-09-24",
            "Open": 3667.52002,
            "High": 3971.5,
            "Low": 3665.669922,
            "Close": 3932.830078,
            "Adj Close": 3932.830078,
            "Volume": 386674961
          },
          {
            "Date": "2017-09-25",
            "Open": 3932.830078,
            "High": 3982.310059,
            "Low": 3858.75,
            "Close": 3892.699951,
            "Adj Close": 3892.699951,
            "Volume": 248481868
          },
          {
            "Date": "2017-09-26",
            "Open": 3892.699951,
            "High": 4232.350098,
            "Low": 3882.080078,
            "Close": 4212.200195,
            "Adj Close": 4212.200195,
            "Volume": 480358673
          },
          {
            "Date": "2017-09-27",
            "Open": 4212.200195,
            "High": 4274.640137,
            "Low": 4112.879883,
            "Close": 4195.649902,
            "Adj Close": 4195.649902,
            "Volume": 386909537
          },
          {
            "Date": "2017-09-28",
            "Open": 4195.649902,
            "High": 4237.509766,
            "Low": 4030.370117,
            "Close": 4172.790039,
            "Adj Close": 4172.790039,
            "Volume": 404599756
          },
          {
            "Date": "2017-09-29",
            "Open": 4172.790039,
            "High": 4383.27002,
            "Low": 4164.25,
            "Close": 4360.620117,
            "Adj Close": 4360.620117,
            "Volume": 290796939
          },
          {
            "Date": "2017-09-30",
            "Open": 4360.620117,
            "High": 4412.620117,
            "Low": 4258.319824,
            "Close": 4403.089844,
            "Adj Close": 4403.089844,
            "Volume": 262485153
          },
          {
            "Date": "2017-10-01",
            "Open": 4403.089844,
            "High": 4477.379883,
            "Low": 4364.669922,
            "Close": 4401.319824,
            "Adj Close": 4401.319824,
            "Volume": 314621927
          },
          {
            "Date": "2017-10-02",
            "Open": 4401.319824,
            "High": 4435.990234,
            "Low": 4230.72998,
            "Close": 4314.180176,
            "Adj Close": 4314.180176,
            "Volume": 353046057
          },
          {
            "Date": "2017-10-03",
            "Open": 4314.180176,
            "High": 4355.290039,
            "Low": 4183.569824,
            "Close": 4218.660156,
            "Adj Close": 4218.660156,
            "Volume": 272424730
          },
          {
            "Date": "2017-10-04",
            "Open": 4218.660156,
            "High": 4365.759766,
            "Low": 4143.350098,
            "Close": 4321.439941,
            "Adj Close": 4321.439941,
            "Volume": 271914958
          },
          {
            "Date": "2017-10-05",
            "Open": 4321.439941,
            "High": 4422.149902,
            "Low": 4296.930176,
            "Close": 4371.939941,
            "Adj Close": 4371.939941,
            "Volume": 269878225
          },
          {
            "Date": "2017-10-06",
            "Open": 4371.939941,
            "High": 4472.919922,
            "Low": 4319.47998,
            "Close": 4435.810059,
            "Adj Close": 4435.810059,
            "Volume": 176332039
          },
          {
            "Date": "2017-10-07",
            "Open": 4435.810059,
            "High": 4622.870117,
            "Low": 4419.359863,
            "Close": 4611.700195,
            "Adj Close": 4611.700195,
            "Volume": 323063950
          },
          {
            "Date": "2017-10-08",
            "Open": 4611.700195,
            "High": 4875.379883,
            "Low": 4556.149902,
            "Close": 4777.490234,
            "Adj Close": 4777.490234,
            "Volume": 518586828
          },
          {
            "Date": "2017-10-09",
            "Open": 4777.490234,
            "High": 4930,
            "Low": 4722.810059,
            "Close": 4763.359863,
            "Adj Close": 4763.359863,
            "Volume": 475717720
          },
          {
            "Date": "2017-10-10",
            "Open": 4763.359863,
            "High": 4874.890137,
            "Low": 4718.600098,
            "Close": 4824.200195,
            "Adj Close": 4824.200195,
            "Volume": 338533507
          },
          {
            "Date": "2017-10-11",
            "Open": 4824.200195,
            "High": 5432.629883,
            "Low": 4814.97998,
            "Close": 5432.620117,
            "Adj Close": 5432.620117,
            "Volume": 848641969
          },
          {
            "Date": "2017-10-12",
            "Open": 5432.620117,
            "High": 5852.779785,
            "Low": 5391.970215,
            "Close": 5637.259766,
            "Adj Close": 5637.259766,
            "Volume": 1211469140
          },
          {
            "Date": "2017-10-13",
            "Open": 5637.259766,
            "High": 5839.620117,
            "Low": 5568.859863,
            "Close": 5824.709961,
            "Adj Close": 5824.709961,
            "Volume": 434406119
          },
          {
            "Date": "2017-10-14",
            "Open": 5824.709961,
            "High": 5862.689941,
            "Low": 5448.220215,
            "Close": 5688.140137,
            "Adj Close": 5688.140137,
            "Volume": 571166215
          },
          {
            "Date": "2017-10-15",
            "Open": 5677.350098,
            "High": 5795.330078,
            "Low": 5576.100098,
            "Close": 5759.330078,
            "Adj Close": 5759.330078,
            "Volume": 349154669
          },
          {
            "Date": "2017-10-16",
            "Open": 5759.25,
            "High": 5773.319824,
            "Low": 5521.089844,
            "Close": 5598.580078,
            "Adj Close": 5598.580078,
            "Volume": 368658284
          },
          {
            "Date": "2017-10-17",
            "Open": 5598.580078,
            "High": 5601.299805,
            "Low": 5114.870117,
            "Close": 5575.830078,
            "Adj Close": 5575.830078,
            "Volume": 654722509
          },
          {
            "Date": "2017-10-18",
            "Open": 5576.709961,
            "High": 5737.410156,
            "Low": 5517.620117,
            "Close": 5698.649902,
            "Adj Close": 5698.649902,
            "Volume": 469774559
          },
          {
            "Date": "2017-10-19",
            "Open": 5698.620117,
            "High": 6075.319824,
            "Low": 5611.390137,
            "Close": 5993.109863,
            "Adj Close": 5993.109863,
            "Volume": 729487923
          },
          {
            "Date": "2017-10-20",
            "Open": 5993.109863,
            "High": 6187.200195,
            "Low": 5874.540039,
            "Close": 6006.649902,
            "Adj Close": 6006.649902,
            "Volume": 684989667
          },
          {
            "Date": "2017-10-21",
            "Open": 6006.649902,
            "High": 6070.560059,
            "Low": 5722.97998,
            "Close": 5982.859863,
            "Adj Close": 5982.859863,
            "Volume": 618893096
          },
          {
            "Date": "2017-10-22",
            "Open": 5982.859863,
            "High": 6048.97998,
            "Low": 5644.220215,
            "Close": 5903.609863,
            "Adj Close": 5903.609863,
            "Volume": 801148315
          },
          {
            "Date": "2017-10-23",
            "Open": 5903.609863,
            "High": 5904.629883,
            "Low": 5463.410156,
            "Close": 5513.080078,
            "Adj Close": 5513.080078,
            "Volume": 811951129
          },
          {
            "Date": "2017-10-24",
            "Open": 5513.080078,
            "High": 5747.959961,
            "Low": 5375.640137,
            "Close": 5734,
            "Adj Close": 5734,
            "Volume": 585738379
          },
          {
            "Date": "2017-10-25",
            "Open": 5734,
            "High": 5970.399902,
            "Low": 5689.919922,
            "Close": 5887.609863,
            "Adj Close": 5887.609863,
            "Volume": 547664553
          },
          {
            "Date": "2017-10-26",
            "Open": 5887.620117,
            "High": 5997.830078,
            "Low": 5692.319824,
            "Close": 5764.560059,
            "Adj Close": 5764.560059,
            "Volume": 488283724
          },
          {
            "Date": "2017-10-27",
            "Open": 5764.560059,
            "High": 5871.040039,
            "Low": 5654.799805,
            "Close": 5726.609863,
            "Adj Close": 5726.609863,
            "Volume": 305611140
          },
          {
            "Date": "2017-10-28",
            "Open": 5726.609863,
            "High": 6295.430176,
            "Low": 5679.370117,
            "Close": 6147.52002,
            "Adj Close": 6147.52002,
            "Volume": 966990808
          },
          {
            "Date": "2017-10-30",
            "Open": 6147.700195,
            "High": 6226.180176,
            "Low": 6018.970215,
            "Close": 6124.279785,
            "Adj Close": 6124.279785,
            "Volume": 481600502
          },
          {
            "Date": "2017-10-31",
            "Open": 6124.279785,
            "High": 6467.200195,
            "Low": 6090.830078,
            "Close": 6451.240234,
            "Adj Close": 6451.240234,
            "Volume": 637838767
          },
          {
            "Date": "2017-11-01",
            "Open": 6449.100098,
            "High": 6738.740234,
            "Low": 6355,
            "Close": 6737.779785,
            "Adj Close": 6737.779785,
            "Volume": 869798619
          },
          {
            "Date": "2017-11-02",
            "Open": 6737.779785,
            "High": 7339.910156,
            "Low": 6737.77002,
            "Close": 7024.810059,
            "Adj Close": 7024.810059,
            "Volume": 1663170039
          },
          {
            "Date": "2017-11-03",
            "Open": 7024.810059,
            "High": 7445.620117,
            "Low": 6938.930176,
            "Close": 7152.120117,
            "Adj Close": 7152.120117,
            "Volume": 1120978013
          },
          {
            "Date": "2017-11-04",
            "Open": 7146.97998,
            "High": 7492.240234,
            "Low": 6957.839844,
            "Close": 7363.799805,
            "Adj Close": 7363.799805,
            "Volume": 773371754
          },
          {
            "Date": "2017-11-05",
            "Open": 7363.799805,
            "High": 7599.439941,
            "Low": 7284.330078,
            "Close": 7389.549805,
            "Adj Close": 7389.549805,
            "Volume": 789287755
          },
          {
            "Date": "2017-11-06",
            "Open": 7389.549805,
            "High": 7429.700195,
            "Low": 6934.72998,
            "Close": 6959.22998,
            "Adj Close": 6959.22998,
            "Volume": 1148125488
          },
          {
            "Date": "2017-11-07",
            "Open": 6959.27002,
            "High": 7222.370117,
            "Low": 6957.799805,
            "Close": 7102.75,
            "Adj Close": 7102.75,
            "Volume": 716798409
          },
          {
            "Date": "2017-11-08",
            "Open": 7102.22998,
            "High": 7869.100098,
            "Low": 7026.970215,
            "Close": 7444.359863,
            "Adj Close": 7444.359863,
            "Volume": 1632547465
          },
          {
            "Date": "2017-11-09",
            "Open": 7444.359863,
            "High": 7457.120117,
            "Low": 7040.830078,
            "Close": 7129.589844,
            "Adj Close": 7129.589844,
            "Volume": 915963933
          },
          {
            "Date": "2017-11-10",
            "Open": 7129.589844,
            "High": 7318.970215,
            "Low": 6406.049805,
            "Close": 6565.799805,
            "Adj Close": 6565.799805,
            "Volume": 1513421266
          },
          {
            "Date": "2017-11-11",
            "Open": 6565.799805,
            "High": 6821.5,
            "Low": 6197.870117,
            "Close": 6339.859863,
            "Adj Close": 6339.859863,
            "Volume": 878096915
          },
          {
            "Date": "2017-11-12",
            "Open": 6339.870117,
            "High": 6490.529785,
            "Low": 5493.640137,
            "Close": 5878.129883,
            "Adj Close": 5878.129883,
            "Volume": 1629165385
          },
          {
            "Date": "2017-11-13",
            "Open": 5878.089844,
            "High": 6760.149902,
            "Low": 5828.339844,
            "Close": 6522.450195,
            "Adj Close": 6522.450195,
            "Volume": 1135256036
          },
          {
            "Date": "2017-11-14",
            "Open": 6522.450195,
            "High": 6728.589844,
            "Low": 6419.180176,
            "Close": 6597.060059,
            "Adj Close": 6597.060059,
            "Volume": 634604991
          },
          {
            "Date": "2017-11-15",
            "Open": 6597.060059,
            "High": 7330.060059,
            "Low": 6596.939941,
            "Close": 7283.220215,
            "Adj Close": 7283.220215,
            "Volume": 922959468
          },
          {
            "Date": "2017-11-16",
            "Open": 7283.02002,
            "High": 7964.640137,
            "Low": 7119.169922,
            "Close": 7853.680176,
            "Adj Close": 7853.680176,
            "Volume": 1010130763
          },
          {
            "Date": "2017-11-17",
            "Open": 7853.680176,
            "High": 8000.189941,
            "Low": 7534.700195,
            "Close": 7699.950195,
            "Adj Close": 7699.950195,
            "Volume": 917599923
          },
          {
            "Date": "2017-11-18",
            "Open": 7699.950195,
            "High": 7857.52002,
            "Low": 7458.899902,
            "Close": 7780.910156,
            "Adj Close": 7780.910156,
            "Volume": 571121111
          },
          {
            "Date": "2017-11-19",
            "Open": 7781.02002,
            "High": 8100.870117,
            "Low": 7675.410156,
            "Close": 8042.640137,
            "Adj Close": 8042.640137,
            "Volume": 541391321
          },
          {
            "Date": "2017-11-20",
            "Open": 8042.640137,
            "High": 8294.120117,
            "Low": 7947.279785,
            "Close": 8244.69043,
            "Adj Close": 8244.69043,
            "Volume": 617354329
          },
          {
            "Date": "2017-11-21",
            "Open": 8245.870117,
            "High": 8368.360352,
            "Low": 7819.060059,
            "Close": 8099.970215,
            "Adj Close": 8099.970215,
            "Volume": 938345413
          },
          {
            "Date": "2017-11-22",
            "Open": 8099.919922,
            "High": 8304.370117,
            "Low": 8091.629883,
            "Close": 8234.549805,
            "Adj Close": 8234.549805,
            "Volume": 539697375
          },
          {
            "Date": "2017-11-23",
            "Open": 8234.5,
            "High": 8266.549805,
            "Low": 8012.350098,
            "Close": 8013.410156,
            "Adj Close": 8013.410156,
            "Volume": 555465146
          },
          {
            "Date": "2017-11-24",
            "Open": 8013.379883,
            "High": 8332.94043,
            "Low": 7900.169922,
            "Close": 8200.799805,
            "Adj Close": 8200.799805,
            "Volume": 595710405
          },
          {
            "Date": "2017-11-25",
            "Open": 8203.450195,
            "High": 8761.980469,
            "Low": 8153.700195,
            "Close": 8754.69043,
            "Adj Close": 8754.69043,
            "Volume": 718483679
          },
          {
            "Date": "2017-11-26",
            "Open": 8754.620117,
            "High": 9474.620117,
            "Low": 8746.55957,
            "Close": 9318.419922,
            "Adj Close": 9318.419922,
            "Volume": 782499976
          },
          {
            "Date": "2017-11-27",
            "Open": 9318.419922,
            "High": 9733.610352,
            "Low": 9316.839844,
            "Close": 9733.200195,
            "Adj Close": 9733.200195,
            "Volume": 1025175619
          },
          {
            "Date": "2017-11-28",
            "Open": 9732.629883,
            "High": 9969.580078,
            "Low": 9638.200195,
            "Close": 9906.040039,
            "Adj Close": 9906.040039,
            "Volume": 865328615
          },
          {
            "Date": "2017-11-29",
            "Open": 9906.040039,
            "High": 11417.839844,
            "Low": 8938.700195,
            "Close": 9837.860352,
            "Adj Close": 9837.860352,
            "Volume": 2418792360
          },
          {
            "Date": "2017-11-30",
            "Open": 9848.049805,
            "High": 10689.05957,
            "Low": 9023.769531,
            "Close": 9946.759766,
            "Adj Close": 9946.759766,
            "Volume": 1836210107
          },
          {
            "Date": "2017-12-01",
            "Open": 9947.080078,
            "High": 10942.799805,
            "Low": 9420.929688,
            "Close": 10861.469727,
            "Adj Close": 10861.469727,
            "Volume": 1353669597
          },
          {
            "Date": "2017-12-02",
            "Open": 10861.469727,
            "High": 11175.230469,
            "Low": 10715.549805,
            "Close": 10912.730469,
            "Adj Close": 10912.730469,
            "Volume": 950474241
          },
          {
            "Date": "2017-12-03",
            "Open": 10912.719727,
            "High": 11851.089844,
            "Low": 10578.429688,
            "Close": 11246.209961,
            "Adj Close": 11246.209961,
            "Volume": 1380012064
          },
          {
            "Date": "2017-12-04",
            "Open": 11244.200195,
            "High": 11624.629883,
            "Low": 10917.80957,
            "Close": 11623.910156,
            "Adj Close": 11623.910156,
            "Volume": 1057859226
          },
          {
            "Date": "2017-12-05",
            "Open": 11624.370117,
            "High": 11901.870117,
            "Low": 11486.129883,
            "Close": 11667.129883,
            "Adj Close": 11667.129883,
            "Volume": 1048839303
          },
          {
            "Date": "2017-12-06",
            "Open": 11667.129883,
            "High": 13843.200195,
            "Low": 11661.759766,
            "Close": 13749.570313,
            "Adj Close": 13749.570313,
            "Volume": 2437037791
          },
          {
            "Date": "2017-12-07",
            "Open": 13750.089844,
            "High": 16879.259766,
            "Low": 13401.610352,
            "Close": 16850.310547,
            "Adj Close": 16850.310547,
            "Volume": 4510225316
          },
          {
            "Date": "2017-12-08",
            "Open": 16867.980469,
            "High": 17294.849609,
            "Low": 13906.099609,
            "Close": 16047.610352,
            "Adj Close": 16047.610352,
            "Volume": 4546014731
          },
          {
            "Date": "2017-12-09",
            "Open": 16048.179688,
            "High": 16313.179688,
            "Low": 13151.469727,
            "Close": 14843.419922,
            "Adj Close": 14843.419922,
            "Volume": 2699876215
          },
          {
            "Date": "2017-12-10",
            "Open": 14839.980469,
            "High": 15783.200195,
            "Low": 13031,
            "Close": 15059.599609,
            "Adj Close": 15059.599609,
            "Volume": 2904037859
          },
          {
            "Date": "2017-12-11",
            "Open": 15060.450195,
            "High": 17399.179688,
            "Low": 15024.55957,
            "Close": 16732.470703,
            "Adj Close": 16732.470703,
            "Volume": 2634267594
          },
          {
            "Date": "2017-12-12",
            "Open": 16733.289063,
            "High": 17560.650391,
            "Low": 16254.530273,
            "Close": 17083.900391,
            "Adj Close": 17083.900391,
            "Volume": 2246138895
          },
          {
            "Date": "2017-12-13",
            "Open": 17083.900391,
            "High": 17267.960938,
            "Low": 15669.860352,
            "Close": 16286.820313,
            "Adj Close": 16286.820313,
            "Volume": 2576055941
          },
          {
            "Date": "2017-12-14",
            "Open": 16286.820313,
            "High": 16941.080078,
            "Low": 16023.639648,
            "Close": 16467.910156,
            "Adj Close": 16467.910156,
            "Volume": 1773813863
          },
          {
            "Date": "2017-12-15",
            "Open": 16467.910156,
            "High": 17987.029297,
            "Low": 16442.199219,
            "Close": 17604.849609,
            "Adj Close": 17604.849609,
            "Volume": 2682351213
          },
          {
            "Date": "2017-12-16",
            "Open": 17594.080078,
            "High": 19587.699219,
            "Low": 17318.539063,
            "Close": 19345.490234,
            "Adj Close": 19345.490234,
            "Volume": 2078806368
          },
          {
            "Date": "2017-12-17",
            "Open": 19346.599609,
            "High": 19870.619141,
            "Low": 18750.910156,
            "Close": 19065.710938,
            "Adj Close": 19065.710938,
            "Volume": 2264650369
          },
          {
            "Date": "2017-12-18",
            "Open": 19065.710938,
            "High": 19221.099609,
            "Low": 18114.419922,
            "Close": 18972.320313,
            "Adj Close": 18972.320313,
            "Volume": 2597510049
          },
          {
            "Date": "2017-12-19",
            "Open": 18971.189453,
            "High": 19021.970703,
            "Low": 16812.800781,
            "Close": 17523.699219,
            "Adj Close": 17523.699219,
            "Volume": 3136709262
          },
          {
            "Date": "2017-12-20",
            "Open": 17521.730469,
            "High": 17813.599609,
            "Low": 15642.69043,
            "Close": 16461.970703,
            "Adj Close": 16461.970703,
            "Volume": 3791752510
          },
          {
            "Date": "2017-12-21",
            "Open": 16461.089844,
            "High": 17301.830078,
            "Low": 14952.980469,
            "Close": 15632.120117,
            "Adj Close": 15632.120117,
            "Volume": 2619295475
          },
          {
            "Date": "2017-12-22",
            "Open": 15632.120117,
            "High": 15823.719727,
            "Low": 10875.709961,
            "Close": 13664.969727,
            "Adj Close": 13664.969727,
            "Volume": 6245731508
          },
          {
            "Date": "2017-12-23",
            "Open": 13664.969727,
            "High": 15493.230469,
            "Low": 13356.070313,
            "Close": 14396.459961,
            "Adj Close": 14396.459961,
            "Volume": 2491903154
          },
          {
            "Date": "2017-12-24",
            "Open": 14396.629883,
            "High": 14413.719727,
            "Low": 12166.450195,
            "Close": 13789.950195,
            "Adj Close": 13789.950195,
            "Volume": 2428437693
          },
          {
            "Date": "2017-12-25",
            "Open": 13789.950195,
            "High": 14467.429688,
            "Low": 13010.709961,
            "Close": 13833.490234,
            "Adj Close": 13833.490234,
            "Volume": 1487888106
          },
          {
            "Date": "2017-12-26",
            "Open": 13830.19043,
            "High": 16094.669922,
            "Low": 13748.490234,
            "Close": 15756.55957,
            "Adj Close": 15756.55957,
            "Volume": 2198577125
          },
          {
            "Date": "2017-12-27",
            "Open": 15757.019531,
            "High": 16514.589844,
            "Low": 14534.660156,
            "Close": 15416.639648,
            "Adj Close": 15416.639648,
            "Volume": 2162831128
          },
          {
            "Date": "2017-12-28",
            "Open": 15416.339844,
            "High": 15505.509766,
            "Low": 13466.070313,
            "Close": 14398.700195,
            "Adj Close": 14398.700195,
            "Volume": 2425912717
          },
          {
            "Date": "2017-12-29",
            "Open": 14398.450195,
            "High": 15109.80957,
            "Low": 13951.080078,
            "Close": 14392.570313,
            "Adj Close": 14392.570313,
            "Volume": 1733583750
          },
          {
            "Date": "2017-12-30",
            "Open": 14392.139648,
            "High": 14461.459961,
            "Low": 11962.089844,
            "Close": 12531.519531,
            "Adj Close": 12531.519531,
            "Volume": 2387311023
          },
          {
            "Date": "2017-12-31",
            "Open": 12532.379883,
            "High": 14241.820313,
            "Low": 12359.429688,
            "Close": 13850.400391,
            "Adj Close": 13850.400391,
            "Volume": 1492142483
          },
          {
            "Date": "2018-01-01",
            "Open": 13850.490234,
            "High": 13921.530273,
            "Low": 12877.669922,
            "Close": 13444.879883,
            "Adj Close": 13444.879883,
            "Volume": 1057521524
          },
          {
            "Date": "2018-01-02",
            "Open": 13444.879883,
            "High": 15306.129883,
            "Low": 12934.160156,
            "Close": 14754.129883,
            "Adj Close": 14754.129883,
            "Volume": 1956783037
          },
          {
            "Date": "2018-01-03",
            "Open": 14754.089844,
            "High": 15435.009766,
            "Low": 14579.709961,
            "Close": 15156.620117,
            "Adj Close": 15156.620117,
            "Volume": 1604206990
          },
          {
            "Date": "2018-01-04",
            "Open": 15156.490234,
            "High": 15408.660156,
            "Low": 14244.669922,
            "Close": 15180.080078,
            "Adj Close": 15180.080078,
            "Volume": 1656714736
          },
          {
            "Date": "2018-01-05",
            "Open": 15180.080078,
            "High": 17126.949219,
            "Low": 14832.360352,
            "Close": 16954.779297,
            "Adj Close": 16954.779297,
            "Volume": 2283988962
          },
          {
            "Date": "2018-01-06",
            "Open": 16954.759766,
            "High": 17252.849609,
            "Low": 16286.570313,
            "Close": 17172.300781,
            "Adj Close": 17172.300781,
            "Volume": 1412703790
          },
          {
            "Date": "2018-01-07",
            "Open": 17174.5,
            "High": 17184.810547,
            "Low": 15791.129883,
            "Close": 16228.160156,
            "Adj Close": 16228.160156,
            "Volume": 1309532650
          },
          {
            "Date": "2018-01-08",
            "Open": 16228.259766,
            "High": 16302.919922,
            "Low": 13902.30957,
            "Close": 14976.169922,
            "Adj Close": 14976.169922,
            "Volume": 2166366561
          },
          {
            "Date": "2018-01-09",
            "Open": 14976.169922,
            "High": 15390.280273,
            "Low": 14221.549805,
            "Close": 14468.5,
            "Adj Close": 14468.5,
            "Volume": 1486802326
          },
          {
            "Date": "2018-01-10",
            "Open": 14468.089844,
            "High": 14919.490234,
            "Low": 13450.540039,
            "Close": 14919.490234,
            "Adj Close": 14919.490234,
            "Volume": 2025083791
          },
          {
            "Date": "2018-01-11",
            "Open": 14920.360352,
            "High": 14979.959961,
            "Low": 12825.950195,
            "Close": 13308.05957,
            "Adj Close": 13308.05957,
            "Volume": 2373494121
          },
          {
            "Date": "2018-01-12",
            "Open": 13308.05957,
            "High": 14129.080078,
            "Low": 12851.910156,
            "Close": 13841.19043,
            "Adj Close": 13841.19043,
            "Volume": 1402292716
          },
          {
            "Date": "2018-01-13",
            "Open": 13841.19043,
            "High": 14595.040039,
            "Low": 13830.280273,
            "Close": 14243.120117,
            "Adj Close": 14243.120117,
            "Volume": 1021352776
          },
          {
            "Date": "2018-01-14",
            "Open": 14244.120117,
            "High": 14415.669922,
            "Low": 13031.910156,
            "Close": 13638.629883,
            "Adj Close": 13638.629883,
            "Volume": 1112590573
          },
          {
            "Date": "2018-01-15",
            "Open": 13638.629883,
            "High": 14355.820313,
            "Low": 13416.709961,
            "Close": 13631.980469,
            "Adj Close": 13631.980469,
            "Volume": 1170462750
          },
          {
            "Date": "2018-01-16",
            "Open": 13634.599609,
            "High": 13648.839844,
            "Low": 10032.69043,
            "Close": 11282.490234,
            "Adj Close": 11282.490234,
            "Volume": 3842651741
          },
          {
            "Date": "2018-01-17",
            "Open": 11282.490234,
            "High": 11736.299805,
            "Low": 9205.379883,
            "Close": 11162.700195,
            "Adj Close": 11162.700195,
            "Volume": 3666978316
          },
          {
            "Date": "2018-01-18",
            "Open": 11162.700195,
            "High": 12018.429688,
            "Low": 10642.330078,
            "Close": 11175.519531,
            "Adj Close": 11175.519531,
            "Volume": 2357251805
          },
          {
            "Date": "2018-01-19",
            "Open": 11175.519531,
            "High": 11780.490234,
            "Low": 10867.179688,
            "Close": 11521.759766,
            "Adj Close": 11521.759766,
            "Volume": 1264875700
          },
          {
            "Date": "2018-01-20",
            "Open": 11521.820313,
            "High": 13031.040039,
            "Low": 11502.110352,
            "Close": 12783.94043,
            "Adj Close": 12783.94043,
            "Volume": 1492721765
          },
          {
            "Date": "2018-01-21",
            "Open": 12783.540039,
            "High": 12787.349609,
            "Low": 11101.730469,
            "Close": 11549.929688,
            "Adj Close": 11549.929688,
            "Volume": 1552755289
          },
          {
            "Date": "2018-01-22",
            "Open": 11549.980469,
            "High": 11913.740234,
            "Low": 10067.759766,
            "Close": 10814.519531,
            "Adj Close": 10814.519531,
            "Volume": 1811992345
          },
          {
            "Date": "2018-01-23",
            "Open": 10814.519531,
            "High": 11388.519531,
            "Low": 9980.5,
            "Close": 10858.230469,
            "Adj Close": 10858.230469,
            "Volume": 1710180828
          },
          {
            "Date": "2018-01-24",
            "Open": 10853.780273,
            "High": 11531.599609,
            "Low": 10506.549805,
            "Close": 11429.019531,
            "Adj Close": 11429.019531,
            "Volume": 1286435482
          },
          {
            "Date": "2018-01-25",
            "Open": 11428.110352,
            "High": 11741.919922,
            "Low": 10930.339844,
            "Close": 11175.870117,
            "Adj Close": 11175.870117,
            "Volume": 1061064251
          },
          {
            "Date": "2018-01-26",
            "Open": 11175.870117,
            "High": 11656.540039,
            "Low": 10346.860352,
            "Close": 11104.200195,
            "Adj Close": 11104.200195,
            "Volume": 1560135332
          },
          {
            "Date": "2018-01-27",
            "Open": 11104.339844,
            "High": 11638.69043,
            "Low": 10879.200195,
            "Close": 11459.709961,
            "Adj Close": 11459.709961,
            "Volume": 1031091633
          },
          {
            "Date": "2018-01-28",
            "Open": 11460.389648,
            "High": 12064.19043,
            "Low": 11407.94043,
            "Close": 11767.740234,
            "Adj Close": 11767.740234,
            "Volume": 1038153169
          },
          {
            "Date": "2018-01-29",
            "Open": 11767.740234,
            "High": 11860.290039,
            "Low": 11089.519531,
            "Close": 11233.950195,
            "Adj Close": 11233.950195,
            "Volume": 920836244
          },
          {
            "Date": "2018-01-30",
            "Open": 11234.320313,
            "High": 11263.700195,
            "Low": 9871.209961,
            "Close": 10107.259766,
            "Adj Close": 10107.259766,
            "Volume": 1720894077
          },
          {
            "Date": "2018-01-31",
            "Open": 10107.400391,
            "High": 10377.959961,
            "Low": 9698.129883,
            "Close": 10226.860352,
            "Adj Close": 10226.860352,
            "Volume": 1230902973
          },
          {
            "Date": "2018-02-01",
            "Open": 10226.860352,
            "High": 10280.839844,
            "Low": 8726.950195,
            "Close": 9114.719727,
            "Adj Close": 9114.719727,
            "Volume": 1964308989
          },
          {
            "Date": "2018-02-02",
            "Open": 9114.730469,
            "High": 9147.929688,
            "Low": 7786.200195,
            "Close": 8870.820313,
            "Adj Close": 8870.820313,
            "Volume": 2768759876
          },
          {
            "Date": "2018-02-03",
            "Open": 8872.870117,
            "High": 9504.370117,
            "Low": 8194.679688,
            "Close": 9251.269531,
            "Adj Close": 9251.269531,
            "Volume": 1253484523
          },
          {
            "Date": "2018-02-04",
            "Open": 9251.269531,
            "High": 9400.990234,
            "Low": 7889.830078,
            "Close": 8218.049805,
            "Adj Close": 8218.049805,
            "Volume": 1413207410
          },
          {
            "Date": "2018-02-05",
            "Open": 8218.049805,
            "High": 8391.290039,
            "Low": 6627.310059,
            "Close": 6937.080078,
            "Adj Close": 6937.080078,
            "Volume": 2534149181
          },
          {
            "Date": "2018-02-06",
            "Open": 6936.430176,
            "High": 7932.379883,
            "Low": 5968.359863,
            "Close": 7701.25,
            "Adj Close": 7701.25,
            "Volume": 3397596513
          },
          {
            "Date": "2018-02-07",
            "Open": 7701.25,
            "High": 8572.679688,
            "Low": 7208.859863,
            "Close": 7592.720215,
            "Adj Close": 7592.720215,
            "Volume": 2159765331
          },
          {
            "Date": "2018-02-08",
            "Open": 7593.779785,
            "High": 8643.94043,
            "Low": 7590.47998,
            "Close": 8260.69043,
            "Adj Close": 8260.69043,
            "Volume": 1594673973
          },
          {
            "Date": "2018-02-09",
            "Open": 8259.259766,
            "High": 8743.200195,
            "Low": 7775.359863,
            "Close": 8696.830078,
            "Adj Close": 8696.830078,
            "Volume": 1348072086
          },
          {
            "Date": "2018-02-10",
            "Open": 8696.830078,
            "High": 9081.490234,
            "Low": 8176.25,
            "Close": 8569.290039,
            "Adj Close": 8569.290039,
            "Volume": 1348923336
          },
          {
            "Date": "2018-02-11",
            "Open": 8569.320313,
            "High": 8573.349609,
            "Low": 7862.310059,
            "Close": 8084.609863,
            "Adj Close": 8084.609863,
            "Volume": 1013771945
          },
          {
            "Date": "2018-02-12",
            "Open": 8084.609863,
            "High": 8997.339844,
            "Low": 8084.410156,
            "Close": 8911.269531,
            "Adj Close": 8911.269531,
            "Volume": 1085921871
          },
          {
            "Date": "2018-02-13",
            "Open": 8911.169922,
            "High": 8955.150391,
            "Low": 8379.349609,
            "Close": 8544.69043,
            "Adj Close": 8544.69043,
            "Volume": 853320352
          },
          {
            "Date": "2018-02-14",
            "Open": 8544.69043,
            "High": 9508.219727,
            "Low": 8542.980469,
            "Close": 9485.639648,
            "Adj Close": 9485.639648,
            "Volume": 1220863360
          },
          {
            "Date": "2018-02-15",
            "Open": 9485.639648,
            "High": 10223.580078,
            "Low": 9363.379883,
            "Close": 10033.75,
            "Adj Close": 10033.75,
            "Volume": 1666668487
          },
          {
            "Date": "2018-02-16",
            "Open": 10033.75,
            "High": 10303.139648,
            "Low": 9720.379883,
            "Close": 10188.730469,
            "Adj Close": 10188.730469,
            "Volume": 1061827697
          },
          {
            "Date": "2018-02-17",
            "Open": 10188.730469,
            "High": 11119.450195,
            "Low": 10074.070313,
            "Close": 11097.209961,
            "Adj Close": 11097.209961,
            "Volume": 1327921168
          },
          {
            "Date": "2018-02-18",
            "Open": 11097.209961,
            "High": 11288.339844,
            "Low": 10161.009766,
            "Close": 10417.230469,
            "Adj Close": 10417.230469,
            "Volume": 1659704217
          },
          {
            "Date": "2018-02-19",
            "Open": 10418.120117,
            "High": 11265.959961,
            "Low": 10336.320313,
            "Close": 11182.280273,
            "Adj Close": 11182.280273,
            "Volume": 1186535653
          },
          {
            "Date": "2018-02-20",
            "Open": 11182.280273,
            "High": 11802.230469,
            "Low": 11130.950195,
            "Close": 11256.429688,
            "Adj Close": 11256.429688,
            "Volume": 1640343867
          },
          {
            "Date": "2018-02-21",
            "Open": 11256.780273,
            "High": 11295.580078,
            "Low": 10256.209961,
            "Close": 10481.660156,
            "Adj Close": 10481.660156,
            "Volume": 1982721124
          },
          {
            "Date": "2018-02-22",
            "Open": 10481.660156,
            "High": 10941.570313,
            "Low": 9757.19043,
            "Close": 9847.959961,
            "Adj Close": 9847.959961,
            "Volume": 1795951829
          },
          {
            "Date": "2018-02-23",
            "Open": 9847.959961,
            "High": 10420.669922,
            "Low": 9604,
            "Close": 10175.509766,
            "Adj Close": 10175.509766,
            "Volume": 1399448203
          },
          {
            "Date": "2018-02-24",
            "Open": 10175.509766,
            "High": 10528,
            "Low": 9396.540039,
            "Close": 9705.730469,
            "Adj Close": 9705.730469,
            "Volume": 1244484468
          },
          {
            "Date": "2018-02-25",
            "Open": 9705.730469,
            "High": 9873.790039,
            "Low": 9329.44043,
            "Close": 9610.110352,
            "Adj Close": 9610.110352,
            "Volume": 793093192
          },
          {
            "Date": "2018-02-26",
            "Open": 9610.110352,
            "High": 10457.509766,
            "Low": 9411.820313,
            "Close": 10326.5,
            "Adj Close": 10326.5,
            "Volume": 1181729273
          },
          {
            "Date": "2018-02-27",
            "Open": 10326.5,
            "High": 10879.379883,
            "Low": 10154.240234,
            "Close": 10594.759766,
            "Adj Close": 10594.759766,
            "Volume": 1060840699
          },
          {
            "Date": "2018-02-28",
            "Open": 10594.759766,
            "High": 11067.759766,
            "Low": 10303.139648,
            "Close": 10334.44043,
            "Adj Close": 10334.44043,
            "Volume": 1126074675
          },
          {
            "Date": "2018-03-01",
            "Open": 10334.44043,
            "High": 11090.299805,
            "Low": 10247.55957,
            "Close": 10929.370117,
            "Adj Close": 10929.370117,
            "Volume": 952472120
          },
          {
            "Date": "2018-03-02",
            "Open": 10929.370117,
            "High": 11191.94043,
            "Low": 10801.450195,
            "Close": 11043.120117,
            "Adj Close": 11043.120117,
            "Volume": 852908489
          },
          {
            "Date": "2018-03-03",
            "Open": 11043.120117,
            "High": 11530.660156,
            "Low": 11043.120117,
            "Close": 11465.360352,
            "Adj Close": 11465.360352,
            "Volume": 812200126
          },
          {
            "Date": "2018-03-04",
            "Open": 11465.360352,
            "High": 11539.790039,
            "Low": 11084.009766,
            "Close": 11504.419922,
            "Adj Close": 11504.419922,
            "Volume": 690727335
          },
          {
            "Date": "2018-03-05",
            "Open": 11503.94043,
            "High": 11694.150391,
            "Low": 11431.549805,
            "Close": 11440.730469,
            "Adj Close": 11440.730469,
            "Volume": 791471905
          },
          {
            "Date": "2018-03-06",
            "Open": 11440.330078,
            "High": 11441.650391,
            "Low": 10589.280273,
            "Close": 10735.450195,
            "Adj Close": 10735.450195,
            "Volume": 1210081181
          },
          {
            "Date": "2018-03-07",
            "Open": 10735.450195,
            "High": 10913.700195,
            "Low": 9470.730469,
            "Close": 9928.55957,
            "Adj Close": 9928.55957,
            "Volume": 1858869115
          },
          {
            "Date": "2018-03-08",
            "Open": 9928.55957,
            "High": 10119.209961,
            "Low": 9086.849609,
            "Close": 9316.719727,
            "Adj Close": 9316.719727,
            "Volume": 1492236089
          },
          {
            "Date": "2018-03-09",
            "Open": 9316.769531,
            "High": 9433.379883,
            "Low": 8393.450195,
            "Close": 9252.759766,
            "Adj Close": 9252.759766,
            "Volume": 2081621422
          },
          {
            "Date": "2018-03-10",
            "Open": 9252.759766,
            "High": 9518.620117,
            "Low": 8727.429688,
            "Close": 8797.269531,
            "Adj Close": 8797.269531,
            "Volume": 1084925795
          },
          {
            "Date": "2018-03-11",
            "Open": 8797.269531,
            "High": 9735.639648,
            "Low": 8484.320313,
            "Close": 9544.839844,
            "Adj Close": 9544.839844,
            "Volume": 1374814644
          },
          {
            "Date": "2018-03-12",
            "Open": 9543.980469,
            "High": 9907.410156,
            "Low": 8796.519531,
            "Close": 9142.150391,
            "Adj Close": 9142.150391,
            "Volume": 1435404200
          },
          {
            "Date": "2018-03-13",
            "Open": 9142.269531,
            "High": 9486.120117,
            "Low": 8856.650391,
            "Close": 9160.120117,
            "Adj Close": 9160.120117,
            "Volume": 1228556284
          },
          {
            "Date": "2018-03-14",
            "Open": 9160.120117,
            "High": 9360.660156,
            "Low": 7966.939941,
            "Close": 8217.700195,
            "Adj Close": 8217.700195,
            "Volume": 1385572511
          },
          {
            "Date": "2018-03-15",
            "Open": 8216.219727,
            "High": 8432.120117,
            "Low": 7698.470215,
            "Close": 8268.410156,
            "Adj Close": 8268.410156,
            "Volume": 1519850464
          },
          {
            "Date": "2018-03-16",
            "Open": 8267.950195,
            "High": 8616.629883,
            "Low": 7924.109863,
            "Close": 8283.230469,
            "Adj Close": 8283.230469,
            "Volume": 1082790136
          },
          {
            "Date": "2018-03-17",
            "Open": 8283.230469,
            "High": 8360.639648,
            "Low": 7765.410156,
            "Close": 7883.450195,
            "Adj Close": 7883.450195,
            "Volume": 901939422
          },
          {
            "Date": "2018-03-18",
            "Open": 7882.669922,
            "High": 8299.860352,
            "Low": 7318.459961,
            "Close": 8215.400391,
            "Adj Close": 8215.400391,
            "Volume": 1535519444
          },
          {
            "Date": "2018-03-19",
            "Open": 8215.5,
            "High": 8725.599609,
            "Low": 8129.660156,
            "Close": 8623.139648,
            "Adj Close": 8623.139648,
            "Volume": 1447812723
          },
          {
            "Date": "2018-03-20",
            "Open": 8623.139648,
            "High": 9056.230469,
            "Low": 8339.799805,
            "Close": 8920.709961,
            "Adj Close": 8920.709961,
            "Volume": 1150462439
          },
          {
            "Date": "2018-03-21",
            "Open": 8920.530273,
            "High": 9184.509766,
            "Low": 8778.69043,
            "Close": 8911.349609,
            "Adj Close": 8911.349609,
            "Volume": 991376396
          },
          {
            "Date": "2018-03-22",
            "Open": 8911.370117,
            "High": 9107,
            "Low": 8500.879883,
            "Close": 8724.980469,
            "Adj Close": 8724.980469,
            "Volume": 1023286566
          },
          {
            "Date": "2018-03-23",
            "Open": 8724.980469,
            "High": 8935.879883,
            "Low": 8307.580078,
            "Close": 8934.799805,
            "Adj Close": 8934.799805,
            "Volume": 939997284
          },
          {
            "Date": "2018-03-24",
            "Open": 8935.509766,
            "High": 9036.230469,
            "Low": 8515.530273,
            "Close": 8548.05957,
            "Adj Close": 8548.05957,
            "Volume": 827663165
          },
          {
            "Date": "2018-03-25",
            "Open": 8548.389648,
            "High": 8690.360352,
            "Low": 8395.849609,
            "Close": 8472.839844,
            "Adj Close": 8472.839844,
            "Volume": 657643520
          },
          {
            "Date": "2018-03-25",
            "Open": 8472.55957,
            "High": 8521.040039,
            "Low": 7869.27002,
            "Close": 8152.200195,
            "Adj Close": 8152.200195,
            "Volume": 1079038734
          },
          {
            "Date": "2018-03-26",
            "Open": 8152.180176,
            "High": 8226.240234,
            "Low": 7752.299805,
            "Close": 7808.47998,
            "Adj Close": 7808.47998,
            "Volume": 930754990
          },
          {
            "Date": "2018-03-27",
            "Open": 7808.419922,
            "High": 8117.790039,
            "Low": 7752.600098,
            "Close": 7959.779785,
            "Adj Close": 7959.779785,
            "Volume": 657712114
          },
          {
            "Date": "2018-03-28",
            "Open": 7959.779785,
            "High": 7983.77002,
            "Low": 6927.109863,
            "Close": 7106.620117,
            "Adj Close": 7106.620117,
            "Volume": 1379180030
          },
          {
            "Date": "2018-03-29",
            "Open": 7106.620117,
            "High": 7280.27002,
            "Low": 6595.259766,
            "Close": 6853.759766,
            "Adj Close": 6853.759766,
            "Volume": 1584675343
          },
          {
            "Date": "2018-03-30",
            "Open": 6853.75,
            "High": 7228.399902,
            "Low": 6806.339844,
            "Close": 6943.77002,
            "Adj Close": 6943.77002,
            "Volume": 915400590
          },
          {
            "Date": "2018-03-31",
            "Open": 6943.77002,
            "High": 7056.220215,
            "Low": 6463.540039,
            "Close": 6835.839844,
            "Adj Close": 6835.839844,
            "Volume": 889887684
          },
          {
            "Date": "2018-04-01",
            "Open": 6835.580078,
            "High": 8218.660156,
            "Low": 6792.299805,
            "Close": 7074.600098,
            "Adj Close": 7074.600098,
            "Volume": 748861435
          },
          {
            "Date": "2018-04-02",
            "Open": 7074.649902,
            "High": 7528.970215,
            "Low": 7039.879883,
            "Close": 7434.299805,
            "Adj Close": 7434.299805,
            "Volume": 905326798
          },
          {
            "Date": "2018-04-03",
            "Open": 7434.299805,
            "High": 7442.419922,
            "Low": 6727.089844,
            "Close": 6815.5,
            "Adj Close": 6815.5,
            "Volume": 877199782
          },
          {
            "Date": "2018-04-04",
            "Open": 6815.5,
            "High": 6933.660156,
            "Low": 6602.379883,
            "Close": 6790.450195,
            "Adj Close": 6790.450195,
            "Volume": 777145174
          },
          {
            "Date": "2018-04-05",
            "Open": 6790.450195,
            "High": 6869.529785,
            "Low": 6526.669922,
            "Close": 6634.859863,
            "Adj Close": 6634.859863,
            "Volume": 605651287
          },
          {
            "Date": "2018-04-06",
            "Open": 6634.859863,
            "High": 7083.850098,
            "Low": 6624.470215,
            "Close": 6917.200195,
            "Adj Close": 6917.200195,
            "Volume": 564883141
          },
          {
            "Date": "2018-04-07",
            "Open": 6917.200195,
            "High": 7132.029785,
            "Low": 6911.02002,
            "Close": 7049.919922,
            "Adj Close": 7049.919922,
            "Volume": 425825572
          },
          {
            "Date": "2018-04-08",
            "Open": 7049.919922,
            "High": 7204.279785,
            "Low": 6633.689941,
            "Close": 6789.529785,
            "Adj Close": 6789.529785,
            "Volume": 901883664
          },
          {
            "Date": "2018-04-09",
            "Open": 6789.529785,
            "High": 6922.839844,
            "Low": 6676.720215,
            "Close": 6871.069824,
            "Adj Close": 6871.069824,
            "Volume": 424510977
          },
          {
            "Date": "2018-04-10",
            "Open": 6871.069824,
            "High": 6999.370117,
            "Low": 6839.160156,
            "Close": 6977.129883,
            "Adj Close": 6977.129883,
            "Volume": 450141340
          },
          {
            "Date": "2018-04-11",
            "Open": 6977.040039,
            "High": 8051.950195,
            "Low": 6791.330078,
            "Close": 7927.72998,
            "Adj Close": 7927.72998,
            "Volume": 1490759969
          },
          {
            "Date": "2018-04-12",
            "Open": 7927.72998,
            "High": 8237.160156,
            "Low": 7758.799805,
            "Close": 7899.109863,
            "Adj Close": 7899.109863,
            "Volume": 1171435820
          },
          {
            "Date": "2018-04-13",
            "Open": 7898.740234,
            "High": 8195.339844,
            "Low": 7841.189941,
            "Close": 8022.509766,
            "Adj Close": 8022.509766,
            "Volume": 537286381
          },
          {
            "Date": "2018-04-14",
            "Open": 8022.509766,
            "High": 8437.030273,
            "Low": 8021.040039,
            "Close": 8376.730469,
            "Adj Close": 8376.730469,
            "Volume": 570527804
          },
          {
            "Date": "2018-04-15",
            "Open": 8376.730469,
            "High": 8430.929688,
            "Low": 7929.240234,
            "Close": 8079.77002,
            "Adj Close": 8079.77002,
            "Volume": 713471956
          },
          {
            "Date": "2018-04-16",
            "Open": 8079.77002,
            "High": 8187.600098,
            "Low": 7858.120117,
            "Close": 7921.629883,
            "Adj Close": 7921.629883,
            "Volume": 580880500
          },
          {
            "Date": "2018-04-17",
            "Open": 7921.649902,
            "High": 8246.570313,
            "Low": 7908.919922,
            "Close": 8189.959961,
            "Adj Close": 8189.959961,
            "Volume": 593500791
          },
          {
            "Date": "2018-04-18",
            "Open": 8189.919922,
            "High": 8321.009766,
            "Low": 8136.419922,
            "Close": 8301.820313,
            "Adj Close": 8301.820313,
            "Volume": 602099034
          },
          {
            "Date": "2018-04-19",
            "Open": 8301.820313,
            "High": 8945.139648,
            "Low": 8243.490234,
            "Close": 8877.080078,
            "Adj Close": 8877.080078,
            "Volume": 979994921
          },
          {
            "Date": "2018-04-20",
            "Open": 8877.150391,
            "High": 9047.820313,
            "Low": 8631.179688,
            "Close": 8935.719727,
            "Adj Close": 8935.719727,
            "Volume": 829073400
          },
          {
            "Date": "2018-04-21",
            "Open": 8935.849609,
            "High": 9043.980469,
            "Low": 8788.44043,
            "Close": 8823.360352,
            "Adj Close": 8823.360352,
            "Volume": 610183093
          },
          {
            "Date": "2018-04-22",
            "Open": 8823.459961,
            "High": 9025.730469,
            "Low": 8804.200195,
            "Close": 8968.25,
            "Adj Close": 8968.25,
            "Volume": 553892335
          },
          {
            "Date": "2018-04-23",
            "Open": 8967.860352,
            "High": 9741.910156,
            "Low": 8957.679688,
            "Close": 9655.769531,
            "Adj Close": 9655.769531,
            "Volume": 1276464750
          },
          {
            "Date": "2018-04-24",
            "Open": 9657.69043,
            "High": 9765.230469,
            "Low": 8757.05957,
            "Close": 8873.620117,
            "Adj Close": 8873.620117,
            "Volume": 1779806222
          },
          {
            "Date": "2018-04-25",
            "Open": 8873.570313,
            "High": 9315.129883,
            "Low": 8669.379883,
            "Close": 9282.120117,
            "Adj Close": 9282.120117,
            "Volume": 997427934
          },
          {
            "Date": "2018-04-26",
            "Open": 9289.009766,
            "High": 9385.870117,
            "Low": 8923.480469,
            "Close": 8938.469727,
            "Adj Close": 8938.469727,
            "Volume": 758182407
          },
          {
            "Date": "2018-04-27",
            "Open": 8938.469727,
            "High": 9435.900391,
            "Low": 8892.519531,
            "Close": 9351.469727,
            "Adj Close": 9351.469727,
            "Volume": 774111704
          },
          {
            "Date": "2018-04-28",
            "Open": 9349.94043,
            "High": 9552.669922,
            "Low": 9189.070313,
            "Close": 9407.040039,
            "Adj Close": 9407.040039,
            "Volume": 640931911
          },
          {
            "Date": "2018-04-29",
            "Open": 9407.349609,
            "High": 9459.80957,
            "Low": 9133.599609,
            "Close": 9248.450195,
            "Adj Close": 9248.450195,
            "Volume": 574099218
          },
          {
            "Date": "2018-04-30",
            "Open": 9248.25,
            "High": 9251.660156,
            "Low": 8851.099609,
            "Close": 9077.280273,
            "Adj Close": 9077.280273,
            "Volume": 669555436
          },
          {
            "Date": "2018-05-01",
            "Open": 9077.280273,
            "High": 9271.620117,
            "Low": 8993.820313,
            "Close": 9232.19043,
            "Adj Close": 9232.19043,
            "Volume": 527488395
          },
          {
            "Date": "2018-05-02",
            "Open": 9232.19043,
            "High": 9817.19043,
            "Low": 9172.280273,
            "Close": 9745.040039,
            "Adj Close": 9745.040039,
            "Volume": 857646889
          },
          {
            "Date": "2018-05-03",
            "Open": 9746.259766,
            "High": 9785.150391,
            "Low": 9547.209961,
            "Close": 9699.610352,
            "Adj Close": 9699.610352,
            "Volume": 663887678
          },
          {
            "Date": "2018-05-04",
            "Open": 9700.370117,
            "High": 9968.849609,
            "Low": 9687.089844,
            "Close": 9845.900391,
            "Adj Close": 9845.900391,
            "Volume": 679872376
          },
          {
            "Date": "2018-05-05",
            "Open": 9846.44043,
            "High": 9936.959961,
            "Low": 9441.929688,
            "Close": 9644.919922,
            "Adj Close": 9644.919922,
            "Volume": 608650204
          },
          {
            "Date": "2018-05-06",
            "Open": 9643.990234,
            "High": 9662.230469,
            "Low": 9202.129883,
            "Close": 9377.80957,
            "Adj Close": 9377.80957,
            "Volume": 692580062
          },
          {
            "Date": "2018-05-07",
            "Open": 9377.080078,
            "High": 9472.089844,
            "Low": 9063.070313,
            "Close": 9196.129883,
            "Adj Close": 9196.129883,
            "Volume": 673924125
          },
          {
            "Date": "2018-05-08",
            "Open": 9196.129883,
            "High": 9373.459961,
            "Low": 8987.269531,
            "Close": 9321.160156,
            "Adj Close": 9321.160156,
            "Volume": 625495066
          },
          {
            "Date": "2018-05-09",
            "Open": 9321.519531,
            "High": 9393.950195,
            "Low": 9017.129883,
            "Close": 9032.219727,
            "Adj Close": 9032.219727,
            "Volume": 629850604
          },
          {
            "Date": "2018-05-10",
            "Open": 9032.219727,
            "High": 9032.269531,
            "Low": 8363.5,
            "Close": 8421,
            "Adj Close": 8421,
            "Volume": 1176888629
          },
          {
            "Date": "2018-05-11",
            "Open": 8420.820313,
            "High": 8653.799805,
            "Low": 8225.969727,
            "Close": 8486.669922,
            "Adj Close": 8486.669922,
            "Volume": 783972252
          },
          {
            "Date": "2018-05-12",
            "Open": 8488.070313,
            "High": 8773.959961,
            "Low": 8350.910156,
            "Close": 8709.459961,
            "Adj Close": 8709.459961,
            "Volume": 525395861
          },
          {
            "Date": "2018-05-13",
            "Open": 8709.459961,
            "High": 8883,
            "Low": 8312.719727,
            "Close": 8672.900391,
            "Adj Close": 8672.900391,
            "Volume": 874543293
          },
          {
            "Date": "2018-05-14",
            "Open": 8672.879883,
            "High": 8848.69043,
            "Low": 8441.25,
            "Close": 8480.160156,
            "Adj Close": 8480.160156,
            "Volume": 730739738
          },
          {
            "Date": "2018-05-15",
            "Open": 8480.160156,
            "High": 8501.650391,
            "Low": 8119.169922,
            "Close": 8344.780273,
            "Adj Close": 8344.780273,
            "Volume": 789660713
          },
          {
            "Date": "2018-05-16",
            "Open": 8342.69043,
            "High": 8476.450195,
            "Low": 8015.77002,
            "Close": 8071.040039,
            "Adj Close": 8071.040039,
            "Volume": 615539512
          },
          {
            "Date": "2018-05-17",
            "Open": 8071.040039,
            "High": 8280.450195,
            "Low": 7940.350098,
            "Close": 8247.910156,
            "Adj Close": 8247.910156,
            "Volume": 558167598
          },
          {
            "Date": "2018-05-18",
            "Open": 8247.910156,
            "High": 8397.269531,
            "Low": 8160.799805,
            "Close": 8249.240234,
            "Adj Close": 8249.240234,
            "Volume": 381458405
          },
          {
            "Date": "2018-05-19",
            "Open": 8249.240234,
            "High": 8591.450195,
            "Low": 8181.459961,
            "Close": 8533,
            "Adj Close": 8533,
            "Volume": 418898289
          },
          {
            "Date": "2018-05-20",
            "Open": 8533.219727,
            "High": 8585.849609,
            "Low": 8347.879883,
            "Close": 8419.650391,
            "Adj Close": 8419.650391,
            "Volume": 463653636
          },
          {
            "Date": "2018-05-21",
            "Open": 8419.669922,
            "High": 8428.599609,
            "Low": 7962.430176,
            "Close": 7992.75,
            "Adj Close": 7992.75,
            "Volume": 543342369
          },
          {
            "Date": "2018-05-22",
            "Open": 7992.75,
            "High": 8031.629883,
            "Low": 7460.660156,
            "Close": 7505.77002,
            "Adj Close": 7505.77002,
            "Volume": 934151146
          },
          {
            "Date": "2018-05-23",
            "Open": 7505.77002,
            "High": 7729.47998,
            "Low": 7283.77002,
            "Close": 7584.740234,
            "Adj Close": 7584.740234,
            "Volume": 826278113
          },
          {
            "Date": "2018-05-24",
            "Open": 7584.779785,
            "High": 7652.370117,
            "Low": 7347.959961,
            "Close": 7475.359863,
            "Adj Close": 7475.359863,
            "Volume": 634474356
          },
          {
            "Date": "2018-05-25",
            "Open": 7475.359863,
            "High": 7626.689941,
            "Low": 7314.709961,
            "Close": 7355.060059,
            "Adj Close": 7355.060059,
            "Volume": 368322782
          },
          {
            "Date": "2018-05-26",
            "Open": 7355.060059,
            "High": 7420.069824,
            "Low": 7256.669922,
            "Close": 7362.22998,
            "Adj Close": 7362.22998,
            "Volume": 341348321
          },
          {
            "Date": "2018-05-27",
            "Open": 7362.22998,
            "High": 7455.549805,
            "Low": 7092.910156,
            "Close": 7118.879883,
            "Adj Close": 7118.879883,
            "Volume": 526854342
          },
          {
            "Date": "2018-05-28",
            "Open": 7118.879883,
            "High": 7533.029785,
            "Low": 7069.009766,
            "Close": 7474.75,
            "Adj Close": 7474.75,
            "Volume": 634849312
          },
          {
            "Date": "2018-05-29",
            "Open": 7474.75,
            "High": 7571.080078,
            "Low": 7295.779785,
            "Close": 7393.02002,
            "Adj Close": 7393.02002,
            "Volume": 505870974
          },
          {
            "Date": "2018-05-30",
            "Open": 7393.02002,
            "High": 7608.870117,
            "Low": 7349.52002,
            "Close": 7502.149902,
            "Adj Close": 7502.149902,
            "Volume": 458223966
          },
          {
            "Date": "2018-05-31",
            "Open": 7501.740234,
            "High": 7614.660156,
            "Low": 7370.27002,
            "Close": 7530.549805,
            "Adj Close": 7530.549805,
            "Volume": 458687659
          },
          {
            "Date": "2018-06-01",
            "Open": 7530.549805,
            "High": 7697.339844,
            "Low": 7467.790039,
            "Close": 7643.259766,
            "Adj Close": 7643.259766,
            "Volume": 362414878
          },
          {
            "Date": "2018-06-02",
            "Open": 7643.259766,
            "High": 7774.959961,
            "Low": 7606.759766,
            "Close": 7719.75,
            "Adj Close": 7719.75,
            "Volume": 332313005
          },
          {
            "Date": "2018-06-03",
            "Open": 7719.72998,
            "High": 7760.72998,
            "Low": 7469.209961,
            "Close": 7503.200195,
            "Adj Close": 7503.200195,
            "Volume": 427448262
          },
          {
            "Date": "2018-06-04",
            "Open": 7503.319824,
            "High": 7672.700195,
            "Low": 7394.970215,
            "Close": 7629.399902,
            "Adj Close": 7629.399902,
            "Volume": 440337235
          },
          {
            "Date": "2018-06-05",
            "Open": 7629.399902,
            "High": 7701.350098,
            "Low": 7504.97998,
            "Close": 7661.790039,
            "Adj Close": 7661.790039,
            "Volume": 396116252
          },
          {
            "Date": "2018-06-06",
            "Open": 7661.790039,
            "High": 7755.919922,
            "Low": 7651.129883,
            "Close": 7700.109863,
            "Adj Close": 7700.109863,
            "Volume": 342475552
          },
          {
            "Date": "2018-06-07",
            "Open": 7700.399902,
            "High": 7709.609863,
            "Low": 7559.5,
            "Close": 7627.52002,
            "Adj Close": 7627.52002,
            "Volume": 310119047
          },
          {
            "Date": "2018-06-08",
            "Open": 7627.560059,
            "High": 7691.740234,
            "Low": 7495.720215,
            "Close": 7513.689941,
            "Adj Close": 7513.689941,
            "Volume": 218013881
          },
          {
            "Date": "2018-06-09",
            "Open": 7513.759766,
            "High": 7514.040039,
            "Low": 6661.97998,
            "Close": 6773.720215,
            "Adj Close": 6773.720215,
            "Volume": 895514425
          },
          {
            "Date": "2018-06-10",
            "Open": 6773.720215,
            "High": 6913.850098,
            "Low": 6652.890137,
            "Close": 6887.370117,
            "Adj Close": 6887.370117,
            "Volume": 482788065
          },
          {
            "Date": "2018-06-11",
            "Open": 6887.430176,
            "High": 6888.330078,
            "Low": 6462.609863,
            "Close": 6556.939941,
            "Adj Close": 6556.939941,
            "Volume": 509372466
          },
          {
            "Date": "2018-06-12",
            "Open": 6556.939941,
            "High": 6623,
            "Low": 6140.629883,
            "Close": 6310.430176,
            "Adj Close": 6310.430176,
            "Volume": 797087281
          },
          {
            "Date": "2018-06-13",
            "Open": 6310.430176,
            "High": 6719.439941,
            "Low": 6286.22998,
            "Close": 6643.259766,
            "Adj Close": 6643.259766,
            "Volume": 620296377
          },
          {
            "Date": "2018-06-14",
            "Open": 6643.629883,
            "High": 6667.22998,
            "Low": 6380.689941,
            "Close": 6396.709961,
            "Adj Close": 6396.709961,
            "Volume": 379228601
          },
          {
            "Date": "2018-06-15",
            "Open": 6396.709961,
            "High": 6569.149902,
            "Low": 6345.990234,
            "Close": 6503.100098,
            "Adj Close": 6503.100098,
            "Volume": 232802782
          },
          {
            "Date": "2018-06-16",
            "Open": 6503.100098,
            "High": 6585.77002,
            "Low": 6446.379883,
            "Close": 6457.779785,
            "Adj Close": 6457.779785,
            "Volume": 224575526
          },
          {
            "Date": "2018-06-17",
            "Open": 6457.779785,
            "High": 6802.029785,
            "Low": 6401.410156,
            "Close": 6714.819824,
            "Adj Close": 6714.819824,
            "Volume": 430241689
          },
          {
            "Date": "2018-06-18",
            "Open": 6714.560059,
            "High": 6839.600098,
            "Low": 6672.200195,
            "Close": 6741.279785,
            "Adj Close": 6741.279785,
            "Volume": 370797057
          },
          {
            "Date": "2018-06-19",
            "Open": 6741.279785,
            "High": 6817.899902,
            "Low": 6569.959961,
            "Close": 6761.27002,
            "Adj Close": 6761.27002,
            "Volume": 400530201
          },
          {
            "Date": "2018-06-20",
            "Open": 6761.27002,
            "High": 6790.080078,
            "Low": 6687.660156,
            "Close": 6720.640137,
            "Adj Close": 6720.640137,
            "Volume": 295690715
          },
          {
            "Date": "2018-06-21",
            "Open": 6720.640137,
            "High": 6731.509766,
            "Low": 5941.319824,
            "Close": 6051.470215,
            "Adj Close": 6051.470215,
            "Volume": 862826624
          },
          {
            "Date": "2018-06-22",
            "Open": 6051.470215,
            "High": 6257.879883,
            "Low": 6033.200195,
            "Close": 6166.540039,
            "Adj Close": 6166.540039,
            "Volume": 350697378
          },
          {
            "Date": "2018-06-23",
            "Open": 6166.359863,
            "High": 6254.02002,
            "Low": 5782.129883,
            "Close": 6157.779785,
            "Adj Close": 6157.779785,
            "Volume": 667479078
          },
          {
            "Date": "2018-06-24",
            "Open": 6157.779785,
            "High": 6344.450195,
            "Low": 6095.25,
            "Close": 6260.350098,
            "Adj Close": 6260.350098,
            "Volume": 492834172
          },
          {
            "Date": "2018-06-25",
            "Open": 6260.399902,
            "High": 6286.359863,
            "Low": 6067.490234,
            "Close": 6088.390137,
            "Adj Close": 6088.390137,
            "Volume": 391396653
          },
          {
            "Date": "2018-06-26",
            "Open": 6092.259766,
            "High": 6192.109863,
            "Low": 6021.689941,
            "Close": 6141.569824,
            "Adj Close": 6141.569824,
            "Volume": 383457137
          },
          {
            "Date": "2018-06-27",
            "Open": 6141.569824,
            "High": 6172.22998,
            "Low": 5844.259766,
            "Close": 5871.279785,
            "Adj Close": 5871.279785,
            "Volume": 385907044
          },
          {
            "Date": "2018-06-28",
            "Open": 5870.810059,
            "High": 6286.669922,
            "Low": 5813.02002,
            "Close": 6203.799805,
            "Adj Close": 6203.799805,
            "Volume": 554799001
          },
          {
            "Date": "2018-06-29",
            "Open": 6203.810059,
            "High": 6503.330078,
            "Low": 6194.509766,
            "Close": 6385.379883,
            "Adj Close": 6385.379883,
            "Volume": 419284677
          },
          {
            "Date": "2018-06-30",
            "Open": 6385.430176,
            "High": 6429.5,
            "Low": 6262.720215,
            "Close": 6339.040039,
            "Adj Close": 6339.040039,
            "Volume": 259708490
          },
          {
            "Date": "2018-07-01",
            "Open": 6342.689941,
            "High": 6673.709961,
            "Low": 5537.859863,
            "Close": 6615.660156,
            "Adj Close": 6615.660156,
            "Volume": 465915661
          },
          {
            "Date": "2018-07-02",
            "Open": 6616.600098,
            "High": 6670.299805,
            "Low": 6473.47998,
            "Close": 6509.580078,
            "Adj Close": 6509.580078,
            "Volume": 356390898
          },
          {
            "Date": "2018-07-03",
            "Open": 6508.430176,
            "High": 6777.970215,
            "Low": 6411.129883,
            "Close": 6590.060059,
            "Adj Close": 6590.060059,
            "Volume": 412202352
          },
          {
            "Date": "2018-07-04",
            "Open": 6589.77002,
            "High": 6691.319824,
            "Low": 6448.22998,
            "Close": 6534.810059,
            "Adj Close": 6534.810059,
            "Volume": 421189063
          },
          {
            "Date": "2018-07-05",
            "Open": 6534.810059,
            "High": 6633.439941,
            "Low": 6458.140137,
            "Close": 6602.02002,
            "Adj Close": 6602.02002,
            "Volume": 310759733
          },
          {
            "Date": "2018-07-06",
            "Open": 6602.029785,
            "High": 6814.419922,
            "Low": 6518.22998,
            "Close": 6758.080078,
            "Adj Close": 6758.080078,
            "Volume": 277167900
          },
          {
            "Date": "2018-07-07",
            "Open": 6758.080078,
            "High": 6782.850098,
            "Low": 6684.149902,
            "Close": 6707.379883,
            "Adj Close": 6707.379883,
            "Volume": 268455446
          },
          {
            "Date": "2018-07-08",
            "Open": 6707.459961,
            "High": 6803.100098,
            "Low": 6625.580078,
            "Close": 6668.839844,
            "Adj Close": 6668.839844,
            "Volume": 328316145
          },
          {
            "Date": "2018-07-09",
            "Open": 6668.839844,
            "High": 6683.609863,
            "Low": 6277.22998,
            "Close": 6306.850098,
            "Adj Close": 6306.850098,
            "Volume": 470432142
          },
          {
            "Date": "2018-07-10",
            "Open": 6306.870117,
            "High": 6405.589844,
            "Low": 6293.680176,
            "Close": 6394.359863,
            "Adj Close": 6394.359863,
            "Volume": 327667754
          },
          {
            "Date": "2018-07-11",
            "Open": 6394.359863,
            "High": 6394.930176,
            "Low": 6084,
            "Close": 6253.600098,
            "Adj Close": 6253.600098,
            "Volume": 409078182
          },
          {
            "Date": "2018-07-12",
            "Open": 6253.660156,
            "High": 6349.209961,
            "Low": 6131.540039,
            "Close": 6229.830078,
            "Adj Close": 6229.830078,
            "Volume": 319802271
          },
          {
            "Date": "2018-07-13",
            "Open": 6229.609863,
            "High": 6332.459961,
            "Low": 6190.180176,
            "Close": 6268.75,
            "Adj Close": 6268.75,
            "Volume": 174416786
          },
          {
            "Date": "2018-07-14",
            "Open": 6268.319824,
            "High": 6401.5,
            "Low": 6245.75,
            "Close": 6364.259766,
            "Adj Close": 6364.259766,
            "Volume": 218543291
          },
          {
            "Date": "2018-07-15",
            "Open": 6364.259766,
            "High": 6761.839844,
            "Low": 6349.830078,
            "Close": 6740.549805,
            "Adj Close": 6740.549805,
            "Volume": 494264915
          },
          {
            "Date": "2018-07-16",
            "Open": 6740.540039,
            "High": 7476.240234,
            "Low": 6677.560059,
            "Close": 7326.700195,
            "Adj Close": 7326.700195,
            "Volume": 799401451
          },
          {
            "Date": "2018-07-17",
            "Open": 7326.759766,
            "High": 7590.649902,
            "Low": 7253.709961,
            "Close": 7383.390137,
            "Adj Close": 7383.390137,
            "Volume": 788460811
          },
          {
            "Date": "2018-07-18",
            "Open": 7383.390137,
            "High": 7563.700195,
            "Low": 7289.899902,
            "Close": 7477.5,
            "Adj Close": 7477.5,
            "Volume": 522544440
          },
          {
            "Date": "2018-07-19",
            "Open": 7477.100098,
            "High": 7676.549805,
            "Low": 7279.339844,
            "Close": 7333.930176,
            "Adj Close": 7333.930176,
            "Volume": 603034414
          },
          {
            "Date": "2018-07-20",
            "Open": 7333.930176,
            "High": 7453.069824,
            "Low": 7220.370117,
            "Close": 7405.399902,
            "Adj Close": 7405.399902,
            "Volume": 297440355
          },
          {
            "Date": "2018-07-21",
            "Open": 7405.399902,
            "High": 7569.279785,
            "Low": 7345.25,
            "Close": 7398.640137,
            "Adj Close": 7398.640137,
            "Volume": 355565264
          },
          {
            "Date": "2018-07-22",
            "Open": 7398.640137,
            "High": 7798.589844,
            "Low": 7376.660156,
            "Close": 7718,
            "Adj Close": 7718,
            "Volume": 745533303
          },
          {
            "Date": "2018-07-23",
            "Open": 7718,
            "High": 8485.709961,
            "Low": 7692.160156,
            "Close": 8395.820313,
            "Adj Close": 8395.820313,
            "Volume": 1166560702
          },
          {
            "Date": "2018-07-24",
            "Open": 8395.80957,
            "High": 8481.110352,
            "Low": 8061.069824,
            "Close": 8170.22998,
            "Adj Close": 8170.22998,
            "Volume": 736530740
          },
          {
            "Date": "2018-07-25",
            "Open": 8170.370117,
            "High": 8302.240234,
            "Low": 7862.669922,
            "Close": 7937.25,
            "Adj Close": 7937.25,
            "Volume": 643953970
          },
          {
            "Date": "2018-07-26",
            "Open": 7937.100098,
            "High": 8278.009766,
            "Low": 7806.25,
            "Close": 8182.890137,
            "Adj Close": 8182.890137,
            "Volume": 646256012
          },
          {
            "Date": "2018-07-27",
            "Open": 8182.879883,
            "High": 8238.040039,
            "Low": 8070.040039,
            "Close": 8230.870117,
            "Adj Close": 8230.870117,
            "Volume": 295872316
          },
          {
            "Date": "2018-07-28",
            "Open": 8230.820313,
            "High": 8291.549805,
            "Low": 8123.529785,
            "Close": 8216.780273,
            "Adj Close": 8216.780273,
            "Volume": 280233415
          },
          {
            "Date": "2018-07-29",
            "Open": 8216.700195,
            "High": 8273.610352,
            "Low": 7867.439941,
            "Close": 8176.060059,
            "Adj Close": 8176.060059,
            "Volume": 681120739
          },
          {
            "Date": "2018-07-30",
            "Open": 8176.080078,
            "High": 8176.27002,
            "Low": 7663.700195,
            "Close": 7735.299805,
            "Adj Close": 7735.299805,
            "Volume": 765186307
          },
          {
            "Date": "2018-07-31",
            "Open": 7736.25,
            "High": 7760.740234,
            "Low": 7449.310059,
            "Close": 7610.899902,
            "Adj Close": 7610.899902,
            "Volume": 595404848
          },
          {
            "Date": "2018-08-01",
            "Open": 7610.899902,
            "High": 7713.319824,
            "Low": 7470.859863,
            "Close": 7542.339844,
            "Adj Close": 7542.339844,
            "Volume": 424093581
          },
          {
            "Date": "2018-08-02",
            "Open": 7542.339844,
            "High": 7542.490234,
            "Low": 7296.759766,
            "Close": 7417.600098,
            "Adj Close": 7417.600098,
            "Volume": 586982505
          },
          {
            "Date": "2018-08-03",
            "Open": 7417.600098,
            "High": 7490.890137,
            "Low": 6940.149902,
            "Close": 7017.890137,
            "Adj Close": 7017.890137,
            "Volume": 534002935
          },
          {
            "Date": "2018-08-04",
            "Open": 7017.890137,
            "High": 7092.529785,
            "Low": 6898.310059,
            "Close": 7042.390137,
            "Adj Close": 7042.390137,
            "Volume": 368914046
          },
          {
            "Date": "2018-08-05",
            "Open": 7042.569824,
            "High": 7160.399902,
            "Low": 6854.790039,
            "Close": 6945.779785,
            "Adj Close": 6945.779785,
            "Volume": 410408444
          },
          {
            "Date": "2018-08-06",
            "Open": 6945.77002,
            "High": 7150.859863,
            "Low": 6685.02002,
            "Close": 6723.209961,
            "Adj Close": 6723.209961,
            "Volume": 575690006
          },
          {
            "Date": "2018-08-07",
            "Open": 6723.290039,
            "High": 6723.990234,
            "Low": 6133.029785,
            "Close": 6285.02002,
            "Adj Close": 6285.02002,
            "Volume": 838853615
          },
          {
            "Date": "2018-08-08",
            "Open": 6285.060059,
            "High": 6631.22998,
            "Low": 6195.02002,
            "Close": 6543.240234,
            "Adj Close": 6543.240234,
            "Volume": 575748446
          },
          {
            "Date": "2018-08-09",
            "Open": 6543.25,
            "High": 6582.140137,
            "Low": 6025.910156,
            "Close": 6153.410156,
            "Adj Close": 6153.410156,
            "Volume": 639457019
          },
          {
            "Date": "2018-08-10",
            "Open": 6152.950195,
            "High": 6488.549805,
            "Low": 6014.259766,
            "Close": 6242.540039,
            "Adj Close": 6242.540039,
            "Volume": 545722619
          },
          {
            "Date": "2018-08-11",
            "Open": 6242.529785,
            "High": 6483.390137,
            "Low": 6176.890137,
            "Close": 6322.919922,
            "Adj Close": 6322.919922,
            "Volume": 366460108
          },
          {
            "Date": "2018-08-12",
            "Open": 6322.410156,
            "High": 6545.02002,
            "Low": 6157.029785,
            "Close": 6263.200195,
            "Adj Close": 6263.200195,
            "Volume": 452431672
          },
          {
            "Date": "2018-08-13",
            "Open": 6263.200195,
            "High": 6266.5,
            "Low": 5891.870117,
            "Close": 6199.600098,
            "Adj Close": 6199.600098,
            "Volume": 759847789
          },
          {
            "Date": "2018-08-14",
            "Open": 6199.629883,
            "High": 6620.069824,
            "Low": 6193.629883,
            "Close": 6274.220215,
            "Adj Close": 6274.220215,
            "Volume": 852103141
          },
          {
            "Date": "2018-08-15",
            "Open": 6274.220215,
            "High": 6478.069824,
            "Low": 6217.330078,
            "Close": 6323.810059,
            "Adj Close": 6323.810059,
            "Volume": 454679037
          },
          {
            "Date": "2018-08-16",
            "Open": 6323.810059,
            "High": 6594.720215,
            "Low": 6300.450195,
            "Close": 6591.160156,
            "Adj Close": 6591.160156,
            "Volume": 477089455
          },
          {
            "Date": "2018-08-17",
            "Open": 6591.180176,
            "High": 6622.160156,
            "Low": 6322.439941,
            "Close": 6405.709961,
            "Adj Close": 6405.709961,
            "Volume": 336744293
          },
          {
            "Date": "2018-08-18",
            "Open": 6405.740234,
            "High": 6560.879883,
            "Low": 6330.560059,
            "Close": 6502.180176,
            "Adj Close": 6502.180176,
            "Volume": 253984821
          },
          {
            "Date": "2018-08-19",
            "Open": 6502.240234,
            "High": 6537.540039,
            "Low": 6248.390137,
            "Close": 6269.899902,
            "Adj Close": 6269.899902,
            "Volume": 397981291
          },
          {
            "Date": "2018-08-20",
            "Open": 6270.089844,
            "High": 6506.689941,
            "Low": 6259.810059,
            "Close": 6491.109863,
            "Adj Close": 6491.109863,
            "Volume": 396746063
          },
          {
            "Date": "2018-08-21",
            "Open": 6491.089844,
            "High": 6890.790039,
            "Low": 6264.339844,
            "Close": 6366.129883,
            "Adj Close": 6366.129883,
            "Volume": 764005011
          },
          {
            "Date": "2018-08-22",
            "Open": 6366.140137,
            "High": 6575.279785,
            "Low": 6356.959961,
            "Close": 6538.950195,
            "Adj Close": 6538.950195,
            "Volume": 340811486
          },
          {
            "Date": "2018-08-23",
            "Open": 6539.129883,
            "High": 6736.830078,
            "Low": 6481.759766,
            "Close": 6708.959961,
            "Adj Close": 6708.959961,
            "Volume": 382456858
          },
          {
            "Date": "2018-08-24",
            "Open": 6708.939941,
            "High": 6808.890137,
            "Low": 6684.189941,
            "Close": 6749.560059,
            "Adj Close": 6749.560059,
            "Volume": 258296664
          },
          {
            "Date": "2018-08-25",
            "Open": 6749.709961,
            "High": 6793.169922,
            "Low": 6588.47998,
            "Close": 6720.600098,
            "Adj Close": 6720.600098,
            "Volume": 265820591
          },
          {
            "Date": "2018-08-26",
            "Open": 6720.600098,
            "High": 6944.209961,
            "Low": 6674.839844,
            "Close": 6915.72998,
            "Adj Close": 6915.72998,
            "Volume": 405769271
          },
          {
            "Date": "2018-08-27",
            "Open": 6915.919922,
            "High": 7136.709961,
            "Low": 6877.200195,
            "Close": 7091.379883,
            "Adj Close": 7091.379883,
            "Volume": 487789642
          },
          {
            "Date": "2018-08-28",
            "Open": 7091.379883,
            "High": 7137.470215,
            "Low": 6944.759766,
            "Close": 7052,
            "Adj Close": 7052,
            "Volume": 356139022
          },
          {
            "Date": "2018-08-29",
            "Open": 7051.609863,
            "High": 7072.640137,
            "Low": 6818.689941,
            "Close": 6998.759766,
            "Adj Close": 6998.759766,
            "Volume": 425475685
          },
          {
            "Date": "2018-08-30",
            "Open": 6998.759766,
            "High": 7096.72998,
            "Low": 6903.080078,
            "Close": 7026.959961,
            "Adj Close": 7026.959961,
            "Volume": 349131152
          },
          {
            "Date": "2018-08-31",
            "Open": 7026.959961,
            "High": 7272.029785,
            "Low": 7025.580078,
            "Close": 7203.459961,
            "Adj Close": 7203.459961,
            "Volume": 300301833
          },
          {
            "Date": "2018-09-01",
            "Open": 7203.459961,
            "High": 7384.379883,
            "Low": 7144.709961,
            "Close": 7301.259766,
            "Adj Close": 7301.259766,
            "Volume": 447453370
          },
          {
            "Date": "2018-09-02",
            "Open": 7301.25,
            "High": 7350.580078,
            "Low": 7204.890137,
            "Close": 7270.049805,
            "Adj Close": 7270.049805,
            "Volume": 309327793
          },
          {
            "Date": "2018-09-03",
            "Open": 7270.049805,
            "High": 7417.649902,
            "Low": 7246.759766,
            "Close": 7369.859863,
            "Adj Close": 7369.859863,
            "Volume": 343762001
          },
          {
            "Date": "2018-09-04",
            "Open": 7369.890137,
            "High": 7401.430176,
            "Low": 6694.060059,
            "Close": 6705.029785,
            "Adj Close": 6705.029785,
            "Volume": 797851163
          },
          {
            "Date": "2018-09-05",
            "Open": 6705.060059,
            "High": 6727.189941,
            "Low": 6295.109863,
            "Close": 6515.419922,
            "Adj Close": 6515.419922,
            "Volume": 823309044
          },
          {
            "Date": "2018-09-06",
            "Open": 6515.419922,
            "High": 6549.390137,
            "Low": 6345.47998,
            "Close": 6411.779785,
            "Adj Close": 6411.779785,
            "Volume": 344487244
          },
          {
            "Date": "2018-09-07",
            "Open": 6413.120117,
            "High": 6480.569824,
            "Low": 6134.759766,
            "Close": 6200.160156,
            "Adj Close": 6200.160156,
            "Volume": 317380272
          },
          {
            "Date": "2018-09-08",
            "Open": 6200.22998,
            "High": 6451.25,
            "Low": 6161.830078,
            "Close": 6249.069824,
            "Adj Close": 6249.069824,
            "Volume": 244400344
          },
          {
            "Date": "2018-09-09",
            "Open": 6249.069824,
            "High": 6371.419922,
            "Low": 6247.640137,
            "Close": 6324.430176,
            "Adj Close": 6324.430176,
            "Volume": 320435279
          },
          {
            "Date": "2018-09-10",
            "Open": 6324.430176,
            "High": 6415.509766,
            "Low": 6199.189941,
            "Close": 6295.540039,
            "Adj Close": 6295.540039,
            "Volume": 324512939
          },
          {
            "Date": "2018-09-11",
            "Open": 6295.540039,
            "High": 6357.890137,
            "Low": 6208.279785,
            "Close": 6337.109863,
            "Adj Close": 6337.109863,
            "Volume": 332537236
          },
          {
            "Date": "2018-09-12",
            "Open": 6337.080078,
            "High": 6534.890137,
            "Low": 6337.080078,
            "Close": 6492,
            "Adj Close": 6492,
            "Volume": 425090869
          },
          {
            "Date": "2018-09-13",
            "Open": 6492.169922,
            "High": 6591.589844,
            "Low": 6393.839844,
            "Close": 6486.009766,
            "Adj Close": 6486.009766,
            "Volume": 377989402
          },
          {
            "Date": "2018-09-14",
            "Open": 6485.390137,
            "High": 6573.189941,
            "Low": 6473.470215,
            "Close": 6522.080078,
            "Adj Close": 6522.080078,
            "Volume": 208349557
          },
          {
            "Date": "2018-09-15",
            "Open": 6522.680176,
            "High": 6525.049805,
            "Low": 6404.310059,
            "Close": 6502.439941,
            "Adj Close": 6502.439941,
            "Volume": 200545603
          },
          {
            "Date": "2018-09-16",
            "Open": 6502.439941,
            "High": 6538.819824,
            "Low": 6216.830078,
            "Close": 6261.47998,
            "Adj Close": 6261.47998,
            "Volume": 399675966
          },
          {
            "Date": "2018-09-17",
            "Open": 6261.330078,
            "High": 6393.390137,
            "Low": 6238.25,
            "Close": 6346.439941,
            "Adj Close": 6346.439941,
            "Volume": 348485895
          },
          {
            "Date": "2018-09-18",
            "Open": 6346.439941,
            "High": 6522.899902,
            "Low": 6131.02002,
            "Close": 6398.799805,
            "Adj Close": 6398.799805,
            "Volume": 452379323
          },
          {
            "Date": "2018-09-19",
            "Open": 6398.830078,
            "High": 6551.930176,
            "Low": 6361.330078,
            "Close": 6505.899902,
            "Adj Close": 6505.899902,
            "Volume": 301619960
          },
          {
            "Date": "2018-09-20",
            "Open": 6505.970215,
            "High": 6785.220215,
            "Low": 6501.009766,
            "Close": 6762.060059,
            "Adj Close": 6762.060059,
            "Volume": 569642976
          },
          {
            "Date": "2018-09-21",
            "Open": 6762.069824,
            "High": 6834.490234,
            "Low": 6633.009766,
            "Close": 6716.600098,
            "Adj Close": 6716.600098,
            "Volume": 261159308
          },
          {
            "Date": "2018-09-22",
            "Open": 6716.600098,
            "High": 6768.560059,
            "Low": 6663.899902,
            "Close": 6702.700195,
            "Adj Close": 6702.700195,
            "Volume": 169080003
          },
          {
            "Date": "2018-09-23",
            "Open": 6702.72998,
            "High": 6717.600098,
            "Low": 6557.819824,
            "Close": 6583.529785,
            "Adj Close": 6583.529785,
            "Volume": 324660682
          },
          {
            "Date": "2018-09-24",
            "Open": 6583.529785,
            "High": 6583.540039,
            "Low": 6333.209961,
            "Close": 6437.740234,
            "Adj Close": 6437.740234,
            "Volume": 420279170
          },
          {
            "Date": "2018-09-25",
            "Open": 6437.740234,
            "High": 6543.919922,
            "Low": 6383.160156,
            "Close": 6462.600098,
            "Adj Close": 6462.600098,
            "Volume": 264402806
          },
          {
            "Date": "2018-09-26",
            "Open": 6462.600098,
            "High": 6733.939941,
            "Low": 6434.759766,
            "Close": 6686.129883,
            "Adj Close": 6686.129883,
            "Volume": 345096700
          },
          {
            "Date": "2018-09-27",
            "Open": 6686.129883,
            "High": 6806.100098,
            "Low": 6545.410156,
            "Close": 6635.379883,
            "Adj Close": 6635.379883,
            "Volume": 497340510
          },
          {
            "Date": "2018-09-28",
            "Open": 6635.399902,
            "High": 6635.419922,
            "Low": 6474.22998,
            "Close": 6603.75,
            "Adj Close": 6603.75,
            "Volume": 245055396
          },
          {
            "Date": "2018-09-29",
            "Open": 6603.75,
            "High": 6741.959961,
            "Low": 6543.680176,
            "Close": 6623.709961,
            "Adj Close": 6623.709961,
            "Volume": 174302164
          },
          {
            "Date": "2018-09-30",
            "Open": 6623.819824,
            "High": 6662.600098,
            "Low": 6510.540039,
            "Close": 6594.97998,
            "Adj Close": 6594.97998,
            "Volume": 256959931
          },
          {
            "Date": "2018-10-01",
            "Open": 6594.97998,
            "High": 6618.950195,
            "Low": 6478.040039,
            "Close": 6525.470215,
            "Adj Close": 6525.470215,
            "Volume": 267166277
          },
          {
            "Date": "2018-10-02",
            "Open": 6525.459961,
            "High": 6537.069824,
            "Low": 6428.97998,
            "Close": 6492.259766,
            "Adj Close": 6492.259766,
            "Volume": 306385346
          },
          {
            "Date": "2018-10-03",
            "Open": 6492.609863,
            "High": 6622.319824,
            "Low": 6486.859863,
            "Close": 6579.790039,
            "Adj Close": 6579.790039,
            "Volume": 277614018
          },
          {
            "Date": "2018-10-04",
            "Open": 6580,
            "High": 6683.549805,
            "Low": 6546.97998,
            "Close": 6632.870117,
            "Adj Close": 6632.870117,
            "Volume": 262562344
          },
          {
            "Date": "2018-10-05",
            "Open": 6632.879883,
            "High": 6637.080078,
            "Low": 6563.25,
            "Close": 6589.939941,
            "Adj Close": 6589.939941,
            "Volume": 162722103
          },
          {
            "Date": "2018-10-06",
            "Open": 6589.939941,
            "High": 6622.490234,
            "Low": 6535.02002,
            "Close": 6601.149902,
            "Adj Close": 6601.149902,
            "Volume": 179378859
          },
          {
            "Date": "2018-10-07",
            "Open": 6601.459961,
            "High": 6698.310059,
            "Low": 6565.009766,
            "Close": 6650.069824,
            "Adj Close": 6650.069824,
            "Volume": 313507433
          },
          {
            "Date": "2018-10-08",
            "Open": 6650.069824,
            "High": 6657,
            "Low": 6589.390137,
            "Close": 6631.790039,
            "Adj Close": 6631.790039,
            "Volume": 213976678
          },
          {
            "Date": "2018-10-09",
            "Open": 6631.790039,
            "High": 6633.220215,
            "Low": 6487.859863,
            "Close": 6581.069824,
            "Adj Close": 6581.069824,
            "Volume": 323664963
          },
          {
            "Date": "2018-10-10",
            "Open": 6581.069824,
            "High": 6581.589844,
            "Low": 6171.950195,
            "Close": 6209.470215,
            "Adj Close": 6209.470215,
            "Volume": 654924117
          },
          {
            "Date": "2018-10-11",
            "Open": 6209.470215,
            "High": 6296.560059,
            "Low": 6173.859863,
            "Close": 6250.850098,
            "Adj Close": 6250.850098,
            "Volume": 289840137
          },
          {
            "Date": "2018-10-12",
            "Open": 6252.100098,
            "High": 6280.72998,
            "Low": 6238.919922,
            "Close": 6267.27002,
            "Adj Close": 6267.27002,
            "Volume": 137705035
          },
          {
            "Date": "2018-10-13",
            "Open": 6267.27002,
            "High": 6346.560059,
            "Low": 6247.169922,
            "Close": 6277.72998,
            "Adj Close": 6277.72998,
            "Volume": 215422888
          },
          {
            "Date": "2018-10-14",
            "Open": 6277.72998,
            "High": 7234.830078,
            "Low": 6244.77002,
            "Close": 6612.359863,
            "Adj Close": 6612.359863,
            "Volume": 1190524168
          },
          {
            "Date": "2018-10-15",
            "Open": 6612.689941,
            "High": 6724.910156,
            "Low": 6545.540039,
            "Close": 6583.049805,
            "Adj Close": 6583.049805,
            "Volume": 324232509
          },
          {
            "Date": "2018-10-16",
            "Open": 6583.049805,
            "High": 6589.200195,
            "Low": 6511.600098,
            "Close": 6574.52002,
            "Adj Close": 6574.52002,
            "Volume": 220418636
          },
          {
            "Date": "2018-10-17",
            "Open": 6576.399902,
            "High": 6616.27002,
            "Low": 6445.049805,
            "Close": 6488.720215,
            "Adj Close": 6488.720215,
            "Volume": 331761115
          },
          {
            "Date": "2018-10-18",
            "Open": 6489.370117,
            "High": 6503.089844,
            "Low": 6449.359863,
            "Close": 6469.279785,
            "Adj Close": 6469.279785,
            "Volume": 237855085
          },
          {
            "Date": "2018-10-19",
            "Open": 6469.279785,
            "High": 6645.200195,
            "Low": 6395.450195,
            "Close": 6490.560059,
            "Adj Close": 6490.560059,
            "Volume": 127185847
          },
          {
            "Date": "2018-10-20",
            "Open": 6490.600098,
            "High": 6557.390137,
            "Low": 6474.470215,
            "Close": 6509.870117,
            "Adj Close": 6509.870117,
            "Volume": 105283929
          },
          {
            "Date": "2018-10-21",
            "Open": 6509.870117,
            "High": 6531.22998,
            "Low": 6460.379883,
            "Close": 6483.22998,
            "Adj Close": 6483.22998,
            "Volume": 202766914
          },
          {
            "Date": "2018-10-22",
            "Open": 6484.319824,
            "High": 6496.200195,
            "Low": 6438.990234,
            "Close": 6470.220215,
            "Adj Close": 6470.220215,
            "Volume": 220913293
          },
          {
            "Date": "2018-10-23",
            "Open": 6470.629883,
            "High": 6538.350098,
            "Low": 6465.72998,
            "Close": 6476.25,
            "Adj Close": 6476.25,
            "Volume": 222068131
          },
          {
            "Date": "2018-10-24",
            "Open": 6476.52002,
            "High": 6497.899902,
            "Low": 6432.299805,
            "Close": 6462.77002,
            "Adj Close": 6462.77002,
            "Volume": 231214963
          },
          {
            "Date": "2018-10-25",
            "Open": 6462.77002,
            "High": 6514,
            "Low": 6441.810059,
            "Close": 6457.209961,
            "Adj Close": 6457.209961,
            "Volume": 215447656
          },
          {
            "Date": "2018-10-26",
            "Open": 6457.209961,
            "High": 6479,
            "Low": 6445.950195,
            "Close": 6470.169922,
            "Adj Close": 6470.169922,
            "Volume": 124066466
          },
          {
            "Date": "2018-10-27",
            "Open": 6470.169922,
            "High": 6483.240234,
            "Low": 6444.740234,
            "Close": 6470.740234,
            "Adj Close": 6470.740234,
            "Volume": 109118160
          },
          {
            "Date": "2018-10-29",
            "Open": 6470.740234,
            "High": 6483.390137,
            "Low": 6282.580078,
            "Close": 6313.910156,
            "Adj Close": 6313.910156,
            "Volume": 342463526
          },
          {
            "Date": "2018-10-30",
            "Open": 6314.379883,
            "High": 6340.680176,
            "Low": 6286.299805,
            "Close": 6309.109863,
            "Adj Close": 6309.109863,
            "Volume": 269592154
          },
          {
            "Date": "2018-10-31",
            "Open": 6309.109863,
            "High": 6391.25,
            "Low": 6241.490234,
            "Close": 6342.609863,
            "Adj Close": 6342.609863,
            "Volume": 245357244
          },
          {
            "Date": "2018-11-01",
            "Open": 6342.810059,
            "High": 6402.589844,
            "Low": 6322.600098,
            "Close": 6381.299805,
            "Adj Close": 6381.299805,
            "Volume": 199861220
          },
          {
            "Date": "2018-11-02",
            "Open": 6381.299805,
            "High": 6420.930176,
            "Low": 6371.569824,
            "Close": 6394.660156,
            "Adj Close": 6394.660156,
            "Volume": 179385606
          },
          {
            "Date": "2018-11-03",
            "Open": 6394.649902,
            "High": 6398.089844,
            "Low": 6336.959961,
            "Close": 6376.319824,
            "Adj Close": 6376.319824,
            "Volume": 183565304
          },
          {
            "Date": "2018-11-04",
            "Open": 6376.549805,
            "High": 6498.160156,
            "Low": 6351.919922,
            "Close": 6467.049805,
            "Adj Close": 6467.049805,
            "Volume": 175805188
          },
          {
            "Date": "2018-11-05",
            "Open": 6467.049805,
            "High": 6475.799805,
            "Low": 6406.689941,
            "Close": 6433.740234,
            "Adj Close": 6433.740234,
            "Volume": 155758902
          },
          {
            "Date": "2018-11-06",
            "Open": 6433.529785,
            "High": 6482.810059,
            "Low": 6412.560059,
            "Close": 6479.720215,
            "Adj Close": 6479.720215,
            "Volume": 239808254
          },
          {
            "Date": "2018-11-07",
            "Open": 6479.720215,
            "High": 6562.790039,
            "Low": 6476.589844,
            "Close": 6529.680176,
            "Adj Close": 6529.680176,
            "Volume": 360052788
          },
          {
            "Date": "2018-11-08",
            "Open": 6530.939941,
            "High": 6542.419922,
            "Low": 6438.27002,
            "Close": 6446.060059,
            "Adj Close": 6446.060059,
            "Volume": 273205386
          },
          {
            "Date": "2018-11-09",
            "Open": 6446.060059,
            "High": 6457.970215,
            "Low": 6352.450195,
            "Close": 6377.990234,
            "Adj Close": 6377.990234,
            "Volume": 237893036
          },
          {
            "Date": "2018-11-10",
            "Open": 6377.990234,
            "High": 6419.919922,
            "Low": 6376.169922,
            "Close": 6396.370117,
            "Adj Close": 6396.370117,
            "Volume": 94313328
          },
          {
            "Date": "2018-11-11",
            "Open": 6396.390137,
            "High": 6414.180176,
            "Low": 6326.379883,
            "Close": 6408.180176,
            "Adj Close": 6408.180176,
            "Volume": 130156001
          },
          {
            "Date": "2018-11-12",
            "Open": 6408.180176,
            "High": 6435.410156,
            "Low": 6350.870117,
            "Close": 6375.080078,
            "Adj Close": 6375.080078,
            "Volume": 181575610
          },
          {
            "Date": "2018-11-13",
            "Open": 6375.080078,
            "High": 6389.430176,
            "Low": 6315.580078,
            "Close": 6339.169922,
            "Adj Close": 6339.169922,
            "Volume": 227689745
          },
          {
            "Date": "2018-11-14",
            "Open": 6339.169922,
            "High": 6375.700195,
            "Low": 5469.930176,
            "Close": 5741.470215,
            "Adj Close": 5741.470215,
            "Volume": 1045469380
          },
          {
            "Date": "2018-11-15",
            "Open": 5740.509766,
            "High": 5767.060059,
            "Low": 5300.75,
            "Close": 5647.5,
            "Adj Close": 5647.5,
            "Volume": 820864013
          },
          {
            "Date": "2018-11-16",
            "Open": 5647.5,
            "High": 5676.540039,
            "Low": 5487.870117,
            "Close": 5586.27002,
            "Adj Close": 5586.27002,
            "Volume": 397196182
          },
          {
            "Date": "2018-11-17",
            "Open": 5586.970215,
            "High": 5602.009766,
            "Low": 5524.700195,
            "Close": 5568.939941,
            "Adj Close": 5568.939941,
            "Volume": 164182152
          },
          {
            "Date": "2018-11-18",
            "Open": 5567.950195,
            "High": 5701.350098,
            "Low": 5567.950195,
            "Close": 5615.259766,
            "Adj Close": 5615.259766,
            "Volume": 233409182
          },
          {
            "Date": "2018-11-19",
            "Open": 5615.259766,
            "High": 5615.97998,
            "Low": 4757.009766,
            "Close": 4809.620117,
            "Adj Close": 4809.620117,
            "Volume": 1072037780
          },
          {
            "Date": "2018-11-20",
            "Open": 4809.620117,
            "High": 4953.560059,
            "Low": 4168.25,
            "Close": 4441.810059,
            "Adj Close": 4441.810059,
            "Volume": 1433400842
          },
          {
            "Date": "2018-11-21",
            "Open": 4441.810059,
            "High": 4689.549805,
            "Low": 4315.580078,
            "Close": 4593.040039,
            "Adj Close": 4593.040039,
            "Volume": 686284917
          },
          {
            "Date": "2018-11-22",
            "Open": 4593.040039,
            "High": 4640.720215,
            "Low": 4297.209961,
            "Close": 4320.680176,
            "Adj Close": 4320.680176,
            "Volume": 376852837
          },
          {
            "Date": "2018-11-23",
            "Open": 4320.680176,
            "High": 4419.47998,
            "Low": 4157.189941,
            "Close": 4343.419922,
            "Adj Close": 4343.419922,
            "Volume": 521825987
          },
          {
            "Date": "2018-11-24",
            "Open": 4343.419922,
            "High": 4432,
            "Low": 3741.199951,
            "Close": 3854.110107,
            "Adj Close": 3854.110107,
            "Volume": 503028289
          },
          {
            "Date": "2018-11-25",
            "Open": 3854.110107,
            "High": 4165.930176,
            "Low": 3550.040039,
            "Close": 4004.149902,
            "Adj Close": 4004.149902,
            "Volume": 819869496
          },
          {
            "Date": "2018-11-26",
            "Open": 4004.459961,
            "High": 4124.700195,
            "Low": 3598.810059,
            "Close": 3784.590088,
            "Adj Close": 3784.590088,
            "Volume": 715341714
          },
          {
            "Date": "2018-11-27",
            "Open": 3784.77002,
            "High": 3878.899902,
            "Low": 3613.110107,
            "Close": 3822.98999,
            "Adj Close": 3822.98999,
            "Volume": 555212127
          },
          {
            "Date": "2018-11-28",
            "Open": 3822.98999,
            "High": 4398.569824,
            "Low": 3822.939941,
            "Close": 4263.549805,
            "Adj Close": 4263.549805,
            "Volume": 726808596
          },
          {
            "Date": "2018-11-29",
            "Open": 4263.52002,
            "High": 4444.390137,
            "Low": 4130.680176,
            "Close": 4286.689941,
            "Adj Close": 4286.689941,
            "Volume": 479575430
          },
          {
            "Date": "2018-11-30",
            "Open": 4286.850098,
            "High": 4331.069824,
            "Low": 3916.300049,
            "Close": 4009.669922,
            "Adj Close": 4009.669922,
            "Volume": 497762735
          },
          {
            "Date": "2018-12-01",
            "Open": 4009.669922,
            "High": 4309.649902,
            "Low": 3942.620117,
            "Close": 4197.459961,
            "Adj Close": 4197.459961,
            "Volume": 280927570
          },
          {
            "Date": "2018-12-02",
            "Open": 4197.700195,
            "High": 4318.790039,
            "Low": 4077.669922,
            "Close": 4143.859863,
            "Adj Close": 4143.859863,
            "Volume": 262154694
          },
          {
            "Date": "2018-12-03",
            "Open": 4143.859863,
            "High": 4159.009766,
            "Low": 3795.179932,
            "Close": 3871.409912,
            "Adj Close": 3871.409912,
            "Volume": 423985399
          },
          {
            "Date": "2018-12-04",
            "Open": 3871.409912,
            "High": 4082.679932,
            "Low": 3770.919922,
            "Close": 3948.439941,
            "Adj Close": 3948.439941,
            "Volume": 373361232
          },
          {
            "Date": "2018-12-05",
            "Open": 3948.439941,
            "High": 3961.800049,
            "Low": 3719.189941,
            "Close": 3737.530029,
            "Adj Close": 3737.530029,
            "Volume": 320944415
          },
          {
            "Date": "2018-12-06",
            "Open": 3737.530029,
            "High": 3883.429932,
            "Low": 3467.919922,
            "Close": 3485.179932,
            "Adj Close": 3485.179932,
            "Volume": 590923562
          },
          {
            "Date": "2018-12-07",
            "Open": 3485.179932,
            "High": 3576.110107,
            "Low": 3248,
            "Close": 3420.570068,
            "Adj Close": 3420.570068,
            "Volume": 699930576
          },
          {
            "Date": "2018-12-08",
            "Open": 3420.570068,
            "High": 3602.48999,
            "Low": 3295.209961,
            "Close": 3461.070068,
            "Adj Close": 3461.070068,
            "Volume": 357548590
          },
          {
            "Date": "2018-12-09",
            "Open": 3461.070068,
            "High": 3718.580078,
            "Low": 3436.5,
            "Close": 3592.840088,
            "Adj Close": 3592.840088,
            "Volume": 295321498
          },
          {
            "Date": "2018-12-10",
            "Open": 3592.840088,
            "High": 3645.48999,
            "Low": 3416.77002,
            "Close": 3467.159912,
            "Adj Close": 3467.159912,
            "Volume": 287119758
          },
          {
            "Date": "2018-12-11",
            "Open": 3467.159912,
            "High": 3483.580078,
            "Low": 3348.97998,
            "Close": 3401.02002,
            "Adj Close": 3401.02002,
            "Volume": 230671778
          },
          {
            "Date": "2018-12-12",
            "Open": 3401.02002,
            "High": 3545.370117,
            "Low": 3380.47998,
            "Close": 3485.590088,
            "Adj Close": 3485.590088,
            "Volume": 257293632
          },
          {
            "Date": "2018-12-13",
            "Open": 3485.590088,
            "High": 3493.76001,
            "Low": 3272.810059,
            "Close": 3305.110107,
            "Adj Close": 3305.110107,
            "Volume": 286236674
          },
          {
            "Date": "2018-12-14",
            "Open": 3305.110107,
            "High": 3333.23999,
            "Low": 3180.969971,
            "Close": 3235.47998,
            "Adj Close": 3235.47998,
            "Volume": 290985461
          },
          {
            "Date": "2018-12-15",
            "Open": 3235.47998,
            "High": 3271.76001,
            "Low": 3169.530029,
            "Close": 3232.51001,
            "Adj Close": 3232.51001,
            "Volume": 165378769
          },
          {
            "Date": "2018-12-16",
            "Open": 3232.51001,
            "High": 3319.830078,
            "Low": 3227.399902,
            "Close": 3255.370117,
            "Adj Close": 3255.370117,
            "Volume": 148182655
          },
          {
            "Date": "2018-12-17",
            "Open": 3255.370117,
            "High": 3639.649902,
            "Low": 3239.060059,
            "Close": 3548.189941,
            "Adj Close": 3548.189941,
            "Volume": 412454521
          },
          {
            "Date": "2018-12-18",
            "Open": 3548.189941,
            "High": 3727.98999,
            "Low": 3481.459961,
            "Close": 3715.850098,
            "Adj Close": 3715.850098,
            "Volume": 327807644
          },
          {
            "Date": "2018-12-19",
            "Open": 3715.850098,
            "High": 3969.699951,
            "Low": 3693.570068,
            "Close": 3736.540039,
            "Adj Close": 3736.540039,
            "Volume": 620695447
          },
          {
            "Date": "2018-12-20",
            "Open": 3736.540039,
            "High": 4225.52002,
            "Low": 3712.820068,
            "Close": 4137.660156,
            "Adj Close": 4137.660156,
            "Volume": 724855205
          },
          {
            "Date": "2018-12-21",
            "Open": 4137.660156,
            "High": 4247.709961,
            "Low": 3831.199951,
            "Close": 3898.810059,
            "Adj Close": 3898.810059,
            "Volume": 516656937
          },
          {
            "Date": "2018-12-22",
            "Open": 3898.810059,
            "High": 4060.340088,
            "Low": 3849.22998,
            "Close": 4045.23999,
            "Adj Close": 4045.23999,
            "Volume": 250085915
          },
          {
            "Date": "2018-12-23",
            "Open": 4045.23999,
            "High": 4117.649902,
            "Low": 3972.389893,
            "Close": 4007.629883,
            "Adj Close": 4007.629883,
            "Volume": 235997621
          },
          {
            "Date": "2018-12-24",
            "Open": 4007.629883,
            "High": 4303.370117,
            "Low": 4006.600098,
            "Close": 4081.949951,
            "Adj Close": 4081.949951,
            "Volume": 459290147
          },
          {
            "Date": "2018-12-25",
            "Open": 4081.949951,
            "High": 4094.610107,
            "Low": 3734.850098,
            "Close": 3834.72998,
            "Adj Close": 3834.72998,
            "Volume": 367200910
          },
          {
            "Date": "2018-12-26",
            "Open": 3834.72998,
            "High": 3923.929932,
            "Low": 3746.860107,
            "Close": 3848.780029,
            "Adj Close": 3848.780029,
            "Volume": 263439573
          },
          {
            "Date": "2018-12-27",
            "Open": 3848.780029,
            "High": 3888.919922,
            "Low": 3622.389893,
            "Close": 3646.090088,
            "Adj Close": 3646.090088,
            "Volume": 305729129
          },
          {
            "Date": "2018-12-28",
            "Open": 3646.090088,
            "High": 4007.709961,
            "Low": 3628.429932,
            "Close": 3947.860107,
            "Adj Close": 3947.860107,
            "Volume": 353705007
          },
          {
            "Date": "2018-12-29",
            "Open": 3947.860107,
            "High": 4004.139893,
            "Low": 3774.379883,
            "Close": 3797.060059,
            "Adj Close": 3797.060059,
            "Volume": 214891355
          },
          {
            "Date": "2018-12-30",
            "Open": 3797.060059,
            "High": 3925.179932,
            "Low": 3760.800049,
            "Close": 3896.209961,
            "Adj Close": 3896.209961,
            "Volume": 191958416
          },
          {
            "Date": "2018-12-31",
            "Open": 3896.209961,
            "High": 3904.280029,
            "Low": 3701.47998,
            "Close": 3747.389893,
            "Adj Close": 3747.389893,
            "Volume": 206190463
          }
    ];
    return {bitcoin};
  }
}
